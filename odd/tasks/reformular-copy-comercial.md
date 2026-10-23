# Reforzar el copy comercial y canonizar el sitio Astro

## Objetivo

Eliminar del contenido público las frases que presentan a POWERFUL como provisional, meramente interesado o excesivamente exploratorio. Comunicar la experiencia del equipo y la iniciativa comercial con confianza, sin atribuir a POWERFUL una trayectoria corporativa no documentada ni reducir al público peruano a un grupo secundario. Dejar claro en el repositorio que Astro es la fuente canónica y retirar el prototipo estático anterior sin perder sus originales de imagen.

## Problema y motivo

La auditoría del contenido Astro encontró lenguaje de “prototipo” y “versión demostrativa” repetido en el pie de página, una llamada a la acción que reduce la experiencia sectorial a ámbitos de interés y copy que pone primero al público internacional. Además, README y DESIGN seguían presentando `web/` como fuente vigente, pese a que el sitio de trabajo es Astro.

## Alcance y restricciones

- COPY-01: editar únicamente el copy auditado de `src/content/es.ts` y `src/components/SiteFooter.astro`.
- Revisar el copy institucional, de audiencia y de Sectores señalado por la auditoría; conservar mensajes claros, inclusivos y de iniciativa.
- Mantener afirmaciones verificables sobre experiencia profesional del equipo; no atribuir proyectos o resultados a POWERFUL sin evidencia.
- Incluir a empresas, inversionistas y socios peruanos e internacionales sin crear públicos separados ni presentar a los peruanos como secundarios.
- Desde COPY-04, el usuario autoriza expresamente actualizar el copy pendiente de todas las páginas públicas, incluida Qué hacemos/Servicios; esto sustituye la restricción anterior de no tocar esa página. Mantener intactos los borradores legales y avisos operativos de WhatsApp.
- COPY-02: el usuario confirmó que Astro es la fuente canónica y autorizó expresamente eliminar `/web`. Preservar sin cambios fuera de `public/` las diez imágenes PNG originales que contiene `web/imagenes/` (nueve tienen referencias en metadatos y una no está referenciada), actualizar todas las rutas de metadata y retirar la carpeta completa.
- COPY-02: actualizar la documentación activa que presenta el prototipo o su audiencia anterior como vigente; mantener los documentos históricos identificados como antecedentes.
- COPY-03: completar la revisión del tono comercial en el contenido canónico público en español. Reforzar la experiencia y capacidad del equipo en `src/content/es.ts`, el metadato de Inicio en `src/pages/index.astro` y la etiqueta accesible correspondiente en `src/components/HomeContent.astro`.
- COPY-03: mantener intacto el copy de la página Qué hacemos/Servicios, según la instrucción previa del usuario. También conservar los borradores legales, avisos operativos y los límites comerciales que evitan prometer resultados o atribuir experiencia del equipo a POWERFUL.
- COPY-04: actualizar todas las expresiones comerciales pendientes en Qué hacemos/Servicios, Nosotros, Sectores y Contacto, incluida metadata. Usar verbos de articulación y acción sin crear promesas, y mantener los límites de alcance y los acuerdos entre las partes.
- COPY-04: preservar la estructura canónica en Astro y las salvaguardas de privacidad, WhatsApp, borradores legales y resultados que dependen de las partes; no publicar ni desplegar.
- Conservar los límites de alcance que describen acuerdos, evaluación técnica, contractual, normativa y disponibilidad real de cada iniciativa.
- No publicar ni desplegar.

## Autorización

El usuario pidió verificar frases con un tono que rebaja la presentación de POWERFUL y señaló que deben reemplazarse con urgencia. Confirmó que el texto afirmativo sobre la experiencia del equipo es adecuado y cuestionó la nota redundante de atribución, ya eliminada en el commit `04823b5`.

## Modo y ruta

- TDD: deshabilitado por decisión explícita registrada en `README.md`.
- Runner funcional: `docker compose exec -T dev npm run check` y `docker compose exec -T dev npm run build`.
- Ruta: delegated direct. Evidencia: el copy canónico está repartido entre `src/content/es.ts` y el pie compartido en `src/components/SiteFooter.astro`; además, la auditoría previa requirió mapear al menos cuatro archivos.
- RDD: `disabled/unmanaged` según `README.md`; no ejecutar assessment ni review.
- Estrategia de entrega: `ask-on-risk`; cambio previsto menor a 400 líneas.
- Pronóstico inicial de cambios escritos: aproximadamente 220 líneas; COPY-03 añadió cerca de 35 líneas y COPY-04 añade cerca de 40, para un total previsto de aproximadamente 295 líneas, sin contar PNG originales ni archivos generados; bajo el presupuesto de entrega.

## Tareas

- [x] COPY-01 (delegated): reformular el copy institucional, de audiencia y sectorial identificado en `src/content/es.ts`, y retirar del footer las etiquetas que llaman al sitio prototipo/demostración; validar el tono y los límites de alcance. Verificado: `docker compose exec -T dev npm run check` (31 archivos, 0 errores/advertencias), `docker compose exec -T dev npm run build` (9 rutas), `git diff --check`; commit `03e0dd0`.
- [x] COPY-02 (delegated): archivar las diez imágenes PNG originales en `source-assets/`, actualizar sus cuatro manifiestos/sidecars, README, DESIGN, PRODUCT, brief vigente y comentario de estilos; eliminar `web/`. En revisión final, corregir los conteos de sectores y el estado de tarjetas de Pesca/Agroindustria, y explicar el archivo de originales en `source-assets/README.md`. Ruta: delegated direct. Disparador: el mapeo abarcó más de cuatro archivos y el cambio toca múltiples fuentes/documentos; la exploración fue delegada antes de escribir. Verificado: 5 JSON válidos, 9 rutas de originales presentes y 11 hashes contrastados; 10 PNG archivados; `/web` ausente; `npm run check` (31 archivos, 0 diagnósticos), `npm run build` (9 rutas), `git diff --check`; revisión visual Playwright de Inicio, Nosotros y Sectores en escritorio y Sectores en móvil. Commit `1c1c5d8`.
- [x] COPY-03 (delegated): completar el tono afirmativo en Inicio, Nosotros y Sectores. Cambiar expresiones que presentan al equipo como tanteando posibilidades; dejar intacto el copy de Servicios, los avisos operativos/legales y los límites comerciales legítimos. Ruta: delegated direct. Disparadores: el mapeo de todas las rutas públicas abarcó al menos cuatro archivos y la implementación afecta varios archivos no triviales, por lo que se delegó un escritor. Verificado: `docker compose exec -T dev npm run check` (31 archivos, 0 diagnósticos), `docker compose exec -T dev npm run build` (9 rutas), `git diff --check`, inspección visual local de Inicio, Nosotros y Sectores en escritorio, y Sectores e Inicio en móvil; HTML generado comprobado y copy de Servicios intacto. TDD deshabilitado. Commit `9872226`.
- [x] COPY-04 (delegated direct): completar el tono afirmativo en Qué hacemos/Servicios y las frases pendientes de Nosotros, Sectores y Contacto. El mapeo delegado abarcó todas las rutas antes de decidir; la implementación se limita al contenido central de `src/content/es.ts`. Conservar acuerdos, facultades, responsabilidades, requisitos por caso, límites de resultados, privacidad, WhatsApp y borradores legales. Verificado: `docker compose exec -T dev npm run check` (31 archivos, 0 diagnósticos), `docker compose exec -T dev npm run build` (9 rutas), comprobación del HTML generado con las frases nuevas presentes y las expresiones previas ausentes, búsqueda final del tono pendiente en el contenido canónico, `git diff --check`, y revisión visual local de Qué hacemos/Servicios (escritorio y móvil), Contacto (móvil), Nosotros (escritorio) y Sectores (escritorio). TDD deshabilitado. Commit `07a241c`.
- [ ] COPY-05 (delegated direct): alinear el mensaje de Inicio y el pie con el rol de POWERFUL como originador; usar «impulsar» en el mensaje principal y reducir las repeticiones entre hero, capacidades, bloque de alcance y CTA compartida. Mantener el CTA propio de Inicio «¿Qué proyecto o negocio quieres impulsar?» y distinguir el encabezado del pie.
  - **Auditoría de páginas:** mapeadas las nueve rutas públicas —Inicio, Nosotros, Servicios, Sectores, Cómo trabajamos, Contacto, Privacidad, Términos y 404— y sus fuentes Astro/componentes. Todas tienen contenido; Privacidad y Términos se identifican como borradores pendientes de aprobación legal. La búsqueda no encontró el término comercial bloqueado en `src/`, `public/` ni el `dist/` generado por el contenedor. No se identificó otra página vacía.
  - **Alcance:** actualizar el mensaje y los metadatos de Inicio, diferenciar capacidades y contexto territorial, cambiar el CTA compartido del pie y alinear su descriptor. La auditoría también encontró tres usos comerciales de «estructurar» en Nosotros y Sectores; se alinearon con «originar/impulsar» o se retiraron para evitar repetición. Se conserva el sustantivo «estructura» en el aviso legal.
  - **Ruta:** delegada directa. `homepage_message` mapeó las nueve rutas; el escritor delegado modificó tres archivos no triviales (`src/content/es.ts`, `src/pages/index.astro`, `src/components/SiteFooter.astro`). Tras revisar el sitio, el agente principal alineó en el mismo archivo las tres frases comerciales restantes. No se selecciona SDD.
  - **TDD y runner:** TDD OFF, según decisión explícita ya registrada en `README.md`; `docker compose exec -T dev npm run check` pasó (31 archivos, cero diagnósticos), `docker compose exec -T dev npm run build` pasó (9 rutas), búsqueda del término bloqueado sin resultados y `git diff --check` pasó. El build se escribe en `/app/dist` dentro del contenedor; el `dist/` local no está montado y no sirve como resultado vigente.
  - **Criterios de aceptación observados:** el hero conserva «Conectamos capital, proyectos y negocios» y expresa que POWERFUL origina e impulsa operaciones; las capacidades nombran representación, proyectos, inversión y alianzas sin repetir la promesa del hero; el bloque de alcance aporta contexto territorial; el CTA de Inicio y el del pie son distintos; el descriptor refleja la actividad. Las nueve rutas contienen contenido y Privacidad/Términos permanecen como borradores. En navegador, Inicio y pie se revisaron en escritorio y móvil; títulos y llamadas caben sin desbordes visibles.
  - **Entrega:** en `main`, sin push ni despliegue. Pronóstico menor a 400 líneas de autor; estrategia vigente `ask-on-risk`, sin cadena por defecto. Implementación y verificaciones completas; commit de trabajo pendiente.

## Aceptación y comprobaciones

- Ninguna página pública califica el sitio como “prototipo” o “versión demostrativa” en su pie compartido.
- El copy de Sectores parte de la experiencia profesional y conocimiento práctico del equipo, y comunica apertura multisectorial.
- Inicio, Nosotros y Sectores comunican capacidad y experiencia con seguridad, sin expresiones de tanteo innecesario ni afirmaciones corporativas no respaldadas; la audiencia peruana e internacional queda incluida.
- El copy de Qué hacemos/Servicios, Nosotros, Sectores y Contacto expresa capacidades con seguridad; mantiene límites comerciales legítimos y no atribuye al equipo resultados corporativos no documentados. La búsqueda de seguimiento no encontró más formulaciones de tanteo; las menciones restantes son invitaciones, navegación, textos de proceso o plantillas operativas para el visitante.
- Los textos legales, avisos operativos, instrucciones de privacidad/WhatsApp y los resultados que dependen de las partes permanecen intactos.
- El público peruano e internacional queda incluido sin jerarquizar ni separar audiencias.
- Se preservan los borradores y advertencias legales, el aviso operativo de WhatsApp y los límites comerciales legítimos.
- Astro es la fuente canónica de todas las páginas, `web/` deja de existir y los originales se conservan fuera del sitio publicado con metadatos coherentes.
- No quedan documentos activos que presenten el prototipo antiguo como la fuente vigente; las referencias históricas quedan señaladas como antecedentes.
- `npm run check`, `npm run build`, `git diff --check` y revisión del diff pasan.
- Revisar localmente las páginas afectadas; no afirmar publicación ni despliegue.

## Progreso y siguiente paso

- Auditoría canónica completada; candidatos, excepciones legales y operativas, y preferencias de audiencia comunicados por el agente de exploración.
- COPY-01 implementado y verificado en commit `03e0dd0`; `docker compose exec -T dev npm run check` pasó (31 archivos, cero errores/advertencias), `npm run build` generó 9 rutas y `git diff --check` pasó. El copy conserva intacta la oferta de Servicios.
- COPY-02: el usuario confirmó que Astro es la fuente canónica y autorizó eliminar `/web`. Antes de retirarla, se comprobó en WSL el directorio real, la raíz y la ruta exacta. Los diez PNG se archivaron sin alteración; nueve tienen referencias en metadata y el restante queda identificado como original no publicado en `source-assets/README.md`. Las dos copias de marca dentro del prototipo eran idénticas por SHA256 a los assets aprobados de `public/`; se movió el manifiesto de marca y ahora apunta a esos assets canónicos.
- La revisión de COPY-02 corrigió los conteos de sectores y las descripciones vigentes en DESIGN, PRODUCT y el brief. Playwright mostró Inicio, Nosotros y Sectores en escritorio, más Sectores en móvil, sin problemas visuales visibles.
- Registro histórico: las sesiones anteriores dejaron el mirror de Engram pendiente porque esas sesiones no tenían las herramientas disponibles. En esta reanudación se consultó el mirror completo de COPY-05 (observación 163); falta sincronizar la versión final al cerrar el commit.
- COPY-03 se reabrió tras la revisión actual: la sustitución anterior eliminó la nota defensiva, pero dejó lenguaje de tanteo en Inicio, Nosotros y Sectores. El usuario autorizó continuar con la corrección, manteniendo intacto Servicios. El texto quedó corregido y verificado en `9872226`.
- El usuario amplió el alcance después de COPY-03: actualizar también todas las páginas pendientes, incluida Qué hacemos/Servicios. La revisión de seguimiento localizó frases exploratorias y condicionales en Servicios, Nosotros, Sectores y Contacto; las salvaguardas legales y operativas se conservaron.
- COPY-04 está implementado y verificado en `src/content/es.ts`. El copy de Servicios refuerza la articulación empresarial; Nosotros comunica cómo se define la participación; Sectores conecta la trayectoria del equipo con su capacidad de articulación; Contacto presenta de forma directa las iniciativas y públicos atendidos. Se preservaron los mensajes operativos de WhatsApp, los borradores legales y los límites comerciales. `npm run check`, `npm run build`, validación del HTML, búsqueda de seguimiento, revisión visual local y `git diff --check` pasaron. Commit de trabajo: `07a241c`. En el cierre de COPY-04, el mirror seguía pendiente por indisponibilidad de herramientas.
- COPY-05 actualizado y verificado en contenido Astro: hero y metadatos, capacidades, alcance, CTA y descriptor del pie; además, las tres frases comerciales restantes en Nosotros y Sectores se alinearon al lenguaje aprobado. `npm run check` pasó sin diagnósticos, `npm run build` generó 9 rutas dentro del contenedor, la búsqueda del término bloqueado no devolvió coincidencias, y Playwright confirmó el hero y el pie en escritorio/móvil. El `dist/` local quedó sin actualizar porque el volumen del contenedor solo monta `src/`, `public/` y la configuración; la salida válida está en `/app/dist`. Commit de trabajo pendiente.
- COPY-01 y COPY-02 siguen completos en `03e0dd0` y `1c1c5d8`. No hay despliegue.
