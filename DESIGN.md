# Sistema visual de POWERFUL

Guía del Inicio implementado en `src/pages/index.astro`, `src/styles/global.css`, `src/content/es.ts` y `src/scripts/home.ts`. Mantiene la dirección «Atlas del Pacífico», seed `f939704b`; la portada es su única aplicación por ahora.

## Identidad y color

- Marfil `#F4F1EA`: fondo principal y superficies claras.
- Azul profundo `#14263D`: texto, botones y capítulo Sectores.
- Oro `#B79862`: conectores finos de la relación empresa–POWERFUL–Perú. Sobre marfil, el acento de texto usa `#80622F`.
- Texto secundario `#4E5B66`, líneas `#C9C9C1` y superficie de firma `#E9E7DF`. Sobre navy: texto secundario `#C8CFD4`, nota/caption `#B7C0C8` y líneas `#4D5A69`.

El logotipo se sirve desde `public/brand/powerful-master.png`, idéntico al maestro aprobado V1.2. No reconstruirlo, recolorearlo ni sustituirlo. Las reglas finas, la fotografía y el cambio entre marfil/navy sostienen la identidad; no hay mosaico de tarjetas.

## Tipografía y jerarquía

`Manrope Variable` lleva navegación, cuerpo, controles y encabezados principales. `Newsreader Variable` aparece con propósito editorial: título de Sectores y descripción factual de la firma. Ambas fuentes están alojadas localmente mediante Fontsource; no se añadió una tercera familia.

El `h1` conserva «Su contraparte empresarial en Perú», peso 500, interlineado 1.08 y tamaño fluido hasta 78 px. El acento es color plano. Los títulos equilibran líneas con `text-wrap: balance`; los párrafos usan `pretty`. Los `h2` Manrope van normalmente de 34 a 48 px. Sectores usa Newsreader hasta 65 px; la prosa de firma, de 25 a 37 px. El tracking no baja de -0.04em.

## Composición y ritmo

Campo de contenido de hasta 1320 px, con márgenes de 56 px en escritorio, 36 px hasta 1199 px, 20 px hasta 719 px y 16 px hasta 359 px.

- Hero: dos columnas `1.12fr / 1fr`; texto y acciones a la izquierda, Lima a la derecha. Debajo de las acciones, una lista HTML describe «Su empresa — POWERFUL — Perú». Sus líneas representan esa relación concreta; sustituyen el trazo libre y no codifican datos.
- Capacidades: introducción lateral y filas de servicios con título/descripción. Desde 959 px, introducción arriba; desde 719 px, cada fila apila título y texto.
- Sectores: fotografía conceptual de materiales a la izquierda y título, introducción, acordeones y nota a la derecha. Fondo navy. En escritorio la imagen es vertical 4:5; en móvil pasa a un recorte 5:4 seguido del texto. No hay compás ornamental.
- Proceso: cuatro pasos numerados; la numeración sí comunica secuencia. Reglas superiores y tipografía editorial sustituyen los círculos/conectores. Dos columnas desde 959 px y una hasta 359 px.
- Firma: título corto a la izquierda y descripción factual Newsreader a la derecha, sobre superficie cálida. Los tres principios conservan texto pequeño y reglas discretas. Se eliminó la segunda declaración genérica.
- Contacto: dos columnas con explicación y borrador local; una columna desde 719 px.

El espaciado general es 96 px por sección; Sectores usa 76 px y Firma 72 px. Hasta 959 px se reduce a 76 px; hasta 719 px, a 64 px, con Sectores a 44/55 px. Se agrupan contenido y controles sin repetir la misma composición en cada capítulo.

Los breakpoints son 1599/1600, 1199/1200, 959/960, 719/720 y 359/360 px. El hero mantiene dos columnas a 768 px; a 719 px pasa a una. Foto de hero: 570 px de alto, 610 px desde 1600, 550 px hasta 1199, 510 px hasta 959, 320 px en móvil y 270 px hasta 359.

## Movimiento e interacción

GSAP 3.15 y su plugin ScrollTrigger ya incluido en el paquete; no hay nueva dependencia. Se usa scroll nativo, sin pin, snap, suavizador, WebGL, bucles ni listeners propios de scroll.

El momento principal dura aproximadamente un segundo: titular ya visible sube 12 px, la foto se compone mediante una máscara rectangular acotada y una escala 1.035→1; las líneas de la relación HTML se trazan de izquierda a derecha y sus rótulos se asientan 5 px. Easing `expo.out`. No se oculta el texto con opacidad.

La continuidad del hero usa `.hero-image-motion`, una capa distinta de la entrada de `.hero-figure`/`.hero-image`. Solo se activa a partir de 960 px con `pointer: fine` y `prefers-reduced-motion: no-preference`. Recorre -20→20 px entre `top top` y `bottom top` del hero, con scrub 0.6. El marco recorta el overscan de la imagen (`inset: -90px -24px -40px` en escritorio; `-48px -20px -20px` en móvil). La imagen conserva cobertura en todo el recorrido.

Sectores recibe una sola entrada al cruzar su borde superior el 78% del viewport: máscara superior del 8% y escala 1.035→1 de imagen, más 16 px de asentamiento del título. `once: true` evita repetición al volver a pasar. Los demás capítulos permanecen estáticos.

`gsap.matchMedia` revierte estilos y triggers cuando cambian preferencias o breakpoints. Con reducción de movimiento no se inicializan las secuencias ni el parallax; todo el contenido permanece visible. CSS desactiva desplazamiento suave y acorta transiciones. La versión sin JavaScript mantiene texto, relación, imágenes y acordeones en su estado final.

Enlaces, botones y acordeones tienen feedback breve de color, subrayado, flecha o rotación de plus. Mantener foco visible y estado semántico.

## Controles y accesibilidad

Un `h1`, secciones asociadas a sus títulos con `aria-labelledby`, navegación con nombre accesible y enlace de salto al contenido. Los SVG de controles son ornamentales con `aria-hidden`. La relación es texto HTML y lista, sin información dependiente del dibujo.

El menú móvil expone `aria-expanded`/`aria-controls`, se cierra por enlace, clic exterior o Escape; Escape devuelve foco al botón. Tras navegar desde móvil, el destino recibe foco temporal. Sin JS, los enlaces permanecen disponibles.

El foco visible usa contorno de 2 px separado 6 px, oro oscuro en marfil y claro sobre navy. Campos con etiquetas, límites y validación nativa; resultado de descarga con `role="status"` y `aria-live="polite"`. Selección, caret, subrayados y scrollbar toman la paleta. No comunicar estado solo por color o icono.

## Fotografía y procedencia

Hero: costa de Miraflores, Lima, de Maria Camila Castaño, [Pexels 7332783](https://www.pexels.com/photo/a-coastal-city-by-the-beach-7332783/), [licencia](https://www.pexels.com/license/). `public/images/miraflores-lima.webp`, 1500×1000, 216542 B. Foto de contexto, nunca proyecto de POWERFUL. El recorte prioriza la costa urbana y el Pacífico con menos cielo; el caption lo identifica.

Sectores: composición conceptual generada con builtin Imagegen el 2026-10-17. Mineral de cobre, lámina de cobre, acero y concreto con luz lateral y fondo navy/marfil. Caption visible «Ilustración conceptual» y alt descriptivo. No representa una obra, producto, respaldo ni proyecto real.

- Original preservado en `output/imagegen/sector-materials-source.png`; prompt íntegro en `output/imagegen/materials-prompt.txt`.
- `public/images/sector-materials-1120.webp`: 1120×1400, 189282 B.
- `public/images/sector-materials-640.webp`: 640×800, 72378 B.
- Conversión Sharp/WebP82, sin ampliar el original. Cada derivado tiene sidecar JSON con generador, fecha, prompt íntegro, localizador original y transformaciones.
- Carga diferida, decodificación asíncrona, srcset/sizes y dimensiones explícitas. No se añaden fondos raster decorativos.

Nginx comprime texto con gzip nivel 5, mínimo 1024 B y Vary. Tipos CSS, JavaScript, JSON y SVG, además del HTML automático; WebP y fuentes conservan su compresión propia. El smoke HTTP de Docker con `Accept-Encoding: gzip` verificó JavaScript de 115978 B sin comprimir y un payload de 45390 B, con `Content-Encoding: gzip` y `Vary: Accept-Encoding`. La base anterior tenía 72073 B de JavaScript y se servía sin gzip (28004 B gzip calculados): ScrollTrigger añade código aunque no añade una dependencia; la compresión no elimina ese coste.

## Verificación de cierre

Finish review del 2026-10-17: `ship`. Se verificaron ausencia de desborde horizontal a 320, 390, 768 y 1440 px; menú móvil y Escape, acordeones y descarga local; navegación, texto e imágenes sin JavaScript; Sectores con una sola entrada y parallax ausente en móvil. Con reducción de movimiento, las capas animadas quedaron con `transform: none` y `will-change: auto`. Sin errores de consola ni de recursos; logotipo maestro intacto. Docker check/build terminaron sin errores y pasaron `nginx -t` y el smoke HTTP. El alcance no incluye medición de FPS ni pruebas en dispositivos físicos.

## Contenido y futuras páginas ES/EN

El contenido español vive en `src/content/es.ts`. Mantener estructura separada de plantilla para traducción futura. `lang="es"`; no hay selector inglés ni rutas interiores vacías. No inventar clientes, proyectos, resultados, métricas, equipo, datos legales ni canales corporativos. Los cinco sectores son focos de interés, no experiencia acreditada.

El contacto declara que todavía se preparan los canales. Con JavaScript solo valida y descarga `consulta-powerful.txt` en el dispositivo, sin enviar datos. Conservar este comportamiento honesto mientras no haya backend autorizado.

Están pendientes canales oficiales, datos legales, hosting/backend y validación final del copy corporativo. Las páginas interiores y la versión inglesa requieren contenido verificable y traducción revisada.
