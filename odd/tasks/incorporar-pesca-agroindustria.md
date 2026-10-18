# Incorporar pesca y agroindustria

Repository-relative locator: `odd/tasks/incorporar-pesca-agroindustria.md`

## Objetivo y autorización

Ampliar la página Sectores para incluir Pesca y Agroindustria, y mejorar la forma en que las siete áreas aparecen en la página y en la portada. El usuario autorizó los cambios de contenido y presentación el 2026-10-18, y pidió un prompt para otro agente si se necesitan imágenes nuevas.

## Problema, alcance y restricciones

`businessPagesEs.sectores.cards` define cinco sectores y sus filtros; la portada consume las etiquetas y selecciona las imágenes existentes para un mosaico separado. El inventario de `/public/images/sectors` no contiene material apropiado para pesca o agroindustria. La misma página distingue el interés sectorial de la experiencia profesional de integrantes del equipo, que incluye pesca y agroexportación.

Alcance: añadir Pesca y Agroindustria como ámbitos de interés en los datos que alimentan filtros y tarjetas; mantener lenguaje prudente que no atribuya proyectos o experiencia corporativa; equilibrar filtros y enlaces de portada; adaptar la cuadrícula de siete tarjetas; preservar las cinco imágenes y copy existentes. Evaluar el catálogo de recursos visuales, sin instalar herramientas. Como no existen fotos sectoriales adecuadas, crear dos gráficos geométricos locales provisionales y preparar prompts específicos para que otro agente genere fotografías. Mantener los recursos nuevos completos y sin referencias rotas en local; no se autoriza publicar o realizar acciones remotas. No modificar la ficha de Cómo trabajamos ni los cambios concurrentes ajenos.

## Criterios de aceptación

- Pesca y Agroindustria aparecen como sectores de interés, cada uno con una tarjeta y filtro funcional en Sectores y un enlace funcional en la portada.
- El copy de nuevas tarjetas es ilustrativo, está sujeto a evaluación y no afirma ejecución de proyectos ni experiencia de POWERFUL.
- Las siete tarjetas mantienen una cuadrícula equilibrada en escritorio y móvil; los filtros y enlaces de portada quedan ordenados sin una última opción aislada; la galería de portada conserva sus cinco fotos.
- Los cinco recursos fotográficos y su manifest permanecen intactos. Los dos gráficos geométricos locales tienen alt descriptivo, y la metadata incluye clasificación, origen y dos prompts fotorrealistas listos para otro agente, sin enlazar a archivos ausentes.
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

## Progreso y siguiente paso

- Mapeo delegado completado: `src/pages/sectores.astro` combina filtros, tarjetas, aviso de alcance, nota de experiencia del equipo y CTA; tarjetas en `src/components/SectorCard.astro`; contenido en `src/content/es.ts`; filtro en `src/scripts/sector-filters.ts`; los enlaces de portada usan `sectorHighlight.sectors` y su galería está separada en `src/components/HomeContent.astro` con estilos responsive.
- Inventario sectorial observado: existen cinco grupos de imágenes 640×240, 1280×480 y 640×400; no se encontraron fotos apropiadas de Pesca o Agroindustria. La portada consume ahora los cinco sectores con foto y muestra las siete áreas mediante enlaces.
- La nota de experiencia existente menciona agroexportación y pesca como experiencia de miembros del equipo, separada de la trayectoria corporativa. La página declara que los sectores expresan ámbitos de interés, no proyectos ejecutados.
- Progreso observado: Sectores muestra siete tarjetas y ocho filtros; la portada tiene siete enlaces y conserva las cinco fotos. Escritorio: filtros 4×2, enlaces 4+3 y tarjetas nuevas centradas al filtrar. Móvil a 390 px: filtros 2×4, tarjetas en una columna y enlaces de portada en una columna. Se probaron filtros de Pesca y Agroindustria y ambos seleccionan únicamente su tarjeta. Los diagramas conceptuales ocupan un área legible y conservan alt descriptivo. Los prompts completos están en `public/images/sectors/pesca-agroindustria.visuals.json`.
- Verificación: `npm run check` pasó (32 archivos, 0 errores, warnings o hints); `npm run build` pasó (9 rutas); `git diff --check` pasó; el JSON de prompts parsea correctamente. El detector Impeccable terminó sin hallazgos (`[]`). La preview fue revisada en escritorio y móvil, y no mostró errores de consola.
- Commit de trabajo: `bc21ed4` (`feat(sectors): add fishing and agroindustry`); el commit de cierre incorpora el centrado de tarjetas/filtros y esta evidencia.
- Siguiente paso: revisión del usuario de la preview local. El espejo Engram sigue pendiente porque no hay herramientas Engram disponibles en esta sesión. No se hizo push, PR ni despliegue.
