const navigationKey = 'yahagi-page-navigation';
const entranceClass = 'page-enter';
const markerWidth = 100;

// Native links keep their normal history, new-tab and download behavior.
export function initNavigationMotion() {
  const root = document.documentElement;
  const nav = document.querySelector('#primary-nav');
  if (!nav || root.dataset.navigationReady) return;
  const preference = matchMedia('(prefers-reduced-motion: reduce)');
  const desktop = matchMedia('(min-width: 1101px)');
  const pointer = matchMedia('(hover: hover) and (pointer: fine)');
  const active = nav.querySelector('[aria-current="page"]');
  const indicator = document.createElement('span');
  const preview = document.createElement('span');
  indicator.className = 'nav-active-indicator';
  preview.className = 'nav-hover-indicator';
  indicator.setAttribute('aria-hidden', 'true');
  preview.setAttribute('aria-hidden', 'true');
  nav.append(preview, indicator);
  nav.classList.add('has-motion');
  let hovered = null;
  let frame = 0;

  function position(element, bounds, container, wash = false) {
    if (!bounds) {
      element.classList.remove('is-visible');
      return;
    }
    if (wash) element.style.height = `${bounds.height - 8}px`;
    // A constant layout width lets both hover and native snapshots animate transforms.
    const scale = (bounds.width + (wash ? 24 : 0)) / markerWidth;
    element.style.transform = `translate(${bounds.left - container.left - (wash ? 12 : 0)}px, ${wash ? bounds.top - container.top + 4 : bounds.bottom - container.top - 5}px) scaleX(${scale})`;
    element.classList.add('is-visible');
  }

  function update() {
    cancelAnimationFrame(frame);
    frame = 0;
    const focused = nav.contains(document.activeElement) && document.activeElement.matches('.nav-link')
      ? document.activeElement : null;
    const target = hovered || focused;
    // Read all geometry before writing styles; pointer events share this single frame.
    const container = desktop.matches ? nav.getBoundingClientRect() : null;
    const activeBounds = container && active ? active.getBoundingClientRect() : null;
    const previewBounds = container && target ? target.getBoundingClientRect() : null;
    position(indicator, activeBounds, container);
    position(preview, previewBounds, container, true);
  }

  function schedule() {
    if (!frame) frame = requestAnimationFrame(update);
  }

  for (const link of nav.querySelectorAll('.nav-link')) {
    link.addEventListener('pointerenter', () => {
      if (!pointer.matches) return;
      hovered = link;
      schedule();
    });
  }
  nav.addEventListener('pointerleave', () => { hovered = null; schedule(); });
  nav.addEventListener('focusin', schedule);
  nav.addEventListener('focusout', schedule);
  desktop.addEventListener('change', () => { hovered = null; schedule(); });
  const observer = new ResizeObserver(schedule);
  observer.observe(nav);
  for (const link of nav.querySelectorAll('.nav-link')) observer.observe(link);
  document.fonts.ready.then(schedule);
  update();
  // Geometry is written once before enabling hover transitions.
  requestAnimationFrame(() => nav.classList.add('motion-positioned'));

  document.addEventListener('click', (event) => {
    if (event.defaultPrevented || event.button !== 0 || event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
    const link = event.target?.closest?.('a[href]');
    if (!link || link.hasAttribute('download') || (link.target && link.target.toLowerCase() !== '_self')) return;
    const href = link.getAttribute('href');
    if (!href || href.startsWith('#')) return;
    const destination = new URL(href, location.href);
    if (destination.origin !== location.origin || destination.href === location.href
      || !(/\/$|\.html$/.test(destination.pathname))) return;
    try {
      sessionStorage.setItem(navigationKey, JSON.stringify({ destination: destination.href, time: Date.now() }));
    } catch { /* Navigation never waits for storage or animation. */ }
  });

  function reset() {
    root.classList.remove(entranceClass);
    hovered = null;
    preview.classList.remove('is-visible');
    cancelAnimationFrame(frame);
    frame = 0;
  }
  addEventListener('pageswap', reset);
  addEventListener('pagehide', reset);
  addEventListener('pageshow', (event) => {
    if (!event.persisted) return;
    try { sessionStorage.removeItem(navigationKey); } catch { /* Storage is optional. */ }
    reset();
    schedule();
  });
  preference.addEventListener('change', () => {
    if (preference.matches) root.classList.remove(entranceClass);
  });
  root.dataset.navigationReady = 'true';
  return schedule;
}
