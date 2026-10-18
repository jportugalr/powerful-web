# Catálogo visual CSS para POWERFUL

## Objetivo

Evaluar el uso de fotografía, fondos, degradados y propiedades CSS actuales para evolucionar la identidad visual aprobada de POWERFUL, y documentar recomendaciones aplicables al sitio.

## Problema y motivo

El prototipo aprobado se apoya en fondos y recursos gráficos CSS, mientras la dirección visual puede incorporar fotografía de Piura y de los sectores. Hace falta distinguir qué comunica mejor cada recurso y qué técnicas aportan calidad sin introducir peso, problemas de soporte o movimiento innecesario.

## Alcance autorizado

- Crear `CATALOGO_VISUAL_CSS.md` con una evaluación comparativa y un catálogo priorizado, respaldado por documentación técnica primaria actual.
- Relacionar las recomendaciones con POWERFUL: punto de partida en Piura, cobertura del Perú, público extranjero que busca representación y paleta existente.
- No modificar componentes, estilos, imágenes, dependencias ni otros documentos de dirección durante esta unidad.
- Trabajar en la rama actual `main`; sin crear ramas, push, PR ni despliegue.

## Restricciones

- La fotografía debe tener procedencia y derechos de uso claros; no presentar imágenes conceptuales como evidencia de proyectos, clientes u oficinas.
- El punto de partida local es Piura y el enfoque es el Perú; no sustituir Piura por Lima.
- Conservar la identidad institucional y evitar un uso genérico o repetitivo de gradientes, órbitas, redes o efectos.
- Priorizar lectura, contraste, movimiento reducido, carga responsiva y degradación estática cuando una característica no tenga soporte uniforme.
- El video enlazado por el usuario no ofrece transcripción/frames accesibles; describir solo lo que permiten verificar sus metadatos y no atribuirle una implementación no comprobada.

## Configuración de verificación

- TDD: desactivado para esta entrega documental; la instrucción explícita de verificación funcional normal consta en `PRODUCT.md`.
- Runner aplicable: no hay suite para Markdown; usar lectura posterior del documento y `git diff --check`.
- Estrategia de entrega: `ask-on-risk` (predeterminada); previsión inferior a 400 líneas añadidas y eliminadas, por lo que no se solicita una cadena.

## Ruta de implementación

- Ruta elegida: delegated direct.
- Evidencia del trigger de mapeo: la evaluación necesitó relacionar `DESIGN.md`, `PRODUCT.md`, los estilos y el comportamiento JS del prototipo (4 fuentes) y contrastarlos con soporte web actual; se solicitó primero una exploración de solo lectura.
- Evidencia del trigger de escritor: la unidad requiere el documento de recuperación y el catálogo como dos artefactos documentales; el catálogo se asigna a un escritor acotado y el documento de trabajo lo mantiene el agente coordinador.

## Criterios de aceptación

- El catálogo separa con claridad el papel de la fotografía del de los fondos CSS y evalúa su integración con capas de color y degradados.
- Incluye propiedades/técnicas útiles para POWERFUL, prioridad, aplicación propuesta, soporte conocido y límites de rendimiento o accesibilidad.
- Distingue funciones maduras de mejoras progresivas o experimentales y recomienda fallbacks apropiados.
- Incluye fuentes primarias enlazadas y fecha de consulta.
- No se modifica código ni se amplía el alcance del sitio.

## Tareas

- [x] **CSSV-1 — Documentar el catálogo de fotografía, fondos, degradados y CSS moderno.** Reunir la comparación visual, las propiedades priorizadas, el análisis del Short y las fuentes técnicas actuales. Verificar lectura integral, enlaces y `git diff --check`, guardar el espejo Engram y registrar el commit de esta unidad.

## Progreso y siguiente paso

- Exploración y contraste de fuentes primarias completados; el Short se pudo identificar por su título, pero no se pudo verificar su técnica exacta mediante frames o transcripción.
- Catálogo escrito en español y leído completo. Las fuentes técnicas primarias enlazadas se contrastaron con MDN y documentación de navegadores/W3C; `git diff --no-index --check` para los archivos nuevos no reportó errores de whitespace (devuelve 1 porque cada archivo aún no está indexado).
- El espejo Engram fue guardado y leído de vuelta; el contenido coincide con esta versión del documento, salvo el salto de línea final que Engram elimina al guardar.
- Siguiente paso: crear el commit de trabajo en `main` y registrar su identidad en este documento y en el espejo.
