# Refinar la página «Qué hacemos»

## Objetivo

Mejorar claridad, ritmo y cierre de la página de servicios con copy breve y un efecto de entrada discreto, conservando su identidad actual y dando el mismo peso visual a las cuatro filas.

## Problema y motivo

La página tiene una base editorial legible, pero el titular expresa capacidades de forma más concluyente que el texto, las áreas 02 y 03 se solapan y el CTA de la página repite el CTA global del pie. En tamaños intermedios la cuadrícula fija puede comprimir las descripciones. El usuario confirmó mantener las filas con igual peso.

## Alcance autorizado

- Alinear el titular y las descripciones con el alcance prudente existente, sin añadir capacidades, resultados, alianzas o proyectos.
- Diferenciar brevemente articulación de proyectos y esquemas de inversión/participación.
- Dejar un solo CTA de cierre: conservar el CTA global del pie y retirar el duplicado local de Servicios.
- Añadir un reveal sutil y único para las filas, con contenido visible como fallback, soporte de movimiento reducido y sin nueva librería.
- Ajustar la cuadrícula intermedia para preservar legibilidad, sin dar más peso a ninguna fila.

## Restricciones

- Mantener diseño, paleta, orden y peso visual uniforme de las cuatro filas.
- No agregar imágenes, diagramas, categorías nuevas ni contenido comercial no confirmado.
- No modificar el CTA global del pie ni otras páginas.
- Conservar cambios ajenos del árbol; no stagear en bloque.
- Seguir en `main`; sin push, PR ni despliegue.

## TDD y verificación

- **TDD:** OFF. Fuente: decisión explícita previa del usuario registrada en `odd/tasks/portada-powerful.md` (P10.4).
- **Verificación ordinaria:** `npm run check`, `npm run build`, revisión visual de escritorio/móvil y `git diff --check`. No se añadirán pruebas automatizadas para este ajuste de presentación.
- **Antecedente:** P10.4 registra fallos de `npm run check` y `npm run build` por imports de `motion` en `src/scripts/collaboration-motion.ts`; confirmar el estado actual antes de atribuir fallos a esta tarea.
- **Resultado:** `git diff --check` pasó. `npm run check` reportó tres errores preexistentes en `src/scripts/collaboration-motion.ts` (dos imports de `motion` no resueltos y un parámetro implícito `any`); `npm run build` se detuvo por el mismo import faltante. Ese archivo no forma parte de este cambio. La revisión visual de `http://localhost:4323/servicios.html` confirmó en escritorio las cuatro filas con el mismo tratamiento, el CTA compartido del pie y ningún error o aviso de consola. La vista móvil no se pudo capturar con el navegador disponible; sus reglas existentes se conservaron y la regla nueva cubre 761–1000 px.

## Entrega

- **Estimación:** menos de 150 líneas de autor.
- **Estrategia:** `ask-on-risk` (predeterminada); no se prevé superar el presupuesto de 400 líneas.
- **Espejo Engram:** pendiente; no hay herramientas de Engram disponibles en esta sesión. Conservar esta ficha como registro local.

## Tareas

- [x] **QH-1 — Refinar contenido, CTA, movimiento y responsive de Servicios.**
  - **Ruta:** delegada directa. El trigger de escritor aplica porque el ajuste coordina `src/pages/servicios.astro`, `src/content/es.ts` y `src/styles/global.css`; el mapeo previo de más de cuatro fuentes se completó en la revisión read-only.
  - **Aceptación:** las cuatro filas conservan idéntico tratamiento; el titular no sobrepromete; las áreas 02 y 03 se distinguen sin verborrea; hay un solo CTA al final de Servicios; el reveal es discreto, se ejecuta una vez y respeta `prefers-reduced-motion`; el contenido queda visible en el fallback; las filas siguen legibles entre 761 y 1000 px.
  - **Evidencia:** el hero y las cuatro descripciones mantienen un alcance prudente; 02 y 03 distinguen articulación de proyectos y esquemas de inversión/participación; permanece el CTA global del pie; el reveal usa IntersectionObserver y CSS, dura 320 ms, es de una sola entrada, deja el contenido visible sin JavaScript y desactiva el movimiento reducido; el ajuste de tablet solo afecta las filas de Servicios.
  - **Commit de implementación:** pendiente de crear.
  - **Próximo paso:** crear el commit local de la unidad y registrar su identidad aquí. Sin push, PR ni despliegue.
