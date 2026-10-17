# POWERFUL — web corporativa

Portada en Astro y TypeScript para la representación empresarial en Perú. Lanzamiento en español, con contenido mantenido en el proyecto y preparado para traducción futura. Sin CMS.

## Desarrollo con Docker

Requiere Docker Engine o Docker Desktop con Compose v2. No necesita Node ni npm en el host: la imagen usa Node 24 y ejecuta `npm ci` con el lockfile del proyecto.

Desde la raíz del proyecto:

```sh
docker compose up -d --build
docker compose logs -f dev
```

Astro escucha en `http://127.0.0.1:4322`, accesible solo desde el equipo local. `DEV_PORT` permite cambiar ese puerto. El scaffold todavía no tiene páginas: `/` devuelve 404 hasta implementar la portada. El logo está disponible en `/brand/powerful-master.png`.

`src/`, `public/` y las configuraciones Astro/TypeScript se montan desde el host en modo lectura para el contenedor; las ediciones del host activan la recarga de Astro. `node_modules` queda dentro de la imagen Linux, sin mezclar dependencias del host ni volúmenes persistentes. Al modificar `package.json` o `package-lock.json`, reconstruir con `docker compose up -d --build` para instalar la versión del lock. No editar dependencias dentro del contenedor.

Para detener exclusivamente estos servicios:

```sh
docker compose down
```

En este checkout WSL, ejecutar desde una shell con acceso al daemon local. Si la integración WSL de Docker Desktop no está habilitada, se puede usar Docker CLI de Windows desde la ruta del proyecto; los bind mounts requieren que Docker Desktop pueda acceder a ella.

## Verificación en contenedor

```sh
docker compose exec -T dev npm run check
docker compose exec -T dev npm run build
```

El build de desarrollo queda dentro del contenedor. Para comprobar el artefacto estático final con Nginx:

```sh
docker compose -f compose.production.yaml up -d --build
docker compose -f compose.production.yaml exec -T web nginx -t
docker compose -f compose.production.yaml ps
```

Disponible en `http://127.0.0.1:8088` (`WEB_PORT` configurable), con `/healthz` para comprobar el servidor. Esta configuración es independiente de `compose.yaml`: no combinarlos con `-f`. Los proyectos Compose `powerful-web-dev` y `powerful-web-production` mantienen redes y servicios separados. La imagen final ejecuta Nginx sin root y contiene únicamente el sitio compilado; no incorpora Node, dependencias de desarrollo ni el expediente interno. Las rutas inexistentes devuelven 404, sin fallback de aplicación SPA. Solo los recursos compilados bajo `/_astro/` usan caché inmutable; el logo conserva su URL actualizable.

Con ambos servicios arriba, repetir el smoke desde Bash/WSL (requiere `curl` y `sha256sum`):

```sh
bash scripts/verify-docker.sh
```

Comprueba Compose, acceso HTTP, 404, integridad del logo, puertos locales y runtime sin root ni Node. Usa los puertos publicados reales, incluidos los personalizados. No altera fuentes ni inicia o detiene servicios; devuelve error si alguno no está arriba.

```sh
docker compose -f compose.production.yaml down
```

Estos comandos preparan una ejecución local; no publican el sitio. Si se prefiere trabajar fuera de Docker, los scripts `npm ci`, `npm run dev`, `npm run check` y `npm run build` siguen disponibles con Node >= 22.22.

TDD estricto desactivado por decisión explícita del usuario; se realizan chequeos funcionales y revisión real de navegador. El modo de review nativo está disabled/unmanaged.

## Alcance y marca

El sitio aún no recibe consultas ni conecta proveedores de correo o almacenamiento. No hay despliegue autorizado. El expediente original está en `Powerful/` y queda fuera de Git; no se altera ni se sustituye. `public/brand/powerful-master.png` es la copia exacta del maestro V1.2 aprobado (SHA256 `762f5883c7218d45b4df0ab0f11b20eec1c931b4536f2cc8df7684227e74bbc4`).

`PRODUCT.md` recoge los hechos confirmados; `odd/tasks/portada-powerful.md` registra alcance, tareas, comprobaciones y pendientes. Hosting, contacto corporativo, datos legales y pruebas de trayectoria siguen pendientes de confirmación.
