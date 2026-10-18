import { animate } from 'motion/mini';
import { inView } from 'motion';

const root = document.querySelector<HTMLElement>('[data-collaboration-framework]');

if (root) {
  const documentArt = root.querySelector<HTMLElement>('[data-framework-document]');
  const fields = Array.from(root.querySelectorAll<HTMLAnchorElement>('[data-framework-field]'));
  const principles = Array.from(root.querySelectorAll<HTMLElement>('[data-framework-principle]'));
  const outline = root.querySelector<SVGPathElement>('[data-framework-stroke]');
  const replay = root.querySelector<HTMLButtonElement>('[data-framework-replay]');
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const compactViewport = window.matchMedia('(max-width: 760px)');
  const visiblePrinciples = new Set<HTMLElement>();
  type Playback = ReturnType<typeof animate>;
  let playbacks: Playback[] = [];
  let playbackVersion = 0;
  let stopReadingObserver: (() => void) | undefined;
  let resizeTimer: number | undefined;

  function focusPrinciple(id: string | null) {
    fields.forEach((field) => {
      if (field.dataset.frameworkField === id) {
        field.setAttribute('aria-current', 'true');
      } else {
        field.removeAttribute('aria-current');
      }
    });
    principles.forEach((principle) => {
      if (principle.dataset.frameworkPrinciple === id) {
        principle.dataset.current = 'true';
      } else {
        delete principle.dataset.current;
      }
    });
  }

  function stopSequence() {
    playbackVersion += 1;
    playbacks.forEach((playback) => playback.stop());
    playbacks = [];
    fields.forEach((field) => {
      field.style.removeProperty('transform');
      field.style.removeProperty('will-change');
    });
    outline?.style.removeProperty('stroke-dasharray');
    outline?.style.removeProperty('stroke-dashoffset');
    replay?.removeAttribute('aria-busy');
  }

  async function showFramework() {
    stopSequence();
    focusPrinciple(null);
    if (reducedMotion.matches || compactViewport.matches || !outline) return;

    const version = playbackVersion;
    const offsets = [-32, 26, -24, 30, -20];
    replay?.setAttribute('aria-busy', 'true');
    fields.forEach((field, index) => {
      field.style.willChange = 'transform';
      playbacks.push(animate(field, {
        transform: [`translateX(${offsets[index]}px)`, 'translateX(0px)'],
      }, {
        duration: 0.72,
        delay: index * 0.045,
        ease: [0.16, 1, 0.3, 1],
      }));
    });

    outline.style.strokeDasharray = '1';
    playbacks.push(animate(outline, {
      strokeDashoffset: ['1', '0'],
    }, {
      duration: 0.95,
      ease: [0.16, 1, 0.3, 1],
    }));

    await Promise.all(playbacks.map((playback) => playback.finished));
    if (version === playbackVersion) stopSequence();
  }

  function reflectReading() {
    if (visiblePrinciples.size === 0) {
      focusPrinciple(null);
      return;
    }
    const readingLine = window.innerHeight * 0.36;
    const distanceToReadingLine = (element: HTMLElement) => {
      const rect = element.getBoundingClientRect();
      if (rect.top > readingLine) return rect.top - readingLine;
      if (rect.bottom < readingLine) return readingLine - rect.bottom;
      return 0;
    };
    const closest = Array.from(visiblePrinciples).sort((a, b) => (
      distanceToReadingLine(a) - distanceToReadingLine(b)
    ))[0];
    focusPrinciple(closest.dataset.frameworkPrinciple ?? null);
  }

  function observeReading() {
    stopReadingObserver?.();
    visiblePrinciples.clear();
    reflectReading();
    const topMargin = -Math.round(window.innerHeight * 0.32);
    const bottomMargin = -Math.round(window.innerHeight * 0.6);
    stopReadingObserver = inView(principles, (element) => {
      const principle = element as HTMLElement;
      visiblePrinciples.add(principle);
      reflectReading();
      return () => {
        visiblePrinciples.delete(principle);
        reflectReading();
      };
    }, { margin: `${topMargin}px 0px ${bottomMargin}px 0px`, amount: 'some' });
  }

  fields.forEach((field) => {
    field.addEventListener('click', () => {
      stopSequence();
      focusPrinciple(field.dataset.frameworkField ?? null);
    });
    field.addEventListener('focus', () => {
      focusPrinciple(field.dataset.frameworkField ?? null);
    });
  });

  if (replay) {
    replay.hidden = false;
    replay.addEventListener('click', () => { void showFramework(); });
  }

  if (documentArt) {
    inView(documentArt, () => { void showFramework(); }, { amount: 0.35 });
  }

  observeReading();
  window.addEventListener('resize', () => {
    window.clearTimeout(resizeTimer);
    resizeTimer = window.setTimeout(observeReading, 120);
  }, { passive: true });

  // A changed preference cancels a running sequence immediately, leaving its final readable state.
  reducedMotion.addEventListener('change', stopSequence);
  compactViewport.addEventListener('change', stopSequence);
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) stopSequence();
  });
}
