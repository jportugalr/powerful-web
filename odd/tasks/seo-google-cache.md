# SEO para Google y estrategia de caché

## Objetivo

Preparar el sitio estático de POWERFUL para el rastreo e indexación de Google con controles de lanzamiento explícitos, y definir una política HTTP de caché que acelere recursos sin servir HTML o assets con nombres fijos obsoletos.

## Problema y motivo

El layout aplica `noindex,nofollow` a todas las páginas. El sitio no tiene dominio configurado, URLs canónicas, `robots.txt` ni sitemap. Nginx almacena los recursos fingerprinted bajo `/_astro/` por un año, pero no define caché para HTML e imágenes/recursos estables en `public/`.

## Autorización y alcance

El usuario autorizó preparar POWERFUL para Google/SEO y mejorar la caché donde exista una ventaja. Alcance local en el checkout actual; no incluye Search Console, cuenta de Google, edición de textos legales, aprobación de publicación, push ni despliegue.

- Configurar un dominio de publicación mediante `PUBLIC_SITE_URL`, sin asumir que el dominio previsto en documentos internos ya esté validado para DNS o que `www` sea la versión canónica.
- El usuario confirmó `https://powerful.pe` como dominio canónico. La compilación seguirá requiriendo configurar `PUBLIC_SITE_URL`; DNS/TLS y la conducta de `powerfulglobal.pe` aún no están verificados.
- El usuario confirmó que `powerfulglobal.pe` tendrá el mismo contenido y redirigirá a `powerful.pe`. El 301 debe preservar ruta y query y configurarse en el proxy público; el repositorio solo contiene el Nginx interno de la aplicación.
- Mantener el sitio en `noindex` y sin sitemap de indexación hasta que `PUBLIC_INDEXING_ENABLED=true` y exista un `PUBLIC_SITE_URL` HTTPS válido.
- Cuando se habilite, exponer contenido comercial con canonical, metadatos sociales de texto, `robots.txt` y sitemap absoluto.
- Privacidad, Condiciones y 404 permanecen noindex y fuera del sitemap mientras los textos legales sigan como borradores.
- Conservar una caché larga/inmutable para `/_astro/`; HTML debe revalidar y recursos públicos de URL fija reciben un plazo moderado.
- No afirmar posicionamiento, indexación, Core Web Vitals ni configuración de Google Search Console sin evidencia del sitio publicado y datos de Search Console.

## Ruta, modo y entrega

- Ruta seleccionada: **delegated direct**.
- Disparador: el mapeo requiere 4+ archivos (Astro layout/config, rutas y contenido, Docker/Nginx y documentación); se delegó la exploración antes de fijar la implementación. La implementación coordina varios archivos no triviales, por lo que se delega un escritor.
- No se selecciona SDD.
- TDD: OFF, conforme a la decisión previa explícita registrada en `README.md`.
- Runners funcionales: `npm run check`, `npm run build`; Nginx config validation solo si el runtime local ya está disponible, sin iniciarlo como efecto secundario.
- RDD: `disabled/unmanaged`, según el estado documentado en `README.md`; no iniciar revisión nativa.
- Pronóstico total: aproximadamente 250 líneas añadidas/eliminadas, contando documentación y configuración, excluyendo archivos generados.
- Estrategia de entrega: `ask-on-risk` (default); el pronóstico queda bajo el presupuesto de 400 líneas.
- Rama actual: `main`. Preservar los cambios preexistentes ajenos: `odd/tasks/diagrama-como-trabajamos.md`, `odd/tasks/servicio-tecnologia-automatizacion-ia.md`, `.playwright-cli/`, `CONTENIDO_WEB_PARA_REVISION.md` y `odd/tasks/adopt-prototype-typography.md`.

## Tareas

- [x] **SEO-01 — Establecer rastreo, canonical y sitemap bajo configuración explícita de lanzamiento.** Resolver URL desde `PUBLIC_SITE_URL` y activar indexación solo con `PUBLIC_INDEXING_ENABLED=true`; no incorporar dominios de ejemplo ni inferir `www`/apex. En indexación habilitada, añadir self-canonical que excluya query strings, `og:title`/`og:description`/`og:url`, sitemap filtrado y `robots.txt` coherente. Mantener noindex por defecto, y excluir Privacidad, Condiciones y 404. Ajustar metadatos comerciales solo con afirmaciones respaldadas por el contenido aprobado.
  - Aceptación: build sin configuración permanece noindex y no publica sitemap; build con HTTPS + flag explícito incluye rutas comerciales y excluye borradores legales/404; URLs canónicas/sitemap usan el host configurado (`https://powerful.pe` para el lanzamiento) y no contienen parámetros de CTA. No se inventan hechos empresariales ni datos estructurados incompletos.
  - Checks: `npm run check`, build local en ambos modos de indexación, inspección del HTML/robots/sitemap generados, `git diff --check`.
  - Ruta: delegated direct por mapeo 4+ archivos y escritura coordinada.
  - Evidencia: `npm run check` pasó (33 archivos, 0 diagnósticos); build predeterminado y build con dominio de prueba HTTPS pasaron; tras la confirmación del dominio, `PUBLIC_SITE_URL=https://powerful.pe PUBLIC_INDEXING_ENABLED=true npm run build` generó canonical y sitemap con `powerful.pe` y seis rutas comerciales; luego el build predeterminado volvió a noindex y sin sitemap. El sitemap excluye Privacidad, Condiciones, 404 y parámetros; flag sin URL falla con error claro; `git diff --check` pasó.
  - Commit: `058bbad` (`feat(seo): gate Google indexing on launch configuration`).
  - Seguimiento: README actualizado para usar el dominio canónico confirmado; commit `d837f4d` (`docs(seo): use confirmed canonical domain in launch guide`).

- [x] **CACHE-01 — Definir cabeceras HTTP para HTML y assets públicos versionados.** Mantener `/_astro/` en un año con `immutable`; definir `no-cache` para páginas HTML; usar un TTL moderado en imágenes/favicon de `/public` con nombres estables, evitando que la regla de imágenes reemplace la regla de `/_astro/`.
  - Aceptación: configuración Nginx aplica la política adecuada por tipo/ruta; la documentación refleja la conducta; no se añade infraestructura de caché externa.
  - Checks: `npm run check`, build, revisar `nginx.conf` y su sintaxis mediante runtime local disponible, `git diff --check`.
  - Ruta: delegated direct para el cambio coordinado a configuración y documentación.
  - Evidencia: `npm run check` pasó (33 archivos, 0 diagnósticos); `npm run build` generó las nueve páginas estáticas; `git diff --check` pasó. `nginx -t` se omitió: no hay binario Nginx en el host ni contenedor local Nginx activo; no se iniciaron servicios. Revisión de configuración confirma `^~ /_astro/` preserva el año inmutable, las imágenes/favicons usan un día y páginas/documentos usan `no-cache`.
  - Commit: `8f95369` (`perf(cache): add revalidation and static asset TTLs`).

## Evidencia y progreso

- Inspección local confirma Astro estático, títulos/descripciones existentes, y bloqueo global `noindex,nofollow` en el layout.
- Dominio previsto en el expediente: `https://powerful.pe`; el usuario confirmó que será canónico. DNS/TLS aún no están verificados. El build toma el host de `PUBLIC_SITE_URL` y mantiene el flag de indexación explícito.
- El usuario confirmó `https://powerful.pe` como canónico y que `powerfulglobal.pe` es un alias con el mismo contenido. README documenta el 301 equivalente con ruta y query preservados, pendiente de configurar en el proxy público.
- Las rutas de Privacidad y Condiciones contienen borradores legales; no se les quitará noindex.
- Nginx actualmente da `public, max-age=31536000, immutable` a `/_astro/`; los assets tienen hash. Las imágenes/favicons en `/public` usan nombres estables. HTML y assets públicos carecen de cabeceras explícitas en la configuración.
- Google recomienda páginas útiles y rastreables, títulos claros, y sitemap como ayuda de descubrimiento; un sitemap no garantiza indexación. Indexación real, rendimiento medido, cobertura y consultas requieren el sitio público y Search Console.
- SEO-01 implementado: la indexación sigue apagada por defecto y requiere `PUBLIC_INDEXING_ENABLED=true` más un origen HTTPS en `PUBLIC_SITE_URL`; canonicals, Open Graph, `robots.txt` y sitemap se habilitan solo con esa configuración. Se probó salida estática en ambos modos y el error ante configuración incompleta. Se confirmó `https://powerful.pe` como canónico; DNS/TLS y textos legales siguen pendientes.
- CACHE-01 implementado: `docker/nginx.conf` revalida HTML/documentos, mantiene el año inmutable para `/_astro/` y aplica TTL de un día a imágenes/favicon públicos con URL fija. README describe la posible demora de hasta un día al reemplazar esos assets.
- Se conservaron los cambios locales preexistentes ajenos a este feature.

## Siguiente paso

SEO-01 quedó cerrado en `058bbad` con guía actualizada en `d837f4d`, y CACHE-01 en `8f95369`; los checks aplicables están registrados. El build usa `https://powerful.pe`. Antes de activar `PUBLIC_INDEXING_ENABLED`, configurar y probar en el proxy público el 301 desde `powerfulglobal.pe` conservando path/query, verificar DNS/TLS y aprobar los textos legales. La configuración del edge no está en este repositorio; para modificarla falta identificar el destino y autorizar explícitamente esa operación/sesión.
