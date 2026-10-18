# Añadir efectos y pulir textos de Sectores

## Objetivo

Conservar la composición anterior de `/sectores.html` y hacer que se sienta más viva con efectos discretos y una revisión breve de textos, siguiendo el posicionamiento de POWERFUL sin añadir verborrea.

## Problema y motivo

El usuario rechazó la propuesta de reemplazar el hero y las imágenes de las tarjetas por un índice fotográfico; prefiere la composición anterior. La oportunidad actual es añadir movimiento pequeño y estados interactivos a la vista existente, y aclarar algunos textos solo donde aporte valor.

## Alcance y límites

- Conservar la composición anterior de hero, filtros y tarjetas con imágenes.
- Añadir interacción discreta de hover y foco a las tarjetas. Mantener la distribución y los filtros existentes.
- Revisar el copy y cambiarlo solo si hace falta para claridad; no alargarlo ni añadir afirmaciones.
- Conservar navegación, contenido, siete sectores, filtros funcionales, enlaces y CTAs existentes. No solicitar ni generar recursos.
- Cualquier ajuste de texto debe ser conciso y ceñirse a hechos aprobados: sectores de interés, iniciativas evaluadas desde información disponible y experiencia profesional individual del equipo. No inventar clientes, ubicaciones, proyectos o afirmaciones corporativas.
- Mantener explícita la diferencia entre ámbitos de interés y experiencia profesional individual del equipo.
- No añadir dependencias. Priorizar efectos CSS breves; respetar teclado, foco visible y `prefers-reduced-motion`.
- Solo cambios locales; sin ramas nuevas, push, PR, publicación ni despliegue.

## Tareas

- [x] **RS-1 — Conservar el diseño y añadir vida a Sectores.** Se conservaron las tarjetas con fotos y se añadieron estados discretos de hover/foco, elevación, acercamiento de imagen y movimiento de flecha. Se revisó el copy y quedó intacto porque ya es conciso y distingue los sectores de interés de la experiencia individual del equipo. Filtros y preview local verificados; el comportamiento de movimiento reducido se revisó en CSS.
- [x] **RS-2 — Retirar el número decorativo del hero y evaluar efectos complementarios.** Se ocultó el «04» solo en Sectores y se confirmó que los otros heroes conservan su numeración. Comparados los efectos vigentes con «Cómo trabajamos», se recomendó mantener las interacciones actuales de las tarjetas y considerar solo una transición breve en los filtros; no se añadieron efectos nuevos.
- [x] **RS-3 — Añadir transición breve a los filtros.** Se aplicó una transición CSS de 160 ms a color, fondo y borde al estado seleccionado, sin nuevas dependencias ni cambios al filtrado. La regla solo aplica con `prefers-reduced-motion: no-preference`.

## Autorización y ruta

- Alcance autorizado directamente por el usuario: implementar una mejora visual de Sectores y abrir la vista previa local. El usuario corrigió la dirección: revertir la nueva composición y conservar la anterior; el nuevo foco son efectos y un posible ajuste conciso de textos.
- Ruta de RS-1: **delegated direct**. Evidencia: el mapeo inspeccionó más de cuatro archivos y disparó el trigger de exploración; el escritor terminó cambiando solo `src/components/SectorCard.astro` y `src/styles/global.css`. El copy no requirió cambios.
- Cambios de autoría observados: 36 adiciones y 1 eliminación (sin generados). Estrategia de entrega: `ask-on-risk` (default); el cambio queda bajo el umbral aproximado de 400, así que no falta estrategia de cadena.
- Alcance RS-2 autorizado por el usuario el 2026-10-18: ocultar el número «04» del hero de Sectores y evaluar efectos posibles en sus componentes.
- Ruta de RS-2: **delegated direct**. Evidencia: el cambio requiere coordinar el dato/uso de `PageHero` con la página Sectores; el trigger de mapeo delegó una exploración de 4+ archivos. La propuesta de efectos es read-only; no autoriza implementarlos.
- Forecast RS-2: 15–40 líneas de autoría (adiciones + eliminaciones). Estrategia de entrega heredada: `ask-on-risk`; bajo el umbral aproximado de 400.
- Alcance RS-3 autorizado por el usuario el 2026-10-18: implementar la transición breve de selección en filtros y aprovechar herramientas apropiadas del catálogo.
- Ruta de RS-3: **direct inline**. Evidencia: la exploración del catálogo se delegó al revisar más de cuatro fuentes; la implementación queda limitada a una regla CSS del selector `.filter-pill` en `src/styles/global.css`, sin escritura delegada ni cambios de markup/script.
- Forecast RS-3: 5–12 líneas de autoría (adiciones + eliminaciones). Estrategia de entrega heredada: `ask-on-risk`; bajo el umbral aproximado de 400.

## Verificación

- TDD: desactivado; fuente: decisión explícita registrada en `odd/tasks/portada-powerful.md` (2026-10-17), aplicable al trabajo de la web; verificación funcional ordinaria.
- Runner: `npm run check` y `npm run build`.
- `npm run check`: pasó, 32 archivos revisados, 0 diagnósticos.
- `npm run build`: pasó y generó 9 rutas.
- Revisión visual en la vista previa local (viewport aproximado de 863 px): composición anterior, filtros y tarjetas presentes; el estado de foco se ve al navegar con teclado. El filtro Pesca muestra su tarjeta y «Todos» restaura la lista. Se revisó la regla móvil existente de una columna y que los cambios no alteran el layout; no se capturó un viewport de teléfono.
- `prefers-reduced-motion`: las transformaciones se anulan en la regla `reduce`; no se emuló esa preferencia en el navegador.
- `git diff --check`: pasó; el commit de trabajo incluyó solo `src/components/SectorCard.astro`, `src/styles/global.css` y este documento de RS-1.
- `impeccable detect --json`: señaló dos bordes laterales en las secciones de Contacto/Legal y la fuente base `Inter`. La inspección del diff confirma que son reglas preexistentes, fuera de los selectores modificados; quedan fuera de RS-1.
- RS-2: `npm run check` pasó (32 archivos, cero diagnósticos); `npm run build` pasó (9 rutas); `git diff --check` pasó. En preview local `/sectores.html`, el número «04» ya no aparece y se conserva la etiqueta «POWERFUL / PERÚ»; la salida construida confirma que otros heroes mantienen 02, 03, 06, 07 y 08. La propuesta de efectos se basa en los componentes y estilos vigentes.
- RS-3: `npm run check` pasó (32 archivos, cero diagnósticos); `npm run build` pasó (9 rutas); `git diff --check` pasó. En preview local, Enter seleccionó Pesca y mantuvo foco visible; `aria-pressed` quedó sincronizado y las otras seis tarjetas permanecieron ocultas. El clic de mouse en Agroindustria mostró solo esa tarjeta; «Todos» restauró las siete. El CSS limita la transición a `prefers-reduced-motion: no-preference`; no se emuló la preferencia reducida en el navegador. La transición computada es 160 ms para fondo, texto y borde. Herramienta seleccionada: CSS nativo del catálogo; GSAP, Motion y Tailwind no aportan valor a este cambio puntual.
- RDD: `gentle-ai review mode status` confirmó `off (decided by default)` el 2026-10-18; no se inicia revisión RDD.

## Progreso y siguiente paso

- Estado: implementación revisada y preview abierta en `http://localhost:4323/sectores.html`. Se conservaron hero, filtros, copy y fotos originales; se añadieron estados de hover/foco a las tarjetas, sin nuevas dependencias ni recursos.
- Archivos de código de RS-1: `src/components/SectorCard.astro`, `src/styles/global.css`. No se modificaron `src/pages/sectores.astro` ni `src/content/es.ts` en ese commit.
- Commit de trabajo de RS-1: `2c904bd` (`feat: add subtle interaction to sector cards`).
- Mirror Engram: pendiente; no hay herramientas Engram/mem_* ni recursos configurados en este runtime. Conservar este documento y sincronizar el documento completo cuando el servicio esté disponible.
- Siguiente paso: sincronizar el mirror Engram cuando esté disponible. Quedan anotadas como no realizadas la captura visual de teléfono y la emulación de movimiento reducido; la regla móvil existente y la regla CSS de movimiento reducido se inspeccionaron en código.
- RS-2: implementación y verificación completadas. Las tarjetas ya elevan 3 px, cambian borde/sombra, escalan foto 1.035 y mueven la flecha 4 px al hover/foco; «Cómo trabajamos» revela su bracket y sus cinco principios al entrar en viewport. Recomendación: conservar las tarjetas y considerar únicamente una transición breve de color/fondo/borde en filtros; no añadir reveal secuencial a siete tarjetas.
- Archivos de código de RS-2: `src/components/PageHero.astro`, `src/pages/sectores.astro`.
- Commit de trabajo de RS-2: `2f21ce6` (`fix: hide decorative sector hero number`).
- RS-3: mapeo, implementación y verificación completados. El markup y el script ya sincronizan `.active` con `aria-pressed`; el catálogo y `DESIGN.md` recomiendan CSS para transiciones simples. Se añadieron solo `background-color`, `color` y `border-color` durante 160 ms bajo movimiento permitido; el foco visible se conserva y no se anima el cambio `hidden`.
- Archivo de código de RS-3: `src/styles/global.css`.
- Commit de trabajo de RS-3: `654c424` (`feat: add subtle sector filter transitions`).
