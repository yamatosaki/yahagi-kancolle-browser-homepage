// Register before the first paint; the main module may still be loading.
(() => {
  const root = document.documentElement;
  const preference = matchMedia('(prefers-reduced-motion: reduce)');
  let currentTransition;

  // Start the fallback before the first paint, avoiding a visible-then-hidden jump.
  try {
    const stored = sessionStorage.getItem('yahagi-page-navigation');
    sessionStorage.removeItem('yahagi-page-navigation');
    const entrance = JSON.parse(stored);
    if (entrance?.destination === location.href && Date.now() - entrance.time < 30000
      && performance.getEntriesByType('navigation')[0]?.type === 'navigate' && !preference.matches) {
      root.classList.add('page-enter');
    }
  } catch { /* Navigation stays available without storage. */ }

  addEventListener('animationend', (event) => {
    if (event.target.id === 'main' && event.animationName === 'page-content-enter') {
      root.classList.remove('page-enter');
    }
  });

  addEventListener('pageswap', (event) => {
    root.removeAttribute('data-navigation-running');
    // The outgoing document has no new snapshot, so its ready promise rejects.
    event.viewTransition?.ready.catch(() => {});
  });

  addEventListener('pagereveal', (event) => {
    const transition = event.viewTransition;
    if (!transition) return;
    // Cancellation (including a late opt-out) rejects ready during normal navigation.
    transition.ready.catch(() => {});
    if (preference.matches || root.dataset.navigationReady !== 'true' || document.body.classList.contains('motion-loading')) {
      root.dataset.navigationTransition = 'skipped';
      transition.skipTransition();
      return;
    }
    currentTransition = transition;
    root.dataset.navigationTransition = 'native';
    root.classList.remove('page-enter');
    root.dataset.navigationRunning = 'true';
    const clear = () => {
      if (currentTransition === transition) {
        currentTransition = null;
        root.removeAttribute('data-navigation-running');
      }
    };
    transition.finished.then(clear, clear);
  });

  preference.addEventListener('change', (event) => {
    if (event.matches) {
      currentTransition?.skipTransition();
      root.classList.remove('page-enter');
      root.removeAttribute('data-navigation-running');
    }
  });
})();
