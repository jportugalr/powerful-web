# Portada POWERFUL

Target: `src/pages/index.astro`; related `src/components/HomeContent.astro`, `src/layouts/SiteLayout.astro`, `src/styles/global.css`, `src/content/es.ts`.
Mode: Persuade. Build path: code, explícitamente elegido por el usuario.

Antecedente histórico supersedido — dirección del 2026-10-18: el prototipo estático aprobado en `web/` guio la identidad inicial. La jerarquía de empresas internacionales primero, inversionistas y socios como segundo recorrido y titulares locales como público secundario quedó supersedida. La fuente canónica es ahora la aplicación Astro, y la dirección vigente de identidad y alcance se registra en `DESIGN.md` y `PRODUCT.md`. La oferta continúa comunicando que las iniciativas disponibles en Perú se buscan y evalúan desde información accesible, sin afirmar cartera propia validada, mandato, acceso especial ni relación oficial.

## Audience and action

La portada habla de forma inclusiva a empresas, inversionistas, socios y titulares de iniciativas peruanos e internacionales, sin crear recorridos por origen ni jerarquizar estos públicos. Debe explicar el alcance nacional y la mayor presencia de la red en el norte y nororiente, sin inventar credenciales. El contacto conserva el funcionamiento y los límites documentados en la página correspondiente.

## Direction contract

THESIS: «Tu empresa, con una contraparte local en el Perú». La bajada presenta a POWERFUL como punto de articulación desde Perú y da cabida a empresas, inversionistas, socios y titulares de iniciativas peruanos e internacionales. Los CTA facilitan conversaciones sobre representación, iniciativas, inversión y alianzas sin convertir la página en recorridos separados por origen. La oferta describe búsqueda y evaluación de iniciativas disponibles en Perú, incluidas fuentes públicas o estatales, sin insinuar cartera validada o acceso institucional. Explicar el alcance nacional y la mayor presencia de la red en el norte y nororiente.

OWN-WORLD: identidad institucional vigente definida en `DESIGN.md`, con marfil #F4F1EA, navy #14263D y oro #B79862. Inter lleva mensaje y navegación, cargada localmente. La aplicación Astro es la fuente canónica; conservar una jerarquía editorial clara y evaluar fotografía, ilustración y movimiento junto con esa base.

STORY: empresas, inversionistas, socios y titulares de iniciativas peruanos e internacionales entienden el papel de POWERFUL en la representación y articulación comercial desde el Perú. Pueden conversar sobre operaciones, proyectos, inversión o alianzas conforme al alcance de cada iniciativa. Los proyectos y la red son nacionales; el norte y nororiente representan mayor presencia, no un límite del alcance.

FIRST VIEWPORT: conservar la marca, navegación, titular y acciones implementados en la portada Astro. Preparar la fotografía para una futura composición con texto a la izquierda y foto a la derecha; en móvil el texto y la acción deben conservar prioridad. El master será horizontal 4:3, mínimo 2400×1800, con margen para recortes responsivos. La portada actual usa arte CSS y todavía no monta una fotografía del hero. La integración y su evaluación visual quedan fuera de P5.

FORM: seguir `DESIGN.md` y la aplicación Astro como base. No hay una fotografía de una ciudad específica seleccionada para el hero; cualquier imagen futura requiere origen, ubicación y derechos verificables y no debe atribuirse a proyectos, clientes o instalaciones de POWERFUL. Las imágenes genéricas de sectores conservan sus metadatos y clasificación. El movimiento futuro conserva scroll nativo, contenido visible y respeto a reduced-motion.

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance

## Imagen de portada pendiente

No se ha seleccionado una imagen para el hero. El brief específico de Piura está supersedido; cualquier dirección futura debe representar el Perú con ubicación y derechos verificables, sin presentar una fotografía genérica como evidencia de actividad de POWERFUL.

## Sectores integrados en P6

Las siete tarjetas de `/sectores.html` usan imágenes genéricas aportadas por el usuario: mineral/cobre, tubería industrial, acero/concreto, edificios residenciales, carga/contenedores, producto pesquero y paltas en acondicionamiento. Los diez PNG originales permanecen intactos en `source-assets/imagenes/`. Se conservan las siete categorías, filtros, enlaces, teclado y frame de 180 px. Las imágenes de Pesca y Agroindustria acompañan sus tarjetas; un bloque tipográfico independiente comunica la experiencia profesional del equipo en agua y perforación de pozos, agroexportación y pesca, sin atribuir esos rubros a proyectos ejecutados por POWERFUL.

Los derivados WebP82 tienen recorte panorámico 640×240 y 1280×480, más un recorte 640×400 para móvil hasta 420 px. `picture`/`srcset`/`sizes`, dimensiones explícitas, lazy loading y decodificación asíncrona limitan la transferencia. No hay caption conceptual visible ni afirmación de que los recursos documenten experiencia, proyectos o instalaciones de POWERFUL.

La procedencia completa está junto a los derivados en `public/images/sectors/manifest.json`: nombres originales, fecha inferida del nombre, dimensiones, hash SHA256, rol, recortes y pesos. Registra la confirmación del usuario sobre la generación a partir del prompt anterior. El texto exacto de ese prompt no quedó archivado en el repo y no se reconstruye; tampoco se afirma una licencia externa.

La imagen urbana `19_26_51-1.png` no se integra como prueba de una ubicación o proyecto de POWERFUL. El encargo P5 de una fotografía de Piura quedó supersedido con la definición del alcance nacional. El hero, logo, footer y demás recursos visuales conservan sus activos actuales.

## Antecedente supersedido: Atlas y refinamiento P2–P4

La elección histórica fue Atlas del Pacífico, seed `f939704b`, con foto de Lima junto al titular y una relación empresa–POWERFUL–Perú. P4 añadió materiales de sector y movimiento puntual. Ese diseño y su fotografía documentan aquella entrega; no fijan la composición ni la geografía vigentes del sitio Astro.

La foto histórica es de Maria Camila Castaño, [Pexels 7332783](https://www.pexels.com/photo/a-coastal-city-by-the-beach-7332783/) ([licencia](https://www.pexels.com/license/)): costa urbana de Miraflores, Lima. Archivo conservado `public/images/miraflores-lima.webp`, 1500 px/WebP84. Representa Lima, nunca Piura, y no es obra ni proyecto de POWERFUL.

Los materiales genéricos se generaron con builtin Imagegen el 2026-10-17: mineral de cobre, lámina de cobre, acero y concreto. Se mantienen los archivos y sus sidecars: original `output/imagegen/sector-materials-source.png`, prompt íntegro `output/imagegen/materials-prompt.txt`, WebP 1120×1400 y 640×800. P4 usó el caption «Ilustración conceptual»; esa decisión histórica no impone un rótulo visible a las imágenes genéricas de sectores. La portada y las tarjetas del sitio Astro actual no montan estos assets.

Evidencia histórica de P4, 2026-10-17: finish review `ship`, check/build y smoke Docker aprobados, navegador a 320/390/768/1440 sin desborde y estados funcionales comprobados. ScrollTrigger añadió código sin nueva dependencia: JS 72073→115978 B raw y payload gzip real 45390 B, frente a la base anterior sin gzip (28004 B gzip calculados). No se midieron FPS ni dispositivos físicos. Esas comprobaciones no validan una futura integración de Piura ni describen el runtime del sitio Astro actual.

## Open decisions

Selección, derechos y encuadre de una eventual fotografía de portada; integración posterior y QA de escritorio/móvil. Canales oficiales, datos legales, hosting y backend de contacto; la portada no los inventa. Aprobación editorial final pendiente. Español inicial sin selector inglés vacío.
