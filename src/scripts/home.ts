import { gsap } from 'gsap';

const menuButton = document.querySelector<HTMLButtonElement>('.menu-toggle');
const navigation = document.querySelector<HTMLElement>('#main-navigation');
const mobileViewport = window.matchMedia('(max-width: 719px)');

document.documentElement.classList.add('has-js');

function closeMenu(returnFocus = false) {
  menuButton?.setAttribute('aria-expanded', 'false');
  navigation?.classList.remove('is-open');
  if (returnFocus) menuButton?.focus();
}

function updateNavigation() {
  if (menuButton) menuButton.hidden = !mobileViewport.matches;
  closeMenu();
}

menuButton?.addEventListener('click', () => {
  const opening = menuButton.getAttribute('aria-expanded') !== 'true';
  menuButton.setAttribute('aria-expanded', String(opening));
  navigation?.classList.toggle('is-open', opening);
});

navigation?.addEventListener('click', (event) => {
  if (!(event.target instanceof Element)) return;
  const link = event.target.closest<HTMLAnchorElement>('a');
  if (!link) return;
  closeMenu();
  if (mobileViewport.matches) {
    const destination = document.querySelector<HTMLElement>(link.hash);
    if (destination) {
      destination.tabIndex = -1;
      destination.focus({ preventScroll: true });
      destination.addEventListener('blur', () => destination.removeAttribute('tabindex'), { once: true });
    }
  }
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && menuButton?.getAttribute('aria-expanded') === 'true') closeMenu(true);
});

document.addEventListener('click', (event) => {
  if (event.target instanceof Element && !event.target.closest('.site-header')) closeMenu();
});

mobileViewport.addEventListener('change', updateNavigation);
updateNavigation();

const draftForm = document.querySelector<HTMLFormElement>('#consultation-draft');
const draftStatus = document.querySelector<HTMLElement>('#draft-status');
if (draftForm) draftForm.hidden = false;

draftForm?.addEventListener('submit', (event) => {
  event.preventDefault();
  if (!draftForm.reportValidity()) return;
  const fields = new FormData(draftForm);
  const company = String(fields.get('company') ?? '').trim();
  const objective = String(fields.get('objective') ?? '').trim();
  if (!company || !objective) {
    if (draftStatus) draftStatus.textContent = 'Escriba el nombre de su empresa y su objetivo para preparar el borrador.';
    return;
  }
  const draft = [
    'CONSULTA PARA POWERFUL',
    '',
    `Empresa o iniciativa: ${company}`,
    `Interés: ${String(fields.get('interest') ?? '')}`,
    '',
    'Objetivo:',
    objective,
    '',
    'Este borrador se preparó en su dispositivo. No fue enviado a POWERFUL.',
  ].join('\n');
  const downloadUrl = URL.createObjectURL(new Blob(['\uFEFF', draft], { type: 'text/plain;charset=utf-8' }));
  const download = document.createElement('a');
  download.href = downloadUrl;
  download.download = 'consulta-powerful.txt';
  document.body.append(download);
  download.click();
  download.remove();
  window.setTimeout(() => URL.revokeObjectURL(downloadUrl), 1000);
  if (draftStatus) draftStatus.textContent = 'Borrador preparado para descargar. Su consulta no ha sido enviada.';
});

const motion = gsap.matchMedia();
motion.add('(prefers-reduced-motion: no-preference)', () => {
  const connectionPath = document.querySelector<SVGPathElement>('.connection > path');
  const timeline = gsap.timeline({ defaults: { ease: 'expo.out' } });
  timeline.from('.hero-copy h1', { y: 20, duration: 1.1 });
  timeline.from('.hero-copy > p, .hero-actions', { y: 12, duration: 1, stagger: .08 }, .12);
  timeline.from('.hero-image', { scale: 1.045, duration: 1.7 }, 0);
  if (connectionPath) {
    const length = connectionPath.getTotalLength();
    timeline.fromTo(connectionPath, { strokeDasharray: length, strokeDashoffset: length }, { strokeDashoffset: 0, duration: 1.8, clearProps: 'strokeDasharray,strokeDashoffset' }, .3);
  }
});
