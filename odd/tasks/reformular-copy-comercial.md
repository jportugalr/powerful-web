# Reformular el copy comercial de POWERFUL

## Objetivo

Eliminar del contenido público las frases que presentan a POWERFUL como provisional, meramente interesado o excesivamente exploratorio. Comunicar la experiencia del equipo y la iniciativa comercial con confianza, sin atribuir a POWERFUL una trayectoria corporativa no documentada ni reducir al público peruano a un grupo secundario.

## Problema y motivo

La auditoría del contenido Astro encontró lenguaje de “prototipo” y “versión demostrativa” repetido en el pie de página, una llamada a la acción que reduce la experiencia sectorial a ámbitos de interés y copy que pone primero al público internacional. Estas frases contradicen el tono afirmativo acordado para Sectores y hacen que la oferta parezca menos definida.

## Alcance y restricciones

- Editar únicamente copy canónico de `src/content/es.ts` y `src/components/SiteFooter.astro`.
- Revisar el copy institucional, de audiencia y de Sectores señalado por la auditoría; conservar mensajes claros, inclusivos y de iniciativa.
- Mantener afirmaciones verificables sobre experiencia profesional del equipo; no atribuir proyectos o resultados a POWERFUL sin evidencia.
- Incluir a empresas, inversionistas y socios peruanos e internacionales sin crear públicos separados ni presentar a los peruanos como secundarios.
- No editar la página `servicios.html`/su copy, los borradores legales de Privacidad y Condiciones ni los avisos operativos de WhatsApp.
- La versión `/web` es un prototipo anterior. El usuario autorizó expresamente eliminarla. Preservar fuera de `public/` las nueve imágenes originales citadas por metadatos y actualizar sus referencias antes de quitar el prototipo.
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

## Tareas

- [x] COPY-01 (delegated): reformular el copy institucional, de audiencia y sectorial identificado en `src/content/es.ts`, y retirar del footer las etiquetas que llaman al sitio prototipo/demostración; validar el tono y los límites de alcance. Verificado: `docker compose exec -T dev npm run check` (31 archivos, 0 errores/advertencias), `docker compose exec -T dev npm run build` (9 rutas), `git diff --check`; commit pendiente de cierre.
- [ ] COPY-02 (delegated): mover las nueve imágenes originales referenciadas a `source-assets/`, actualizar los manifiestos/sidecars y `DESIGN.md`, y eliminar `web/`. Disparador: la tarea toca nueve imágenes y cinco archivos de metadatos/documentación; los usos se mapearon antes de escribir.

## Aceptación y comprobaciones

- Ninguna página pública califica el sitio como “prototipo” o “versión demostrativa” en su pie compartido.
- El copy de Sectores parte de la experiencia profesional y conocimiento práctico del equipo, y comunica apertura multisectorial.
- El público peruano e internacional queda incluido sin jerarquizar ni separar audiencias.
- Se preservan los borradores y advertencias legales, el aviso operativo de WhatsApp y los límites comerciales legítimos.
- Astro es la fuente canónica de todas las páginas, `web/` deja de existir y los originales se conservan fuera del sitio publicado con metadatos coherentes.
- `npm run check`, `npm run build`, `git diff --check` y revisión del diff pasan.
- Revisar localmente las páginas afectadas; no afirmar publicación ni despliegue.

## Progreso y siguiente paso

- Auditoría canónica completada; candidatos, excepciones legales y operativas, y preferencias de audiencia comunicados por el agente de exploración.
- COPY-01 implementado y verificado. El copy conserva intacta la oferta de Servicios; se revisó que los cambios incluyeran al público peruano e internacional y mantuvieran límites comerciales verificables.
- El usuario confirmó que Astro es la fuente canónica y autorizó eliminar `/web`. Ruta verificada dentro del workspace; se mapearon nueve originales citados por `public/images/sectors/manifest.json`, `public/images/sectors/pesca-agroindustria.visuals.json`, sidecars de conexiones/tecnología y `DESIGN.md`. Siete no tienen copia PNG canónica fuera del prototipo, así que se preservarán en `source-assets/` antes de eliminarlo.
- Engram mirror: pendiente; no hay herramientas de memoria/Engram disponibles en esta sesión.
- Siguiente paso: registrar el commit de COPY-01 y después resolver las referencias de las imágenes, completar COPY-02, verificar el sitio canónico y registrar su commit de trabajo.
