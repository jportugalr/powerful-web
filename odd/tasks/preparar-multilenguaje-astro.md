# Preparar la base multilenguaje de POWERFUL

## Objetivo

Preparar el sitio Astro para conservar el español en sus URLs actuales y añadir contenido comercial en inglés bajo `/en/` más adelante, sin habilitar indexación ni presentar páginas legales incompletas como traducidas o aprobadas.

## Problema y motivo

El contenido principal está centralizado en `src/content/es.ts`, pero Astro no tiene configurados locales, los tipos llevan nombres específicos de español y el layout/navegación/contacto siguen ligados a ese idioma. La preparación debe crear una base locale-neutral que permita añadir traducciones sin rehacer el sitio.

## Alcance autorizado

- Configurar el i18n nativo de Astro para `es-PE` como idioma predeterminado sin prefijo y `en` con prefijo `/en/`, conservando `output: 'static'`, `build.format: 'preserve'` y las URLs españolas `.html` existentes.
- Introducir tipos compartidos para los catálogos por idioma y adaptar el shell compartido para recibir el locale, manteniendo sin cambios el contenido visible español por defecto.
- Preparar un mapa explícito de páginas comerciales equivalentes ES/EN para permitir un selector posterior sin adivinar slugs.
- Hacer que el script cliente de WhatsApp consuma los mensajes pasados por el catálogo de la página y no importe directamente el contenido español.
- Mantener Privacidad y Condiciones solo en español y fuera del mapa ES/EN hasta contar con traducción y aprobación.
- Mantener toda la web en `noindex,nofollow`; no cambiar `PUBLIC_INDEXING_ENABLED`, sitemap, robots, CI, despliegue ni sistemas remotos.
- No crear páginas inglesas vacías, traducciones comerciales, nuevas afirmaciones de negocio ni un selector que enlace a páginas inexistentes. La variante editorial de inglés queda abierta; la infraestructura usa el locale genérico `en`.
- La autorización actual amplía el alcance para que el resolvedor use el catálogo español cuando el locale solicitado no tenga traducción e integrarlo en las seis páginas comerciales existentes. No autoriza traducciones, páginas inglesas ni el selector; Privacidad y Condiciones siguen pendientes y solo en español.

## Restricciones y configuración

- Rama actual: `main`; no crear ni cambiar ramas.
- Preservar los cambios preexistentes ajenos en `odd/tasks/`, `.playwright-cli/`, `CONTENIDO_WEB_PARA_REVISION.md` y `odd/tasks/adopt-prototype-typography.md`.
- Ruta: **delegated direct**. Disparadores: el mapeo cubrió más de cuatro archivos y la implementación preparada cruza al menos dos archivos no triviales.
- SDD: no seleccionado.
- TDD: **OFF**, por la configuración documentada en `README.md`; runner funcional: `npm run check` y `npm run build`.
- RDD: `disabled/unmanaged`, según la configuración documentada del proyecto; no iniciar revisión nativa.
- Pronóstico revisado: la preparación previa sumó aproximadamente 938 líneas authored en fuentes; el cableado del fallback añade un estimado de 80–150 líneas authored. El acumulado supera el umbral orientativo de 400, por lo que aplica la estrategia `stacked-to-main`, elegida por el usuario el 2026-10-23; organiza futuros PR slices y no autoriza crear ramas, PRs ni hacer push. El work-unit commit se hará localmente en `main`.

## Tarea

- [ ] **I18N-01 — Preparar locales, tipos compartidos y contratos de rutas.** Configurar los locales nativos de Astro, hacer que el layout pueda declarar el idioma correcto, y definir tipos/contratos neutrales para el shell y el mapa de páginas comerciales. Mantener las páginas españolas, metadatos, `noindex,nofollow` y rutas existentes sin regresiones; no crear contenido inglés ni páginas legales inglesas.
  - Aceptación: Astro reconoce `es-PE` y `en`; las páginas actuales siguen generando las mismas rutas `.html`; el idioma del documento es `es-PE` en todas las páginas actuales; el script cliente de WhatsApp recibe mensajes desde los datos de página y conserva el mensaje prellenado actual; Privacidad y Condiciones siguen solo en español; la configuración sigue sin indexar ni generar sitemap; los contratos permiten añadir el catálogo y páginas inglesas en una tarea posterior.
  - Checks: `npm run check`, `npm run build`, inspección de rutas y etiquetas `lang` en `dist/`, comprobar que las páginas continúan con `noindex,nofollow`, `git diff --check`.
  - Ruta: delegated direct; el mapeo de más de cuatro archivos precede a la escritura y el cambio toca varios archivos no triviales.
  - Evidencia: la adaptación de fuente está implementada. `tsc --noEmit` pasó y `git diff --check` pasó (Git avisó que normalizará CRLF de `astro.config.mjs`). `npm run check` y `npm run build` no pudieron ejecutarse: falta Node Linux en WSL y `npm` resuelve a Windows/CMD, que rechaza el cwd UNC; `node.exe astro.mjs check` carece de `@rolldown/binding-wasm32-wasi`; el contenedor `dev` carece de `@astrojs/sitemap`. El `dist/` inspeccionado es anterior, no un resultado de esta implementación: solo contiene rutas ES, muestra `index,follow` y una línea de sitemap para páginas comerciales, por lo que no confirma el noindex del próximo build. La fuente conserva la compuerta `PUBLIC_INDEXING_ENABLED`; no se tocó la variable, sitemap, robots ni despliegue.
  - Commit de implementación: `0162bee8ad7858266d202e067c127360aeb069c9` en `main` (local; sin push).
  - RDD: `disabled/unmanaged`; no ejecutar assessment ni review nativo.
- [x] **I18N-02 — Resolver e integrar el catálogo comercial con fallback español.** Reabrida por solicitud del usuario: el resultado anterior fail-fast para `en` ya no cumple el comportamiento requerido. Hacer que el resolvedor entregue catálogo y locale efectivo (`es-PE`) cuando falte el locale, sea desconocido o no exista catálogo; conectar las seis páginas comerciales al resolvedor para que el shell y el idioma declarado correspondan al contenido mostrado.
  - Aceptación: `es-PE` resuelve al catálogo actual; `en`, un locale desconocido o locale ausente usan el catálogo español con locale efectivo `es-PE`; las seis páginas comerciales usan el catálogo resuelto; Inicio pasa los datos a `HomeContent` en vez de importarlos desde la página/componente; las páginas fallback conservan enlaces españoles, `lang="es-PE"`, rutas y contenido actuales; no se crean páginas inglesas ni selector; Privacidad y Condiciones siguen pendientes, solo en español y fuera del catálogo comercial; no se modifica el `noindex,nofollow`.
  - Checks: `npm run check`, `npm run build`, inspección de las seis rutas comerciales y `lang="es-PE"` del contenido fallback en `dist/`, comprobar `noindex,nofollow`, `node_modules/typescript/bin/tsc --noEmit` si el runtime disponible lo permite, `git diff --check`. No generar traducciones ni modificar indexación.
  - Ruta: delegated direct; el mapeo cubrió más de cuatro archivos y el cableado afecta al menos siete fuentes no triviales (resolvedor, seis páginas y props de HomeContent).
  - TDD: OFF, fuente `README.md`; runners funcionales `npm run check` y `npm run build`.
  - Evidencia: resolveCommercialCatalog() ahora devuelve { catalog, locale }; solo usa el locale solicitado si existe un catálogo y, en caso contrario (incluido en, desconocido o ausente), devuelve el catálogo español con locale efectivo es-PE. Las seis páginas comerciales obtienen sus datos del resolver y pasan el shell/locale efectivo a SiteLayout; HomeContent recibe el catálogo por props. Revisión del diff confirma que Privacidad, Condiciones y la indexación no se modificaron. node.exe node_modules/typescript/bin/tsc --noEmit pasó y git diff --check pasó. npm run check/build no pudieron ejecutarse: npm invoca CMD desde la ruta UNC y no encuentra astro; la invocación directa node.exe node_modules/astro/bin/astro.mjs check/build falla porque falta @rolldown/binding-wasm32-wasi (rolldown-binding.wasi.cjs). No se generó un dist nuevo; las rutas, lang y noindex en el build no pudieron verificarse. No se añadieron pruebas.
  - Commit de implementación: se registrará después del work-unit commit local.
  - RDD: `disabled/unmanaged`; no ejecutar assessment ni review nativo.

## Progreso y siguiente paso

- Exploración e implementación de fuente completadas: configuración nativa para `es-PE` sin prefijo y `en` bajo `/en/`, contratos neutrales, mapa ES/EN futuro, shell con `locale`/catálogo, y mensajes WhatsApp leídos desde el DOM. No se añadieron páginas inglesas ni traducciones legales; se preservaron las páginas y los textos españoles.
- Sin regresión visible confirmada aún: el build/check Astro no produjo salida nueva, así que rutas, `lang`, metadata y noindex deben verificarse cuando se repare o disponga el runtime con dependencias completas. El `dist/` previo es indexable y obsoleto para esta unidad; no se modificó.
- Work-unit commit selectivo guardado en `main`: `0162bee8ad7858266d202e067c127360aeb069c9`; los cambios preexistentes ajenos siguen intactos.
- I18N-01 sigue abierto hasta disponer de un runtime Astro completo para validar build, rutas, `lang`, metadata, noindex y sitemap.
- I18N-02 quedó implementada con fallback español en las seis páginas comerciales; no hay contenido inglés, páginas inglesas ni selector.
- I18N-01 mantiene pendiente la validación de Astro, rutas generadas y noindex. Para cerrar esa evidencia falta ejecutar Astro en un runtime con sus dependencias nativas completas.
