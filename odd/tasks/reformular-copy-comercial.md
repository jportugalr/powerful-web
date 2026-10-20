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
- No editar la página `servicios.html`/su copy, los borradores legales de Privacidad y Condiciones ni los avisos operativos de WhatsApp.
- COPY-02: el usuario confirmó que Astro es la fuente canónica y autorizó expresamente eliminar `/web`. Preservar sin cambios fuera de `public/` las diez imágenes PNG originales que contiene `web/imagenes/` (nueve tienen referencias en metadatos y una no está referenciada), actualizar todas las rutas de metadata y retirar la carpeta completa.
- COPY-02: actualizar la documentación activa que presenta el prototipo o su audiencia anterior como vigente; mantener los documentos históricos identificados como antecedentes.
- COPY-03: completar la revisión del tono comercial en el contenido canónico público en español. Reforzar la experiencia y capacidad del equipo en `src/content/es.ts`, el metadato de Inicio en `src/pages/index.astro` y la etiqueta accesible correspondiente en `src/components/HomeContent.astro`.
- COPY-03: mantener intacto el copy de la página Qué hacemos/Servicios, según la instrucción previa del usuario. También conservar los borradores legales, avisos operativos y los límites comerciales que evitan prometer resultados o atribuir experiencia del equipo a POWERFUL.
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
- Pronóstico inicial de cambios escritos: aproximadamente 220 líneas; COPY-03 añade cerca de 35 líneas, para un total previsto de aproximadamente 255 líneas, sin contar PNG originales ni archivos generados; bajo el presupuesto de entrega.

## Tareas

- [x] COPY-01 (delegated): reformular el copy institucional, de audiencia y sectorial identificado en `src/content/es.ts`, y retirar del footer las etiquetas que llaman al sitio prototipo/demostración; validar el tono y los límites de alcance. Verificado: `docker compose exec -T dev npm run check` (31 archivos, 0 errores/advertencias), `docker compose exec -T dev npm run build` (9 rutas), `git diff --check`; commit `03e0dd0`.
- [x] COPY-02 (delegated): archivar las diez imágenes PNG originales en `source-assets/`, actualizar sus cuatro manifiestos/sidecars, README, DESIGN, PRODUCT, brief vigente y comentario de estilos; eliminar `web/`. En revisión final, corregir los conteos de sectores y el estado de tarjetas de Pesca/Agroindustria, y explicar el archivo de originales en `source-assets/README.md`. Ruta: delegated direct. Disparador: el mapeo abarcó más de cuatro archivos y el cambio toca múltiples fuentes/documentos; la exploración fue delegada antes de escribir. Verificado: 5 JSON válidos, 9 rutas de originales presentes y 11 hashes contrastados; 10 PNG archivados; `/web` ausente; `npm run check` (31 archivos, 0 diagnósticos), `npm run build` (9 rutas), `git diff --check`; revisión visual Playwright de Inicio, Nosotros y Sectores en escritorio y Sectores en móvil. Commit `1c1c5d8`.
- [ ] COPY-03 (delegated): completar el tono afirmativo en Inicio, Nosotros y Sectores. Cambiar expresiones que presentan al equipo como tanteando posibilidades; dejar intacto el copy de Servicios, los avisos operativos/legales y los límites comerciales legítimos. Ruta: delegated direct. Disparadores: el mapeo de todas las rutas públicas abarcó al menos cuatro archivos y la implementación afecta varios archivos no triviales, por lo que se delegó un escritor. Verificado: `docker compose exec -T dev npm run check` (31 archivos, 0 diagnósticos), `docker compose exec -T dev npm run build` (9 rutas), `git diff --check`, inspección visual local de Inicio, Nosotros y Sectores en escritorio, y Sectores e Inicio en móvil; HTML generado comprobado y copy de Servicios intacto. TDD deshabilitado; commit pendiente.

## Aceptación y comprobaciones

- Ninguna página pública califica el sitio como “prototipo” o “versión demostrativa” en su pie compartido.
- El copy de Sectores parte de la experiencia profesional y conocimiento práctico del equipo, y comunica apertura multisectorial.
- Inicio, Nosotros y Sectores comunican capacidad y experiencia con seguridad, sin expresiones de tanteo innecesario ni afirmaciones corporativas no respaldadas; la audiencia peruana e internacional queda incluida.
- El copy de Qué hacemos/Servicios, los textos legales, los avisos operativos y los límites legítimos de alcance permanecen intactos.
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
- Engram mirror: pendiente; no hay herramientas de memoria/Engram disponibles en esta sesión.
- COPY-03 se reabrió tras la revisión actual: la sustitución anterior eliminó la nota defensiva, pero dejó lenguaje de tanteo en Inicio, Nosotros y Sectores. El usuario autorizó continuar con la corrección, manteniendo intacto Servicios. El texto ya quedó corregido y verificado; falta registrar el commit de trabajo.
- El espejo de Engram permanece pendiente: esta sesión no ofrece herramientas de memoria/Engram. COPY-01 y COPY-02 siguen completos en `03e0dd0` y `1c1c5d8`. No hay despliegue.
