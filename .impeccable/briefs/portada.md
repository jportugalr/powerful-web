# Portada POWERFUL

Target: `src/pages/index.astro`; related `src/components/HomeContent.astro`, `src/layouts/SiteLayout.astro`, `src/styles/global.css`, `src/content/es.ts`.
Mode: Persuade. Build path: code, explícitamente elegido por el usuario.

Dirección vigente, 2026-10-17: el prototipo aprobado en `web/` es la base visual y funcional, conforme a `DESIGN.md`. Piura es la ciudad de partida; el enfoque del sitio es el Perú. La dirección fotográfica de Lima de P2–P4 está supersedida. P5 preparó el encargo de imagen; P6 integra las cinco imágenes genéricas de sectores aportadas por el usuario en sus tarjetas Astro, conservando intacto el hero gráfico actual.

## Audience and action

Empresa/inversionista extranjero que necesita representación y una contraparte en Perú, con Piura como punto de partida local. Debe entender el alcance y avanzar a preparar su consulta. Los titulares de proyectos locales evalúan respaldo. Sin evidencia de trayectoria: se explica la firma, alcance y proceso, sin inventar credenciales. Contacto exploratorio local, sin envío ni recepción simulada.

## Direction contract

THESIS: conectar los objetivos de una empresa extranjera con una contraparte en Perú. La fotografía documental de Piura aportará contexto local sin limitar el enfoque nacional ni insinuar oficinas o proyectos no confirmados.

OWN-WORLD: identidad del prototipo aprobado, con marfil #F4F1EA, navy #14263D y oro #B79862. Inter lleva mensaje y navegación, cargada localmente. Conservar su jerarquía editorial y los patrones existentes; la nueva fotografía debe convivir con esa base.

STORY: identificar una contraparte en Perú, comprender capacidades y focos, reconocer cómo empieza la relación, preparar una consulta. Piura es el origen local de la firma; una fotografía de la ciudad será contexto, nunca prueba de un proyecto.

FIRST VIEWPORT: conservar marca, navegación, titular y acciones del prototipo. Preparar la fotografía para una futura composición con texto a la izquierda y foto a la derecha; en móvil el texto y la acción deben conservar prioridad. El master será horizontal 4:3, mínimo 2400×1800, con margen para recortes responsivos. La portada actual usa arte CSS y todavía no monta una fotografía del hero. La integración y su evaluación visual quedan fuera de P5.

FORM: seguir `DESIGN.md` y el prototipo como base. La imagen documental de Piura requiere origen, ubicación y derechos verificables antes de integrarse. Las imágenes genéricas de sectores pueden usarse sin un rótulo visible de «conceptual» o «ilustrativa»; su contexto y copy no deben atribuirlas a proyectos, clientes o instalaciones de POWERFUL. Procedencia y clasificación permanecen en metadata/sidecar. El movimiento futuro conserva scroll nativo, contenido visible y respeto a reduced-motion; P5 no añade ni resta efectos.

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance

## Fotografía vigente por conseguir

Localizar o encargar una fotografía auténtica de la ciudad de Piura mediante [hero-piura-fotografia.md](hero-piura-fotografia.md). No se ha seleccionado un archivo ni aprobado una licencia para el nuevo hero. No generar una vista fotorrealista inventada de Piura ni renombrar la imagen de Lima como si mostrara esa ciudad.

## Sectores integrados en P6

Las cinco tarjetas de `/sectores.html` usan los PNG generados por el usuario y aportados en `web/imagenes/`: mineral/cobre, tubería industrial, acero/concreto, edificios residenciales y carga/contenedores. Los originales permanecen intactos. Se conserva el copy, filtros, enlaces, teclado y frame de 180 px; solo se sustituye el arte CSS por fotografía genérica del sector.

Los derivados WebP82 tienen recorte panorámico 640×240 y 1280×480, más un recorte 640×400 para móvil hasta 420 px. `picture`/`srcset`/`sizes`, dimensiones explícitas, lazy loading y decodificación asíncrona limitan la transferencia. No hay caption conceptual visible ni afirmación de que los recursos documenten experiencia, proyectos o instalaciones de POWERFUL.

La procedencia completa está junto a los derivados en `public/images/sectors/manifest.json`: nombres originales, fecha inferida del nombre, dimensiones, hash SHA256, rol, recortes y pesos. Registra la confirmación del usuario sobre la generación a partir del prompt anterior. El texto exacto de ese prompt no quedó archivado en el repo y no se reconstruye; tampoco se afirma una licencia externa.

La imagen urbana `19_26_51-1.png` no se integra. La localización de Piura no está verificada y sigue pendiente una foto documental auténtica según el encargo de P5. El hero, logo, footer y otras páginas conservan su implementación.

## Antecedente supersedido: Atlas y refinamiento P2–P4

La elección histórica fue Atlas del Pacífico, seed `f939704b`, con foto de Lima junto al titular y una relación empresa–POWERFUL–Perú. P4 añadió materiales de sector y movimiento puntual. Ese diseño y su fotografía documentan aquella entrega; no fijan la composición ni la geografía vigentes del prototipo.

La foto histórica es de Maria Camila Castaño, [Pexels 7332783](https://www.pexels.com/photo/a-coastal-city-by-the-beach-7332783/) ([licencia](https://www.pexels.com/license/)): costa urbana de Miraflores, Lima. Archivo conservado `public/images/miraflores-lima.webp`, 1500 px/WebP84. Representa Lima, nunca Piura, y no es obra ni proyecto de POWERFUL.

Los materiales genéricos se generaron con builtin Imagegen el 2026-10-17: mineral de cobre, lámina de cobre, acero y concreto. Se mantienen los archivos y sus sidecars: original `output/imagegen/sector-materials-source.png`, prompt íntegro `output/imagegen/materials-prompt.txt`, WebP 1120×1400 y 640×800. P4 usó el caption «Ilustración conceptual»; esa decisión histórica no impone un rótulo visible a las imágenes genéricas de sectores. La portada y las tarjetas del prototipo actual no montan estos assets.

Evidencia histórica de P4, 2026-10-17: finish review `ship`, check/build y smoke Docker aprobados, navegador a 320/390/768/1440 sin desborde y estados funcionales comprobados. ScrollTrigger añadió código sin nueva dependencia: JS 72073→115978 B raw y payload gzip real 45390 B, frente a la base anterior sin gzip (28004 B gzip calculados). No se midieron FPS ni dispositivos físicos. Esas comprobaciones no validan una futura integración de Piura ni describen el runtime del prototipo actual.

## Open decisions

Selección, derechos y encuadre final de la fotografía auténtica de Piura; integración posterior y QA de escritorio/móvil. Canales oficiales, datos legales, hosting y backend de contacto; la portada no los inventa. Validación final de copy corporativo pendiente. Español inicial sin selector inglés vacío.
