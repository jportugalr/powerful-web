const menuButton = document.querySelector<HTMLButtonElement>('.mobile-toggle');
const mobileNav = document.querySelector<HTMLElement>('#mobile-nav');
const mobileViewport = window.matchMedia('(max-width: 1000px)');

document.documentElement.classList.add('has-js');

function closeMenu(returnFocus = false) {
  if (!menuButton || !mobileNav) return;
  mobileNav.hidden = true;
  menuButton.setAttribute('aria-expanded', 'false');
  menuButton.setAttribute('aria-label', 'Abrir menú');
  if (returnFocus) menuButton.focus();
}

menuButton?.addEventListener('click', () => {
  if (!mobileNav) return;
  const opening = menuButton.getAttribute('aria-expanded') !== 'true';
  mobileNav.hidden = !opening;
  menuButton.setAttribute('aria-expanded', String(opening));
  menuButton.setAttribute('aria-label', opening ? 'Cerrar menú' : 'Abrir menú');
});

mobileNav?.addEventListener('click', (event) => {
  if (event.target instanceof Element && event.target.closest('a')) closeMenu();
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && menuButton?.getAttribute('aria-expanded') === 'true') closeMenu(true);
});

document.addEventListener('click', (event) => {
  if (event.target instanceof Element && !event.target.closest('.site-header')) closeMenu();
});

mobileViewport.addEventListener('change', (event) => {
  if (!event.matches) closeMenu();
});
closeMenu();

const year = document.querySelector<HTMLElement>('#year');
if (year) year.textContent = String(new Date().getFullYear());