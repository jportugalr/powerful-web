const filterButtons = Array.from(
  document.querySelectorAll<HTMLButtonElement>('[data-filter]'),
);
const sectorCards = Array.from(
  document.querySelectorAll<HTMLElement>('[data-category]'),
);
const sectorGrid = document.querySelector<HTMLElement>('.sector-cards');

if (filterButtons.length > 0 && sectorCards.length > 0) {
  filterButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const selected = button.dataset.filter;
      if (!selected) return;
      if (sectorGrid) sectorGrid.dataset.selectedFilter = selected;

      filterButtons.forEach((filter) => {
        const active = filter === button;
        filter.classList.toggle('active', active);
        filter.setAttribute('aria-pressed', String(active));
      });

      sectorCards.forEach((card) => {
        card.hidden =
          selected !== 'all' && card.dataset.category !== selected;
      });
    });
  });
}
