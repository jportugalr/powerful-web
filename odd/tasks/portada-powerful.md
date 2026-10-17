# Portada POWERFUL

## Objetivo y autorización

Materializar una portada corporativa navegable, moderna, llamativa y sobria para POWERFUL. El usuario autorizó comenzar por la portada, construir directamente en código y usar verificación funcional normal (sin TDD estricto). Alcance local; sin push, PR ni despliegue remoto.

## Problema, público y alcance

La carpeta contiene documentación y marca, pero no aplicación ni repositorio Git. El público principal es la empresa/inversionista extranjero que busca representación en Perú. Los titulares de proyectos peruanos evalúan el respaldo institucional de la firma.

Incluye base Astro + TypeScript + Tailwind CSS, portada completa responsive, movimiento CSS/GSAP selectivo, navegación por secciones y contacto exploratorio honesto. No incluye otras páginas completas, CMS, formulario con envío real, traducción inglesa, proveedores o infraestructura remota.

Contenido separado de componentes; ES inicial e inglés futuro sin publicar rutas vacías. Conservar el PNG maestro V1.2 byte por byte. No inventar proyectos, métricas, personas, clientes, testimonios, experiencia ni contactos oficiales.

## Configuración de trabajo

- Ruta: delegada. Exploración preparatoria delegada porque requiere más de cuatro archivos; escritor delegado porque la implementación afecta múltiples archivos no triviales.
- TDD: desactivado para esta entrega; fuente: respuesta explícita del usuario del 2026-10-17. Verificación ordinaria obligatoria.
- Runner: `npm run check` (astro check) y `npm run build` (astro build); comprobación real de navegador con Playwright en P3.
- RDD: disabled/unmanaged; `gentle-ai review mode status` devuelve off, decidido por default. No activar ni iniciar review nativo.
- Git: trabajar en `main`, sin crear ni cambiar ramas. Commits Conventional Commits por unidad de trabajo.
- Entorno: WSL Ubuntu 24.04, Node v24.16.0 en `/home/jony/.nvm/versions/node/v24.16.0/bin`; cargar PATH explícitamente.
- Entrega: estrategia `single-pr` para una entrega coherente; no se autoriza crear ningún PR. Presupuesto previsto: aproximadamente 1200 líneas de autor, excluyendo lockfile y activos generados. El tamaño es orientativo; no minificar ni omitir verificación para reducirlo.
- Espejo Engram: PENDIENTE. No hay herramientas Engram disponibles. Topic previsto `odd/portada-powerful/tasks`, proyecto `powerful-web`; sincronizar documento completo y este localizador cuando esté disponible.

## Tareas

- [x] **P1 — Base técnica y contexto.** Inicializar aplicación y Git, configurar scripts reproducibles, registrar PRODUCT.md y preferencia code-first, preparar marca. El contrato visual pasa a P2 para cerrar primero la elección de composición. Ruta: delegada, múltiples archivos no triviales. Checks observados: instalación (287 paquetes, 0 vulnerabilidades reportadas), check 0 errores/avisos, build correcto con 0 páginas antes de implementación, PNG idéntico. Commit: `e5758af` (`chore: initialize Astro foundation for POWERFUL homepage`). RDD disabled/unmanaged.
- [x] **P2 — Portada completa.** Contrato elegido por el usuario: “Atlas del Pacífico”; navegación editorial, titular y acciones a la izquierda, fotografía contextual verificada de Miraflores a la derecha y trazo discreto. Se implementaron capacidades, sectores, proceso, firma, contacto/footer, menú accesible, CSS/GSAP selectivo y favicon propio. Anclas funcionales; sectores descritos como focos, sin credenciales inventadas. Contacto exploratorio que descarga un borrador local e indica claramente que no se envía. Ruta delegada por cambios coordinados; el padre integró. `npm run check`: 0 errores/avisos/hints; `npm run build`: 1 página; build Docker de producción correcto. Commit de trabajo: `65b84ad` (`feat: build POWERFUL Spanish homepage`).
- [x] **P3 — Verificación y entrega.** Revisión visual independiente `ship` sobre capturas de la parte superior a 1440×1000 y 390×844; screenshots guardados localmente en `.impeccable/review/`. Playwright en `8088`: 320/390/768/1440 px, sin overflow y foto cargada; menú móvil/Escape devuelve foco; `<details>` opera; formulario descarga `consulta-powerful.txt` y declara que no envía; reduced motion mantiene composición sin transform; consola limpia. Root y favicon HTTP 200; ruta inexistente conserva 404; `bash scripts/verify-docker.sh` pasa y confirma logo intacto, runtime Nginx UID 101 sin Node, puertos loopback. Detector Impeccable devuelve `[]`. Se creó `DESIGN.md` desde el sistema implementado. Ruta delegada para revisión/documentación, integración padre. Evidencia de implementación y cierre: `65b84ad` (`feat: build POWERFUL Spanish homepage`).

## Aceptación

El visitante identifica representación empresarial en Perú y encuentra una acción clara en el primer viewport. Las secciones son legibles y distintivas, la portada es operable en móvil/teclado y la animación no impide leer. El contacto explica su alcance real mientras no existan canales oficiales ni backend. Ninguna ruta futura o selector EN promete contenido ausente.

## Evidencia y progreso

- Exploración inicial: raíz solo contenía `Powerful/`; sin package.json, tests ni .git. El proyecto ahora está inicializado y se trabaja en `main`.
- SHA256 master: `762f5883c7218d45b4df0ab0f11b20eec1c931b4536f2cc8df7684227e74bbc4`.
- P1 verificado: Node24.16, Astro7.4, TypeScript6, Tailwind4.3; `npm run check` y `npm run build` correctos sobre scaffold (todavía sin páginas). El PNG copiado conserva SHA256 esperado. No se afirma prueba de interfaz.
- Composición: el usuario eligió explícitamente “Atlas del Pacífico” para construir en código: texto a la izquierda, foto estratégica de Lima a la derecha y una conexión gráfica sobria. Método code-first confirmado.
- Foto de contexto: Maria Camila Castaño, Pexels 7332783, Miraflores/Lima; descarga original `https://images.pexels.com/photos/7332783/pexels-photo-7332783.jpeg?cs=srgb&dl=pexels-mariacamila-7332783.jpg&fm=jpg`; ficha y licencia revisadas. Pexels permite uso web gratuito y no exige atribución; mantener fuente/crédito en metadatos locales del activo. No presentarla como proyecto de POWERFUL.
- Contenido final: titular “Su contraparte empresarial en Perú”; capacidades y proceso escritos como propuesta y alcance, sin trayectoria no verificada. El formulario prepara una descarga local; no solicita ni transmite a un canal corporativo.
- P2/P3: capturas revisadas muestran primero la navegación, titular, acciones y foto; primera captura de QA guardó la página desplazada y se recapturó en `scrollY=0` antes del veredicto `ship`. Pruebas de navegador se completaron con Playwright CLI usando el Chromium instalado en caché mediante `executablePath`; no se agregó Playwright al proyecto.
- Docker runtime local reconstruido desde `compose.production.yaml`; la pestaña de preview queda en `http://127.0.0.1:8088/`. Ambos contenedores responden según smoke.
- Engram sigue pendiente por herramienta no disponible; esta modificación también debe sincronizarse en `odd/portada-powerful/tasks`.
- Fallos conocidos: PATH inicial no cargaba Node; ruta NVM identificada y ejecutable verificado.
- Decisiones externas pendientes para fases futuras: hosting, persistencia de consultas, correo, datos legales y canales oficiales.

## Siguiente paso

Siguiente: sincronizar el documento completo en Engram cuando su herramienta esté disponible. Para continuar con las páginas interiores, definir primero sus contenidos verificables y canales oficiales; la versión inglesa requiere traducción revisada.
