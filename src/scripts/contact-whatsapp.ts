const link = document.querySelector<HTMLAnchorElement>('#whatsapp-contact-link');

if (link) {
  const { defaultMessage, messageCatalog } = link.dataset;

  if (defaultMessage && messageCatalog) {
    const messages = JSON.parse(messageCatalog) as Record<string, string>;
    const reason = new URLSearchParams(window.location.search).get('tipo');
    const message = reason && Object.prototype.hasOwnProperty.call(messages, reason)
      ? messages[reason]
      : defaultMessage;

    link.href = `https://wa.me/51947982249?text=${encodeURIComponent(message)}`;
  }
}
