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
- La autorización actual amplía el alcance únicamente para implementar el resolvedor de catálogos por locale; no autoriza traducciones, páginas inglesas ni el selector.

## Restricciones y configuración

- Rama actual: `main`; no crear ni cambiar ramas.
- Preservar los cambios preexistentes ajenos en `odd/tasks/`, `.playwright-cli/`, `CONTENIDO_WEB_PARA_REVISION.md` y `odd/tasks/adopt-prototype-typography.md`.
- Ruta: **delegated direct**. Disparadores: el mapeo cubrió más de cuatro archivos y la implementación preparada cruza al menos dos archivos no triviales.
- SDD: no seleccionado.
- TDD: **OFF**, por la configuración documentada en `README.md`; runner funcional: `npm run check` y `npm run build`.
- RDD: `disabled/unmanaged`, según la configuración documentada del proyecto; no iniciar revisión nativa.
- Pronóstico revisado: 938 líneas authored en fuentes (169 adiciones + 384 eliminaciones en archivos seguidos por Git, más 385 líneas de archivos nuevos); 983 al sumar esta ficha. I18N-02 agrega aproximadamente 25–40 líneas. El cambio es coherente con el objetivo y no se reducirá solo por tamaño. Estrategia de entrega: `stacked-to-main`, elegida por el usuario el 2026-10-23; organiza futuros PR slices y no autoriza crear ramas, PRs ni hacer push. El work-unit commit se hará localmente en `main`.

## Tarea

- [ ] **I18N-01 — Preparar locales, tipos compartidos y contratos de rutas.** Configurar los locales nativos de Astro, hacer que el layout pueda declarar el idioma correcto, y definir tipos/contratos neutrales para el shell y el mapa de páginas comerciales. Mantener las páginas españolas, metadatos, `noindex,nofollow` y rutas existentes sin regresiones; no crear contenido inglés ni páginas legales inglesas.
  - Aceptación: Astro reconoce `es-PE` y `en`; las páginas actuales siguen generando las mismas rutas `.html`; el idioma del documento es `es-PE` en todas las páginas actuales; el script cliente de WhatsApp recibe mensajes desde los datos de página y conserva el mensaje prellenado actual; Privacidad y Condiciones siguen solo en español; la configuración sigue sin indexar ni generar sitemap; los contratos permiten añadir el catálogo y páginas inglesas en una tarea posterior.
  - Checks: `npm run check`, `npm run build`, inspección de rutas y etiquetas `lang` en `dist/`, comprobar que las páginas continúan con `noindex,nofollow`, `git diff --check`.
  - Ruta: delegated direct; el mapeo de más de cuatro archivos precede a la escritura y el cambio toca varios archivos no triviales.
  - Evidencia: la adaptación de fuente está implementada. `tsc --noEmit` pasó y `git diff --check` pasó (Git avisó que normalizará CRLF de `astro.config.mjs`). `npm run check` y `npm run build` no pudieron ejecutarse: falta Node Linux en WSL y `npm` resuelve a Windows/CMD, que rechaza el cwd UNC; `node.exe astro.mjs check` carece de `@rolldown/binding-wasm32-wasi`; el contenedor `dev` carece de `@astrojs/sitemap`. El `dist/` inspeccionado es anterior, no un resultado de esta implementación: solo contiene rutas ES, muestra `index,follow` y una línea de sitemap para páginas comerciales, por lo que no confirma el noindex del próximo build. La fuente conserva la compuerta `PUBLIC_INDEXING_ENABLED`; no se tocó la variable, sitemap, robots ni despliegue.
  - Commit de implementación: `0162bee8ad7858266d202e067c127360aeb069c9` en `main` (local; sin push).
  - RDD: `disabled/unmanaged`; no ejecutar assessment ni review nativo.
- [x] **I18N-02 — Resolver catálogo comercial por locale.** Crear un registro explícito de catálogos disponibles y una función para obtener el catálogo del idioma solicitado; no devolver silenciosamente español para un locale aún sin traducción.
  - Aceptación: `es-PE` resuelve al catálogo actual; `en` (y otros locales sin catálogo) produce un error explícito y útil; el tipo de retorno no permite que un llamador use contenido inexistente como si estuviera traducido; no se crean páginas ni selector.
  - Checks: `tsc --noEmit`, `git diff --check`; conservar la evidencia previa de que `npm run check` y `npm run build` no estaban disponibles por dependencias/runtime.
  - Ruta: direct inline; la implementación se limita a un módulo de registro/resolución y no toca dos archivos fuente no triviales.
  - Evidencia: `resolveCommercialCatalog()` devuelve el catálogo registrado para `es-PE`, informa por separado de un locale desconocido, y lanza un error explícito si el locale es conocido pero todavía no tiene catálogo (`en`). No hay fallback al español. `node.exe node_modules/typescript/bin/tsc --noEmit` pasó; `git diff --cached --check` pasó. No se repitieron `npm run check/build`: el runtime Astro sigue con los bloqueos de dependencias documentados en I18N-01 y este cambio no añade dependencias.
  - Commit: pendiente.
  - RDD: `disabled/unmanaged`; no ejecutar assessment ni review nativo.

## Progreso y siguiente paso

- Exploración e implementación de fuente completadas: configuración nativa para `es-PE` sin prefijo y `en` bajo `/en/`, contratos neutrales, mapa ES/EN futuro, shell con `locale`/catálogo, y mensajes WhatsApp leídos desde el DOM. No se añadieron páginas inglesas ni traducciones legales; se preservaron las páginas y los textos españoles.
- Sin regresión visible confirmada aún: el build/check Astro no produjo salida nueva, así que rutas, `lang`, metadata y noindex deben verificarse cuando se repare o disponga el runtime con dependencias completas. El `dist/` previo es indexable y obsoleto para esta unidad; no se modificó.
- Work-unit commit selectivo guardado en `main`: `0162bee8ad7858266d202e067c127360aeb069c9`; los cambios preexistentes ajenos siguen intactos.
- I18N-01 sigue abierto hasta disponer de un runtime Astro completo para validar build, rutas, `lang`, metadata, noindex y sitemap.
- I18N-02 implementado únicamente en `src/i18n/catalog.ts`; el selector y los catálogos inglés siguen fuera de alcance.
- Siguiente paso: guardar el work-unit commit local selectivo de I18N-02 en `main`, excluyendo cambios ajenos.
