# Portada POWERFUL

Repository-relative locator: `odd/tasks/portada-powerful.md`

## Objetivo y autorización

Materializar una portada corporativa navegable, moderna, llamativa y sobria para POWERFUL. El usuario autorizó comenzar por la portada, construir directamente en código y usar verificación funcional normal (sin TDD estricto). Alcance local; sin push, PR ni despliegue remoto.

## Problema, público y alcance

La carpeta contiene documentación y marca, pero no aplicación ni repositorio Git. El público principal es la empresa/inversionista extranjero que busca representación en Perú, con Piura como punto de partida local y cobertura de enfoque nacional. Los titulares de proyectos peruanos evalúan el respaldo institucional de la firma.

Incluye base Astro + TypeScript + Tailwind CSS, portada completa responsive, movimiento CSS/GSAP selectivo, navegación por secciones y contacto exploratorio honesto. No incluye otras páginas completas, CMS, formulario con envío real, traducción inglesa, proveedores o infraestructura remota.

Contenido separado de componentes; ES inicial e inglés futuro sin publicar rutas vacías. Conservar el PNG maestro V1.2 byte por byte. No inventar proyectos, métricas, personas, clientes, testimonios, experiencia ni contactos oficiales.

## Configuración de trabajo

- Ruta: delegada. Exploración preparatoria delegada porque requiere más de cuatro archivos; escritor delegado porque la implementación afecta múltiples archivos no triviales.
- TDD: desactivado para esta entrega; fuente: respuesta explícita del usuario del 2026-10-17. Verificación ordinaria obligatoria.
- Runner: `npm run check` (astro check) y `npm run build` (astro build); comprobación real de navegador con Playwright en P3.
- RDD: disabled/unmanaged; `gentle-ai review mode status` devuelve off, decidido por default. No activar ni iniciar review nativo.
- Git: trabajar en `main`, sin crear ni cambiar ramas. Commits Conventional Commits por unidad de trabajo.
- Entorno: WSL Ubuntu 24.04, Node v24.16.0 en `/home/jony/.nvm/versions/node/v24.16.0/bin`; cargar PATH explícitamente.
- Entrega: estrategia `single-pr` para una entrega coherente; no se autoriza crear ningún PR. Presupuesto previsto: aproximadamente 1200 líneas de autor, excluyendo lockfile y activos generados. El tamaño es orientativo; no minificar ni omitir verificación para reducirlo.
- Espejo Engram: sincronizar el documento completo y el localizador `odd/tasks/portada-powerful.md` en topic `odd/portada-powerful/tasks`, proyecto `powerful-web`; CLI local comprobado disponible para P5.

## Tareas

- [x] **P1 — Base técnica y contexto.** Inicializar aplicación y Git, configurar scripts reproducibles, registrar PRODUCT.md y preferencia code-first, preparar marca. El contrato visual pasa a P2 para cerrar primero la elección de composición. Ruta: delegada, múltiples archivos no triviales. Checks observados: instalación (287 paquetes, 0 vulnerabilidades reportadas), check 0 errores/avisos, build correcto con 0 páginas antes de implementación, PNG idéntico. Commit: `e5758af` (`chore: initialize Astro foundation for POWERFUL homepage`). RDD disabled/unmanaged.
- [x] **P2 — Portada completa.** Contrato elegido por el usuario: “Atlas del Pacífico”; navegación editorial, titular y acciones a la izquierda, fotografía contextual verificada de Miraflores a la derecha y trazo discreto. Se implementaron capacidades, sectores, proceso, firma, contacto/footer, menú accesible, CSS/GSAP selectivo y favicon propio. Anclas funcionales; sectores descritos como focos, sin credenciales inventadas. Contacto exploratorio que descarga un borrador local e indica claramente que no se envía. Ruta delegada por cambios coordinados; el padre integró. `npm run check`: 0 errores/avisos/hints; `npm run build`: 1 página; build Docker de producción correcto. Commit de trabajo: `65b84ad` (`feat: build POWERFUL Spanish homepage`).
- [x] **P3 — Verificación y entrega.** Revisión visual independiente `ship` sobre capturas de la parte superior a 1440×1000 y 390×844; screenshots guardados localmente en `.impeccable/review/`. Playwright en `8088`: 320/390/768/1440 px, sin overflow y foto cargada; menú móvil/Escape devuelve foco; `<details>` opera; formulario descarga `consulta-powerful.txt` y declara que no envía; reduced motion mantiene composición sin transform; consola limpia. Root y favicon HTTP 200; ruta inexistente conserva 404; `bash scripts/verify-docker.sh` pasa y confirma logo intacto, runtime Nginx UID 101 sin Node, puertos loopback. Detector Impeccable devuelve `[]`. Se creó `DESIGN.md` desde el sistema implementado. Ruta delegada para revisión/documentación, integración padre. Evidencia de implementación y cierre: `65b84ad` (`feat: build POWERFUL Spanish homepage`).

## Refinamiento autorizado — gráficos y movimiento (2026-10-17)

- [x] **P4 — Identidad gráfica y movimiento de Inicio.** El usuario solicita generar las imágenes necesarias, reducir la apariencia genérica y añadir parallax/entradas ligeras basadas en herramientas actuales investigadas online. Se conserva Atlas del Pacífico, marca aprobada, español y alcance Inicio primero/interiores después. Ruta delegada: mapeo de más de cuatro archivos, investigación oficial y escritor para página/estilos/script; la generación de imagen usa la herramienta Imagegen del padre. No se añaden dependencias si GSAP instalado resuelve el trabajo. TDD OFF por decisión de sesión; runners `npm run check`, `npm run build`, Playwright y smoke Docker. RDD disabled/unmanaged. Previsión adicional: aproximadamente 450–700 líneas de autor, activos generados excluidos; estrategia `single-pr` ya registrada, sin PR ni remoto. Checks: peso de assets y bundle antes/después, imagen local y procedencia, 320/390/768/1440 sin overflow, menú/teclado, reduced-motion, JS desactivado, entradas una vez, parallax acotado solo escritorio y scroll nativo, consola/recursos, logo intacto. Commit de trabajo `4078441` (`feat: enrich homepage imagery and scroll motion`). Espejo Engram pendiente por herramienta no disponible.
- [x] **P5 — Alinear dirección de imagen a Piura y preparar el encargo del hero.** El usuario confirma Piura como referencia geográfica y acepta imágenes de sectores genéricas sin rótulo conceptual visible. Actualizadas `DESIGN.md` y `.impeccable/briefs/portada.md`; Lima queda registrada como antecedente supersedido. Creado `.impeccable/briefs/hero-piura-fotografia.md` para localizar o encargar fotografía documental auténtica con derechos verificables, sin generar una vista fotorrealista inventada. No se modifica la implementación. Ruta delegada directa: mapeo de brief, guía, tarea, preview y activos (más de cuatro archivos) y escritor delegado para múltiples documentos. TDD OFF por elección explícita; verificación ordinaria de coherencia, enlaces locales y `git diff --check` correcto. RDD disabled/unmanaged. Conteo del corte: 112 líneas añadidas y 22 eliminadas; estrategia single-pr. Commit de unidad `6535e2d` (`docs: align visual direction with Piura`). Espejo Engram sincronizado antes del escritor y al cerrar P5.
- [x] **P6 — Integrar imágenes genéricas en las tarjetas de Sectores de Astro.** El usuario autorizó integrar las cinco imágenes de `web/imagenes/` (mineral/cobre, tubería industrial, acero/concreto, residencial y carga/contenedores). El arte del hero y la imagen urbana no se modificaron; la fotografía auténtica de Piura sigue pendiente. Ruta delegada directa: mapeo de activos, componente y estilos; escritor delegado para cambios coordinados en varios archivos. TDD OFF por elección explícita; RDD disabled/unmanaged; sin PR ni remoto. Se añadieron quince WebP82 sin upscale: 640×240 y 1280×480 panorámicos, más 640×400 para móvil hasta 420 px; `<picture>`, `srcset`, `sizes`, dimensiones explícitas y lazy loading. El total derivado pesa 836.382 B. Los PNG originales mantienen los SHA256 registrados en `public/images/sectors/manifest.json`, junto a nombres de origen, recortes, pesos y procedencia; el prompt exacto no estaba archivado y no se reconstruyó. No hay captions conceptuales visibles ni atribución de proyectos o experiencia a POWERFUL. Copy, enlaces, filtros, accesibilidad y estilos hover existentes se conservan.
  Verificación observada: `npm run check` con 0 errores/avisos/hints; `npm run build` genera 9 páginas; `git diff --check` limpio. Playwright en el contenedor Astro `4322`: 320/390/768/1440 sin overflow; las cinco tarjetas cargan sus variantes responsivas; a 320/390 usan recorte móvil y a 768/1440 el panorámico. Filtro «Minería» deja una tarjeta y `aria-pressed=true`; «Todos» restaura cinco. Hover del filtro cambia a navy y el icono del enlace conserva su desplazamiento de 5 px. Consola: 0 errores y 0 avisos. Capturas locales: `output/playwright/p6-sectors-desktop.png`, `output/playwright/p6-sectors-mobile.png` y `output/playwright/p6-sector-card-mobile.png`. El prototipo continúa en `8089`; no se ejecutó smoke del contenedor de producción `8088`, que no estaba activo. Commit de trabajo `6189211` (`feat: add responsive imagery to sector cards`).

### Dirección visual vigente (actualizada 2026-10-17)

El usuario confirmó Piura como ciudad de partida y mantiene el enfoque del sitio en el Perú. La foto de Miraflores/Lima y la elección de Lima en P2 fueron decisiones históricas supersedidas; no describen la dirección vigente. El usuario no requiere rótulos visibles que llamen «ilustrativas» a las imágenes genéricas de sectores. La imagen puede ser editorial y genérica, sin atribuirla a un proyecto de POWERFUL. Procedencia, licencia y prompt permanecen en metadata/sidecar. Una fotografía que se presente como documental de un lugar debe ser real, identificable y autorizada; no inventar una vista fotorrealista de Piura.

### Dirección y presupuesto de movimiento (P4)

P4 usó una fotografía de contexto de Lima y una composición editorial material para sectores (cobre/mineral, acero y hormigón). Estas son evidencias históricas de esa entrega, no la dirección geográfica vigente. P5 prepara el reemplazo del hero por una fotografía documental verificada de Piura; la imagen genérica de sectores no requiere un caption visible. Un gráfico de relación legible sustituye la curva y el compás sin significado; no se inventan mapas ni datos geográficos. La composición de sectores gana imagen y se varía el ritmo sin añadir tarjetas repetidas.

Medición inicial del runtime: script 72.073 B raw, 28.004 B gzip calculado; Nginx todavía lo entrega sin compresión. P4 incluye habilitar gzip solo para recursos textuales y verificar `Content-Encoding` real, además de mantener fuentes/WebP sin recompresión.

Momento principal: la relación empresa exterior–POWERFUL–Perú se compone al entrar, coordinada con la fotografía del hero. Continuidad: parallax fotográfico corto y solo en escritorio con puntero fino; scroll nativo. Apoyo: una entrada editorial de imagen/encabezado al alcanzar Sectores, sin repetir el mismo reveal en cada bloque. Feedback: controles y acordeones conservan respuesta inmediata. Reduced-motion deja todo visible y cancela desplazamientos; en móvil no hay parallax. Se evita pinning, suavizador, bucles, WebGL y listeners permanentes hechos a mano.

### Investigación actual

GSAP 3.15 ya está instalado, pero la primera versión solo tiene una entrada inicial en `home.ts`; no usa ScrollTrigger. Se mantienen GSAP y su plugin ScrollTrigger tras contrastar documentación oficial, Motion JS (incluidas novedades 14.x de octubre 2026), CSS scroll-driven/triggered y Lenis. Motion sería una alternativa, pero duplicar motores no aporta a esta portada. CSS `animation-timeline` y `timeline-trigger` siguen con disponibilidad limitada según MDN. Referencias: https://gsap.com/docs/v3/Plugins/ScrollTrigger/ ; https://gsap.com/blog/3-15/ ; https://motion.dev/changelog ; https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/animation-timeline .

### Verificación observada de P4

- Imagegen integrado generó una imagen editorial nueva; original preservado y hash comparado, prompt íntegro y procedencia en sidecars. WebP 1120×1400: 189.282 B; 640×800: 72.378 B. Caption conceptual visible; foto de Lima y PNG maestro preservados.
- Astro check/build dentro de Docker: cero errores/avisos/hints, una ruta estática. Nginx syntax y smoke Docker pasan. HTTP con Accept-Encoding gzip: script 115.978 B raw, payload real 45.390 B, Content-Encoding gzip y Vary. Baseline 72.073 B raw sin compresión; ScrollTrigger añade 43.905 B raw (gzip calculado 28.004→44.994 B), sin nueva dependencia.
- Playwright: 320/390/768/1440 sin overflow; imagen cargada. Desktop scroll 0/300/650: imagen y−20/−8,89/11,79 px, marco siempre cubierto. Mobile coarse no transforma. Reduced-motion revierte imagen, máscara y will-change. Sin JS: texto, imágenes, navegación y detalles disponibles; formulario usa explicación noscript.
- Menú abre/cierra por Escape con foco, detalles y descarga borrador pasan. Sectores no repite la entrada al volver. Consola y recursos sin errores. Detector Impeccable `[]` en la única pasada; revisión visual independiente `ship`, sin defectos materiales. Capturas de la ronda en `output/playwright/p4-*`; sin FPS ni dispositivos físicos medidos.
- DESIGN.md y brief actualizados y releídos tras la revisión. RDD sigue disabled/unmanaged; sin push ni remoto. Engram continúa pendiente por falta de herramienta.
- Recuento en commits de trabajo observados, excluyendo lockfile, binarios y sidecars generados: `e5758af` 479, `65b84ad` 681, `f63d691` 6 y `4078441` 323; acumulado 1.489 líneas añadidas/eliminadas. El cierre documental se contabiliza en el próximo corte; se mantiene la estrategia `single-pr` ya elegida y el presupuesto como previsión, sin minificar ni dividir artificialmente.

## Aceptación original

El visitante identifica representación empresarial en Perú y encuentra una acción clara en el primer viewport. Las secciones son legibles y distintivas, la portada es operable en móvil/teclado y la animación no impide leer. El contacto explica su alcance real mientras no existan canales oficiales ni backend. Ninguna ruta futura o selector EN promete contenido ausente.

## Evidencia y progreso

- Exploración inicial: raíz solo contenía `Powerful/`; sin package.json, tests ni .git. El proyecto ahora está inicializado y se trabaja en `main`.
- SHA256 master: `762f5883c7218d45b4df0ab0f11b20eec1c931b4536f2cc8df7684227e74bbc4`.
- P1 verificado: Node24.16, Astro7.4, TypeScript6, Tailwind4.3; `npm run check` y `npm run build` correctos sobre scaffold (todavía sin páginas). El PNG copiado conserva SHA256 esperado. No se afirma prueba de interfaz.
- Composición: el usuario eligió explícitamente “Atlas del Pacífico” para construir en código: texto a la izquierda, foto estratégica de Lima a la derecha y una conexión gráfica sobria. Método code-first confirmado.
- Foto de contexto: Maria Camila Castaño, Pexels 7332783, Miraflores/Lima; descarga original `https://images.pexels.com/photos/7332783/pexels-photo-7332783.jpeg?cs=srgb&dl=pexels-mariacamila-7332783.jpg&fm=jpg`; ficha y licencia revisadas. Pexels permite uso web gratuito y no exige atribución; mantener fuente/crédito en metadatos locales del activo. No presentarla como proyecto de POWERFUL.
- Contenido final: titular “Su contraparte empresarial en Perú”; capacidades y proceso escritos como propuesta y alcance, sin trayectoria no verificada. El formulario prepara una descarga local; no solicita ni transmite a un canal corporativo.
- P2/P3: capturas revisadas muestran primero la navegación, titular, acciones y foto; primera captura de QA guardó la página desplazada y se recapturó en `scrollY=0` antes del veredicto `ship`. Pruebas de navegador se completaron con Playwright CLI usando el Chromium instalado en caché mediante `executablePath`; no se agregó Playwright al proyecto.
- Docker runtime local reconstruido desde `compose.production.yaml`; la pestaña de preview queda en `http://127.0.0.1:8088/`. Ambos contenedores responden según smoke.
- El espejo Engram de P4 quedó pendiente porque entonces la herramienta no estaba disponible; el CLI está ahora disponible y se sincroniza para P5 antes de editar briefs.
- Fallos conocidos: PATH inicial no cargaba Node; ruta NVM identificada y ejecutable verificado.
- Decisiones externas pendientes para fases futuras: hosting, persistencia de consultas, correo, datos legales y canales oficiales.

## Siguiente paso

P5 cerrado en `6535e2d` y P6 en `6189211`. El siguiente paso de identidad visual es integrar la fotografía documental auténtica de Piura cuando esté disponible y revisar el hero. Para continuar con las páginas interiores, definir primero sus contenidos verificables y canales oficiales; la versión inglesa requiere traducción revisada.
