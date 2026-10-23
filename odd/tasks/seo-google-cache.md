# SEO para Google y estrategia de caché

## Objetivo

Preparar el sitio estático de POWERFUL para el rastreo e indexación de Google con controles de lanzamiento explícitos, y definir una política HTTP de caché que acelere recursos sin servir HTML o assets con nombres fijos obsoletos.

## Problema y motivo

El layout aplica `noindex,nofollow` a todas las páginas. El sitio no tiene dominio configurado, URLs canónicas, `robots.txt` ni sitemap. Nginx almacena los recursos fingerprinted bajo `/_astro/` por un año, pero no define caché para HTML e imágenes/recursos estables en `public/`.

## Autorización y alcance

El usuario autorizó preparar POWERFUL para Google/SEO y mejorar la caché donde exista una ventaja. Alcance local en el checkout actual; no incluye Search Console, cuenta de Google, edición de textos legales, aprobación de publicación, push ni despliegue.

- Configurar un dominio de publicación mediante `PUBLIC_SITE_URL`, sin asumir que el dominio previsto en documentos internos ya esté validado para DNS o que `www` sea la versión canónica.
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
  - Aceptación: build sin configuración permanece noindex y no publica sitemap; build con HTTPS + flag explícito incluye rutas comerciales y excluye borradores legales/404; URLs canónicas/sitemap usan el host configurado y no contienen parámetros de CTA. No se inventan hechos empresariales ni datos estructurados incompletos.
  - Checks: `npm run check`, build local en ambos modos de indexación, inspección del HTML/robots/sitemap generados, `git diff --check`.
  - Ruta: delegated direct por mapeo 4+ archivos y escritura coordinada.
  - Evidencia: `npm run check` pasó (33 archivos, 0 diagnósticos); build predeterminado y build con `PUBLIC_SITE_URL=https://powerful.example PUBLIC_INDEXING_ENABLED=true` pasaron; el sitemap contiene seis rutas comerciales `.html` y excluye Privacidad, Condiciones, 404 y parámetros; canonical/robots coinciden con el host configurado; flag sin URL falla con error claro; `git diff --check` pasó con aviso de conversión CRLF en `astro.config.mjs`.
  - Commit: pendiente de registrar tras cerrar la unidad de trabajo.

- [ ] **CACHE-01 — Definir cabeceras HTTP para HTML y assets públicos versionados.** Mantener `/_astro/` en un año con `immutable`; definir `no-cache` para páginas HTML; usar un TTL moderado en imágenes/favicon de `/public` con nombres estables, evitando que la regla de imágenes reemplace la regla de `/_astro/`.
  - Aceptación: configuración Nginx aplica la política adecuada por tipo/ruta; la documentación refleja la conducta; no se añade infraestructura de caché externa.
  - Checks: `npm run check`, build, revisar `nginx.conf` y su sintaxis mediante runtime local disponible, `git diff --check`.
  - Ruta: delegated direct para el cambio coordinado a configuración y documentación.
  - Evidencia/commit: pendiente.

## Evidencia y progreso

- Inspección local confirma Astro estático, títulos/descripciones existentes, y bloqueo global `noindex,nofollow` en el layout.
- Dominio previsto en expediente interno: `https://powerful.pe`; DNS y elección apex/www no están cerrados. Por eso el código no fija ese dominio.
- Las rutas de Privacidad y Condiciones contienen borradores legales; no se les quitará noindex.
- Nginx actualmente da `public, max-age=31536000, immutable` a `/_astro/`; los assets tienen hash. Las imágenes/favicons en `/public` usan nombres estables. HTML y assets públicos carecen de cabeceras explícitas en la configuración.
- Google recomienda páginas útiles y rastreables, títulos claros, y sitemap como ayuda de descubrimiento; un sitemap no garantiza indexación. Indexación real, rendimiento medido, cobertura y consultas requieren el sitio público y Search Console.
- SEO-01 implementado: la indexación sigue apagada por defecto y requiere `PUBLIC_INDEXING_ENABLED=true` más un origen HTTPS en `PUBLIC_SITE_URL`; canonicals, Open Graph, `robots.txt` y sitemap se habilitan solo con esa configuración. Se probó salida estática en ambos modos y el error ante configuración incompleta. No se fijó dominio ni se cambiaron textos legales.
- Se conservaron los cambios locales preexistentes ajenos a este feature.

## Siguiente paso

Registrar el commit SEO-01 y actualizar el espejo Engram. Después completar CACHE-01: cabeceras Nginx para HTML y assets públicos, checks locales disponibles y commit. La activación de `PUBLIC_INDEXING_ENABLED` queda para cuando el usuario tenga fijados el dominio canónico y la preparación pública/legal.
