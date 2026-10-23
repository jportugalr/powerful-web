# Marca registrada para logo y wordmark

## Objetivo

Mostrar el símbolo ® junto al emblema del pie y al wordmark del encabezado, con el arte original intacto.

## Problema y motivo

Las dos imágenes visibles de marca no muestran la marca registrada. El arte maestro aprobado debe conservarse, así que se crearán variantes derivadas para las imágenes que usa el sitio.

## Alcance autorizado

- Crear variantes PNG derivadas de `public/brand/emblem-dark-transparent.png` y `public/brand/wordmark-header.png`, añadiendo ® como capa vectorial precisa.
- Actualizar `SiteFooter.astro` y `SiteHeader.astro` para usar las variantes.
- Conservar intactos los PNG fuente, `public/brand/powerful-master.png`, los favicons y el resto de cambios locales.
- Sin push, PR ni despliegue remoto.

## Restricciones y criterios de aceptación

- El único cambio visual de cada derivación es un ® limpio y legible en posición de superíndice, junto al emblema o al wordmark.
- Conservar transparencia y todos los píxeles originales del arte; no redibujar, deformar, recortar ni recolorear la marca.
- Mantener el símbolo en el encabezado y el pie según el formato de marca ya usado; accesibilidad e idioma no cambian.
- No incluir ® en favicons de tamaños pequeños.
- No modificar el arte maestro: `source-assets/brand/BRAND_MANIFEST.json` y su sidecar exigen conservarlo byte por byte.

## Verificación

- TDD: OFF, por decisión explícita registrada en `README.md:89`.
- Runner funcional: `npm run check` y `npm run build`; además revisar visualmente los dos recursos derivados y la presentación en el sitio.
- `git diff --check`; comparar los PNG fuente y otros cambios del usuario para confirmar que permanecen intactos.

## Tarea

- [x] **BR-01 — Añadir ® a las variantes visibles de marca.** Se crearon `public/brand/emblem-dark-transparent-registered.png` y `public/brand/wordmark-header-registered.png` con una capa vectorial; `SiteFooter.astro` y `SiteHeader.astro` ya usan esas derivaciones. Ruta: delegated direct. Evidencia de delegación: el mapeo de marca requirió más de cuatro recursos; el escritor delegado cubrió dos imágenes derivadas y dos referencias Astro no triviales. TDD OFF según `README.md:89`; `npm run check` pasó (44 archivos, 0 errores, warnings o hints), `npm run build` generó 15 páginas, la comparación con Sharp encontró 0 píxeles distintos en el arte fuente no transparente, la vista Playwright confirmó ambas imágenes cargadas y `git diff --check` pasó. RDD: `disabled/unmanaged` según `README.md:89`; no se ejecutó review nativo. Work-unit commit: pendiente.

## Progreso

- Mapeo de solo lectura completado: `wordmark-header.png` se usa en el encabezado; `emblem-dark-transparent.png` se usa en el pie; el arte maestro no se referencia y está documentado como inmutable.
- El primer ensayo de edición generativa alteró contornos del emblema y fue descartado; las derivaciones usarán una capa vectorial determinista.
- Derivaciones verificadas: emblema 1254×1254 px y wordmark 2105×277 px. El build copia ambas a `dist/`; Playwright verificó `complete: true` y las dimensiones intrínsecas esperadas en cabecera y pie.
- Previsión de cambios authored: menor a 400 líneas; solo dos recursos derivados y referencias Astro. Estrategia de entrega: `ask-on-risk` por defecto.
- Siguiente paso: registrar la identidad del work-unit commit local en esta tarea y su espejo de Engram.
