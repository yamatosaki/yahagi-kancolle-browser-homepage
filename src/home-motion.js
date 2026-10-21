const sessionKey = 'yahagi-opening-seen';
const sequenceDuration = 1800;
const assetDeadline = 2800;

// The page is usable without this enhancement; the opening never owns navigation.
export function initHomeMotion() {
  const body = document.body;
  const screen = document.querySelector('#home-intro');
  if (body.dataset.page !== 'home' || !screen || body.dataset.motionInitialized) return;
  body.dataset.motionInitialized = 'true';

  const hero = document.querySelector('.hero');
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
    hero.style.removeProperty('--hero-x');
    hero.style.removeProperty('--hero-y');
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

    const started = performance.now();
    let assetsReady = false;
    let released = false;
    let disposed = false;
    let frame = 0;
    let exitTimer = 0;
    let safetyTimer = 0;

    function rememberOpening() {
      try { sessionStorage.setItem(sessionKey, '1'); } catch { /* Storage is optional. */ }
    }

    function dispose() {
      if (disposed) return;
      disposed = true;
      const skipHadFocus = screen.contains(document.activeElement);
      cancelAnimationFrame(frame);
      clearTimeout(exitTimer);
      clearTimeout(safetyTimer);
      screen.hidden = true;
      screen.classList.remove('is-leaving');
      body.classList.remove('motion-loading');
      document.removeEventListener('keydown', skipForKeyboard, true);
      document.removeEventListener('focusin', skipForFocus);
      window.removeEventListener('scroll', skip, true);
      rememberOpening();
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
      if (released || disposed) return;
      released = true;
      setProgress(100);
      body.classList.remove('motion-loading');
      body.classList.add('motion-revealed');
      screen.classList.add('is-leaving');
      rememberOpening();
      exitTimer = window.setTimeout(dispose, 760);
    }

    function tick(now) {
      if (disposed) return;
      const elapsed = now - started;
      if (elapsed >= sequenceDuration && (assetsReady || elapsed >= assetDeadline)) {
        reveal();
        return;
      }
      // Sequence progress, deliberately capped until the portrait/font is ready.
      setProgress(Math.min(94, Math.floor(94 * (1 - (1 - Math.min(elapsed / sequenceDuration, 1)) ** 1.6))));
      frame = requestAnimationFrame(tick);
    }

    stopOpening = skip;
    safetyTimer = window.setTimeout(skip, assetDeadline + 1000);
    screen.querySelector('[data-skip-intro]').onclick = skip;
    document.addEventListener('keydown', skipForKeyboard, true);
    document.addEventListener('focusin', skipForFocus);
    window.addEventListener('scroll', skip, { capture: true, passive: true });
    resetPointer();
    setProgress(0);
    body.classList.remove('motion-revealed');
    body.classList.add('motion-loading');
    screen.hidden = false;

    const portrait = document.querySelector('[data-hero-layer="portrait"]');
    const imageReady = portrait?.decode ? portrait.decode() : Promise.resolve();
    const fontReady = document.fonts?.load('italic 900 24px "Yahagi Display"');
    Promise.allSettled([imageReady, fontReady]).then(() => { assetsReady = true; });
    frame = requestAnimationFrame(tick);
  }

  hero.addEventListener('pointermove', (event) => {
    if (reducedMotion.matches || !finePointer.matches || body.classList.contains('motion-loading')) return;
    const bounds = hero.getBoundingClientRect();
    pointerX = ((event.clientX - bounds.left) / bounds.width - 0.5) * 12;
    pointerY = ((event.clientY - bounds.top) / bounds.height - 0.5) * 8;
    if (pointerFrame) return;
    pointerFrame = requestAnimationFrame(() => {
      hero.style.setProperty('--hero-x', `${pointerX.toFixed(2)}px`);
      hero.style.setProperty('--hero-y', `${pointerY.toFixed(2)}px`);
      pointerFrame = 0;
    });
  }, { passive: true });
  hero.addEventListener('pointerleave', resetPointer);
  reducedMotion.addEventListener('change', updatePreferences);
  finePointer.addEventListener('change', updatePreferences);
  window.addEventListener('pagehide', () => { stopOpening(); resetPointer(); });
  updatePreferences();

  let seen = false;
  try { seen = sessionStorage.getItem(sessionKey) === '1'; } catch { /* Still play without storage. */ }
  if (!seen) startOpening();
}
