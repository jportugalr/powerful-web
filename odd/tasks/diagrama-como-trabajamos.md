# Diagrama de colaboración — Cómo trabajamos

Repository-relative locator: `odd/tasks/diagrama-como-trabajamos.md`

## Objetivo y autorización

Mejorar la página `/como-trabajamos.html` con una composición gráfica propia que explique cómo se relacionan sus cinco principios, un tratamiento distintivo para su encabezado y movimiento breve que aporte jerarquía. El usuario autorizó empezar la implementación el 2026-10-18 tras revisar el catálogo CSS y aceptar el diagrama como siguiente paso.

## Problema, alcance y restricciones

La página presenta los cinco principios como filas de texto y repite el motivo decorativo de anillos utilizado por otros encabezados interiores. Se busca más impacto y dinamismo sin añadir fotografías genéricas, dependencias ni afirmaciones no respaldadas.

Alcance: componentes y estilos Astro necesarios para `/como-trabajamos.html`; conservar copy, lectura semántica, versión móvil y navegación existentes. Representar los principios como elementos relacionados, no como fases en secuencia. Mantener el diagrama visible sin JavaScript y ofrecer una disposición estática cuando se prefiera movimiento reducido. No modificar el prototipo `web/`, otras páginas, datos, contenido comercial, dependencias, favicon, ni realizar publicación o acciones remotas.

## Criterios de aceptación

- Los cinco principios conservan su texto y orden de lectura y se entienden como partes conectadas de una relación de trabajo.
- La página obtiene un tratamiento visual propio frente al encabezado repetido, consistente con la paleta y dirección de POWERFUL.
- La composición es legible y adaptable, sin desbordamiento horizontal en móvil.
- Cualquier movimiento es breve, no oculta contenido, no depende de JavaScript y se reduce con `prefers-reduced-motion`.
- El resto de las rutas y el copy compartido conservan su comportamiento.

## Configuración de trabajo

- Ruta: delegated direct. Mapeo visual/CSS previo delegado en la exploración inmediatamente anterior. Trigger de escritor: implementar un diagrama y un modificador visual de `PageHero` coordina al menos dos archivos no triviales.
- TDD: desactivado por elección explícita del usuario para la implementación web del proyecto (registro en `odd/tasks/alinear-posicionamiento-y-rubros.md`). Runner funcional normal: `npm run check` y `npm run build`; revisión del preview para layout y movimiento reducido.
- RDD: `gentle-ai review mode status` observado el 2026-10-18: off, decidido por default. No iniciar review nativo.
- Git: `main`, sin crear ni cambiar ramas. Sin push, PR ni despliegue remoto. Un commit Conventional Commit para cerrar CW-1.
- Forecast: aproximadamente 250 líneas añadidas más eliminadas, contando documentación y código; artefactos generados excluidos. Entrega `ask-on-risk` (predeterminada); forecast bajo el umbral aproximado de 400 líneas, no requiere estrategia de cadena.
- Espejo Engram: pendiente; no se encontraron herramientas MCP de memoria ni comandos locales `mem_context`, `mem_search`, `mem_get_observation` o `engram`. Conservar este documento local y sincronizarlo si el espejo vuelve a estar disponible.

## Tareas

- [x] **CW-1 — Crear el diagrama adaptable y el tratamiento visual distintivo de la página.** Los cinco principios conservan su texto en una lista semántica y se conectan sin flechas ni secuencia obligatoria. Se añadió una variante navy de `PageHero` para esta página y una entrada breve solo con `prefers-reduced-motion: no-preference`; el rail móvil queda estático. `npm run check`: 30 archivos Astro, 0 errores/avisos/hints. `npm run build`: 9 rutas estáticas. `git diff --check` pasa. Preview vivo 4323 inspeccionado en escritorio y móvil a 390×844; no se aprecia desbordamiento y la lista pasa a un rail vertical. No fue posible emular `prefers-reduced-motion` en navegador; se revisó el fallback en CSS. No se ejecutaron tests automatizados. Commit de trabajo: pendiente de integrar por el coordinador.

## Progreso y siguiente paso

- Estado inicial: rama `main`; el árbol ya contenía `?? odd/tasks/adopt-prototype-typography.md` y `?? web/`. No tocar esos archivos. El preview Astro existente en `4323` pertenece a la sesión del usuario; conservarlo.
- Evidencia previa: `CATALOGO_VISUAL_CSS.md` y `DESIGN.md` priorizan CSS para movimiento sencillo, fallbacks estáticos, movimiento reducido y evitan funciones experimentales como base.
- Cambios de código de CW-1: `src/pages/como-trabajamos.astro`, `src/components/PageHero.astro`, `src/styles/global.css`.
- Durante la implementación aparecieron cambios concurrentes ajenos: `M odd/tasks/portada-powerful.md` y `?? public/images/pacific-asia-map.svg`. Se preservan sin modificar ni incluir en el commit. También siguen los dos elementos untracked previos indicados arriba.
- Siguiente paso: registrar el hash del commit local de CW-1 y sincronizar el espejo Engram si se habilita la herramienta.
