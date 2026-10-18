# Incorporar pesca y agroindustria

Repository-relative locator: `odd/tasks/incorporar-pesca-agroindustria.md`

## Objetivo y autorización

Ampliar la página Sectores para incluir Pesca y Agroindustria, y mejorar la forma en que las siete áreas aparecen en la página y en la portada. El usuario autorizó los cambios de contenido y presentación el 2026-10-18, y pidió un prompt para otro agente si se necesitan imágenes nuevas.

## Problema, alcance y restricciones

`businessPagesEs.sectores.cards` define cinco sectores y sus filtros; la portada consume las etiquetas y selecciona las imágenes existentes para un mosaico separado. El inventario de `/public/images/sectors` no contiene material apropiado para pesca o agroindustria. La misma página distingue el interés sectorial de la experiencia profesional de integrantes del equipo, que incluye pesca y agroexportación.

Alcance: añadir Pesca y Agroindustria como ámbitos de interés en los datos que alimentan filtros y tarjetas; mantener lenguaje prudente que no atribuya proyectos o experiencia corporativa; equilibrar filtros y enlaces de portada; adaptar la cuadrícula de siete tarjetas; preservar las cinco imágenes y copy existentes. En SG-1, como no existían fotos sectoriales adecuadas, se crearon dos gráficos geométricos locales provisionales y se prepararon prompts específicos. En el seguimiento SG-2 el usuario aportó dos fotografías panorámicas en `web/imagenes/` y autorizó integrarlas en las tarjetas: crear derivados WebP responsive, sustituir las rutas provisionales y actualizar manifest/metadata con su procedencia, sin modificar los PNG originales. No se autoriza publicar o realizar acciones remotas. No modificar la ficha de Cómo trabajamos ni los cambios concurrentes ajenos.

## Criterios de aceptación

- Pesca y Agroindustria aparecen como sectores de interés, cada uno con una tarjeta y filtro funcional en Sectores y un enlace funcional en la portada.
- El copy de nuevas tarjetas es ilustrativo, está sujeto a evaluación y no afirma ejecución de proyectos ni experiencia de POWERFUL.
- Las siete tarjetas mantienen una cuadrícula equilibrada en escritorio y móvil; los filtros y enlaces de portada quedan ordenados sin una última opción aislada; la galería de portada conserva sus cinco fotos.
- Los cinco recursos fotográficos y su manifest previo permanecen intactos. Las fotos aportadas se sirven como WebP de escritorio y móvil con dimensiones y recortes apropiados; las rutas de las tarjetas apuntan a estos derivados y no a archivos ausentes. La metadata identifica el origen declarado por el usuario, mantiene los PNG originales intactos y marca los SVG/prompts anteriores como recursos provisionales sustituidos.
- `npm run check`, `npm run build` y `git diff --check` pasan; el preview valida filtro, contenido, assets locales y composición responsive.

## Configuración de trabajo

- Ruta: delegated direct. El mapeo se delegó porque el flujo recorre 4+ archivos; el escritor se delegó porque la implementación afecta datos, portada, filtros y presentación en más de dos archivos. Las verificaciones y cierre se hicieron inline.
- TDD: desactivado por la elección explícita del usuario para el proyecto web, registrada en `odd/tasks/alinear-posicionamiento-y-rubros.md`. Runner normal WSL: `env PATH=/home/jony/.nvm/versions/node/v24.16.0/bin:/usr/local/bin:/usr/bin:/bin npm run check`, `... npm run build` y `git diff --check`. No agregar tests automatizados.
- Git: `main`; no crear/cambiar ramas. Sin push, PR o despliegue. La estrategia `exception-ok` y la integración local en main son elección previa del usuario para este proyecto.
- RDD: `disabled/unmanaged`; no iniciar review nativo.
- Forecast inicial: 250–400 líneas. Resultado observado: 170 líneas añadidas y 3 eliminadas entre archivos de código, gráficos SVG geométricos y metadata de prompts (sin contar esta ficha ni los cambios concurrentes ajenos). La estimación fue mayor que el delta real; no fue un límite de calidad.
- Espejo Engram: pendiente. No se encontró ningún tool de Engram/observaciones en la lista disponible.

## Tareas

- [x] **SG-1 — Incorporar Pesca y Agroindustria en Sectores y la portada.** Extender datos y filtros; presentar siete tarjetas con la última centrada; equilibrar los ocho filtros y siete enlaces de portada en escritorio y móvil; mantener la galería con sus cinco fotos. Mantener distinción entre interés y experiencia; conservar los cinco sectores actuales y sus activos. Crear gráficos SVG geométricos locales y redactar dos prompts fotográficos para otro agente en `public/images/sectors/pesca-agroindustria.visuals.json`. Verificar escritorio/móvil, filtro, copy, assets y build.
- [x] **SG-2 — Integrar las fotos aportadas para Pesca y Agroindustria.** Inspeccionar y conservar los PNG originales; crear derivados WebP para escritorio/móvil siguiendo el pipeline del manifest; reemplazar en las tarjetas las rutas de los SVG provisionales; actualizar manifest y metadata para reflejar procedencia y sustitución de los prompts; verificar calidad de recorte responsive, filtros y compilación; cerrar con un commit en `main`.

## Progreso y siguiente paso

- Mapeo delegado completado: `src/pages/sectores.astro` combina filtros, tarjetas, aviso de alcance, nota de experiencia del equipo y CTA; tarjetas en `src/components/SectorCard.astro`; contenido en `src/content/es.ts`; filtro en `src/scripts/sector-filters.ts`; los enlaces de portada usan `sectorHighlight.sectors` y su galería está separada en `src/components/HomeContent.astro` con estilos responsive.
- Inventario sectorial observado: existen cinco grupos de imágenes 640×240, 1280×480 y 640×400; no se encontraron fotos apropiadas de Pesca o Agroindustria. La portada consume ahora los cinco sectores con foto y muestra las siete áreas mediante enlaces.
- La nota de experiencia existente menciona agroexportación y pesca como experiencia de miembros del equipo, separada de la trayectoria corporativa. La página declara que los sectores expresan ámbitos de interés, no proyectos ejecutados.
- Progreso observado: Sectores muestra siete tarjetas y ocho filtros; la portada tiene siete enlaces y conserva las cinco fotos. Escritorio: filtros 4×2, enlaces 4+3 y tarjetas nuevas centradas al filtrar. Móvil a 390 px: filtros 2×4, tarjetas en una columna y enlaces de portada en una columna. Se probaron filtros de Pesca y Agroindustria y ambos seleccionan únicamente su tarjeta. Los diagramas conceptuales ocupan un área legible y conservan alt descriptivo. Los prompts completos están en `public/images/sectors/pesca-agroindustria.visuals.json`.
- Verificación: `npm run check` pasó (32 archivos, 0 errores, warnings o hints); `npm run build` pasó (9 rutas); `git diff --check` pasó; el JSON de prompts parsea correctamente. El detector Impeccable terminó sin hallazgos (`[]`). La preview fue revisada en escritorio y móvil, y no mostró errores de consola.
- Commit de trabajo: `bc21ed4` (`feat(sectors): add fishing and agroindustry`); el commit de cierre incorpora el centrado de tarjetas/filtros y esta evidencia.
- Siguiente paso: revisión del usuario de la preview local. El espejo Engram sigue pendiente porque no hay herramientas Engram disponibles en esta sesión. No se hizo push, PR ni despliegue.

## Seguimiento SG-2

- Autorización contextual: el usuario indicó que añadió las dos imágenes en `web/imagenes/`, en respuesta a la propuesta de revisar e integrar los recursos aportados para Pesca y Agroindustria.
- Ruta de implementación: delegated direct. El mapeo se delegó porque se necesitó leer 4+ archivos y revisar los assets; el escritor se delegó porque el cambio comprende contenido de tarjetas, variantes de imagen, manifest y metadata.
- TDD: desactivado según la configuración explícita registrada en la sección anterior. Verificaciones normales: `npm run check`, `npm run build`, `git diff --check` y preview local responsive. No agregar tests automatizados.
- RDD: `disabled/unmanaged`; no iniciar review nativo. Mantener `main`; sin push, PR o despliegue.
- Forecast: menos de 150 líneas authored, sin contar PNG originales ni derivados WebP. Resultado observado: 292 líneas authored (267 añadidas y 25 eliminadas en los archivos versionados, incluyendo esta ficha), dentro del presupuesto aproximado de 400 líneas.
- Evidencia de assets: mapeo de solo lectura identificó `web/imagenes/Imagen de ChatGPT 18 oct 2026, 15_36_26-1.png` (2048×768, pescado fresco sobre hielo) y `web/imagenes/Imagen de ChatGPT 18 oct 2026, 15_36_27-2.png` (2048×768, paltas en línea de selección). Originales intactos y hashes confirmados. Se generaron tres tamaños por sector: escritorio 640×240 y 1280×480 sin recorte, más móvil 640×400 con el recorte original `{left: 412, top: 1, width: 1224, height: 765}`. Manifest y metadata registran bytes, SHA-256, origen declarado por el usuario, derechos no verificados, variantes y SVG/prompts provisionales inactivos.
- Verificación SG-2: `npm run check` pasó (32 archivos, 0 errores, warnings o hints); `npm run build` pasó (9 rutas); `git diff --check` pasó; ambos JSON parsean; `file` confirmó los seis WebP con dimensiones registradas; `sha256sum` confirmó los PNG originales. En la preview local de `/sectores.html`, escritorio cargó las variantes 640w; a 390×844 px, ambas imágenes cargaron sus variantes móviles 640×400. Los filtros Pesca y Agroindustria seleccionaron una sola tarjeta cada uno. Impeccable detectó `[]`. La consola del navegador mostró errores `Resource::kQuotaBytes quota exceeded` durante las capturas/cambios de viewport; las imágenes y filtros funcionaron y el origen de esos mensajes no quedó confirmado.
- Commit de trabajo SG-2: `2998031` (`feat(sectors): use supplied fishing and agriculture photos`).
- Siguiente paso: revisar la preview local y, si los errores de cuota se repiten fuera de la captura del navegador, investigar su origen. Espejo Engram pendiente por ausencia de herramientas disponibles; no se hizo push, PR ni despliegue.
