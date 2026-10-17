import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

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
  const entrance = gsap.timeline({ defaults: { ease: 'expo.out' } });
  entrance.from('.hero-copy h1', { y: 12, duration: .7 });
  entrance.from('.hero-figure', { clipPath: 'inset(0% 0% 12% 0%)', duration: .9 }, 0);
  entrance.from('.hero-image', { scale: 1.035, duration: 1 }, 0);
  entrance.from('.relationship li + li', {
    '--connection-scale': 0,
    duration: .55,
    stagger: .14,
  }, .15);
  entrance.from('.relationship span', { y: 5, duration: .6, stagger: .1 }, .2);

  const sectors = gsap.timeline({
    defaults: { ease: 'expo.out' },
    scrollTrigger: {
      trigger: '.sectors',
      start: 'top 78%',
      once: true,
    },
  });
  sectors.from('.sectors-image-frame', { clipPath: 'inset(8% 0% 0% 0%)', duration: .85 });
  sectors.from('.sectors-image', { scale: 1.035, duration: 1 }, 0);
  sectors.from('.sectors-intro h2', { y: 16, duration: .8 }, .1);
});

// The image has overscan for this 40 px journey; its entrance uses another layer.
motion.add('(min-width: 960px) and (pointer: fine) and (prefers-reduced-motion: no-preference)', () => {
  gsap.fromTo('.hero-image-motion', { y: -20 }, {
    y: 20,
    ease: 'none',
    scrollTrigger: {
      trigger: '.hero',
      start: 'top top',
      end: 'bottom top',
      scrub: .6,
      invalidateOnRefresh: true,
      onToggle: (self) => {
        gsap.set('.hero-image-motion', { willChange: self.isActive ? 'transform' : 'auto' });
      },
    },
  });
  return () => {
    document.querySelector<HTMLElement>('.hero-image-motion')?.style.removeProperty('will-change');
  };
});
