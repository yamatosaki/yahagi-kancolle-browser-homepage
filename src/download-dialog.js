import { onLocaleChange, t } from './i18n.js';

const sourceMarks = { baidu: 'B', quark: 'Q', github: 'G', direct: '↓' };
const initializedDialogs = new WeakSet();

/** Connect platform download buttons to the locally rendered source picker. */
export function initDownloadDialog(downloads) {
  const dialog = document.querySelector('#download-dialog');
  const title = document.querySelector('#download-dialog-title');
  const version = document.querySelector('#download-version');
  const note = document.querySelector('#download-platform-note');
  const sources = document.querySelector('#download-sources');
  const status = document.querySelector('#download-status');

  if (!dialog || !title || !version || !note || !sources || !status || initializedDialogs.has(dialog)) {
    return;
  }

  const platforms = Array.isArray(downloads) ? downloads : [];
  if (!platforms.length) return;
  initializedDialogs.add(dialog);

  let selectedPlatform = null;
  let returnFocus = null;
  let pointerStartedOnBackdrop = false;
  let copyStatus = null;

  function renderStatus() {
    status.textContent = copyStatus
      ? t(copyStatus.message, { source: t(copyStatus.source), code: copyStatus.code })
      : '';
  }

  function makeSource(source, platform) {
    const wrapper = document.createElement('div');
    wrapper.className = 'download-source-wrapper';

    const available = typeof source.url === 'string' && source.url.trim().length > 0;
    const control = document.createElement(available ? 'a' : 'button');
    control.className = `download-source${available ? '' : ' is-unavailable'}`;
    control.dataset.source = source.key;

    if (available) {
      control.href = source.url;
      if (source.key !== 'direct') {
        control.target = '_blank';
        control.rel = 'noopener noreferrer';
      }
      control.setAttribute('aria-label', `${t(platform)} · ${t(source.name)}`);
    } else {
      control.type = 'button';
      control.disabled = true;
    }

    const mark = document.createElement('span');
    mark.className = 'source-mark';
    mark.setAttribute('aria-hidden', 'true');
    mark.textContent = sourceMarks[source.key] || '↗';

    const copy = document.createElement('div');
    copy.className = 'source-copy';
    const name = document.createElement('strong');
    name.textContent = t(source.name);
    const description = document.createElement('span');
    description.textContent = t(source.description || '');
    copy.append(name, description);
    if (source.code) {
      const accessCode = document.createElement('span');
      accessCode.className = 'source-access-code';
      accessCode.id = `download-access-code-${source.key}`;
      accessCode.textContent = t('提取码：{code}', { code: source.code });
      copy.append(accessCode);
      control.setAttribute('aria-describedby', accessCode.id);
    }

    const trailing = document.createElement('span');
    trailing.className = available ? 'source-arrow' : 'source-state';
    trailing.textContent = available ? '↗' : t('链接准备中');
    if (available) trailing.setAttribute('aria-hidden', 'true');
    control.append(mark, copy, trailing);
    wrapper.append(control);

    if (source.code) {
      const code = String(source.code);
      const copyCode = document.createElement('button');
      copyCode.type = 'button';
      copyCode.className = 'copy-code';
      copyCode.dataset.copySource = source.key;
      copyCode.textContent = t('复制提取码');
      copyCode.setAttribute('aria-label', t('复制{source}提取码 {code}', { source: t(source.name), code }));
      copyCode.addEventListener('click', async () => {
        try {
          if (!navigator.clipboard?.writeText) throw new Error('Clipboard unavailable');
          await navigator.clipboard.writeText(code);
          if (dialog.open && selectedPlatform === platform) {
            copyStatus = { message: '{source}提取码已复制：{code}', source: source.name, code };
            renderStatus();
          }
        } catch {
          if (dialog.open && selectedPlatform === platform) {
            copyStatus = { message: '请手动复制{source}提取码：{code}', source: source.name, code };
            renderStatus();
          }
        }
      });
      wrapper.append(copyCode);
    }

    return wrapper;
  }

  function renderPlatform(download, preserveStatus = false) {
    const focusedSource = sources.contains(document.activeElement)
      ? { source: document.activeElement.dataset.source, copy: document.activeElement.dataset.copySource }
      : null;
    selectedPlatform = download.platform;
    dialog.dataset.platform = download.platform;
    title.textContent = t('{platform} 下载', { platform: t(download.platform) });
    version.textContent = [download.version ? `v${download.version}` : '', download.fileType]
      .filter(Boolean).join(' · ') || t(download.description || '');
    note.textContent = t(download.note || '');
    if (download.attribution) {
      const credit = document.createElement('span');
      credit.className = 'download-platform-credit';
      credit.textContent = t(download.attribution);
      note.append(credit);
    }
    if (!preserveStatus) copyStatus = null;
    renderStatus();
    sources.replaceChildren(...(download.sources || []).map((source) => makeSource(source, download.platform)));
    if (focusedSource) {
      const focusTarget = Array.from(sources.querySelectorAll('[data-source], [data-copy-source]'))
        .find((control) => focusedSource.copy
          ? control.dataset.copySource === focusedSource.copy
          : control.dataset.source === focusedSource.source);
      focusTarget?.focus({ preventScroll: true });
    }
  }

  document.addEventListener('click', (event) => {
    const trigger = event.target instanceof Element
      ? event.target.closest('[data-open-download]')
      : null;
    if (!trigger || trigger.disabled) return;
    const download = platforms.find((item) => item.platform === trigger.dataset.openDownload);
    if (!download) return;

    event.preventDefault();
    if (!dialog.open) returnFocus = trigger;
    renderPlatform(download);
    if (!dialog.open) dialog.showModal();
    document.body.classList.add('dialog-open');
    const initialFocus = dialog.querySelector('[data-close-download]:not(:disabled)') || title;
    if (initialFocus === title) title.tabIndex = -1;
    initialFocus.focus({ preventScroll: true });
  });

  dialog.querySelectorAll('[data-close-download]').forEach((button) => {
    button.addEventListener('click', () => dialog.close());
  });

  function isBackdrop(event) {
    if (event.target !== dialog) return false;
    const rect = dialog.getBoundingClientRect();
    return event.clientX < rect.left || event.clientX > rect.right
      || event.clientY < rect.top || event.clientY > rect.bottom;
  }

  dialog.addEventListener('pointerdown', (event) => {
    pointerStartedOnBackdrop = isBackdrop(event);
  });
  dialog.addEventListener('pointercancel', () => {
    pointerStartedOnBackdrop = false;
  });
  dialog.addEventListener('click', (event) => {
    if (pointerStartedOnBackdrop && isBackdrop(event)) dialog.close();
    pointerStartedOnBackdrop = false;
  });
  dialog.addEventListener('close', () => {
    document.body.classList.remove('dialog-open');
    pointerStartedOnBackdrop = false;
    const focusTarget = returnFocus?.isConnected ? returnFocus
      : Array.from(document.querySelectorAll('[data-open-download]'))
        .find((button) => button.dataset.openDownload === selectedPlatform);
    focusTarget?.focus({ preventScroll: true });
    selectedPlatform = null;
    copyStatus = null;
    returnFocus = null;
  });

  onLocaleChange(() => {
    if (!dialog.open || !selectedPlatform) return;
    const download = platforms.find((item) => item.platform === selectedPlatform);
    if (download) renderPlatform(download, true);
  });
}
