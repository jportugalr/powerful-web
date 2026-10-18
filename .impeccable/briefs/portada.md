# Portada POWERFUL

Target: `src/pages/index.astro`; related `src/components/HomeContent.astro`, `src/layouts/SiteLayout.astro`, `src/styles/global.css`, `src/content/es.ts`.
Mode: Persuade. Build path: code, explícitamente elegido por el usuario.

Dirección vigente, 2026-10-17: el prototipo aprobado en `web/` es la base visual y funcional, conforme a `DESIGN.md`. POWERFUL es una iniciativa centrada en el Perú, con proyectos y red de contactos de alcance nacional y mayor presencia en el norte y nororiente. Atiende clientes e inversionistas nacionales e internacionales; prioriza el capital extranjero, sin excluir el nacional. La instrucción anterior de centrar el hero en Piura quedó supersedida. P6 integra las cinco imágenes genéricas de sectores en Astro; el cambio de copy conserva esas imágenes, filtros y servicios.

## Audience and action

Empresas e inversionistas nacionales e internacionales que buscan oportunidades, proyectos o representación en Perú; el capital extranjero es preferente, no exclusivo. Los titulares de proyectos peruanos son contrapartes relevantes. La web debe explicar el alcance nacional, la mayor presencia de la red en el norte y nororiente, y el proceso, sin inventar credenciales. Contacto exploratorio local, sin envío ni recepción simulada.

## Direction contract

THESIS: «Tu contraparte empresarial para proyectos en todo el Perú». Explicar en la bajada la atención a empresas e inversionistas nacionales e internacionales, la red nacional con mayor presencia en el norte y nororiente, y la preferencia no exclusiva por capital extranjero.

OWN-WORLD: identidad del prototipo aprobado, con marfil #F4F1EA, navy #14263D y oro #B79862. Inter lleva mensaje y navegación, cargada localmente. Conservar su jerarquía editorial y los patrones existentes; la nueva fotografía debe convivir con esa base.

STORY: identificar a POWERFUL como iniciativa centrada en Perú, comprender capacidades y focos, reconocer cómo empieza la relación y preparar una consulta. Los proyectos y la red son nacionales; el norte y nororiente representan mayor presencia, no un límite del alcance.

FIRST VIEWPORT: conservar marca, navegación, titular y acciones del prototipo. Preparar la fotografía para una futura composición con texto a la izquierda y foto a la derecha; en móvil el texto y la acción deben conservar prioridad. El master será horizontal 4:3, mínimo 2400×1800, con margen para recortes responsivos. La portada actual usa arte CSS y todavía no monta una fotografía del hero. La integración y su evaluación visual quedan fuera de P5.

FORM: seguir `DESIGN.md` y el prototipo como base. No hay una fotografía de una ciudad específica seleccionada para el hero; cualquier imagen futura requiere origen, ubicación y derechos verificables y no debe atribuirse a proyectos, clientes o instalaciones de POWERFUL. Las imágenes genéricas de sectores conservan sus metadatos y clasificación. El movimiento futuro conserva scroll nativo, contenido visible y respeto a reduced-motion.

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance

## Imagen de portada pendiente

No se ha seleccionado una imagen para el hero. El brief específico de Piura está supersedido; cualquier dirección futura debe representar el Perú con ubicación y derechos verificables, sin presentar una fotografía genérica como evidencia de actividad de POWERFUL.

## Sectores integrados en P6

Las cinco tarjetas de `/sectores.html` usan los PNG generados por el usuario y aportados en `web/imagenes/`: mineral/cobre, tubería industrial, acero/concreto, edificios residenciales y carga/contenedores. Los originales permanecen intactos. Se conservan las cinco categorías, filtros, enlaces, teclado y frame de 180 px. El nuevo bloque tipográfico separado informa experiencia profesional del equipo en agua y perforación de pozos, agroexportación y pesca; no añade tarjetas ni imágenes ni atribuye esos rubros a proyectos de POWERFUL.

Los derivados WebP82 tienen recorte panorámico 640×240 y 1280×480, más un recorte 640×400 para móvil hasta 420 px. `picture`/`srcset`/`sizes`, dimensiones explícitas, lazy loading y decodificación asíncrona limitan la transferencia. No hay caption conceptual visible ni afirmación de que los recursos documenten experiencia, proyectos o instalaciones de POWERFUL.

La procedencia completa está junto a los derivados en `public/images/sectors/manifest.json`: nombres originales, fecha inferida del nombre, dimensiones, hash SHA256, rol, recortes y pesos. Registra la confirmación del usuario sobre la generación a partir del prompt anterior. El texto exacto de ese prompt no quedó archivado en el repo y no se reconstruye; tampoco se afirma una licencia externa.

La imagen urbana `19_26_51-1.png` no se integra como prueba de una ubicación o proyecto de POWERFUL. El encargo P5 de una fotografía de Piura quedó supersedido con la definición del alcance nacional. El hero, logo, footer y demás recursos visuales conservan sus activos actuales.

## Antecedente supersedido: Atlas y refinamiento P2–P4

La elección histórica fue Atlas del Pacífico, seed `f939704b`, con foto de Lima junto al titular y una relación empresa–POWERFUL–Perú. P4 añadió materiales de sector y movimiento puntual. Ese diseño y su fotografía documentan aquella entrega; no fijan la composición ni la geografía vigentes del prototipo.

La foto histórica es de Maria Camila Castaño, [Pexels 7332783](https://www.pexels.com/photo/a-coastal-city-by-the-beach-7332783/) ([licencia](https://www.pexels.com/license/)): costa urbana de Miraflores, Lima. Archivo conservado `public/images/miraflores-lima.webp`, 1500 px/WebP84. Representa Lima, nunca Piura, y no es obra ni proyecto de POWERFUL.

Los materiales genéricos se generaron con builtin Imagegen el 2026-10-17: mineral de cobre, lámina de cobre, acero y concreto. Se mantienen los archivos y sus sidecars: original `output/imagegen/sector-materials-source.png`, prompt íntegro `output/imagegen/materials-prompt.txt`, WebP 1120×1400 y 640×800. P4 usó el caption «Ilustración conceptual»; esa decisión histórica no impone un rótulo visible a las imágenes genéricas de sectores. La portada y las tarjetas del prototipo actual no montan estos assets.

Evidencia histórica de P4, 2026-10-17: finish review `ship`, check/build y smoke Docker aprobados, navegador a 320/390/768/1440 sin desborde y estados funcionales comprobados. ScrollTrigger añadió código sin nueva dependencia: JS 72073→115978 B raw y payload gzip real 45390 B, frente a la base anterior sin gzip (28004 B gzip calculados). No se midieron FPS ni dispositivos físicos. Esas comprobaciones no validan una futura integración de Piura ni describen el runtime del prototipo actual.

## Open decisions

Selección, derechos y encuadre de una eventual fotografía de portada; integración posterior y QA de escritorio/móvil. Canales oficiales, datos legales, hosting y backend de contacto; la portada no los inventa. Aprobación editorial final pendiente. Español inicial sin selector inglés vacío.
