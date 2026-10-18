# Encargo histórico de fotografía auténtica de Piura para el hero

> **SUPERSEDIDO — 2026-10-17.** La dirección vigente de POWERFUL es alcance nacional en Perú, con mayor presencia de la red en el norte y nororiente. Este brief centrado exclusivamente en la ciudad de Piura se conserva como registro histórico: no enviarlo ni usarlo para seleccionar la imagen actual de portada. Consulta [portada.md](portada.md) y [DESIGN.md](../../DESIGN.md) para la dirección vigente.

Fecha: 2026-10-17. Dirección: Piura como ciudad de partida de POWERFUL, Perú como enfoque del sitio. Relacionado con [portada.md](portada.md) y [DESIGN.md](../../DESIGN.md).

Este encargo sirve para un agente que localice fotografías existentes o para un fotógrafo que realice una captura. No es un prompt de generación de imágenes. La selección y la integración en la web quedan pendientes; P5 solo prepara este brief.

## Texto para enviar al agente o fotógrafo

Buscamos una fotografía documental auténtica de la **ciudad de Piura, Perú**, para la portada de POWERFUL, una firma que parte de Piura y se dirige a empresas extranjeras interesadas en el Perú. La foto debe ofrecer contexto local y confianza, sin presentarse como oficina, instalación, cliente o proyecto de POWERFUL.

Localiza una imagen existente con autoría y derechos verificables, o realiza una captura nueva autorizada. El lugar debe ser identificable como la ciudad de Piura mediante la ficha original y evidencia de ubicación. No basta con que el archivo se llame «Piura» o esté etiquetado como Perú. No sustituir la ciudad por Lima ni por otra localidad del departamento de Piura. Si no puedes verificarla, informa el vacío y no la propongas como documental de Piura.

Entrega un **master horizontal 4:3 de al menos 2400×1800 px**, a resolución original y sin ampliación artificial. Su destino es una composición con texto a la izquierda y fotografía a la derecha: sitúa el motivo principal en la mitad derecha y deja aire a su alrededor para un recorte vertical en escritorio y otro más ancho en móvil. El texto estará en su propia columna, sin necesidad de incrustarlo en la imagen. Conserva margen de recorte en bordes superior, inferior y laterales; entrega el encuadre completo.

Preferimos una escena urbana real, legible y sobria, con luz natural, horizonte nivelado y detalle suficiente para reconocer el lugar. Color natural y contraste moderado que convivan con navy, marfil y oro. Evita grandes áreas vacías de cielo, HDR intenso, filtros dramáticos, montajes y escenificaciones corporativas. No añadir texto, marcas de agua, logotipos ni elementos ficticios. Elige un encuadre sin marcas ni logotipos visibles; no inventes proyectos, clientes, personas, edificios ni hitos. No usar generación, relleno generativo o sustitución de elementos para construir una supuesta vista documental de Piura.

## Entrega requerida

1. Original JPEG/PNG de calidad máxima, dimensiones y tamaño en bytes; conservar EXIF cuando exista e indicar cualquier ausencia. Incluir fecha de captura conocida y una lista de ajustes realizados; no inventar metadatos.
2. URL de la ficha original o del portafolio/registro de la captura; para una fotografía encargada, identificación del archivo y referencia del encargo. Incluir nombre del fotógrafo y URL de autor o medio de contacto documentado.
3. Licencia: nombre, versión o fecha, URL y copia o localizador del permiso aplicable. Confirmar que cubre el uso web comercial y las adaptaciones/recortes previstos; detallar atribución, restricciones y vigencia. No sustituir el permiso por una afirmación genérica de «libre de derechos».
4. Permisos aplicables de personas reconocibles, propiedad o captura, cuando correspondan, con referencia documental; si no son necesarios, explicar el motivo. Una candidatura con permisos pendientes debe identificarse como pendiente, no como lista para publicar.
5. Ubicación precisa: ciudad de Piura, lugar o punto de captura, orientación si se conoce y enlace de mapa/coordenadas cuando estén disponibles. Adjuntar la evidencia que permite verificar el lugar; no inferir coordenadas ni identidad de hitos.
6. Crédito recomendado y propuesta de alt factual basada en lo que muestra la imagen. No afirmar experiencia, instalaciones ni proyectos de POWERFUL.
7. Un sidecar junto al original con esos datos y el nombre del archivo. Mantener los originales y la procedencia al preparar derivados; no generar exportaciones finales hasta aprobar el encuadre.

## Sidecar mínimo

Completar los valores con evidencia; usar `null` y una nota de pendiente cuando falte información, sin inventarla.

```json
{
  "file": null,
  "classification": "documentary_photograph",
  "photographer": { "name": null, "url": null },
  "source_url_or_assignment": null,
  "captured_at": null,
  "location": {
    "city": "Piura",
    "country": "Peru",
    "place": null,
    "map_url_or_coordinates": null,
    "verification_evidence": null
  },
  "license": {
    "name_and_version": null,
    "url_or_permission_record": null,
    "commercial_web_and_cropping": null,
    "attribution": null,
    "restrictions_or_expiry": null
  },
  "applicable_permissions": null,
  "dimensions_px": { "width": null, "height": null },
  "bytes": null,
  "edits": [],
  "credit": null,
  "suggested_alt": null,
  "verification_status": "pending",
  "pending_notes": []
}
```

## Revisión antes de usar

Aceptar solo una fotografía con ciudad, autor, fuente y derechos comprobados, resolución suficiente y recortes viables. Mantener como pendientes las candidaturas incompletas. Tras seleccionar la imagen, preparar WebP responsivos de referencia 1200×900 y 640×480, con dimensiones explícitas, y evaluar el encuadre final en escritorio y móvil. El archivo histórico de Miraflores/Lima no satisface este encargo y no debe renombrarse como Piura.
