# Sistema visual de POWERFUL

## Fuente de dirección y evolución

La aplicación Astro (`src/`, `public/` y la configuración del proyecto) es la fuente canónica del sitio. Este documento registra su dirección visual: identidad, jerarquía editorial y patrones pueden evolucionar en composición, fotografía, ilustración y movimiento cuando ayuden a explicar mejor POWERFUL y generar confianza. Evaluamos cada cambio en escritorio y móvil, manteniendo navegación, contenido verificable, accesibilidad y rendimiento.

POWERFUL es una iniciativa centrada en el Perú. La comunicación incluye a empresas, inversionistas, socios y titulares de iniciativas peruanos e internacionales sin separar ni jerarquizar públicos por su origen. El alcance de proyectos y contactos es nacional, con una red más fuerte en el norte y nororiente. La comunicación puede decir que POWERFUL busca y evalúa iniciativas disponibles en Perú, incluidas fuentes públicas y estatales; esto no implica cartera propia validada, mandato, acceso especial ni vínculo oficial. No sugerir operación fuera del Perú ni inventar clientes o proyectos.

## Identidad

- Azul profundo `#14263D`, azul nocturno `#0C1D31`, azul auxiliar `#1D3752`.
- Oro `#B79862` y oro claro `#D0B57F`.
- Marfil `#F4F1EA`, papel `#FCFBF8`, texto `#25364A`, secundario `#637185`.
- El header usa el derivado aprobado `public/brand/wordmark-header.png`, recortado solo en márgenes transparentes del master V1.2; el master no se modifica.
- Para los iconos del navegador y dispositivos, el usuario aprobó el emblema de color V0.5 para fondos claros el 2026-10-18. `public/favicon.svg` conserva una copia exacta de `emblema_powerful_color_claro.svg`; las variantes PNG de 16, 32 y 48 px, más el Apple touch icon de 180 px, derivan del PNG oficial de 1254 × 1254 mediante Sharp/Lanczos. El expediente original de `Powerful/` permanece intacto.

## Tipografía

Inter es la familia tipográfica del sitio. Astro la carga localmente con `@fontsource-variable/inter`; los estilos conservan `Inter, "Segoe UI", Arial, Helvetica, sans-serif` como cadena de respaldo. Las páginas mantienen `lang="es-PE"`.

## Composición, fotografía y gráficos

- La portada combina el contraste navy y marfil, los acentos oro, la jerarquía tipográfica, los servicios, los sectores y el proceso de POWERFUL. La comunicación integra a empresas, inversionistas, socios y titulares de iniciativas peruanos e internacionales, con alcance nacional y mayor presencia de la red en el norte y nororiente, sin convertirla en límite geográfico.
- Si se incorpora una fotografía documental, debe representar una ubicación peruana verificable, con derechos de uso comprobables y sin presentarla como oficina, cliente o proyecto de POWERFUL. La solicitud anterior centrada exclusivamente en Piura está supersedida; no seleccionar una ciudad o región específica sin necesidad editorial y evidencia.
- Las tarjetas de Sectores pueden evolucionar de sus franjas CSS a imágenes editoriales coherentes para minería y minerales, energía e hidrocarburos, infraestructura y construcción, inmobiliario, y comercio exterior y materias primas. Usar fotografías licenciadas o imágenes genéricas de sector, incluidas composiciones generadas, sin sugerir proyectos ejecutados, instalaciones, clientes ni respaldo de POWERFUL. No se requiere un caption visible que diga «conceptual» o «ilustrativa» para esos recursos genéricos; conservar su clasificación, origen, licencia o prompt en metadata/sidecar. No es necesario añadir fotos a todas las páginas: servicios, proceso y contacto pueden apoyarse en tipografía, SVG e infografías propias.
- Integración vigente P6: las siete tarjetas de `/sectores.html` muestran imágenes genéricas aportadas por el usuario (cobre, tubería, acero/concreto, residencial, carga, producto pesquero y paltas en acondicionamiento). El marco conserva 180 px de alto. WebP82 panorámicos 640×240 y 1280×480, con recorte 640×400 para móvil hasta 420 px; `picture`, `srcset`, `sizes`, dimensiones explícitas y carga diferida. Los diez PNG originales se conservan intactos en `source-assets/imagenes/`; procedencia, hashes y transformaciones en `public/images/sectors/manifest.json`. El prompt exacto no está archivado en el repo y no se inventa. No hay caption conceptual visible. La imagen urbana aportada no se usa como Piura; el hero gráfico sigue pendiente de una foto documental auténtica.
- Si se usa un mapa o diagrama de conexión, ubicar el Perú con precisión y distinguir una relación conceptual de datos o alianzas reales. El énfasis en el norte y nororiente no autoriza inventar nodos, departamentos, cifras ni ubicaciones. Evitar mapas decorativos incorrectos, globos, redes genéricas, edificios genéricos, apretones de manos y logotipos ajenos.
- No generar ni editar el logotipo. No publicar retratos de equipo, testimonios, socios, clientes, instalaciones o proyectos sin validación y autorización. La imagen no prueba experiencia ni respaldo.
- Preparación inicial para imágenes: cualquier fotografía documental peruana seleccionada para portada requiere ubicación y derechos comprobables. Definir formato y recortes según la composición aprobada; conservar los originales PNG/JPEG y registrar procedencia, licencia o prompt, clasificación conceptual y texto alternativo sugerido.
- Servir WebP o AVIF con fallback cuando convenga, mediante `<picture>`/`srcset`, dimensiones explícitas y tamaños responsivos. Cargar con prioridad la imagen principal y diferir las imágenes fuera del primer viewport. Usar alt descriptivo cuando la foto aporta información y `alt=""` si es decorativa.

Antecedente supersedido, 2026-10-17: P2–P4 siguieron «Atlas del Pacífico» y usaron una foto de Miraflores/Lima de Maria Camila Castaño, [Pexels 7332783](https://www.pexels.com/photo/a-coastal-city-by-the-beach-7332783/) ([licencia](https://www.pexels.com/license/)), conservada en `public/images/miraflores-lima.webp`. Ese archivo muestra Lima y no debe identificarse como otra localidad. También se conservan los materiales genéricos generados para Sectores y sus sidecars. La decisión posterior de centrar la imagen en Piura fue válida como antecedente, pero quedó supersedida por el alcance nacional actual, con mayor presencia de la red en el norte y nororiente. La portada actual de Astro no monta esas imágenes.

## Recursos visuales para evaluar

1. Comunicar el alcance nacional de proyectos y red, mostrando el norte y nororiente como zonas de mayor presencia solo con recursos geográficos verificables.
2. Mantener las imágenes diferenciadas de las siete tarjetas de Sectores integradas en P6, con tratamiento compartido y sin convertirlas en supuestos casos de éxito.
3. Reducir la repetición de órbitas, anillos y puntos: reservar el motivo de conexión para una sección y variar el resto con fotografía, espacio editorial e infografía.
4. Mantener un primer viewport claro que explique la función de POWERFUL y muestre una acción de contacto visible. Incluir a empresas, inversionistas, socios y titulares de iniciativas peruanos e internacionales, sin jerarquizarlos por origen; comunicar el alcance nacional y la mayor presencia de la red en el norte y nororiente.

Estas opciones orientan la evaluación; no obligan a aplicar todos los recursos en todas las páginas.

## Responsive y estados

Los puntos de quiebre definidos por los estilos globales y de componentes Astro se ajustan al contenido. Los hover de navegación, CTA, enlaces, tarjetas, filtros y footer siguen siendo breves y consistentes. Mantener foco visible, navegación por teclado, contraste y legibilidad en móvil.

El menú móvil usa un botón con `aria-expanded` y `aria-controls`; Escape lo cierra y devuelve el foco al botón, seleccionar un enlace o hacer clic fuera lo cierra, y el cambio al viewport de escritorio limpia el estado. Sin JavaScript, el menú permanece visible en móvil y el botón no aparece. El año del footer se actualiza en el cliente.

## Movimiento e interacción

Se permiten entradas al desplazarse, transiciones de imagen y parallax sutil cuando dirigen la atención y refuerzan el contexto. Preferir CSS para hovers y transiciones sencillas; GSAP/ScrollTrigger queda disponible para efectos puntuales que no convenga resolver con CSS. Evitar incorporar un segundo motor de animación.

Mantener scroll nativo, contenido visible aunque JavaScript falle y animaciones que no bloqueen lectura ni interacción. Priorizar `transform` y `opacity`, ejecutar reveals una sola vez y limitar parallax a escritorio con puntero fino. Desactivar movimiento no esencial en móvil y respetar `prefers-reduced-motion`. Evitar video de fondo, bucles decorativos, scroll hijacking y efectos que retrasen el contenido principal.

El filtro de Sectores y el enlace contextual de WhatsApp en Contacto son mejoras progresivas cargadas solo en sus páginas. Contacto conserva su acción directa aunque JavaScript no esté disponible; cuando JavaScript está activo, acepta `tipo` solo para los motivos conocidos y prepara un mensaje que la persona puede revisar y editar en WhatsApp antes de enviarlo. Este sitio no incluye un formulario, no transmite mensajes ni almacena consultas.

Privacidad y Condiciones conservan sus avisos de borrador y no deben tratarse como documentos legales aprobados.

## Rutas y preview

Astro usa `build.format: 'preserve'`: la portada `src/pages/index.astro` se publica en `/` y las páginas de contenido conservan sus rutas `.html`, incluidas `/nosotros.html`, `/contacto.html` y `/terminos.html`. `src/pages/404.astro` compila a `dist/404.html`; Nginx sirve ese documento como cuerpo de una ruta desconocida sin cambiar su estado HTTP 404. El layout mantiene `noindex,nofollow` para el preview; esa política no se retira sin aprobación de publicación.
