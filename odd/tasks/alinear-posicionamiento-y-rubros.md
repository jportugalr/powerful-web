# Alinear posicionamiento nacional y rubros sectoriales

Repository-relative locator: odd/tasks/alinear-posicionamiento-y-rubros.md

## Objetivo y autorización

Actualizar el contenido público y los documentos rectores de POWERFUL para expresar su alcance nacional en Perú, sus clientes e inversionistas de Perú y otros mercados, la mayor presencia de su red en el norte y nororiente, y los rubros con experiencia de integrantes del equipo. El usuario pidió analizar cuidadosamente el contenido y preparar estos cambios el 2026-10-17; esta instrucción autoriza la edición local del contenido y documentación pertinente.

## Problema, alcance y restricciones

La web y sus documentos todavía presentan una firma enfocada en capital extranjero y oportunidades en Perú sin distinguir clientes globales, alcance nacional, preferencia no exclusiva de capital extranjero ni la mayor presencia en norte y nororiente. La dirección de diseño y el brief del hero todavía ubican Piura como punto de partida.

Actualizar copy compartido por Astro y el prototipo aprobado en web/; posicionamiento de producto; documentación editorial, estratégica y SEO; dirección visual nacional/regional; y marcar como supersedido el encargo fotográfico exclusivo de Piura. Mantener el catálogo de servicios y el proceso ya definidos. Conservar los cinco sectores de interés actuales y añadir agua/perforación de pozos, agroexportación y pesca como experiencia profesional de integrantes del equipo, sin atribuir automáticamente esa trayectoria a POWERFUL.

No implicar oficinas u operación global, cobertura fuera del Perú, inversión garantizada, proyectos ejecutados por POWERFUL en todos los rubros, alianzas vigentes, mandatos o resultados no documentados. No inventar departamentos específicos, personas, cargos, años ni casos. No generar imágenes nuevas como parte de este ajuste editorial; las imágenes existentes de los cinco sectores permanecen como recursos genéricos ya aprobados.

La página Sectores mantendrá las cinco tarjetas fotográficas existentes para ámbitos de interés. Los tres rubros con experiencia del equipo aparecerán en un bloque tipográfico independiente, para no atribuirles imágenes que puedan parecer proyectos de POWERFUL ni ampliar los filtros actuales sin activos visuales correspondientes.

## Criterios de aceptación

- El mensaje principal presenta a POWERFUL como iniciativa peruana, con proyectos e inversión en todo el país, clientes nacionales e internacionales y preferencia —no exclusividad— por capital extranjero.
- La mayor presencia de la red en norte y nororiente aparece como énfasis, sin convertirla en límite geográfico ni enumerar departamentos.
- Los tres rubros nuevos se presentan como experiencia del equipo; queda explícita la distinción frente a trayectoria corporativa de POWERFUL.
- Los cinco recursos visuales y filtros existentes permanecen; los rubros de experiencia personal se distinguen en un bloque separado, sin imágenes nuevas.
- Servicios, proceso, salvaguardas y comportamiento funcional existentes se conservan.
- El copy de Astro y web/ coincide en las páginas afectadas y los documentos canónicos reflejan la nueva dirección.
- Las referencias visuales que centraban el hero en Piura quedan marcadas como supersedidas o actualizadas.

## Configuración de trabajo

- Ruta: delegada. Activan el mapeo los cambios de comprensión en más de cuatro archivos y el escritor los cambios coordinados en más de dos archivos no triviales.
- TDD: desactivado; fuente: elección explícita del usuario para verificación funcional normal durante la implementación web de este proyecto. Runner: npm run check y npm run build; comprobación de contenido en las rutas generadas.
- RDD: desactivado/no gestionado; gentle-ai review mode status confirmó off por default el 2026-10-17.
- Git: continuar en main, sin crear ni cambiar ramas. No push ni PR. Estrategia de entrega: exception-ok, conforme a la elección explícita previa del usuario para este desarrollo.
- Esfuerzo previsto: aproximadamente 300 líneas añadidas/eliminadas, excluyendo artefactos generados.
- Espejo Engram: pendiente. No hay herramienta MCP de memoria disponible ni comando de memoria en la instalación local de gentle-ai; conservar el documento local y sincronizar cuando haya acceso.

## Tareas

- [x] C1 — Alinear posicionamiento, sectores y copy del sitio. Actualizar fuentes Astro, metadatos, prototipo, documentación estratégica/editorial/SEO y dirección visual; preservar servicios y proceso; marcar el brief fotográfico de Piura como supersedido. Ruta delegada: mapeo de más de cuatro archivos y escritor para cambios coordinados en más de dos archivos no triviales. Verificación funcional normal, TDD OFF por elección previa del usuario. `docker compose exec -T dev npm run check`: 0 errores, warnings o hints. `docker compose exec -T dev npm run build`: 9 páginas. Inspección del `/app/dist` generado confirma los textos de Nosotros y la nueva experiencia en Sectores. Playwright confirma que el H1 y la bajada de portada coinciden entre Astro y el prototipo; también confirma el H1 de Nosotros y el bloque de experiencia en ambos. Revisión visual móvil de Nosotros y de Sectores. `git diff --check`: exit 0; Git informa normalización CRLF en `PRODUCT.md`. El servidor estático del prototipo registra un 404 para `/favicon.ico`, fuera del alcance de esta tarea. Work-unit commit: `aa92972` (`feat: align POWERFUL national positioning and sectors`).

## Progreso y evidencia

- Exploración inicial: rama main; web/ y odd/tasks/adopt-prototype-typography.md ya estaban sin seguimiento antes de esta tarea y deben preservarse.
- Estado anterior confirmado: Astro usa `src/content/es.ts`; el prototipo `web/` duplica el copy en HTML estático. Las fuentes, documentos de producto/diseño, briefs y páginas públicas se actualizaron para el alcance nacional peruano, mayor presencia en el norte y nororiente y preferencia no exclusiva por capital extranjero. La página Sectores mantiene sus cinco tarjetas y filtros y añade un bloque tipográfico independiente para agua/perforación de pozos, agroexportación y pesca como experiencia profesional del equipo.
- Los servicios y el proceso existentes se conservaron. El H1 de Nosotros se alineó entre Astro y el prototipo. El expediente V0.1 sigue identificado como histórico; las decisiones y el contenido canónicos se actualizaron. Las referencias exclusivas a Piura quedan como antecedentes supersedidos.
- El directorio `web/` ya era nuevo y sin seguimiento antes de esta tarea; sus archivos siguen sin seguimiento para no incorporar de paso sus activos originales. `Powerful/` continúa excluido por `.gitignore`; sus documentos canónicos actualizados permanecen localmente disponibles. No se cambiaron reglas de ignore.
- Capturas de QA móvil: `output/playwright/nosotros-mobile.png` y `output/playwright/sectores-mobile-team-experience.png` (directorio ignorado).
- Espejo Engram pendiente: no hay herramienta MCP de memoria ni comando local disponible; esta ruta es la copia de recuperación actual.
- Cierre: cambio integrado localmente en `main`; no se creó rama ni se hizo push o PR. El espejo Engram sigue pendiente por falta de acceso a esa herramienta.
