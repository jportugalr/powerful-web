# Servicio de tecnología, automatización e IA

## Objetivo

Presentar la capacidad de tecnología dentro de la página canónica de Sectores de POWERFUL, como un ámbito tecnológico transversal acompañado por la imagen aportada por el usuario. Mantener la página Servicios con sus cuatro líneas originales y atender el contexto empresarial peruano sin crear una audiencia separada.

## Problema y motivo

La primera implementación añadió tecnología como quinto servicio en Astro (T1, commit `20ba935`). El usuario aclaró que desea ubicar la línea en Sectores, retirar la fila tecnológica de Servicios y conservar las cuatro líneas existentes el 2026-10-20. La imagen original estaba en el prototipo sin seguimiento y ya se incorporó a `public/images/`.

## Alcance y restricciones

- Retirar solamente la quinta línea tecnológica de Servicios y restaurar la metadata previa de esa página; conservar las otras cuatro líneas sin cambios.
- Añadir en `src/content/es.ts` un bloque editorial de ámbito tecnológico a Sectores, renderizado dentro de la página existente.
- Explicar en términos concretos software de gestión a medida, integración de sistemas, automatización de procesos e IA aplicada; presentar esas capacidades como partes de una solución empresarial.
- Referir con moderación el contexto de las empresas que operan en el Perú, conservando la audiencia general de POWERFUL.
- Reutilizar el PNG, WebP y metadata ya publicados, añadiendo la imagen al bloque con alt y tratamiento responsivo.
- Mantener intactos los siete sectores industriales, sus filtros y sus tarjetas; no presentar tecnología como un octavo sector de inversión ni abrir otro recorrido de audiencia.
- Actualizar `CONTENIDO_WEB_PARA_REVISION.md`: devolver Servicios a cuatro entradas y ubicar el bloque tecnológico en Sectores. Actualizar `PRODUCT.md` solo si hace falta aclarar que es una capacidad transversal.
- No añadir casos, clientes, cifras, certificaciones, garantías o trayectoria corporativa no verificados. No alterar marcas aprobadas ni el original aportado.
- Mantener intactos el prototipo `web/` y su estado sin seguimiento, excepto por leer la imagen original. No cambiar la portada ni sus rutas de audiencia.

## Criterios de aceptación

- Servicios conserva sus cuatro líneas originales y sus metadatos previos, sin la fila tecnológica.
- Sectores presenta un bloque de ámbito tecnológico que nombra desarrollo de software, automatización e IA aplicada, con un guiño moderado al contexto peruano.
- La imagen aparece en el bloque con texto alternativo descriptivo y composición legible en móvil y escritorio.
- Los siete filtros y sus tarjetas siguen intactos; el bloque tecnológico permanece visible al filtrar sectores.
- El sitio compila y el contenido de revisión refleja ambas páginas canónicas.
- `PRODUCT.md` refleja la oferta autorizada y conserva las cautelas de evidencia actuales.
- Ningún archivo ajeno ya modificado o sin seguimiento se incorpora accidentalmente.

## Tarea

- [x] T1 — Integrar el servicio y su imagen en Servicios; actualizar el contenido editorial y verificar el sitio.
- [x] T2 — Reubicar la capacidad tecnológica en Sectores y restaurar Servicios a cuatro líneas tras la aclaración del usuario.

## Autorización, ruta y configuración

- Autorización: implementación explícita del usuario en la conversación actual.
- Ruta: delegated direct. Evidencia: la implementación toca más de dos archivos no triviales; el mapeo de fuentes canónicas, componente, estilos, imagen y contacto requiere cuatro o más archivos. Un agente realizó el mapeo de solo lectura y el escritor delegado recibió esta ficha antes de editar; el padre revisó el diff y la evidencia.
- TDD: desactivado por decisión explícita registrada en `README.md`; runner disponible para verificación funcional: `npm run check` y `npm run build`.
- RDD: `disabled/unmanaged` según `README.md`; no se ejecutan revisiones nativas.
- Forecast T2: aproximadamente 180 líneas de cambios versionados; los recursos binarios ya existentes no se vuelven a generar.
- Entrega: `ask-on-risk` (estrategia por defecto); no se prevé exceder el presupuesto aproximado de 400 líneas.
- Espejo Engram: pendiente; no hay herramientas de memoria/Engram disponibles en esta sesión.

## Progreso y evidencia

- Exploración: fuente canónica `src/content/es.ts`, renderer `src/pages/servicios.astro`, componente `src/components/ServiceDetailRow.astro`, estilos `src/styles/global.css`; la lista actual tiene cuatro servicios y las filas no usan imágenes.
- Imagen localizada: `web/imagenes/Desarrollador analizando automatización inteligente.png`, PNG de 1448 × 1086, sin seguimiento preexistente.
- Estado previo a T2: rama `main`, tres commits por delante de `origin/main`; hay cambios y archivos sin seguimiento ajenos a esta tarea. Preservarlos.
- Implementación: quinta línea en `src/content/es.ts`; `ServiceDetailRow.astro` acepta medios opcionales con WebP y respaldo PNG, dimensiones, lazy loading y alt; `global.css` la adapta a escritorio y móvil. El PNG publicado coincide byte por byte con el original. El WebP derivado mide 121,088 bytes frente a 1,908,104 del PNG. El sidecar registra origen, prompt, clasificación conceptual, alt y licencia no verificada.
- Documentación: actualizados `PRODUCT.md` y la sección Servicios de `CONTENIDO_WEB_PARA_REVISION.md`. La ficha de revisión era un archivo sin seguimiento antes de T1; conservarla fuera del commit evita incorporar el documento entero al historial.
- Verificación: `docker compose exec -T dev npm run check` pasó con 30 archivos y cero errores/avisos; `docker compose exec -T dev npm run build` generó nueve rutas; `git diff --check` pasó. La página local cargó la imagen WebP sin errores de consola y sin overflow en 1440, 800 y 390 px; dimensiones renderizadas 376×282, 404×303 y 287×215.
- Limitación: el usuario aportó la imagen para su uso local; no están verificadas la herramienta generadora ni una licencia externa.
- Commit de trabajo: `20ba9352e2b4926abeab3dd2ab64b5792570db65` (`feat(servicios): add technology automation and AI offering`). Solo se incluyeron los siete archivos propios de la implementación; el prototipo sin seguimiento y el documento de revisión preexistente quedaron fuera del commit.
- RDD: `disabled/unmanaged`; no se ejecutó review nativo.
- T2 reabre la ubicación editorial porque el usuario eligió explícitamente “Mover la línea a Sectores”. El mapeo de solo lectura recomienda un bloque tecnológico aparte de las siete tarjetas y filtros para no presentarlo como un sector de inversión.
- T2 implementado: Servicios vuelve a cuatro filas y restaura la descripción SEO original. Sectores incorpora `TechnologyCapability.astro` después del grid y disclaimer; la capacidad incluye software de gestión a medida, integración, automatización e IA aplicada con atención al contexto empresarial peruano. Reutiliza la imagen publicada con WebP, respaldo PNG, alt descriptivo, dimensiones y carga diferida; estilos apilan texto e imagen por debajo de 760 px. No cambian las siete tarjetas, filtros ni su manifiesto. `PRODUCT.md` no requirió cambios porque conserva la oferta técnica autorizada y no añade una audiencia nueva.
- Documentación de revisión: `CONTENIDO_WEB_PARA_REVISION.md` devuelve Servicios a cuatro entradas y recoge el bloque en Sectores; permanece sin seguimiento y excluido del staging por ser un documento preexistente.
- Verificación T2: `docker compose exec -T dev npm run check` pasó con 31 archivos y cero diagnósticos; `docker compose exec -T dev npm run build` generó nueve rutas; `git diff --check` pasó. El HTML generado confirma cuatro filas de Servicios, descripción original, ocho filtros (incluido “Todos”), siete tarjetas y bloque tecnológico fuera del grid; PNG y WebP responden HTTP 200. Revisión visual en Chrome local a escritorio: imagen cargada, proporción 4:3 y lectura equilibrada; al activar “Minería”, las otras tarjetas se ocultan y el bloque tecnológico sigue visible. No se hizo captura móvil ni prueba de viewport estrecho porque la herramienta de navegador disponible no ofrece control de viewport; la regla CSS móvil apila la composición.
- RDD: `disabled/unmanaged`; no se ejecutó review nativo para T2.

## Siguiente paso

Cerrar T2 con un commit local de los archivos canónicos y la ficha; excluir el documento de revisión sin seguimiento, el prototipo y los cambios ajenos. Registrar el commit como evidencia y sincronizar el espejo Engram cuando haya una herramienta disponible.
