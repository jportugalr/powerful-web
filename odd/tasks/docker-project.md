# Dockerización POWERFUL

## Objetivo, problema y autorización

El usuario pidió dockerizar el proyecto antes de continuar la portada. Preparar y verificar ejecución local reproducible de desarrollo y una imagen estática de producción. La aplicación actual es un scaffold Astro estático sin páginas: no confundir disponibilidad del contenedor con portada terminada.

Alcance: Dockerfile multi-stage, Compose para desarrollo y producción local, configuración Nginx, exclusiones de contexto, guía de uso y smoke funcional. No desarrollar interfaz ni backend, publicar, hacer push/PR ni acceder a servidores privados. Iniciar Docker Desktop local es parte de la verificación autorizada; no modificar opciones de integración/permisos de Docker sin necesidad/autorización.

## Estado y restricciones

- Rama actual `main`; base `e5758af`. Preservar el cambio previo en `odd/tasks/portada-powerful.md` y los originales `Powerful/`.
- Astro7.4 estático, package-lock v3, Node>=22.22. Docker utilizará Node24 y `npm ci`.
- TDD: off, verificación funcional ordinaria elegida explícitamente por el usuario en esta sesión. Runners: Compose config, builds reales y `npm run check`/`npm run build` dentro del contenedor; HTTP, integridad de marca y recarga de fuentes.
- RDD: disabled/unmanaged; status local confirma off por default. No iniciar review nativo ni habilitarlo.
- Delegación: mapping por 4+ archivos y escritor por 2+ archivos no triviales. Exploración terminada por agente `mapear_docker`; implementación delegada acotada.
- Entrega: `single-pr` (una unidad de entrega local; ningún PR autorizado). Forecast aproximadamente 300 líneas de autor, sin archivos generados; tamaño orientativo. No crear/cambiar ramas.
- Engram: espejo PENDIENTE; herramientas no disponibles. Proyecto `powerful-web`, topic `odd/docker-project/tasks`; preservar documento completo y localizador `odd/tasks/docker-project.md` para sincronizar.
- Docker CLI/Compose presentes en Windows. Contexto verificado local npipe Docker Desktop; inicialmente sin daemon activo. WSL tiene shim Docker.

## Tareas

- [x] **D1 — Configuración y builds.** Dockerfile multi-stage, Compose independiente para dev y producción local, Nginx estático sin SPA fallback, exclusiones seguras del contexto e instrucciones reproducibles. Ruta delegada por el mapeo de 4+ archivos y escritor de 2+ archivos. Verificado: ambas configuraciones Compose; builds dev y producción; `npm run check` (0 errores/avisos/hints) y `npm run build` dentro del contenedor (0 páginas, scaffold vacío); `nginx -t` correcto; runtime en UID 101 sin Node; puertos ligados a loopback. Incluye `src/pages/.gitkeep` para establecer el directorio observado por Astro. Commit de D1 pendiente.
- [ ] **D2 — Smoke real y cierre.** Comprobar acceso local, puertos solo loopback, copia de marca íntegra, 404 para rutas ausentes, edición visible sin rebuild y persistencia limpia; registrar limitaciones y comando para continuar portada en contenedor. Añadir smoke reutilizable si aporta una comprobación real, sin duplicar implementación. Ruta delegada/inline para comprobación. Commit pendiente.

## Aceptación

`docker compose up -d --build` deja disponible Astro para desarrollar sin Node del host. `docker compose exec -T dev npm run check` y build funcionan. Imagen final sirve solo dist y devuelve 404 real para rutas desconocidas. No mezcla node_modules del host con Linux, no incorpora documentación interna ni .env. Logo público coincide con SHA256 maestro. Comandos de parada no eliminan volúmenes o contenedores ajenos.

## Evidencia, pendientes y siguiente paso

- Exploración y documentación Docker oficial consultadas antes de escribir fuente.
- Docker Engine 29.4.3 accesible desde WSL. Desarrollo disponible en `http://127.0.0.1:4322`; estático local en `http://127.0.0.1:8088`.
- Evidencia HTTP: dev `@vite/client` 200; producción `/healthz` 200, `/` y ruta desconocida 404; logo servido con SHA256 maestro `762f5883c7218d45b4df0ab0f11b20eec1c931b4536f2cc8df7684227e74bbc4`.
- Recarga observada con página temporal en `src/pages/`: crear y editar actualizaron el HTML sin cambiar el ID del contenedor. Se eliminó el archivo de prueba; `src/pages/.gitkeep` permanece.
- Portada continúa pendiente de elección visual; esta petición no autoriza elegirla por el usuario.
- D1 completo, a la espera de commit. Siguiente: revisión del diff y commit D1; cerrar D2 con comprobación final de estado/limpieza local. Espejo Engram pendiente.
