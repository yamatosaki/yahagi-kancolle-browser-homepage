import { marked } from 'marked';
import DOMPurify from 'dompurify';
import archive from './data/releases.json';
import { getLocale, onLocaleChange, t } from './i18n.js';
import { selectReleaseNotes } from './release-content.js';

const languageNames = { 'zh-CN': '简体中文', 'zh-TW': '繁體中文', ja: '日本語', ko: '한국어', en: 'English' };

const dateFormatter = new Intl.DateTimeFormat('en-CA', {
  timeZone: 'Asia/Tokyo',
  year: 'numeric',
  month: '2-digit',
  day: '2-digit',
});

function formatDate(value) {
  const date = new Date(value);
  if (!Number.isFinite(date.getTime())) return '';
  const parts = Object.fromEntries(dateFormatter.formatToParts(date).map(({ type, value: part }) => [type, part]));
  return `${parts.year}.${parts.month}.${parts.day}`;
}

function versionLabel(tag) {
  return /^v/i.test(tag) ? tag : `v${tag}`;
}

function safeUrl(value, baseUrl) {
  try {
    const url = new URL(value, baseUrl);
    return ['http:', 'https:'].includes(url.protocol) ? url.href : null;
  } catch {
    return null;
  }
}

function renderMarkdown(markdown, sourceUrl) {
  const fragment = DOMPurify.sanitize(marked.parse(markdown, { gfm: true, async: false }), {
    USE_PROFILES: { html: true },
    RETURN_DOM_FRAGMENT: true,
    FORBID_TAGS: ['style', 'form', 'input', 'button', 'textarea', 'select', 'iframe', 'object', 'embed'],
    FORBID_ATTR: ['style', 'id', 'name'],
    ALLOW_DATA_ATTR: false,
  });

  // Keep the source's heading hierarchy beneath the page h1 and release h2.
  const headings = [...fragment.querySelectorAll('h1, h2, h3, h4, h5, h6')];
  const firstLevel = Math.min(...headings.map((heading) => Number(heading.tagName.slice(1))));
  headings.forEach((heading) => {
    const level = Math.min(6, Number(heading.tagName.slice(1)) - firstLevel + 3);
    const replacement = document.createElement(`h${level}`);
    replacement.append(...heading.childNodes);
    heading.replaceWith(replacement);
  });

  const baseUrl = sourceUrl || `${archive.repositoryUrl.replace(/\/$/, '')}/blob/master/`;
  fragment.querySelectorAll('a').forEach((link) => {
    const href = link.getAttribute('href');
    const url = href?.trim() ? safeUrl(href, baseUrl) : null;
    if (!url) {
      link.replaceWith(...link.childNodes);
      return;
    }
    link.href = url;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
  });

  fragment.querySelectorAll('table').forEach((table) => {
    const wrapper = document.createElement('div');
    wrapper.className = 'release-table-scroll';
    wrapper.tabIndex = 0;
    wrapper.setAttribute('role', 'region');
    wrapper.setAttribute('aria-label', t('发布说明表格，可左右滚动'));
    table.replaceWith(wrapper);
    wrapper.append(table);
  });
  return fragment;
}

export function initReleaseNotes() {
  const body = document.querySelector('#release-body');
  if (!body) return;

  const list = document.querySelector('#release-list');
  const select = document.querySelector('#release-select');
  const count = document.querySelector('#release-count');
  const syncDate = document.querySelector('#release-sync-date');
  const title = document.querySelector('#release-title');
  const date = document.querySelector('#release-date');
  const badge = document.querySelector('#release-badge');
  const original = document.querySelector('#release-original');
  const releases = Array.isArray(archive.releases) ? archive.releases : [];
  const latestStable = releases.find((release) => !release.prerelease);
  const versionLinks = new Map();
  let selectedTag = null;
  let selectedLocale = null;

  function isLatestStable(release) {
    return !release.prerelease && release.id === latestStable?.id;
  }

  function optionLabel(release) {
    const latest = isLatestStable(release) ? ' New' : '';
    const prerelease = release.prerelease ? ` · ${t('预发布')}` : '';
    return `${versionLabel(release.tag)}${latest} · ${formatDate(release.publishedAt)}${prerelease}`;
  }

  count.textContent = t('{count} 个版本', { count: releases.length });
  syncDate.textContent = formatDate(archive.syncedAt);
  if (syncDate.textContent) syncDate.dateTime = archive.syncedAt;
  list.replaceChildren();
  select.replaceChildren();

  if (!releases.length) {
    select.disabled = true;
    date.textContent = '';
    date.removeAttribute('datetime');
    badge.hidden = true;
    original.hidden = true;
    original.removeAttribute('href');
    const renderEmpty = () => {
      count.textContent = t('{count} 个版本', { count: 0 });
      title.textContent = t('暂无发布记录');
      body.textContent = t('发布说明准备中，稍后可在这里查看各版本更新。');
      body.lang = getLocale();
    };
    renderEmpty();
    onLocaleChange(renderEmpty);
    return;
  }

  function showTitleIfNeeded() {
    const rect = title.getBoundingClientRect();
    const topMargin = Number.parseFloat(getComputedStyle(title).scrollMarginTop) || 0;
    if (rect.top < topMargin || rect.bottom > window.innerHeight) {
      title.scrollIntoView({ block: 'start', behavior: 'auto' });
    }
  }

  function showRelease(release, scroll = false) {
    const locale = getLocale();
    if (selectedTag === release.tag && selectedLocale === locale) return;
    selectedTag = release.tag;
    selectedLocale = locale;
    title.textContent = release.name || versionLabel(release.tag);
    date.textContent = formatDate(release.publishedAt);
    date.dateTime = release.publishedAt;
    badge.hidden = false;
    badge.textContent = t(release.prerelease ? '预发布' : isLatestStable(release) ? '最新稳定版' : '正式版');
    badge.classList.toggle('is-prerelease', release.prerelease);
    badge.classList.toggle('is-latest', isLatestStable(release));

    const originalUrl = safeUrl(release.url, archive.repositoryUrl);
    original.hidden = !originalUrl;
    if (originalUrl) {
      original.href = originalUrl;
      original.target = '_blank';
      original.rel = 'noopener noreferrer';
    } else {
      original.removeAttribute('href');
    }

    const notes = selectReleaseNotes(release, locale);
    body.lang = notes.locale;
    if (notes.body.trim()) {
      try {
        body.replaceChildren(renderMarkdown(notes.body, notes.sourceUrl));
        if (notes.locale !== locale) {
          const notice = document.createElement('p');
          notice.className = 'release-translation-notice';
          notice.lang = locale;
          notice.setAttribute('role', 'status');
          notice.textContent = t('此版本尚无{language}发布说明，以下显示{fallbackLanguage}原文。', {
            language: languageNames[locale], fallbackLanguage: languageNames[notes.locale],
          });
          body.prepend(notice);
        }
      } catch {
        body.lang = locale;
        body.textContent = t('此版本发布说明暂时无法显示，请查看 GitHub 原始记录。');
      }
    } else {
      body.lang = locale;
      body.textContent = t('此版本未提供发布说明，可通过 GitHub 原始记录查看版本详情。');
    }

    versionLinks.forEach((link, tag) => {
      const active = tag === release.tag;
      link.classList.toggle('is-active', active);
      if (active) link.setAttribute('aria-current', 'true');
      else link.removeAttribute('aria-current');
    });
    select.value = release.tag;
    if (scroll) showTitleIfNeeded();
  }

  function navigateTo(release) {
    const hash = `#${encodeURIComponent(release.tag)}`;
    if (window.location.hash !== hash) {
      // pushState avoids the browser searching the Markdown for a matching ID.
      window.history.pushState(window.history.state, '', hash);
    }
    showRelease(release, true);
  }

  releases.forEach((release) => {
    const link = document.createElement('a');
    link.className = 'release-version';
    link.href = `#${encodeURIComponent(release.tag)}`;
    const label = document.createElement('span');
    label.className = 'release-version-label';
    label.textContent = versionLabel(release.tag);
    if (isLatestStable(release)) {
      const indicator = document.createElement('span');
      indicator.className = 'release-new';
      indicator.lang = 'en';
      indicator.textContent = 'New';
      label.append(' ', indicator);
    }
    const published = document.createElement('time');
    published.dateTime = release.publishedAt;
    published.textContent = formatDate(release.publishedAt);
    link.append(label, published);
    link.addEventListener('click', (event) => {
      if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      event.preventDefault();
      navigateTo(release);
    });
    versionLinks.set(release.tag, link);
    list.append(link);

    const option = document.createElement('option');
    option.value = release.tag;
    option.textContent = optionLabel(release);
    select.append(option);
  });

  select.addEventListener('change', () => {
    const release = releases.find((item) => item.tag === select.value);
    if (release) navigateTo(release);
  });

  function syncFromLocation(scroll) {
    let tag;
    try {
      tag = decodeURIComponent(window.location.hash.slice(1));
    } catch {
      tag = null;
    }
    const release = releases.find((item) => item.tag === tag);
    if (!release && window.location.hash) {
      window.history.replaceState(window.history.state, '', `#${encodeURIComponent(releases[0].tag)}`);
    }
    showRelease(release || releases[0], scroll);
  }

  window.addEventListener('hashchange', () => syncFromLocation(true));
  window.addEventListener('popstate', () => syncFromLocation(true));
  onLocaleChange(() => {
    count.textContent = t('{count} 个版本', { count: releases.length });
    [...select.options].forEach((option) => {
      const release = releases.find((item) => item.tag === option.value);
      option.textContent = optionLabel(release);
    });
    showRelease(releases.find((release) => release.tag === selectedTag) || releases[0]);
  });
  syncFromLocation(false);
}
