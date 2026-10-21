import { onLocaleChange, t } from './i18n.js';

function initFeedbackMenu(menu) {
  const summary = menu.querySelector('summary');
  const copyButton = menu.querySelector('[data-copy-feedback-qq]');
  const groupNumber = menu.querySelector('[data-feedback-qq]').textContent.trim();
  const status = menu.querySelector('[data-feedback-status]');
  let statusMessage = '';
  let copyAttempt = 0;
  const renderStatus = () => { status.textContent = statusMessage ? t(statusMessage) : ''; };

  copyButton.hidden = false;
  copyButton.addEventListener('click', async () => {
    const attempt = ++copyAttempt;
    let message;
    try {
      if (!navigator.clipboard?.writeText) throw new Error('Clipboard unavailable');
      await navigator.clipboard.writeText(groupNumber);
      message = '群号已复制';
    } catch {
      message = '复制失败，请手动复制上方群号';
    }
    if (!menu.open || attempt !== copyAttempt) return;
    statusMessage = message;
    renderStatus();
  });

  menu.addEventListener('toggle', () => {
    if (menu.open) return;
    copyAttempt += 1;
    statusMessage = '';
    renderStatus();
  });
  document.addEventListener('click', (event) => {
    if (menu.open && !menu.contains(event.target)) menu.open = false;
  });
  document.addEventListener('keydown', (event) => {
    if (event.key !== 'Escape' || !menu.open) return;
    event.preventDefault();
    menu.open = false;
    summary.focus({ preventScroll: true });
  });
  onLocaleChange(renderStatus);
}

export function initFeedbackMenus() {
  document.querySelectorAll('.feedback-menu').forEach(initFeedbackMenu);
}
