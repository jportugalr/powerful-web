# Contacto directo por WhatsApp

## Objetivo

Reemplazar el formulario de demostración de `/contacto.html` por una acción de contacto directa a WhatsApp, con el número oficial `+51947982249`, y mantener la identidad visual y los recorridos existentes de POWERFUL.

## Problema y motivo

El formulario actual solo valida localmente y muestra un resultado de demostración: no envía ni guarda consultas. El cliente solicita contacto por WhatsApp. El número oficial fue proporcionado en esta conversación.

## Alcance autorizado

- Sustituir el formulario y su estado de demostración por un panel editorial con CTA de WhatsApp; sin botón flotante.
- Mantener la página `/contacto.html`, su explicación de públicos y el tono corporativo.
- Reutilizar los motivos `?tipo=` reconocidos en enlaces para preparar un mensaje contextual que la persona pueda revisar y editar antes de enviarlo.
- Actualizar copy y avisos canónicos que describen la demostración, el formulario o la selección del motivo.
- Retirar el CTA inferior redundante únicamente en Contacto, si su integración permite hacerlo sin alterar las otras páginas.
- Actualizar `DESIGN.md` para reflejar el canal aprobado y el comportamiento real.
- No añadir correo, horario, promesa de respuesta, API, automatización o analítica sin datos y alcance aprobados.

## Restricciones

- No modificar el logotipo ni salir de la paleta, tipografía y estilo de botones actuales.
- Mantener navegación, rutas, demás páginas y CTA existentes.
- Preservar todo el trabajo local ajeno a esta tarea.
- Trabajar en la rama actual `main`; no publicar ni desplegar.

## Criterios de aceptación

- La página de Contacto no presenta campos, validaciones ni éxito de demostración; muestra una acción clara de WhatsApp al número oficial.
- Un motivo válido de `?tipo=` puede contextualizar el texto precargado; el texto queda editable y no se envía sin acción explícita de la persona.
- Mensajes, avisos y descripción de privacidad ya no afirman que esta página simula un formulario que no transmite datos.
- El diseño usa los componentes, colores, tipografía, espaciado y foco visible del sitio; no aparece botón flotante.
- Los CTA globales y el footer de las otras páginas siguen intactos; Contacto no se invita a sí mismo como única acción siguiente.
- `npm run check`, `npm run build` y `git diff --check` pasan; revisar visualmente escritorio y móvil en el preview local.

## Tareas

### WA-1 — Reemplazar el flujo de demostración por contacto directo

- [x] Sustituir el formulario por el panel CTA de WhatsApp y soportar los motivos válidos de contacto.
- [x] Retirar script/estilos exclusivos de la demostración que queden sin uso.
- [x] Corregir copy canónico, descripción de privacidad y sistema visual/documentación relacionado.
- [x] Validar comandos y preview local en escritorio/móvil; conservar el resto de CTA.

Ruta: delegated direct — el cambio abarca 4+ fuentes canónicas interdependientes; se delega un único escritor acotado. Preparación por exploración delegada previa en esta conversación.

Pronóstico inicial: ~220 líneas añadidas + eliminadas (sin documentos generados); estrategia de entrega: `ask-on-risk`. Conteo observado de las fuentes: 257 líneas añadidas + eliminadas, aún bajo el presupuesto de 400.

TDD: desactivado para este cambio, confirmado por el usuario. Runner funcional disponible: scripts `check` (`astro check`) y `build` (`astro build`) del `package.json`.

RDD: `gentle-ai review mode status` indicó `off (decided by default)`; no se solicitará ni ejecutará review. Entrega: disabled/unmanaged.

## Evidencia y progreso

- Rama actual `main`, base HEAD al iniciar `3316336 docs(odd): record NOS-1 verification evidence`; hay cambios locales ajenos que se preservarán.
- Sincronización Engram: pendiente; no hay integración o comando Engram disponible en las herramientas actuales.
- El formulario de demostración se reemplazó con un panel de WhatsApp y el enlace oficial `https://wa.me/51947982249`. El script permite solo seis motivos conocidos y usa mensaje general ante motivos ausentes/no reconocidos; el texto se prepara, no se envía.
- Eliminadas `src/components/ContactForm.astro` y `src/scripts/contact-form.ts`; creadas `src/components/WhatsAppContact.astro` y `src/scripts/contact-whatsapp.ts`. Se actualizaron copy, privacidad, CSS, el comportamiento exclusivo del footer en Contacto y `DESIGN.md`.
- Comprobaciones observadas: `npm run check` sin diagnósticos; `npm run build` generó 9 páginas; `git diff --check` pasó. Preview visual revisado en escritorio y móvil (390 × 844); `tipo=expansion` y `tipo=alianza` preparan su texto esperado. No se abrió WhatsApp ni se transmitió ningún mensaje.
- Revisión de cambio completada. El trabajo está listo para commit en `main`; registrar su identidad en esta ficha inmediatamente después.

## Siguiente paso

Crear el commit de WA-1 con solo archivos de este alcance, registrar su identidad y leer de nuevo la ficha. Sincronizar el espejo Engram cuando exista la herramienta.
