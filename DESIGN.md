# Sistema visual de POWERFUL

## Fuente de dirección y evolución

El prototipo aprobado vive en `web/` y es la base visual y funcional del sitio, no una composición congelada. Conservamos su identidad, su jerarquía editorial y los patrones que funcionan; podemos evolucionar composición, fotografía, ilustración y movimiento cuando ayuden a explicar mejor POWERFUL y a generar confianza. Evaluamos cada cambio en escritorio y móvil, manteniendo navegación, contenido verificable, accesibilidad y rendimiento.

El público principal son empresas extranjeras que buscan representación y una contraparte empresarial en Perú. POWERFUL parte de la ciudad de Piura y el enfoque de la web abarca el Perú. Piura debe aparecer como punto de partida local, no como límite del alcance nacional; no sustituirla por Lima ni atribuir cobertura, oficinas o proyectos que no estén confirmados.

## Identidad

- Azul profundo `#14263D`, azul nocturno `#0C1D31`, azul auxiliar `#1D3752`.
- Oro `#B79862` y oro claro `#D0B57F`.
- Marfil `#F4F1EA`, papel `#FCFBF8`, texto `#25364A`, secundario `#637185`.
- El header usa el derivado aprobado `web/assets/brand/wordmark-header.png`, recortado solo en márgenes transparentes del master V1.2. La copia servida vive en `public/brand/wordmark-header.png`; el master no se modifica.

## Tipografía

Inter es la familia del prototipo. Astro la carga localmente con `@fontsource-variable/inter`; el CSS conserva `Inter, "Segoe UI", Arial, Helvetica, sans-serif` como cadena de respaldo. La escala, pesos y tracking son los declarados por el prototipo. Las páginas mantienen `lang="es-PE"`.

## Composición, fotografía y gráficos

- La portada conserva el contraste navy y marfil, los acentos oro, la jerarquía tipográfica, los servicios, los sectores y el proceso del prototipo. El hero y las secciones pueden incorporar una fotografía de Piura o un gráfico geográfico preciso si mejoran el contexto local y la propuesta de representación.
- Dar prioridad a una fotografía documental auténtica de la ciudad de Piura con derechos de uso verificables. El encargo está en [hero-piura-fotografia.md](.impeccable/briefs/hero-piura-fotografia.md). No usar una imagen de Lima como sustituto ni generar una vista fotorrealista de Piura que pueda confundirse con una fotografía real.
- Las tarjetas de Sectores pueden evolucionar de sus franjas CSS a imágenes editoriales coherentes para minería y minerales, energía e hidrocarburos, infraestructura y construcción, inmobiliario, y comercio exterior y materias primas. Usar fotografías licenciadas o imágenes genéricas de sector, incluidas composiciones generadas, sin sugerir proyectos ejecutados, instalaciones, clientes ni respaldo de POWERFUL. No se requiere un caption visible que diga «conceptual» o «ilustrativa» para esos recursos genéricos; conservar su clasificación, origen, licencia o prompt en metadata/sidecar. No es necesario añadir fotos a todas las páginas: servicios, proceso y contacto pueden apoyarse en tipografía, SVG e infografías propias.
- Si se usa un mapa o diagrama de conexión, ubicar Piura correctamente y distinguir una relación conceptual de datos o alianzas reales. Evitar mapas decorativos incorrectos, globos, redes genéricas, cifras inventadas, edificios genéricos, apretones de manos y logotipos ajenos.
- No generar ni editar el logotipo. No publicar retratos de equipo, testimonios, socios, clientes, instalaciones o proyectos sin validación y autorización. La imagen no prueba experiencia ni respaldo.
- Preparación inicial para imágenes: Piura, máster horizontal 4:3 de al menos 2400 × 1800 px; exportaciones WebP de 1200 × 900 y 640 × 480. Visuales editoriales de sectores, máster 3:2 de al menos 2400 × 1600 px; crear recortes WebP responsivos cuando se defina el encuadre final. Conservar los originales PNG/JPEG y registrar procedencia, licencia o prompt, clasificación conceptual y texto alternativo sugerido.
- Servir WebP o AVIF con fallback cuando convenga, mediante `<picture>`/`srcset`, dimensiones explícitas y tamaños responsivos. Cargar con prioridad la imagen principal y diferir las imágenes fuera del primer viewport. Usar alt descriptivo cuando la foto aporta información y `alt=""` si es decorativa.

Antecedente supersedido, 2026-10-17: P2–P4 siguieron «Atlas del Pacífico» y usaron una foto de Miraflores/Lima de Maria Camila Castaño, [Pexels 7332783](https://www.pexels.com/photo/a-coastal-city-by-the-beach-7332783/) ([licencia](https://www.pexels.com/license/)), conservada en `public/images/miraflores-lima.webp`. Ese archivo muestra Lima y nunca debe describirse como Piura. También se conservan los materiales genéricos generados para Sectores y sus sidecars. La portada actual basada en el prototipo no monta esas imágenes; la fotografía de Piura sigue pendiente de selección y no se integra en P5. Piura es la única ciudad de partida vigente y Perú el enfoque del sitio.

## Oportunidades visuales para evaluar

1. Anclar la portada en Piura mediante una imagen documental local y una relación gráfica correcta entre Piura y el Perú.
2. Dar imágenes diferenciadas a los cinco sectores, con un tratamiento compartido y sin convertirlas en supuestos casos de éxito.
3. Reducir la repetición de órbitas, anillos y puntos: reservar el motivo de conexión para una sección y variar el resto con fotografía, espacio editorial e infografía.
4. Mantener un primer viewport claro para la empresa extranjera: representación en Perú, función de POWERFUL y una acción de contacto visible.

Estas oportunidades orientan la evaluación; no obligan a aplicar todos los recursos en todas las páginas.

## Responsive y estados

Los puntos de quiebre de `web/assets/styles.css` —1190, 1000, 760, 420 y 359 px— son una referencia inicial que se puede ajustar al contenido. Los hover de navegación, CTA, enlaces, tarjetas, filtros y footer siguen siendo breves y consistentes. Mantener foco visible, navegación por teclado, contraste y legibilidad en móvil.

El menú móvil usa un botón con `aria-expanded` y `aria-controls`; Escape lo cierra y devuelve el foco al botón, seleccionar un enlace o hacer clic fuera lo cierra, y el cambio al viewport de escritorio limpia el estado. Sin JavaScript, el menú permanece visible en móvil y el botón no aparece. El año del footer se actualiza en el cliente.

## Movimiento e interacción

Se permiten entradas al desplazarse, transiciones de imagen y parallax sutil cuando dirigen la atención y refuerzan el contexto. Preferir CSS para hovers y transiciones sencillas; GSAP/ScrollTrigger queda disponible para efectos puntuales que no convenga resolver con CSS. Evitar incorporar un segundo motor de animación.

Mantener scroll nativo, contenido visible aunque JavaScript falle y animaciones que no bloqueen lectura ni interacción. Priorizar `transform` y `opacity`, ejecutar reveals una sola vez y limitar parallax a escritorio con puntero fino. Desactivar movimiento no esencial en móvil y respetar `prefers-reduced-motion`. Evitar video de fondo, bucles decorativos, scroll hijacking y efectos que retrasen el contenido principal.

El filtro de Sectores y la validación de Contacto son mejoras progresivas cargadas solo en sus páginas. Contacto acepta `tipo` únicamente para las opciones conocidas y muestra una validación local de demostración; no transmite ni almacena datos. Si JavaScript no está disponible, el control de prueba permanece deshabilitado y el formulario no puede enviarse por GET.

Privacidad y Condiciones conservan sus avisos de borrador y no deben tratarse como documentos legales aprobados.

## Rutas y preview

Astro usa `build.format: 'preserve'`: la portada `src/pages/index.astro` se publica en `/` y las páginas de contenido conservan sus rutas `.html`, incluidas `/nosotros.html`, `/contacto.html` y `/terminos.html`. `src/pages/404.astro` compila a `dist/404.html`; Nginx sirve ese documento como cuerpo de una ruta desconocida sin cambiar su estado HTTP 404. El layout mantiene `noindex,nofollow` para el preview; esa política no se retira sin aprobación de publicación.
