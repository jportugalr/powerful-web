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
- El paquete GHCR puede ser privado; el deploy documentará un token de lectura como secreto de GitHub y usará SSH con host keys conocidas configuradas, sin descubrirlas durante el workflow.
- El sitio continúa sin habilitar indexación desde este cambio. `PUBLIC_SITE_URL` y `PUBLIC_INDEXING_ENABLED` son valores de build y la `.env` de runtime no los cambia.

## Límites

- Autorizado: cambios locales de CI/CD, Compose del VPS y documentación.
- No autorizado en esta tarea: push, crear/configurar secretos o ambientes de GitHub, conectar al VPS, transferir archivos, ejecutar despliegues, cambiar DNS/Caddy o habilitar indexación.
- Preservar archivos modificados y no seguidos preexistentes; usar staging selectivo.
- Rama actual: `main`; no crear ni cambiar de rama.
- TDD está apagado por decisión previa del proyecto. Runner funcional: Docker para construir y ejecutar la imagen; además `docker compose config` para validar el Compose de VPS y `git diff --check`. `actionlint` no está instalado.
- RDD está `disabled/unmanaged`; no iniciar revisiones nativas.

## Ruta, estimación y entrega

- Estrategia: `ask-on-risk` (por defecto). Pronóstico inicial: unas 350 líneas añadidas/eliminadas entre workflows, smoke y documentación. CI-01 suma 218 líneas añadidas en el diff preparado; revisar el acumulado tras CD-01.
- CI-01: ruta `delegated direct`. Se activa el disparador de mapeo porque la exploración abarcó Dockerfile, Compose, scripts, package y documentación (4+ archivos); se delega el escritor porque el cambio toca varios archivos no triviales.
- CD-01: ruta `delegated direct`. El deploy requiere workflow, Compose y documentación coordinados; se delega el escritor.
- Cada tarea cierra con su propio commit Conventional Commit en `main`. Sin push ni PR en esta ejecución.

## Tareas

### CI-01 — Validar, probar y publicar la imagen

- [x] Crear workflow para PR y push a `main`, con permisos mínimos.
- [x] Construir la imagen una vez, probarla como contenedor limpio (`/healthz`, portada, asset y 404), y usar el mismo artefacto validado para publicar.
- [x] Publicar `sha-<commit>` y mover `latest` solo después de que el smoke test pase.
- [x] Documentar tags, publicación y límites del contenido de build.
- [x] Validar workflow, shell, build y smoke test; registrar evidencia.
- Evidencia: Docker build pasó con Astro sin errores/avisos y 9 rutas; `scripts/smoke-image.sh` pasó `/healthz`, portada, PNG y 404 propia; YAML/permisos/pins SHA comprobados, `bash -n`, `git diff --check` y round-trip `docker save`/`docker load` pasaron. `actionlint` no disponible; no hubo ejecución en GitHub ni push a GHCR.
- Commit: pendiente de crear; registrar identidad tras el commit.

### CD-01 — Desplegar manualmente desde el VPS

- [ ] Cambiar `compose.vps.yaml` a `latest` por defecto y permitir `POWERFUL_IMAGE_TAG` para rollback.
- [ ] Crear workflow manual de producción que use el Compose y `.env` remotos existentes, autentique GHCR por SSH y actualice sin reconstruir.
- [ ] Esperar estado saludable y documentar variables/secrets requeridos, pre-requisitos del destino y rollback.
- [ ] Validar sintaxis/configuración local sin conectar ni desplegar en el VPS.
- Commit: pendiente.

## Criterios de aceptación

- Un PR valida y prueba una imagen sin publicar ni desplegar.
- Un push a `main` publica una imagen validada con tag SHA y `latest` apuntando al mismo artefacto.
- El workflow de deploy solo se ejecuta por activación manual y no modifica la configuración persistente del VPS.
- El Compose resuelve `latest` si no hay tag de override, mantiene la red y alias existentes y admite seleccionar un tag SHA.
- La documentación permite preparar Actions y ejecutar rollback sin copiar archivos ni actualizar digests.
- Los checks aplicables quedan observados y los no disponibles se declaran como tales.

## Progreso y siguiente paso

- CI-01 implementado localmente; falta registrar su commit. El workflow publica el mismo artefacto probado como `sha-<commit>` y `latest`; los pull requests no reciben permiso de escritura al paquete.
- Exploración previa confirmó que el smoke anterior presupone servicios ya iniciados y que `compose.vps.yaml` todavía usa un digest obligatorio.
- Siguiente: cerrar el commit CI-01; luego actualizar esta ficha y Engram antes de empezar CD-01.
