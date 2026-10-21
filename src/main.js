import { site, heroAssets, downloads, featureGroups } from './site-config.js';
import { initDownloadDialog } from './download-dialog.js';
import { initFeedbackMenus } from './feedback-menu.js';
import { initI18n, onLocaleChange, t } from './i18n.js';
import { initHomeMotion } from './home-motion.js';
import { initNavigationMotion } from './navigation-motion.js';

initI18n();
initFeedbackMenus();

for (const image of document.querySelectorAll('[data-hero-layer]')) image.src = heroAssets[image.dataset.heroLayer];
initHomeMotion();
for (const link of document.querySelectorAll('[data-repo-link]')) link.href = site.repoUrl;
for (const link of document.querySelectorAll('[data-releases-link]')) link.href = site.releasesUrl;
for (const link of document.querySelectorAll('[data-issues-link]')) link.href = site.issuesUrl;

const features = document.querySelector('#feature-list');
function renderFeatures() {
  if (!features) return;
  const articles = featureGroups.map((feature) => {
    const article = document.createElement('article');
    article.className = 'feature-article';
    const index = document.createElement('div');
    index.className = 'feature-index';
    const number = document.createElement('span');
    number.textContent = feature.number;
    const kicker = document.createElement('span');
    kicker.textContent = t(feature.kicker);
    index.append(number, kicker);
    const title = document.createElement('h2');
    title.id = `feature-${feature.key}`;
    title.textContent = t(feature.title);
    article.setAttribute('aria-labelledby', title.id);
    const content = document.createElement('div');
    content.className = 'feature-description';
    const description = document.createElement('p');
    description.textContent = t(feature.description);
    const details = document.createElement('ul');
    for (const detail of feature.details) {
      const item = document.createElement('li');
      item.textContent = t(detail);
      details.append(item);
    }
    content.append(description, details);
    article.append(index, title, content);
    return article;
  });
  features.replaceChildren(...articles);
}

const downloadOptions = document.querySelector('#download-options');
function renderDownloads() {
  if (!downloadOptions) return;
  const focusedPlatform = downloadOptions.contains(document.activeElement)
    ? document.activeElement.closest('[data-open-download]')?.dataset.openDownload
    : null;
  const buttons = downloads.map((download) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'download-card';
    button.dataset.openDownload = download.platform;
    const platform = document.createElement('span');
    platform.className = 'download-card-label';
    platform.textContent = t(download.platform);
    const version = document.createElement('span');
    version.className = 'download-card-description';
    version.textContent = download.version && download.fileType
      ? t('v{version} · {fileType} 安装包', { version: download.version, fileType: download.fileType })
      : t(download.description);
    const action = document.createElement('span');
    action.className = 'download-card-action';
    action.textContent = t('选择下载方式');
    const arrow = document.createElement('span');
    arrow.className = 'download-card-arrow';
    arrow.setAttribute('aria-hidden', 'true');
    arrow.textContent = '↗';
    const note = document.createElement('span');
    note.className = 'download-card-note';
    note.textContent = t(download.note);
    button.setAttribute('aria-label', t(download.label));
    button.append(platform, version, action, arrow, note);
    return button;
  });
  downloadOptions.replaceChildren(...buttons);
  buttons.find((button) => button.dataset.openDownload === focusedPlatform)?.focus({ preventScroll: true });
}
renderFeatures();
renderDownloads();
const refreshNavigationMotion = initNavigationMotion();
initDownloadDialog(downloads);

for (const button of document.querySelectorAll('[data-back-to-top]')) {
  button.addEventListener('click', () => {
    // Keep the release hash and language query intact when returning to the top.
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    window.scrollTo({ top: 0, left: 0, behavior: reducedMotion ? 'instant' : 'smooth' });
    document.querySelector('.site-header .brand')?.focus({ preventScroll: true });
  });
}

const releaseBody = document.querySelector('#release-body');
let releaseModuleFailed = false;
function renderReleaseError() {
  if (!releaseModuleFailed || !releaseBody) return;
  releaseBody.textContent = t('发布说明暂时无法载入，请通过上方 GitHub 原始发布页查看。');
}
if (releaseBody) {
  import('./release-notes.js').then(({ initReleaseNotes }) => initReleaseNotes()).catch(() => {
    releaseModuleFailed = true;
    renderReleaseError();
    const releaseSelect = document.querySelector('#release-select');
    if (releaseSelect) releaseSelect.disabled = true;
  });
}

const menuToggle = document.querySelector('#menu-toggle');
const navigation = document.querySelector('#primary-nav');
menuToggle?.setAttribute('role', 'button');
menuToggle?.setAttribute('aria-expanded', 'false');
// Adopt a menu opened through the native fragment while the module was loading.
if (navigation?.matches(':target') && !window.matchMedia('(min-width: 1101px)').matches) {
  menuToggle?.setAttribute('aria-expanded', 'true');
  navigation.classList.add('is-open');
}
function renderMenuLabel() {
  const label = menuToggle?.querySelector('span');
  if (label) label.textContent = t(menuToggle.getAttribute('aria-expanded') === 'true' ? '关闭' : '菜单');
}
function closeMenu() {
  if (!menuToggle || !navigation) return;
  menuToggle.setAttribute('aria-expanded', 'false');
  renderMenuLabel();
  navigation.classList.remove('is-open');
}
menuToggle?.addEventListener('click', (event) => {
  event.preventDefault();
  const isOpen = menuToggle.getAttribute('aria-expanded') === 'true';
  menuToggle.setAttribute('aria-expanded', String(!isOpen));
  renderMenuLabel();
  navigation.classList.toggle('is-open', !isOpen);
  if (!isOpen) navigation.querySelector('a').focus();
});
menuToggle?.addEventListener('keydown', (event) => {
  if (event.key !== ' ') return;
  event.preventDefault();
});
menuToggle?.addEventListener('keyup', (event) => {
  if (event.key !== ' ') return;
  event.preventDefault();
  menuToggle.click();
});
navigation?.addEventListener('click', (event) => { if (event.target.closest('a')) closeMenu(); });
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && menuToggle?.getAttribute('aria-expanded') === 'true') {
    closeMenu();
    menuToggle.focus();
  }
});
document.addEventListener('click', (event) => { if (!event.target.closest('#site-header')) closeMenu(); });
const desktopMedia = window.matchMedia('(min-width: 1101px)');
desktopMedia.addEventListener('change', () => { if (desktopMedia.matches) closeMenu(); });

renderMenuLabel();
onLocaleChange(() => {
  refreshNavigationMotion?.();
  renderFeatures();
  renderDownloads();
  renderMenuLabel();
  renderReleaseError();
});

