# Portada POWERFUL

Target: `src/pages/index.astro`; related `src/styles/global.css`, `src/scripts/home.ts`, `src/content/es.ts`.
Mode: Persuade. Build path: code, explícitamente elegido por el usuario.

## Audience and action

Empresa/inversionista extranjero que necesita representación y una contraparte en Perú. Debe entender el alcance y avanzar a preparar su consulta. Los titulares de proyectos locales evalúan respaldo. Sin evidencia de trayectoria: se explica la firma, alcance y proceso, sin inventar credenciales. Contacto exploratorio local, sin envío ni recepción simulada.

## Direction contract

THESIS: Atlas del Pacífico. Una relación entre objetivos del exterior y conocimiento del contexto peruano; una fotografía concreta y una lectura abierta sustituyen el mosaico de servicios idénticos.

OWN-WORLD: marfil #F4F1EA, navy #14263D y oro #B79862. Manrope lleva mensaje y navegación; Newsreader aporta una voz editorial puntual. Líneas precisas, superficies amplias y controles de contorno claro. Sin tarjetas uniformes ni rótulos sobre titulares. La persona consulta desde una oficina iluminada: fondo claro para leer, navy en un pasaje completo para cambiar el ritmo.

STORY: identificar una contraparte en Perú, comprender capacidades y focos, reconocer cómo empieza la relación, preparar una consulta. La imagen es contexto de Lima, nunca prueba de un proyecto.

FIRST VIEWPORT: marca y navegación horizontal; titular amplio y acciones a la izquierda en siete columnas, costa de Miraflores a la derecha en cinco. La imagen vertical llega al borde del campo visual. Una relación HTML legible, «Su empresa — POWERFUL — Perú», concreta el papel de la firma bajo las acciones; los conectores son líneas precisas, sin mapas ni datos inventados. Acción Conversemos visible junto al texto. En móvil el texto precede una fotografía más corta sin perder CTA.

FORM: atlas empresarial/publicaciones de comercio internacional, candidato Atlas del Pacífico, seed `f939704b`; dirección elegida explícitamente. La relación empresa–POWERFUL–Perú se conecta durante una entrada de un segundo, coordinada con una máscara rectangular breve de la fotografía. Lima se recorta hacia ciudad y Pacífico con overscan. Scroll nativo y parallax de 40 px solo desde 960 px, puntero fino y sin reducción de movimiento. Sectores recibe una sola entrada editorial de imagen/título; el resto conserva su lectura estática. Contenido visible por defecto y con JavaScript desactivado; reduced-motion muestra la composición final. GSAP matchMedia revierte efectos al cambiar preferencias o breakpoint.

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance

## Photography

Maria Camila Castaño, Pexels 7332783. Costa urbana de Miraflores, Lima. Ficha: https://www.pexels.com/photo/a-coastal-city-by-the-beach-7332783/ . Licencia: https://www.pexels.com/license/ . Uso web permitido, atribución opcional; no implica respaldo de la fotógrafa. Archivo local `public/images/miraflores-lima.webp`, reducido a 1500 px/WebP84 desde la descarga original. Contexto, no obra ni proyecto de POWERFUL.

## Refinamiento de Inicio

Se conserva la dirección Atlas elegida, seed `f939704b`, la marca maestra y la paleta. Sectores se convierte en un capítulo visual: materiales a la izquierda, encabezado Newsreader y acordeón de focos a la derecha; en móvil se apilan. Capacidades combina introducción breve y filas de servicios; el proceso conserva sus cuatro pasos reales. La firma usa su descripción factual como pausa editorial, sin una segunda declaración retórica. Se eliminan compás, curva libre y slogans secundarios repetidos.

La fotografía conceptual de materiales se generó con builtin Imagegen el 2026-10-17: mineral de cobre, lámina de cobre, acero y concreto bajo luz lateral, fondo navy y marfil. No representa un proyecto ni respaldo. Caption visible «Ilustración conceptual» y alt descriptivo. Original preservado en `output/imagegen/sector-materials-source.png`; prompt íntegro en `output/imagegen/materials-prompt.txt` y en los sidecars de cada WebP. Derivados 1120×1400 y 640×800, WebP82, lazy, srcset y dimensiones explícitas.

Presupuesto: sin nueva dependencia; GSAP instalado aporta ScrollTrigger, que incrementa el JavaScript de 72073 B a 115978 B sin comprimir. Entrada principal de aproximadamente un segundo; una entrada de Sectores, sin pin, snap, smooth-scroll ni listeners de scroll propios. Capas de entrada y parallax separadas. CSS de base siempre visible; sin bucles. El smoke HTTP de Docker con `Accept-Encoding: gzip` verificó un payload JS de 45390 B, `Content-Encoding: gzip` y `Vary: Accept-Encoding`; la base anterior se servía sin gzip (28004 B gzip calculados). No se comprimen WebP ni fuentes de nuevo.

Cierre 2026-10-17: finish review `ship`. QA de navegador sin desborde a 320/390/768/1440 px; menú/Escape, acordeones, descarga, reduced-motion y contenido sin JS comprobados, sin errores de consola o recursos. Parallax solo en escritorio compatible y Sectores una vez; logo maestro intacto. Docker check/build sin errores, `nginx -t` y smoke HTTP aprobados. No se midieron FPS ni se probaron dispositivos físicos.

## Open decisions

Canales oficiales, datos legales, hosting y backend de contacto; la portada no los inventa. Validación final de copy corporativo pendiente. Español inicial sin selector inglés vacío.
