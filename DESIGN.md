# Sistema visual de POWERFUL

## Fuente de dirección y evolución

El prototipo aprobado vive en `web/` y es la base visual y funcional del sitio, no una composición congelada. Conservamos su identidad, su jerarquía editorial y los patrones que funcionan; podemos evolucionar composición, fotografía, ilustración y movimiento cuando ayuden a explicar mejor POWERFUL y a generar confianza. Evaluamos cada cambio en escritorio y móvil, manteniendo navegación, contenido verificable, accesibilidad y rendimiento.

POWERFUL es una iniciativa centrada en el Perú. Sus clientes pueden ser empresas e inversionistas nacionales o internacionales; se prioriza el capital extranjero, sin excluir el nacional. Los proyectos y la red de contactos tienen alcance nacional, con mayor presencia en el norte y nororiente. La comunicación no debe sugerir oficinas u operación fuera del Perú ni inventar departamentos, clientes o proyectos.

## Identidad

- Azul profundo `#14263D`, azul nocturno `#0C1D31`, azul auxiliar `#1D3752`.
- Oro `#B79862` y oro claro `#D0B57F`.
- Marfil `#F4F1EA`, papel `#FCFBF8`, texto `#25364A`, secundario `#637185`.
- El header usa el derivado aprobado `web/assets/brand/wordmark-header.png`, recortado solo en márgenes transparentes del master V1.2. La copia servida vive en `public/brand/wordmark-header.png`; el master no se modifica.

## Tipografía

Inter es la familia del prototipo. Astro la carga localmente con `@fontsource-variable/inter`; el CSS conserva `Inter, "Segoe UI", Arial, Helvetica, sans-serif` como cadena de respaldo. La escala, pesos y tracking son los declarados por el prototipo. Las páginas mantienen `lang="es-PE"`.

## Composición, fotografía y gráficos

- La portada conserva el contraste navy y marfil, los acentos oro, la jerarquía tipográfica, los servicios, los sectores y el proceso del prototipo. El hero puede comunicar proyectos en todo el Perú y la mayor presencia de la red en el norte y nororiente, sin convertir esa presencia en límite geográfico.
- Si se incorpora una fotografía documental, debe representar una ubicación peruana verificable, con derechos de uso comprobables y sin presentarla como oficina, cliente o proyecto de POWERFUL. La solicitud anterior centrada exclusivamente en Piura está supersedida; no seleccionar una ciudad o región específica sin necesidad editorial y evidencia.
- Las tarjetas de Sectores pueden evolucionar de sus franjas CSS a imágenes editoriales coherentes para minería y minerales, energía e hidrocarburos, infraestructura y construcción, inmobiliario, y comercio exterior y materias primas. Usar fotografías licenciadas o imágenes genéricas de sector, incluidas composiciones generadas, sin sugerir proyectos ejecutados, instalaciones, clientes ni respaldo de POWERFUL. No se requiere un caption visible que diga «conceptual» o «ilustrativa» para esos recursos genéricos; conservar su clasificación, origen, licencia o prompt en metadata/sidecar. No es necesario añadir fotos a todas las páginas: servicios, proceso y contacto pueden apoyarse en tipografía, SVG e infografías propias.
- Integración vigente P6: las cinco tarjetas de `/sectores.html` muestran imágenes genéricas aportadas por el usuario (cobre, tubería, acero/concreto, residencial y carga). El marco conserva 180 px de alto. WebP82 panorámicos 640×240 y 1280×480, con recorte 640×400 para móvil hasta 420 px; `picture`, `srcset`, `sizes`, dimensiones explícitas y carga diferida. Originales intactos en `web/imagenes/`; procedencia, hashes y transformaciones en `public/images/sectors/manifest.json`. El prompt exacto no está archivado en el repo y no se inventa. No hay caption conceptual visible. La imagen urbana aportada no se usa como Piura; el hero gráfico sigue pendiente de una foto documental auténtica.
- Si se usa un mapa o diagrama de conexión, ubicar el Perú con precisión y distinguir una relación conceptual de datos o alianzas reales. El énfasis en el norte y nororiente no autoriza inventar nodos, departamentos, cifras ni ubicaciones. Evitar mapas decorativos incorrectos, globos, redes genéricas, edificios genéricos, apretones de manos y logotipos ajenos.
- No generar ni editar el logotipo. No publicar retratos de equipo, testimonios, socios, clientes, instalaciones o proyectos sin validación y autorización. La imagen no prueba experiencia ni respaldo.
- Preparación inicial para imágenes: cualquier fotografía documental peruana seleccionada para portada requiere ubicación y derechos comprobables. Definir formato y recortes según la composición aprobada; conservar los originales PNG/JPEG y registrar procedencia, licencia o prompt, clasificación conceptual y texto alternativo sugerido.
- Servir WebP o AVIF con fallback cuando convenga, mediante `<picture>`/`srcset`, dimensiones explícitas y tamaños responsivos. Cargar con prioridad la imagen principal y diferir las imágenes fuera del primer viewport. Usar alt descriptivo cuando la foto aporta información y `alt=""` si es decorativa.

Antecedente supersedido, 2026-10-17: P2–P4 siguieron «Atlas del Pacífico» y usaron una foto de Miraflores/Lima de Maria Camila Castaño, [Pexels 7332783](https://www.pexels.com/photo/a-coastal-city-by-the-beach-7332783/) ([licencia](https://www.pexels.com/license/)), conservada en `public/images/miraflores-lima.webp`. Ese archivo muestra Lima y no debe identificarse como otra localidad. También se conservan los materiales genéricos generados para Sectores y sus sidecars. La decisión posterior de centrar la imagen en Piura fue válida como antecedente, pero quedó supersedida por el alcance nacional actual, con mayor presencia de la red en el norte y nororiente. La portada actual basada en el prototipo no monta esas imágenes.

## Oportunidades visuales para evaluar

1. Comunicar el alcance nacional de proyectos y red, mostrando el norte y nororiente como zonas de mayor presencia solo con recursos geográficos verificables.
2. Mantener las imágenes diferenciadas de los cinco sectores integradas en P6, con tratamiento compartido y sin convertirlas en supuestos casos de éxito.
3. Reducir la repetición de órbitas, anillos y puntos: reservar el motivo de conexión para una sección y variar el resto con fotografía, espacio editorial e infografía.
4. Mantener un primer viewport claro para empresas e inversionistas nacionales e internacionales: proyectos en Perú, función de POWERFUL y una acción de contacto visible.

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
