# Sistema visual de POWERFUL

Guía de implementación basada en la portada existente (`src/pages/index.astro`, `src/styles/global.css`, `src/content/es.ts` y `src/scripts/home.ts`). Describe el estado actual; el brief de portada fija la dirección editorial y esta página es su única aplicación por ahora.

## Identidad y color

- **Marfil `#F4F1EA`**: fondo principal y superficies claras.
- **Azul profundo `#14263D`**: texto principal, botones y sección de sectores.
- **Oro `#B79862`**: acento contenido en el trazo de conexión. Para texto destacado sobre marfil se usa el tono más oscuro `#80622F`.
- **Apoyos existentes**: texto secundario `#4E5B66`, líneas `#C9C9C1` y superficie de firma `#E9E7DF`. En la sección navy, texto secundario `#C8CFD4` y líneas `#4D5A69`.

El logotipo maestro se sirve desde `public/brand/powerful-master.png`. Conservar el archivo aprobado byte por byte: no reconstruirlo, recolorearlo ni sustituirlo. La identidad combina fondos amplios, reglas finas, contornos claros y pocos acentos; no usa tarjetas repetidas como estructura de página.

## Tipografía y jerarquía

`Manrope Variable` es la voz principal para navegación, cuerpo, controles y encabezados. `Newsreader Variable` se reserva para la declaración editorial de la firma. Ambas fuentes se cargan localmente desde Fontsource. No hay una tercera familia definida.

La lectura va del titular principal al texto breve y sus dos acciones; después, cada sección usa un `h2` y una introducción, con listas y pasos como contenido. El `h1` usa peso 500, interlineado compacto y tamaño fluido; los `h2` mantienen peso 500. Los títulos se equilibran con `text-wrap: balance`, y los párrafos con `pretty`. El acento del titular es color plano, nunca texto degradado. El statement en Newsreader funciona como pausa editorial, no como otra voz de interfaz.

## Composición responsive

El campo de contenido llega hasta 1320 px, con margen lateral de 56 px en escritorio, 36 px hasta 1199 px, 20 px hasta 719 px y 16 px hasta 359 px.

- **Escritorio, desde 1200 px**: navegación horizontal; hero en dos columnas (`1.12fr / 1fr`), texto a la izquierda y fotografía vertical a la derecha. Las secciones se resuelven con pares de columnas, listas con reglas y una secuencia de cuatro pasos.
- **1200–959 px**: se estrechan márgenes, navegación, titular y separación; se conserva el hero de dos columnas.
- **959–720 px**: header de 90 px; el hero sigue en dos columnas. Introducciones y bloques se compactan; capacidades pasan a dos columnas y el proceso a dos por fila.
- **Hasta 719 px**: header de 84 px y menú desplegable; el hero pasa a una columna, primero texto y acciones y luego foto de 320 px. Las secciones apilan contenido y el formulario ocupa una columna.
- **Hasta 359 px**: márgenes de 16 px, tamaños de titular reducidos, acciones del hero apiladas, foto de 270 px y proceso en una columna.
- **Desde 1600 px**: la foto del hero aumenta a 610 px y el texto recibe más espacio superior.

Los breakpoints implementados son 1599/1600, 1199/1200, 959/960, 719/720 y 359/360 px. Si cambia el copy, comprobar que no rompa el orden texto–foto ni el CTA visible en el primer tramo móvil; el inglés puede necesitar más espacio.

## Movimiento e interacción

La entrada del hero es el momento de movimiento principal: el titular y el texto suben unos píxeles, la foto reduce una escala inicial sutil y el trazo SVG se dibuja una vez. GSAP solo activa esta entrada con `prefers-reduced-motion: no-preference`. Con reducción de movimiento, el CSS desactiva desplazamiento suave y acorta transiciones y animaciones a una duración imperceptible; la composición final permanece visible.

Las secciones alternan superficies claras con un pasaje navy. Sectores usa `<details>/<summary>` nativo y deja abierto el primero al cargar. Los enlaces y botones tienen estados hover discretos; los enlaces subrayan y el CTA invierte a fondo navy.

## Controles y accesibilidad

Mantener HTML semántico, un `h1`, encabezados de sección asociados mediante `aria-labelledby`, navegación con nombre accesible y el enlace de salto al contenido. Los SVG ornamentales llevan `aria-hidden`. El menú móvil expone `aria-expanded` y `aria-controls`, se cierra al elegir un enlace, al hacer clic fuera o con Escape, y devuelve el foco al botón al cerrarse con Escape. Tras seguir un enlace en móvil, el destino recibe foco temporal.

El foco visible usa contorno de 2 px con separación de 6 px y contraste adaptado al bloque navy. Los campos tienen etiquetas asociadas, límites y validación nativa; el resultado de descarga se anuncia con `role="status"` y `aria-live="polite"`. Preservar el comportamiento de teclado y no comunicar estado solo mediante color o iconos.

## Fotografía y recursos

El hero muestra la costa urbana de Miraflores, Lima (`public/images/miraflores-lima.webp`), recortada en `object-fit: cover`. Es fotografía contextual, no evidencia de un proyecto ni respaldo de POWERFUL. El brief atribuye la foto a Maria Camila Castaño en Pexels, imagen 7332783, y registra sus fuentes: [ficha](https://www.pexels.com/photo/a-coastal-city-by-the-beach-7332783/) y [licencia](https://www.pexels.com/license/). Mantener esa procedencia si se reemplaza o reutiliza el recurso.

El trazo SVG de conexión y el compás son geometría ornamental, no ilustraciones de proyectos. Los iconos existentes son SVG de trazo fino; conservar estilo y peso coherentes.

## Contenido y futuras páginas ES/EN

El contenido de la portada en español vive separado de la plantilla en `src/content/es.ts`; conservar esta separación al añadir inglés y usar la misma estructura de datos para ES/EN. La página declara `lang="es"` y no hay selector de idioma implementado. El producto prevé `/en/`, pero no publicar una ruta inglesa vacía: falta traducción revisada y decisión de navegación bilingüe. Mantener anchors, títulos y etiquetas accesibles en el idioma de cada página y revisar desbordes con el texto inglés.

Usar lenguaje prudente y centrado en representación, articulación y alcance acordado. Los sectores son focos de interés, no cartera ni experiencia acreditada. No inventar clientes, proyectos, resultados, métricas, nombres, datos legales ni canales corporativos. El contacto actual informa que no hay canales listos; con JavaScript, el formulario solo valida y descarga `consulta-powerful.txt` en el dispositivo, sin enviar datos. No describirlo como recepción de consultas ni prometer backend.

## Aún no definido

Están pendientes los canales oficiales, datos legales, hosting y backend de contacto, además de la validación final del copy corporativo. No están definidas las páginas interiores, el diseño de la futura versión inglesa ni un sistema completo de tokens más allá de los valores usados por la portada.
