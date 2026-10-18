import { animate } from 'motion/mini';
import { inView } from 'motion';

const root = document.querySelector<HTMLElement>('[data-collaboration-framework]');

if (root) {
  const group = root.querySelector<HTMLElement>('[data-framework-principles]');
  const principles = Array.from(root.querySelectorAll<HTMLElement>('[data-framework-principle]'));
  const stroke = root.querySelector<SVGPathElement>('[data-framework-stroke]');
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const compactViewport = window.matchMedia('(max-width: 760px)');
  let playbacks: ReturnType<typeof animate>[] = [];

  function finishEntrance() {
    playbacks.forEach((playback) => playback.stop());
    playbacks = [];
    principles.forEach((principle) => {
      principle.style.removeProperty('transform');
      principle.style.removeProperty('will-change');
    });
    stroke?.style.removeProperty('stroke-dasharray');
    stroke?.style.removeProperty('stroke-dashoffset');
  }

  async function enterFramework() {
    if (reducedMotion.matches || compactViewport.matches || !stroke) return;

    principles.forEach((principle, index) => {
      principle.style.willChange = 'transform';
      playbacks.push(animate(principle, {
        transform: ['translateX(20px)', 'translateX(0px)'],
      }, {
        duration: 0.62,
        delay: index * 0.03,
        ease: [0.16, 1, 0.3, 1],
      }));
    });

    stroke.style.strokeDasharray = '1';
    playbacks.push(animate(stroke, {
      strokeDashoffset: ['1', '0'],
    }, {
      duration: 0.75,
      ease: [0.16, 1, 0.3, 1],
    }));

    await Promise.all(playbacks.map((playback) => playback.finished));
    finishEntrance();
  }

  if (group) {
    inView(group, () => { void enterFramework(); }, { amount: 0.15 });
  }

  // Local emphasis only: the content has no selected state, controls or duplicated view.
  inView(principles, (element) => {
    const principle = element as HTMLElement;
    principle.dataset.reading = '';
    return () => { delete principle.dataset.reading; };
  }, { margin: '-100px 0px -100px 0px', amount: 0.7 });

  reducedMotion.addEventListener('change', finishEntrance);
  compactViewport.addEventListener('change', finishEntrance);
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) finishEntrance();
  });
}
