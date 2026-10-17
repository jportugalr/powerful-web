import { contactPageEs } from '../content/es';

function initializeContactForm() {
  const form = document.querySelector<HTMLFormElement>('#contact-form');
  if (!form) return;

  const submitButton = form.querySelector<HTMLButtonElement>('[data-demo-submit]');
  const typeField = form.querySelector<HTMLSelectElement>('#tipo');
  const nameField = form.querySelector<HTMLInputElement>('#nombre');
  const emailField = form.querySelector<HTMLInputElement>('#email');
  const messageField = form.querySelector<HTMLTextAreaElement>('#mensaje');
  const privacyField = form.querySelector<HTMLInputElement>('#privacy');
  const messageCount = document.querySelector<HTMLElement>('#message-count');
  const result = document.querySelector<HTMLElement>('#form-result');

  if (!submitButton || !typeField || !nameField || !emailField || !messageField || !privacyField || !result) return;

  const copy = contactPageEs.form;
  const reasons = new Set(copy.options.map((option) => option.value));
  const fields = ['tipo', 'nombre', 'email', 'mensaje', 'privacy'] as const;
  type ContactField = (typeof fields)[number];

  const controls: Record<ContactField, HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement> = {
    tipo: typeField,
    nombre: nameField,
    email: emailField,
    mensaje: messageField,
    privacy: privacyField,
  };

  const errors: Record<ContactField, string> = {
    tipo: copy.errors.reason,
    nombre: copy.errors.name,
    email: copy.errors.email,
    mensaje: copy.errors.message,
    privacy: copy.errors.privacy,
  };

  const urlReason = new URLSearchParams(window.location.search).get('tipo');
  if (urlReason && reasons.has(urlReason as (typeof copy.options)[number]['value'])) {
    typeField.value = urlReason;
  }

  const setError = (field: ContactField, message: string) => {
    const error = form.querySelector<HTMLElement>(`[data-error-for="${field}"]`);
    if (error) error.textContent = message;
    controls[field].setAttribute('aria-invalid', message ? 'true' : 'false');
  };

  messageField.addEventListener('input', () => {
    if (messageCount) messageCount.textContent = `${messageField.value.length} / ${copy.limits.messageMax}`;
  });

  const clearFieldError = (event: Event) => {
    const target = event.target;
    if (!(target instanceof HTMLInputElement || target instanceof HTMLSelectElement || target instanceof HTMLTextAreaElement)) return;
    const field = target.name as ContactField;
    if (fields.includes(field)) setError(field, '');
  };

  form.addEventListener('input', clearFieldError);
  form.addEventListener('change', clearFieldError);

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    fields.forEach((field) => setError(field, ''));
    result.hidden = true;

    const invalidFields: ContactField[] = [];
    const markInvalid = (field: ContactField) => {
      setError(field, errors[field]);
      invalidFields.push(field);
    };

    const name = nameField.value.trim();
    const email = emailField.value.trim();
    const message = messageField.value.trim();

    if (!reasons.has(typeField.value as (typeof copy.options)[number]['value'])) markInvalid('tipo');
    if (name.length < copy.limits.nameMin || name.length > copy.limits.nameMax) markInvalid('nombre');
    if (email.length > copy.limits.emailMax || !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) markInvalid('email');
    if (message.length < copy.limits.messageMin || message.length > copy.limits.messageMax) markInvalid('mensaje');
    if (!privacyField.checked) markInvalid('privacy');

    if (invalidFields.length > 0) {
      controls[invalidFields[0]].focus();
      return;
    }

    result.hidden = false;
    result.scrollIntoView({
      behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth',
      block: 'nearest',
    });
  });

  // Keep the native submit control disabled until validation and its no-send handler are ready.
  submitButton.disabled = false;
}

initializeContactForm();
