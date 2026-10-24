import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import zlib from 'node:zlib';

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const sourcePath = path.join(projectRoot, 'public/images/peru-global-connections.png');
const outputPath = path.join(projectRoot, 'public/images/hero-map-route-highlights.png');
const routeColor = [255, 240, 189];

function decodePng(buffer) {
  let offset = 8;
  let width;
  let height;
  let bitDepth;
  let colorType;
  let interlace;
  const compressed = [];

  while (offset < buffer.length) {
    const length = buffer.readUInt32BE(offset);
    offset += 4;
    const type = buffer.toString('ascii', offset, offset + 4);
    offset += 4;
    const data = buffer.subarray(offset, offset + length);
    offset += length + 4;

    if (type === 'IHDR') {
      width = data.readUInt32BE(0);
      height = data.readUInt32BE(4);
      bitDepth = data[8];
      colorType = data[9];
      interlace = data[12];
    } else if (type === 'IDAT') {
      compressed.push(data);
    }
  }

  if (bitDepth !== 8 || colorType !== 6 || interlace !== 0) {
    throw new Error('The source map must be a non-interlaced RGBA PNG.');
  }

  const stride = width * 4;
  const filtered = zlib.inflateSync(Buffer.concat(compressed));
  const pixels = Buffer.alloc(stride * height);
  const paeth = (a, b, c) => {
    const estimate = a + b - c;
    const da = Math.abs(estimate - a);
    const db = Math.abs(estimate - b);
    const dc = Math.abs(estimate - c);
    return da <= db && da <= dc ? a : db <= dc ? b : c;
  };

  let input = 0;
  for (let y = 0; y < height; y += 1) {
    const filter = filtered[input++];
    for (let x = 0; x < stride; x += 1) {
      const at = y * stride + x;
      const left = x >= 4 ? pixels[at - 4] : 0;
      const above = y > 0 ? pixels[at - stride] : 0;
      const upperLeft = y > 0 && x >= 4 ? pixels[at - stride - 4] : 0;
      const value = filtered[input++];
      const predictor = filter === 1 ? left
        : filter === 2 ? above
          : filter === 3 ? Math.floor((left + above) / 2)
            : filter === 4 ? paeth(left, above, upperLeft) : 0;
      pixels[at] = (value + predictor) & 255;
    }
  }

  return { width, height, pixels };
}

function encodePng(width, height, pixels) {
  const stride = width * 4;
  const filtered = Buffer.alloc((stride + 1) * height);
  for (let y = 0; y < height; y += 1) {
    const target = y * (stride + 1);
    filtered[target] = 0;
    pixels.copy(filtered, target + 1, y * stride, (y + 1) * stride);
  }

  const crcTable = new Uint32Array(256);
  for (let n = 0; n < crcTable.length; n += 1) {
    let value = n;
    for (let bit = 0; bit < 8; bit += 1) {
      value = value & 1 ? 0xedb88320 ^ (value >>> 1) : value >>> 1;
    }
    crcTable[n] = value >>> 0;
  }
  const chunk = (type, data) => {
    const typeBytes = Buffer.from(type, 'ascii');
    const body = Buffer.concat([typeBytes, data]);
    let crc = 0xffffffff;
    for (const byte of body) crc = crcTable[(crc ^ byte) & 0xff] ^ (crc >>> 8);
    const result = Buffer.alloc(data.length + 12);
    result.writeUInt32BE(data.length, 0);
    body.copy(result, 4);
    result.writeUInt32BE((crc ^ 0xffffffff) >>> 0, data.length + 8);
    return result;
  };

  const header = Buffer.alloc(13);
  header.writeUInt32BE(width, 0);
  header.writeUInt32BE(height, 4);
  header[8] = 8;
  header[9] = 6;
  const signature = Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]);
  return Buffer.concat([
    signature,
    chunk('IHDR', header),
    chunk('IDAT', zlib.deflateSync(filtered, { level: 9 })),
    chunk('IEND', Buffer.alloc(0)),
  ]);
}

function findComponents(width, height, pixels) {
  const isRoutePixel = (at) => {
    const red = pixels[at];
    const green = pixels[at + 1];
    const blue = pixels[at + 2];
    return pixels[at + 3] > 100 && red > 240 && green > 135 && green < 225 && blue < 125;
  };
  const seen = new Uint8Array(width * height);
  const queue = new Int32Array(width * height);
  const components = [];

  for (let start = 0; start < seen.length; start += 1) {
    if (seen[start] || !isRoutePixel(start * 4)) continue;
    let head = 0;
    let tail = 0;
    let minX = width;
    let minY = height;
    let maxX = 0;
    let maxY = 0;
    const indexes = [];
    queue[tail++] = start;
    seen[start] = 1;

    while (head < tail) {
      const index = queue[head++];
      const x = index % width;
      const y = Math.floor(index / width);
      indexes.push(index);
      minX = Math.min(minX, x);
      minY = Math.min(minY, y);
      maxX = Math.max(maxX, x);
      maxY = Math.max(maxY, y);

      for (let dy = -1; dy <= 1; dy += 1) {
        for (let dx = -1; dx <= 1; dx += 1) {
          if (dx === 0 && dy === 0) continue;
          const nextX = x + dx;
          const nextY = y + dy;
          if (nextX < 0 || nextY < 0 || nextX >= width || nextY >= height) continue;
          const next = nextY * width + nextX;
          if (seen[next] || !isRoutePixel(next * 4)) continue;
          seen[next] = 1;
          queue[tail++] = next;
        }
      }
    }

    components.push({ indexes, area: indexes.length, minX, minY, maxX, maxY });
  }
  return components;
}

function distanceToPolyline(x, y, points) {
  let nearest = Number.POSITIVE_INFINITY;
  for (let index = 1; index < points.length; index += 1) {
    const [x1, y1] = points[index - 1];
    const [x2, y2] = points[index];
    const dx = x2 - x1;
    const dy = y2 - y1;
    const fraction = Math.max(0, Math.min(1, ((x - x1) * dx + (y - y1) * dy) / (dx * dx + dy * dy)));
    const deltaX = x - (x1 + fraction * dx);
    const deltaY = y - (y1 + fraction * dy);
    nearest = Math.min(nearest, Math.hypot(deltaX, deltaY));
  }
  return nearest;
}

function chooseComponent(components, name, matches) {
  const component = components.find(matches);
  if (!component) throw new Error(`Could not identify the ${name} route pixels in the source map.`);
  return component;
}

function main() {
  const source = decodePng(fs.readFileSync(sourcePath));
  if (source.width !== 1448 || source.height !== 1086) {
    throw new Error(`Unexpected map size: ${source.width}×${source.height}.`);
  }

  const components = findComponents(source.width, source.height, source.pixels);
  const northAmerica = chooseComponent(components, 'North America', (item) =>
    item.minX < 220 && item.maxX < 360 && item.minY < 350 && item.maxY > 600 && item.area > 1500);
  const eastNorthAmerica = chooseComponent(components, 'eastern North America', (item) =>
    item.minX >= 300 && item.maxX < 400 && item.minY > 340 && item.minY < 400 && item.maxY < 630 && item.area > 500);
  const europe = chooseComponent(components, 'Europe', (item) =>
    item.minX > 360 && item.maxX < 800 && item.minY < 350 && item.maxY < 630 && item.area > 1500);
  const asia = chooseComponent(components, 'Asia', (item) =>
    item.maxX > 1000 && item.minY > 350 && item.minY < 500 && item.maxY < 700 && item.area > 2000);
  const africa = chooseComponent(components, 'Africa', (item) =>
    item.minX > 350 && item.minX < 450 && item.minY > 480 && item.maxX < 800 && item.maxY < 700 && item.area > 1000);
  const australia = chooseComponent(components, 'Australia', (item) =>
    item.minY > 650 && item.maxX > 900 && item.area > 2000);
  const argentina = chooseComponent(components, 'Argentina', (item) =>
    item.minY > 680 && item.maxX < 500 && item.maxY > 780 && item.area > 500);

  const masks = Array.from({ length: 8 }, () => new Uint8Array(source.width * source.height));
  const westCoast = [[184, 329], [247, 400], [272, 450], [288, 500], [295, 530], [302, 550], [315, 580], [333, 620]];
  const mexico = [[237, 470], [260, 500], [280, 520], [298, 540], [305, 550], [320, 580], [343, 620]];

  for (const index of northAmerica.indexes) {
    const x = index % source.width;
    const y = Math.floor(index / source.width);
    const westDistance = distanceToPolyline(x, y, westCoast);
    const mexicoDistance = distanceToPolyline(x, y, mexico);
    if (westDistance <= 9 || (westDistance <= 12 && westDistance <= mexicoDistance)) masks[0][index] = 1;
    if (mexicoDistance <= 9 || (mexicoDistance <= 12 && mexicoDistance <= westDistance)) masks[2][index] = 1;
  }

  const routes = [
    { name: 'North America, west', component: null },
    { name: 'North America, east', component: eastNorthAmerica },
    { name: 'Mexico', component: null },
    { name: 'Europe', component: europe },
    { name: 'Africa', component: africa },
    { name: 'Asia', component: asia },
    { name: 'Argentina', component: argentina },
    { name: 'Australia', component: australia },
  ];
  for (const route of routes) {
    if (!route.component) continue;
    const routeIndex = routes.indexOf(route);
    for (const index of route.component.indexes) masks[routeIndex][index] = 1;
  }

  const sprite = Buffer.alloc(source.width * source.height * routes.length * 4);
  const summaries = [];
  for (let routeIndex = 0; routeIndex < routes.length; routeIndex += 1) {
    let area = 0;
    for (let index = 0; index < masks[routeIndex].length; index += 1) {
      if (!masks[routeIndex][index]) continue;
      const sourceAt = index * 4;
      const targetAt = (routeIndex * source.width * source.height + index) * 4;
      sprite[targetAt] = routeColor[0];
      sprite[targetAt + 1] = routeColor[1];
      sprite[targetAt + 2] = routeColor[2];
      sprite[targetAt + 3] = source.pixels[sourceAt + 3];
      area += 1;
    }
    if (area < 100) throw new Error(`The ${routes[routeIndex].name} mask is unexpectedly small (${area} pixels).`);
    summaries.push(`${routes[routeIndex].name}: ${area} source pixels`);
  }

  fs.writeFileSync(outputPath, encodePng(source.width, source.height * routes.length, sprite));
  console.log(`Generated ${path.relative(projectRoot, outputPath)} from the source PNG.`);
  for (const summary of summaries) console.log(`- ${summary}`);
}

main();
