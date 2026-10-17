# Sistema visual de POWERFUL

## Fuente de verdad

El prototipo aprobado vive en `web/`. Su HTML, sus clases y `web/assets/styles.css` gobiernan la apariencia del sitio. La hoja global de Astro conserva esos estilos; solo añade la visibilidad del botón móvil cuando JavaScript está disponible y los dos estados del icono de menú. No reinterpretar composición, copy ni interacciones durante el port.

## Identidad

- Azul profundo `#14263D`, azul nocturno `#0C1D31`, azul auxiliar `#1D3752`.
- Oro `#B79862` y oro claro `#D0B57F`.
- Marfil `#F4F1EA`, papel `#FCFBF8`, texto `#25364A`, secundario `#637185`.
- El header usa el derivado aprobado `web/assets/brand/wordmark-header.png`, recortado solo en márgenes transparentes del master V1.2. La copia servida vive en `public/brand/wordmark-header.png`; el master no se modifica.

## Tipografía

Inter es la familia del prototipo. Astro la carga localmente con `@fontsource-variable/inter`; el CSS conserva `Inter, "Segoe UI", Arial, Helvetica, sans-serif` como cadena de respaldo. La escala, pesos y tracking son los declarados por el prototipo. Las páginas mantienen `lang="es-PE"`.

## Inicio

La portada mantiene la cabecera blanca fija, el hero navy con órbitas y mapa de puntos dibujados en CSS, la franja editorial, tres tarjetas de servicios, el capítulo azul de sectores, el gráfico geométrico relacional, los cuatro pasos, mini-CTA y footer de cuatro columnas. El hero no usa fotografía. Los iconos permanecen como SVG de trazo; los gráficos geométricos del prototipo se mantienen en CSS.

Las clases originales (`hero-orbit`, `service-card`, `sector-pill-row`, `principle-art`, entre otras) se conservan para que la hoja del prototipo reproduzca la composición y sus estados. Los CTA y enlaces continúan a las rutas HTML del prototipo.

## Responsive y estados

Se conservan los puntos de quiebre originales de `web/assets/styles.css`: 1190, 1000, 760, 420 y 359 px. Hover de navegación, CTA, enlaces, tarjetas, pills, filtros y footer permanece definido en esa hoja. El foco visible es de 3 px y se mantiene el tratamiento de `prefers-reduced-motion`; el diseño sigue siendo legible y navegable con teclado.

El menú móvil usa un botón con `aria-expanded` y `aria-controls`; Escape lo cierra y devuelve el foco al botón, seleccionar un enlace o hacer clic fuera lo cierra, y el cambio al viewport de escritorio limpia el estado. Sin JavaScript, el menú permanece visible en móvil y el botón no aparece. El año del footer se actualiza en el cliente.

El prototipo no tiene entradas animadas, parallax ni animación de scroll. No se añade GSAP ni una segunda capa de movimiento. El filtro de Sectores y la validación de Contacto son mejoras progresivas cargadas solo en sus páginas. Contacto acepta `tipo` únicamente para las opciones conocidas y muestra una validación local de demostración; no transmite ni almacena datos. Si JavaScript no está disponible, el control de prueba permanece deshabilitado y el formulario no puede enviarse por GET.

Privacidad y Condiciones conservan sus avisos de borrador y no deben tratarse como documentos legales aprobados.

## Rutas y preview

Astro usa `build.format: 'preserve'`: la portada `src/pages/index.astro` se publica en `/` y las páginas de contenido conservan sus rutas `.html`, incluidas `/nosotros.html`, `/contacto.html` y `/terminos.html`. `src/pages/404.astro` compila a `dist/404.html`; Nginx sirve ese documento como cuerpo de una ruta desconocida sin cambiar su estado HTTP 404. El layout mantiene `noindex,nofollow` para el preview; esa política no se retira sin aprobación de publicación.
