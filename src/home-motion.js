import { createHomeResourceTasks } from './home-resources.js';
import { trackLoadingTasks } from './loading-progress.js';

const homeNavigationKey = 'yahagi-home-navigation';
const assetDeadline = 15000;
const completionDuration = 1200;

function initOpeningNavigation() {
  let returnTo = null;
  try {
    returnTo = sessionStorage.getItem(homeNavigationKey);
    sessionStorage.removeItem(homeNavigationKey);
  } catch { /* Without storage, opening playback remains available. */ }

  // Only an ordinary same-tab home link suppresses the next opening.
  document.addEventListener('click', (event) => {
    if (event.defaultPrevented || event.button !== 0 || event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
    const link = event.target?.closest?.('a[href]');
    if (!link || link.hasAttribute('download') || (link.target && link.target.toLowerCase() !== '_self')) return;
    const href = link.getAttribute('href');
    if (!href || href.startsWith('#')) return;
    try {
      const destination = new URL(href, window.location.href);
      const home = new URL('./', window.location.href);
      if (destination.origin !== home.origin || ![home.pathname, `${home.pathname}index.html`].includes(destination.pathname)) return;
      sessionStorage.setItem(homeNavigationKey, destination.href);
    } catch { /* Links continue to work without storage. */ }
  });

  window.addEventListener('pageshow', (event) => {
    if (!event.persisted) return;
    try { sessionStorage.removeItem(homeNavigationKey); } catch { /* Storage is optional. */ }
  });

  const navigationType = performance.getEntriesByType('navigation')[0]?.type;
  if (navigationType === 'reload') return true;
  if (navigationType === 'back_forward') return false;
  return returnTo !== window.location.href;
}

// The page is usable without this enhancement; the opening never owns navigation.
export function initHomeMotion() {
  const body = document.body;
  if (body.dataset.motionInitialized) return;
  body.dataset.motionInitialized = 'true';
  const playOpening = initOpeningNavigation();
  const screen = document.querySelector('#home-intro');
  if (body.dataset.page !== 'home' || !screen) return;

  const hero = document.querySelector('.hero');
  const portraitFrame = hero.querySelector('.portrait-frame');
  const heroGrid = hero.querySelector('.hero-grid');
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)');
  const statusPanel = document.querySelector('[data-motion-status]');
  const progress = screen.querySelector('[data-boot-progress]');
  const percent = screen.querySelector('[data-boot-percent]');
  const state = screen.querySelector('[data-boot-state]');
  const stages = [...screen.querySelectorAll('[data-boot-stage]')];
  let stopOpening = () => {};
  let pointerFrame = 0;
  let pointerX = 0;
  let pointerY = 0;

  function resetPointer() {
    cancelAnimationFrame(pointerFrame);
    pointerFrame = 0;
    portraitFrame?.style.removeProperty('translate');
    heroGrid?.style.removeProperty('translate');
  }

  function updatePreferences() {
    statusPanel.hidden = reducedMotion.matches;
    if (reducedMotion.matches) {
      stopOpening();
      body.classList.remove('motion-revealed');
    }
    if (reducedMotion.matches || !finePointer.matches) resetPointer();
  }

  function startOpening() {
    stopOpening();
    if (reducedMotion.matches) return;

    const loadingController = new AbortController();
    let released = false;
    let disposed = false;
    let completionTimer = 0;
    let exitTimer = 0;
    let revealFrame = 0;

    function dispose() {
      if (disposed) return;
      disposed = true;
      const skipHadFocus = screen.contains(document.activeElement);
      loadingController.abort();
      clearTimeout(completionTimer);
      clearTimeout(exitTimer);
      cancelAnimationFrame(revealFrame);
      screen.hidden = true;
      screen.classList.remove('is-leaving');
      body.classList.remove('motion-loading');
      document.removeEventListener('keydown', skipForKeyboard, true);
      document.removeEventListener('focusin', skipForFocus);
      window.removeEventListener('scroll', skip, true);
      if (skipHadFocus) document.querySelector('.site-header .brand')?.focus({ preventScroll: true });
    }

    function skip() {
      body.classList.remove('motion-revealed');
      dispose();
    }

    function skipForKeyboard(event) {
      if (event.key === 'Tab' || event.key === 'Escape' || event.key === 'Enter' || event.key === ' ') skip();
    }

    function skipForFocus(event) {
      if (!screen.contains(event.target)) skip();
    }

    function setProgress(value) {
      percent.textContent = String(value).padStart(2, '0');
      progress.style.transform = `scaleX(${value / 100})`;
      const stage = value < 34 ? 0 : value < 100 ? 1 : 2;
      state.textContent = ['INITIALIZING', 'VISUAL SYNC', 'READY TO LAUNCH'][stage];
      for (let index = 0; index < stages.length; index++) {
        stages[index].classList.toggle('is-active', index === stage);
        stages[index].classList.toggle('is-complete', index < stage);
      }
    }

    function reveal() {
      revealFrame = 0;
      if (released || disposed) return;
      released = true;
      loadingController.abort();
      body.classList.remove('motion-loading');
      body.classList.add('motion-revealed');
      screen.classList.add('is-leaving');
      exitTimer = window.setTimeout(dispose, 760);
    }

    function queueReveal() {
      if (released || disposed || revealFrame) return;
      // Begin the curtain and the hero layers together at a rendering boundary.
      revealFrame = requestAnimationFrame(reveal);
    }

    stopOpening = skip;
    screen.querySelector('[data-skip-intro]').onclick = skip;
    document.addEventListener('keydown', skipForKeyboard, true);
    document.addEventListener('focusin', skipForFocus);
    window.addEventListener('scroll', skip, { capture: true, passive: true });
    resetPointer();
    setProgress(0);
    body.classList.remove('motion-revealed');
    body.classList.add('motion-loading');
    screen.hidden = false;

    async function loadResources() {
      try {
        const result = await trackLoadingTasks(createHomeResourceTasks({
          portrait: document.querySelector('[data-hero-layer="portrait"]'),
          wordmarks: [screen.querySelector('.boot-wordmark-ink'), document.querySelector('.hero-wordmark')],
          body,
        }), {
          signal: loadingController.signal,
          timeoutMs: assetDeadline,
          onProgress: ({ completed, total }) => setProgress(total ? Math.floor(completed / total * 100) : 100),
        });
        if (disposed || released || result.status === 'aborted') return;
        state.textContent = result.status === 'timeout' ? 'FALLBACK / CONTINUE'
          : result.failed ? 'READY WITH FALLBACK' : 'READY TO LAUNCH';
        // The completed mark gets a short finale; resource progress has no timed increments.
        completionTimer = window.setTimeout(queueReveal, result.status === 'timeout' ? 0 : completionDuration);
      } catch {
        if (disposed || released) return;
        state.textContent = 'FALLBACK / CONTINUE';
        queueReveal();
      }
    }
    loadResources();
  }

  hero.addEventListener('pointermove', (event) => {
    if (reducedMotion.matches || !finePointer.matches || body.classList.contains('motion-loading')) return;
    pointerX = event.clientX;
    pointerY = event.clientY;
    if (pointerFrame) return;
    pointerFrame = requestAnimationFrame(() => {
      const bounds = hero.getBoundingClientRect();
      const x = (((pointerX - bounds.left) / bounds.width - 0.5) * 12).toFixed(2);
      const y = (((pointerY - bounds.top) / bounds.height - 0.5) * 8).toFixed(2);
      // Update only the moving layers; inherited variables would restyle the whole hero.
      if (portraitFrame) portraitFrame.style.translate = `${x}px ${y}px`;
      if (heroGrid) heroGrid.style.translate = `calc(${x}px * -.6) calc(${y}px * -.6)`;
      pointerFrame = 0;
    });
  }, { passive: true });
  hero.addEventListener('pointerleave', resetPointer);
  reducedMotion.addEventListener('change', updatePreferences);
  finePointer.addEventListener('change', updatePreferences);
  window.addEventListener('pagehide', () => { stopOpening(); resetPointer(); });
  updatePreferences();

  if (playOpening) startOpening();
}
