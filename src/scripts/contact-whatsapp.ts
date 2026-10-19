import { contactPageEs } from '../content/es';

const link = document.querySelector<HTMLAnchorElement>('#whatsapp-contact-link');

if (link) {
  const { messages, defaultMessage } = contactPageEs.whatsapp;
  const reason = new URLSearchParams(window.location.search).get('tipo');
  const message = reason && Object.prototype.hasOwnProperty.call(messages, reason)
    ? messages[reason as keyof typeof messages]
    : defaultMessage;

  link.href = `https://wa.me/51947982249?text=${encodeURIComponent(message)}`;
}
