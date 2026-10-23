# Revisión final de POWERFUL para producción

## Objetivo

Quitar del sitio los rótulos públicos de borrador y evitar que el artefacto de producción exponga metadatos internos de imágenes, sin presentar como aprobados textos legales incompletos ni activar la indexación antes de cerrar los datos y la revisión requeridos.

## Problema y motivo

El sitio todavía muestra “borrador” y “preliminar” en Privacidad y Condiciones. Además, Astro copia diez sidecars JSON de prompts, procedencia, licencias y transformaciones desde `public/` a `dist/`, y Docker sirve el contenido compilado. La privacidad del sitio puede describirse en base a su funcionamiento actual, pero no están confirmados la identidad y domicilio del responsable, canal oficial para derechos, proveedores/transferencias, conservación de registros ni aprobación legal.

## Autorización, alcance y límites

El usuario pidió preparar la revisión final, retirar referencias públicas a borrador/en proceso y consultar lo que siga incompleto. Ante la solicitud de datos y aprobaciones respondió: “aun no coloques ruc ni información de la empresa, haz tu mejor esfuerzo con todo lo demas”. Esto autoriza mejoras locales basadas en hechos comprobables y omite expresamente los datos empresariales; no constituye aprobación legal, confirmación de titularidad/licencias de assets ni autorización de despliegue.

- Mover los diez JSON internos fuera de `public/`, conservando intactos los assets y el contenido de metadata.
- Revisar el copy público de Privacidad y Condiciones, quitar rótulos de borrador/preliminar y describir solo el comportamiento observado del sitio.
- Mantener Privacidad y Condiciones con `noindex,nofollow` y fuera del sitemap; no habilitar `PUBLIC_INDEXING_ENABLED` ni cambiar CI/imagen para indexar.
- Actualizar documentación interna solo donde contradiga la implementación actual.
- Mantener en el expediente interno el bloqueo legal: faltan responsable y domicilio, canal de derechos confirmado, proveedores/transferencias, tratamiento y conservación de registros técnicos, derechos de assets y revisión/aprobación legal.
- No cambiar DNS, Caddy, VPS, GHCR, despliegue, ramas ni configuración remota. No publicar cambios.
- No eliminar imágenes con licencias o autoría no confirmadas en esta tarea; la reubicación de metadata evita exponer prompts y datos internos, pero no acredita derechos de publicación de las imágenes.

## Ruta, modo y entrega

- Ruta: **delegated direct**, una unidad de escritura delegada por tarea.
- Disparadores: el mapa de lanzamiento abarcó más de cuatro archivos; el agente `final_launch_audit` verificó en modo solo lectura la función de los diez JSON; la escritura coordinada abarca varias fuentes y documentación, por lo que se delega a `seo_writer`.
- No se selecciona SDD.
- TDD: **OFF**, conforme a la decisión explícita descrita en `README.md`.
- Runner funcional: `npm run check`, `npm run build` y `bash scripts/smoke-image.sh <local-image-ref>`; inspección del HTML generado y `git diff --check`.
- RDD: `disabled/unmanaged`, según `README.md`; no ejecutar revisión nativa.
- Rama: `main`; preservar todos los cambios preexistentes ajenos.
- Pronóstico: aproximadamente 300 líneas añadidas/eliminadas, sin contar el contenido de JSON reubicados como diffs de texto. Estrategia: `ask-on-risk` (default); pronóstico menor a 400 líneas.

## Tareas

- [x] **LAUNCH-01 — Retirar sidecars internos del artefacto público.** Mover los diez JSON listados en `public/` a las rutas correspondientes bajo `source-assets/metadata/`, preservando nombres, estructura relativa y contenido. Mantener las imágenes y el frontend sin cambios.
  - Aceptación: no quedan esos sidecars bajo `public/`; el build no los copia a `dist/`; el resto de imágenes publicadas permanece disponible; no se pierde el expediente de prompts/licencias/procedencia.
  - Checks: `npm run build`, comprobar que los diez sidecars no aparecen bajo `dist/`, `bash scripts/smoke-image.sh <local-image-ref>`, `git diff --check`.
  - Ruta: delegated direct; el mapa de 10 archivos precede a la escritura y activa el disparador de escritor.
  - Evidencia: `npm run build` pasó; la inspección completa de `dist/` encontró las imágenes publicadas y ninguna de las diez sidecars JSON. Los SHA-256 antes/después coinciden para los diez archivos. `git diff --check` pasó. El smoke no estuvo disponible: el Dockerfile requiere `nginx:1.29-alpine`, ausente localmente; no se descargaron imágenes ni se fabricó un runtime alternativo.
  - Commit: `5d8748d` — `chore(assets): move internal image metadata out of public`.

- [ ] **LAUNCH-02 — Corregir la presentación pública sin declarar aprobación legal.** Mantener en Privacidad y Condiciones un aviso visible, explícito y claro de que el texto no es completo ni legalmente aprobado. Solo retirar del menú las etiquetas “borrador/preliminar” si ese aviso permanece claramente visible en cada página; no presentar las páginas como textos legales definitivos. Explicar en términos concretos el funcionamiento observado: el sitio es estático, no envía ni almacena formularios, el botón de contacto abre WhatsApp con texto prellenado y el usuario decide si lo envía. Explicar que la infraestructura puede procesar datos técnicos de conexión sin inventar proveedor o plazo de conservación; evitar presentar el canal de WhatsApp como canal de derechos confirmado. Mantener ambas rutas noindex y excluidas del sitemap. Corregir menciones obsoletas en `README.md`/`PRODUCT.md` y quitar “provisional” de la descripción accesible del favicon sin alterar su arte.
  - Aceptación: las páginas mantienen un aviso visible y claro de que no son textos legales completos ni aprobados; las etiquetas del menú solo se retiran si el aviso se conserva dentro de ambas páginas; el copy no inventa identidad, contacto legal, proveedores, conservación, aprobaciones ni derechos de assets; Privacidad y Condiciones siguen fuera de `sitemap-index.xml` y conservan `noindex,nofollow`; la indexación general continúa apagada por defecto.
  - Checks: `npm run check`; build predeterminado e inspección del HTML noindex; build con `PUBLIC_SITE_URL=https://powerful.pe PUBLIC_INDEXING_ENABLED=true` e inspección de canonical/sitemap para confirmar que los textos legales siguen excluidos; `bash scripts/smoke-image.sh`; `git diff --check`.
  - Ruta: delegated direct; el cambio coordina `src/content/es.ts`, favicon y documentación no trivial, por lo que se delega el escritor.
  - Evidencia: pendiente. La página legal no se considerará aprobada ni lista para indexar; la norma peruana requiere datos que el usuario decidió no publicar por ahora.
  - Commit: pendiente.

## Evidencia y progreso

- Estado observado: rama `main`. Preexistían modificaciones en `odd/tasks/diagrama-como-trabajamos.md`, `odd/tasks/seo-google-cache.md` y `odd/tasks/servicio-tecnologia-automatizacion-ia.md`, y archivos sin seguimiento `.playwright-cli/`, `CONTENIDO_WEB_PARA_REVISION.md` y `odd/tasks/adopt-prototype-typography.md`; preservar todos.
- Tarea previa SEO-01 mantiene `PUBLIC_INDEXING_ENABLED` apagado por defecto y excluye Privacidad/Condiciones del sitemap.
- La auditoría de solo lectura encontró diez JSON públicos, sin referencias runtime. Todos son metadata interna y Astro los copiaba al artefacto servido por Docker.
- El sitio estático expone un botón que abre WhatsApp con mensaje prellenado. El usuario no confirmó que ese número sea el canal oficial de privacidad.
- La norma y guía oficial peruana describen información previa al tratamiento que incluye identidad/domicilio del responsable, finalidades, destinatarios, conservación y medios para ejercer derechos. Por ello el copy factual no equivale a cumplimiento o aprobación legal.
- LAUNCH-01 movió los diez sidecars a `source-assets/metadata/` sin modificar las imágenes. El build local pasó y el artefacto conserva las imágenes públicas, pero no contiene los JSON de metadata. El smoke queda pendiente por falta local de la base exacta `nginx:1.29-alpine`; no se hizo pull remoto.

## Siguiente paso

LAUNCH-01 está completa en `5d8748d`. Verificar el commit, sincronizar este documento íntegro con Engram y dejar LAUNCH-02 pendiente hasta que el agente principal la asigne. No hacer push ni despliegue.
