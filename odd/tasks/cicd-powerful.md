# CI/CD para POWERFUL

## Objetivo

Preparar CI y un despliegue manual de POWERFUL desde una imagen Docker publicada en GHCR. El VPS descargará `latest` usando el `compose.vps.yaml` y `.env` que ya existen en su carpeta de destino; también se publicará un tag por commit para trazabilidad y rollback.

## Problema y motivo

No hay workflows de GitHub Actions. El Compose local de VPS todavía solicita un digest en cada actualización. CI debe construir y probar la imagen antes de publicarla, y el despliegue debe actualizar el servicio existente sin copiar ni reemplazar sus archivos de configuración.

## Alcance y decisiones aceptadas

- Ejecutar validación en pull requests y en `main`; publicar a `ghcr.io/jportugalr/powerful-web` solo después de validar el artefacto.
- Actualizar `latest` en cada publicación validada y publicar además `sha-<commit>` para identificar versiones y permitir rollback sin administrar digests en cada despliegue.
- El workflow de producción será manual y usará el Compose y `.env` del directorio de destino del VPS. Ejecutará `pull`, `up -d --no-build` y comprobará la salud; no transferirá archivos.
- El Compose mantendrá la red externa `edge` y el alias `powerful-web`. `POWERFUL_IMAGE_TAG` será opcional, con valor predeterminado `latest`, para rollback puntual a un tag SHA.
- El paquete GHCR puede ser privado; el deploy usará el `GITHUB_TOKEN` efímero con `packages: read` y requerirá que el repo tenga acceso de lectura al paquete. SSH usará host keys conocidas configuradas, sin descubrirlas durante el workflow.
- El sitio continúa sin habilitar indexación desde este cambio. `PUBLIC_SITE_URL` y `PUBLIC_INDEXING_ENABLED` son valores de build y la `.env` de runtime no los cambia.

## Límites

- Autorizado: cambios locales de CI/CD, Compose del VPS y documentación.
- No autorizado originalmente en CI-01/CD-01: push, crear/configurar secretos o ambientes de GitHub, conectar al VPS, transferir archivos, ejecutar despliegues, cambiar DNS/Caddy o habilitar indexacion. Autorizacion adicional del usuario para CD-02: operar en /opt/powerful-web, descargar la imagen web latest, iniciar el servicio sin build y verificar salud/red; no incluye cambios a DNS/Caddy ni habilitar indexacion.
- Preservar archivos modificados y no seguidos preexistentes; usar staging selectivo.
- Rama actual: `main`; no crear ni cambiar de rama.
- TDD está OFF según la decisión explícita documentada en `README.md`. Runner funcional: `docker build --pull --target runtime ...` seguido de `bash scripts/smoke-image.sh IMAGE_REF`; Compose se valida con `docker compose -f compose.vps.yaml config --quiet` y `config --images`, y se ejecuta `git diff --check`. `actionlint` no está instalado.
- RDD está `disabled/unmanaged`; no iniciar revisiones nativas.

## Ruta, estimación y entrega

- Estrategia: `ask-on-risk` (por defecto). Pronóstico inicial: unas 350 líneas añadidas/eliminadas entre workflows, smoke y documentación. CI-01 suma 218 y CD-01 131 líneas en sus commits (349 acumuladas; bajo el umbral de 400).
- CI-01: ruta `delegated direct`. Se activa el disparador de mapeo porque la exploración abarcó Dockerfile, Compose, scripts, package y documentación (4+ archivos); se delega el escritor porque el cambio toca varios archivos no triviales.
- CD-01: ruta `delegated direct`. El deploy requiere workflow, Compose y documentación coordinados; se delega el escritor.
- CD-02: ruta direct inline. Se ejecuta una operacion acotada sobre el servicio existente y se verifica su resultado; no requiere cambios de codigo. TDD OFF; runner: docker compose config, pull, up --wait y docker inspect/curl. RDD disabled/unmanaged.
- Cada tarea cierra con su propio commit Conventional Commit en `main`. Sin push ni PR en esta ejecución.

## Tareas

### CI-01 — Validar, probar y publicar la imagen

- [x] Crear workflow para PR y push a `main`, con permisos mínimos.
- [x] Construir la imagen una vez, probarla como contenedor limpio (`/healthz`, portada, asset y 404), y usar el mismo artefacto validado para publicar.
- [x] Publicar `sha-<commit>` y mover `latest` solo después de que el smoke test pase.
- [x] Documentar tags, publicación y límites del contenido de build.
- [x] Validar workflow, shell, build y smoke test; registrar evidencia.
- Evidencia: Docker build pasó con Astro sin errores/avisos y 9 rutas; `scripts/smoke-image.sh` pasó `/healthz`, portada, PNG y 404 propia; YAML/permisos/pins SHA comprobados, `bash -n`, `git diff --check` y round-trip `docker save`/`docker load` pasaron. `actionlint` no disponible; no hubo ejecución en GitHub ni push a GHCR.
- Commit: `72714c2bb29457771419e217b584849bbaeb7534`.

### CD-01 — Desplegar manualmente desde el VPS

- [x] Cambiar `compose.vps.yaml` a `latest` por defecto y permitir `POWERFUL_IMAGE_TAG` para rollback.
- [x] Crear workflow manual de producción que use el Compose y `.env` remotos existentes, autentique GHCR por SSH y actualice sin reconstruir.
- [x] Esperar estado saludable y documentar variables/secrets requeridos, pre-requisitos del destino y rollback.
- [x] Validar sintaxis/configuración local sin conectar ni desplegar en el VPS.
- Evidencia: Compose `config --quiet` pasó con tag default y SHA; `config --images` resolvió `ghcr.io/jportugalr/powerful-web:latest` y `...:sha-72714c2bb29457771419e217b584849bbaeb7534`. YAML, guardia `main`, environment `production`, concurrencia, `packages: read`, variables/secrets, `bash -n` y `git diff --check` pasaron. `actionlint` no disponible; no se conectó al VPS ni se ejecutó en GitHub.
- Commit: `5f7c67eac0ebd21c3b8e23df74d640bb7a8a36fd`.

### CD-02 — Descargar y levantar POWERFUL en el VPS

- [x] Revalidar /opt/powerful-web/.env, compose.vps.yaml, tag latest, red externa edge y ausencia previa del contenedor.
- [x] Descargar la imagen web latest con Compose.
- [x] Iniciar web con up -d --no-build --wait y tiempo de espera acotado.
- [x] Verificar salud, conexión a edge con alias powerful-web y respuesta HTTP local.
- [x] Registrar evidencia y límites de acceso público.
- [x] Crear el commit Conventional Commit y registrar su identidad.
- Evidencia: pull exitoso de ghcr.io/jportugalr/powerful-web:latest. Compose creó powerful-web-vps-web-1 y up terminó con Healthy. Docker inspect reporta health Status=healthy, FailingStreak=0 y red edge con alias powerful-web. La imagen se identifica como sha256:8060759ee6372271d754406b948c377c0315b3188fe4ed5c01e1c96e0e0aed59 (RepoDigest de GHCR registrado solo para trazabilidad; el Compose sigue usando latest). wget a http://127.0.0.1:8080/healthz dentro del contenedor y a http://powerful-web:8080/healthz desde infra-vps-caddy-1 devolvió ok.
- Estado público: desde el VPS, curl no pudo resolver powerful.pe ni powerfulglobal.pe. En Caddy, solicitudes HTTP locales con ambos Host devuelven 308 a HTTPS en el mismo dominio; al probar HTTPS hacia el puerto 443 local con --resolve, ambos reciben una alerta TLS internal error. El upstream web sí responde ok desde Caddy por edge. No se cambiaron DNS ni Caddy; no se confirmó HTTPS ni la redirección de powerfulglobal.pe hacia powerful.pe.
- Commit de despliegue: fb70041 (ops: record POWERFUL VPS deployment).

## Criterios de aceptación

- Un PR valida y prueba una imagen sin publicar ni desplegar.
- Un push a `main` publica una imagen validada con tag SHA y `latest` apuntando al mismo artefacto.
- El workflow de deploy solo se ejecuta por activación manual y no modifica la configuración persistente del VPS.
- El Compose resuelve `latest` si no hay tag de override, mantiene la red y alias existentes y admite seleccionar un tag SHA.
- CD-02 solo queda desplegada cuando el contenedor reporta salud healthy, se une a edge con alias powerful-web y responde al chequeo HTTP local.
- La documentación permite preparar Actions y ejecutar rollback sin copiar archivos ni actualizar digests.
- Los checks aplicables quedan observados y los no disponibles se declaran como tales.

## Progreso y siguiente paso

- CI-01 implementado, validado y cerrado en `72714c2bb29457771419e217b584849bbaeb7534`. El workflow publica el mismo artefacto probado como `sha-<commit>` y `latest`; los pull requests no reciben permiso de escritura al paquete.
- Exploración previa confirmó que el smoke anterior presupone servicios ya iniciados y que `compose.vps.yaml` todavía usa un digest obligatorio.
- CD-01 implementado, validado y cerrado en `5f7c67eac0ebd21c3b8e23df74d640bb7a8a36fd`. El deploy temporalmente autentica GHCR por SSH, usa el `.env` existente del destino y espera el healthcheck del contenedor.
- CD-02 desplegado desde /opt/powerful-web: latest descargada, contenedor healthy y respuesta confirmada desde Caddy por el alias edge. Ambos dominios fallan en resolucion DNS desde el VPS; Caddy redirige HTTP a HTTPS por dominio, pero el handshake TLS local falla con alerta internal error. No se modificaron DNS ni Caddy; HTTPS y la redireccion canonica siguen pendientes de verificacion.
- Siguiente del flujo automatizado: configurar variables y secretos de production, conceder a Actions lectura del paquete GHCR y ejecutar el workflow manual cuando corresponda.
