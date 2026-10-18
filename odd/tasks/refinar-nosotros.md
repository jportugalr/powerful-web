# Refinar la página «Nosotros»

## Objetivo

Hacer la página más clara y dinámica con copy conciso y una entrada discreta, conservando su identidad editorial y el mismo peso visual para los tres valores.

## Problema y motivo

El hero, el perfil y «Nuestro enfoque» repiten público y alcance. El cierre local repite el CTA global del pie. La sección de valores tiene tres elementos equivalentes y debe conservar esa igualdad. El hero conserva el número decorativo 02 mientras las páginas contiguas ya ocultan 03 y 04.

## Alcance autorizado

- Reducir repeticiones entre hero, perfil y «Nuestro enfoque», sin ampliar capacidades ni cobertura.
- Mantener los tres valores, su orden y el mismo tratamiento visual.
- Mantener la distinción entre experiencia profesional del equipo y trayectoria corporativa verificable, con copy más directo.
- Quitar el CTA local duplicado y conservar el CTA compartido del footer.
- Ocultar el 02 decorativo del hero siguiendo el criterio aplicado a 03 y 04.
- Añadir una única entrada sutil para los tres valores al entrar en viewport, sin escalonar jerarquía; contenido visible como fallback y respeto a `prefers-reduced-motion`.
- Trabajar solo sobre la fuente Astro en `src/`; no modificar el prototipo `web/nosotros.html`.

## Restricciones

- Conservar paleta, composición editorial y orden de secciones.
- No añadir fotos, mapas, diagramas, imágenes de equipo/proyectos ni librerías.
- No atribuir experiencia o resultados corporativos que no estén documentados.
- No alterar el footer global ni otras páginas.
- Preservar cambios ajenos y permanecer en `main`; sin push, PR ni despliegue.

## TDD y verificación

- **TDD:** OFF, según decisión explícita previa del usuario registrada en `odd/tasks/portada-powerful.md` (P10.4).
- **Runner:** `docker compose exec -T dev npm run check` y `docker compose exec -T dev npm run build`; revisión visual del preview y `git diff --check`. No añadir pruebas automatizadas para este ajuste visual.
- **Antecedente:** la verificación de la tarea previa encontró errores de imports `motion` en `src/scripts/collaboration-motion.ts`; volver a ejecutar y reportar sin atribuir fallos ajenos a esta página.
- **RDD:** desactivado por defecto; estrategia local ordinaria, sin evaluación/revisión RDD.

## Entrega

- **Estimación:** menos de 180 líneas de autor; el commit de NOS-1 contiene 128 líneas de autor (102 añadidas, 26 eliminadas).
- **Estrategia:** `ask-on-risk` (predeterminada); el trabajo no debería superar el presupuesto de 400 líneas.
- **Espejo Engram:** pendiente; no hay herramientas Engram disponibles en esta sesión.

## Tareas

- [x] **NOS-1 — Refinar contenido, número, cierre y movimiento de Nosotros.**
  - **Ruta:** delegada directa. El trigger de escritor aplica porque el cambio coordina la página, el contenido y los estilos; la exploración mapeó más de cuatro fuentes relevantes.
  - **Aceptación:** el hero no muestra 02; el texto distingue hero, perfil y enfoque sin repetir alcance; los tres valores siguen visualmente equivalentes; se conserva la transparencia sobre trayectoria corporativa; existe un único CTA de cierre en el footer; la entrada es sincronizada y sutil, con fallback visible y movimiento reducido; no se altera `web/nosotros.html`.
  - **Resultado:** oculté el 02 decorativo, acorté el hero/perfil/enfoque para separar sus mensajes, mantuve la declaración de transparencia, retiré el CTA local duplicado y añadí un reveal único para las tres tarjetas de valores. No se añadieron imágenes ni dependencias.
  - **Verificación:** `git diff --check` pasó. Preview revisado a 1440×1000 y 390×844; las tres tarjetas conservan el mismo peso visual, el hero no muestra 02, el CTA de cierre local ya no duplica el del pie, y el documento no desborda el ancho móvil (390 px de viewport, 375 px de documento). Consola Playwright: 0 errores y 0 advertencias. Con `prefers-reduced-motion: reduce`, los atributos de reveal no se habilitan y las tres tarjetas siguen presentes.
  - **Checks fallidos ajenos a NOS-1:** `docker compose exec -T dev npm run check` informa tres errores en `src/scripts/collaboration-motion.ts` (tipado implícito y módulos `motion`/`motion/mini` sin resolver); `docker compose exec -T dev npm run build` falla al resolver `motion/mini` desde ese mismo script. No modifiqué ese archivo. El detector Impeccable reportó tres avisos en `global.css` (bordes laterales dorados en líneas 89 y 91, fuente Inter en línea 6); no corresponden al cambio de Nosotros.
  - **Commit:** `a7e2ad8 feat(nosotros): refine copy and add subtle reveal` en `main`.
  - **Próximo paso:** conservar el espejo Engram pendiente por falta de herramienta disponible; no queda implementación pendiente para NOS-1.
