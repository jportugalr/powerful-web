# Diagrama de colaboración — Cómo trabajamos

Repository-relative locator: `odd/tasks/diagrama-como-trabajamos.md`

## Objetivo y autorización

Mejorar la página `/como-trabajamos.html` con una composición gráfica propia que explique sus cinco principios y movimiento con significado. El usuario autorizó empezar la implementación el 2026-10-18 y después rechazó el diagrama radial por falta de consistencia, significado e impacto. Tras analizar alternativas y herramientas, autorizó probar Motion Mini + `inView` con un nivel adicional de expresión visual.

## Problema, alcance y restricciones

La página presenta los cinco principios como filas de texto y repite el motivo decorativo de anillos utilizado por otros encabezados interiores. Se busca más impacto y dinamismo sin añadir fotografías genéricas ni afirmaciones no respaldadas.

Alcance vigente CW-2: página, componente gráfico, script de interacción y dependencia `motion` con lockfile. Sustituir el diagrama radial por un marco de colaboración con cinco campos explícitos y una lectura editorial acompañada por la pieza gráfica. Conservar el copy comercial y representar principios, no fases. La pieza debe permanecer legible sin JavaScript y con movimiento reducido. No modificar el prototipo `web/`, otras páginas, datos, favicon ni realizar publicación o acciones remotas. Los estilos nuevos se aíslan en el componente para preservar los cambios concurrentes en `global.css`, `es.ts` y la portada.

## Criterios de aceptación

- Los cinco principios conservan su texto y orden de lectura y se entienden como partes conectadas de una relación de trabajo.
- La página obtiene un tratamiento visual propio frente al encabezado repetido, consistente con la paleta y dirección de POWERFUL.
- La composición es legible y adaptable, sin desbordamiento horizontal en móvil.
- Cualquier movimiento es breve, no oculta contenido, no depende de JavaScript y se reduce con `prefers-reduced-motion`.
- El resto de las rutas y el copy compartido conservan su comportamiento.
- CW-2: una alineación perceptible y trazos SVG se activan al entrar en pantalla y pueden repetirse con un control de visitante; el principio en lectura o seleccionado se refleja en el gráfico.
- CW-2: los enlaces/controles funcionan con teclado y el contenido predeterminado es completo y estático; la preferencia de movimiento reducido elimina desplazamientos no esenciales.

## Configuración de trabajo

- Ruta: delegated direct. Mapeo visual/CSS previo delegado en la exploración inmediatamente anterior. Trigger de escritor: implementar un diagrama y un modificador visual de `PageHero` coordina al menos dos archivos no triviales.
- TDD: desactivado por elección explícita del usuario para la implementación web del proyecto (registro en `odd/tasks/alinear-posicionamiento-y-rubros.md`). Runner funcional normal: `npm run check` y `npm run build`; revisión del preview para layout y movimiento reducido.
- RDD: `gentle-ai review mode status` observado el 2026-10-18: off, decidido por default. No iniciar review nativo.
- Git: `main`, sin crear ni cambiar ramas. Sin push, PR ni despliegue remoto. Commit Conventional Commit por unidad.
- CW-2: delegated direct; preparación y escritor delegados por cambios coordinados en página, componente, script y dependencias (más de dos archivos no triviales). TDD OFF y runners normales anteriores se mantienen. RDD off por default, confirmado de nuevo antes de CW-2.
- Forecast CW-1 observado: 273 líneas de autor. Forecast CW-2: 500–650 líneas, excluido lockfile generado, para la pieza gráfica responsive, interacción y movimiento; no se divide artificialmente. Estrategia `exception-ok`, consistente con la elección explícita previa del usuario de continuar este desarrollo en `main` sin cadena de PRs (`odd/tasks/portada-powerful.md`, Configuración de trabajo). Ningún PR autorizado.
- Espejo Engram: pendiente; no se encontraron herramientas MCP de memoria ni comandos locales `mem_context`, `mem_search`, `mem_get_observation` o `engram`. Conservar este documento local y sincronizarlo si el espejo vuelve a estar disponible.

## Tareas

CW-1 conserva sus hechos técnicos como historial; su dirección visual fue rechazada por el usuario y queda supersedida por CW-2. La entrada anterior se disparaba al cargar, no al entrar al viewport, y también afectaba a las tarjetas móviles; la descripción de rail estático no acreditaba inmovilidad de esas tarjetas.

- [x] **CW-1 — Crear el diagrama adaptable y el tratamiento visual distintivo de la página.** Los cinco principios conservan su texto en una lista semántica y se conectan sin flechas ni secuencia obligatoria. Se añadió una variante navy de `PageHero` para esta página y una entrada breve solo con `prefers-reduced-motion: no-preference`; el rail móvil queda estático. `npm run check`: 30 archivos Astro, 0 errores/avisos/hints. `npm run build`: 9 rutas estáticas. `git diff --check` pasa. Preview vivo 4323 inspeccionado en escritorio y móvil a 390×844; no se aprecia desbordamiento y la lista pasa a un rail vertical. No fue posible emular `prefers-reduced-motion` en navegador; se revisó el fallback en CSS. No se ejecutaron tests automatizados. Commit de trabajo: `b0ec3c9` (`feat: visualize collaboration principles`).
- [x] **CW-2 — Crear un marco de colaboración editorial con Motion Mini + inView.** Pieza navy con cinco campos explícitos junto a la lectura editorial; marco fijo durante la lectura en escritorio, foco coordinado por campo y banda de lectura, alineación/trazo al entrar en pantalla y botón «Ver conjunto». Motion 14.3.0 fijado; imports `motion/mini` y `inView`, sin importar GSAP en esta ruta. CSS aislado en `CollaborationFramework.astro`. Se conservaron el texto comercial, responsabilidades y CTA. `npm run check`: 32 archivos, 0 errores/avisos/hints; `npm run build`: 9 rutas; `git diff --check` pasa. Evidencia ampliada debajo. Commit de trabajo: pendiente de registrar tras crear el commit de esta unidad.

## Progreso y siguiente paso

- Estado inicial: rama `main`; el árbol ya contenía `?? odd/tasks/adopt-prototype-typography.md` y `?? web/`. No tocar esos archivos. El preview Astro existente en `4323` pertenece a la sesión del usuario; conservarlo.
- Evidencia previa: `CATALOGO_VISUAL_CSS.md` y `DESIGN.md` priorizan CSS para movimiento sencillo, fallbacks estáticos, movimiento reducido y evitan funciones experimentales como base.
- Cambios de código de CW-1: `src/pages/como-trabajamos.astro`, `src/components/PageHero.astro`, `src/styles/global.css`.
- Durante la implementación aparecieron cambios concurrentes ajenos: `M odd/tasks/portada-powerful.md` y `?? public/images/pacific-asia-map.svg`. Se preservan sin modificar ni incluir en el commit. También siguen los dos elementos untracked previos indicados arriba.
- Estado al iniciar CW-2: cambios concurrentes en `odd/tasks/portada-powerful.md`, assets de mapas, `HomeContent.astro`, `es.ts` y `global.css`; quedan fuera del trabajo. Se conserva el preview 4323 existente.
- CW-2: se completó una ronda conjunta de preview a 1440×1000, tamaño habitual del panel y 390×844. Se corrigieron en un lote dos defectos observados: la selección cambiaba demasiado pronto o quedaba retenida al volver al inicio, y las bandas desplazadas perdían contraste fuera del panel. Confirmación final a 1440×1000 y 320×844: selección de Responsabilidades consistente con el artículo visible, Enter en Roles navega al ancla correcta, repetición termina y libera `aria-busy`, ningún desbordamiento horizontal (320 px de viewport / 305 px de contenido) ni avisos/errores de consola. Preferencia y viewport compacto cancelan el desplazamiento; móvil usa composición estática.
- CW-2: contenido sin JavaScript y movimiento reducido revisados en código, no mediante emulación de navegador. No se ejecutaron tests automatizados ni auditoría completa de accesibilidad. RDD `disabled/unmanaged`, sin revisión nativa. Engram sigue pendiente por herramienta no disponible.
- CW-2: el intento inicial de repetir check/build tomó el npm de Windows y falló por directorio UNC; ambos comandos se repitieron correctamente con Node/npm de WSL 24.16.0 (`/home/jony/.nvm/versions/node/v24.16.0/bin` en PATH). Bundle final propio de la ruta: 10.782 bytes minificados / 4.170 bytes gzip, medidos sobre el build con zlib. Delta de autor de fuente/dependencia: 782 líneas, excluido lockfile generado y este registro; supera el forecast por estilos responsive y estados legibles, bajo la estrategia `exception-ok` ya aceptada.
- CW-2: la portada y los mapas recibieron commits concurrentes ajenos hasta `e2aa558`, y `odd/tasks/portada-powerful.md` volvió a aparecer modificado al cerrar. Se preservan fuera del commit, junto con los untracked previos. No se hicieron cambios remotos.
- Siguiente paso: el usuario evalúa el preview local y el nuevo lenguaje visual, usando «Ver conjunto» y la lectura/selección de los cinco campos. Sincronizar el espejo Engram si vuelve a estar disponible.
