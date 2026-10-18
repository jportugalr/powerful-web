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

## Autorización y ruta

- Alcance autorizado directamente por el usuario: implementar una mejora visual de Sectores y abrir la vista previa local. El usuario corrigió la dirección: revertir la nueva composición y conservar la anterior; el nuevo foco son efectos y un posible ajuste conciso de textos.
- Ruta de RS-1: **delegated direct**. Evidencia: el mapeo inspeccionó más de cuatro archivos y disparó el trigger de exploración; el escritor terminó cambiando solo `src/components/SectorCard.astro` y `src/styles/global.css`. El copy no requirió cambios.
- Cambios de autoría observados: 36 adiciones y 1 eliminación (sin generados). Estrategia de entrega: `ask-on-risk` (default); el cambio queda bajo el umbral aproximado de 400, así que no falta estrategia de cadena.

## Verificación

- TDD: desactivado; fuente: decisión explícita registrada en `odd/tasks/portada-powerful.md` (2026-10-17), aplicable al trabajo de la web; verificación funcional ordinaria.
- Runner: `npm run check` y `npm run build`.
- `npm run check`: pasó, 32 archivos revisados, 0 diagnósticos.
- `npm run build`: pasó y generó 9 rutas.
- Revisión visual en la vista previa local (viewport aproximado de 863 px): composición anterior, filtros y tarjetas presentes; el estado de foco se ve al navegar con teclado. El filtro Pesca muestra su tarjeta y «Todos» restaura la lista. Se revisó la regla móvil existente de una columna y que los cambios no alteran el layout; no se capturó un viewport de teléfono.
- `prefers-reduced-motion`: las transformaciones se anulan en la regla `reduce`; no se emuló esa preferencia en el navegador.
- `git diff --check`: pasó. Revisar que solo se incluyan los archivos de RS-1 en el commit.
- `impeccable detect --json`: señaló dos bordes laterales en las secciones de Contacto/Legal y la fuente base `Inter`. La inspección del diff confirma que son reglas preexistentes, fuera de los selectores modificados; quedan fuera de RS-1.
- RDD: `gentle-ai review mode status` confirmó `off (decided by default)` el 2026-10-18; no se inicia revisión RDD.

## Progreso y siguiente paso

- Estado: implementación revisada y preview abierta en `http://localhost:4323/sectores.html`. Se conservaron hero, filtros, copy y fotos originales; se añadieron estados de hover/foco a las tarjetas, sin nuevas dependencias ni recursos.
- Archivos de código incluidos: `src/components/SectorCard.astro`, `src/styles/global.css`. No se modificaron `src/pages/sectores.astro` ni `src/content/es.ts`.
- Commit de trabajo: pendiente; se registrará después de crear el commit.
- Mirror Engram: pendiente; no hay herramientas Engram/mem_* ni recursos configurados en este runtime. Conservar este documento y sincronizar el documento completo cuando el servicio esté disponible.
- Siguiente paso: crear el commit con los dos archivos de código y este documento; después registrar su identidad aquí. La captura visual de teléfono y la emulación de movimiento reducido quedan anotadas como no realizadas.
