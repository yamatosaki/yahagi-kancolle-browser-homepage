import { messages as siteMessages } from './locales/site.js';
import { messages as dynamicMessages } from './locales/dynamic.js';
import { messages as releaseMessages } from './locales/releases.js';

const locales = ['zh-CN', 'zh-TW', 'ja', 'ko', 'en'];
const storageKey = 'yahagi-language';
const messages = Object.fromEntries(locales.map((locale) => [locale, {
  ...siteMessages[locale],
  ...dynamicMessages[locale],
  ...releaseMessages[locale],
}]));
const listeners = new Set();
const textBindings = [];
const attributeBindings = [];
const pageLinks = [];
let initialized = false;

function normalizeLocale(value) {
  return typeof value === 'string'
    ? locales.find((locale) => locale.toLowerCase() === value.toLowerCase())
    : undefined;
}

function storedLocale() {
  try {
    return normalizeLocale(window.localStorage.getItem(storageKey));
  } catch {
    return undefined;
  }
}

function initialLocale() {
  if (typeof window === 'undefined') return 'zh-CN';
  return normalizeLocale(new URL(window.location.href).searchParams.get('lang')) || storedLocale() || 'zh-CN';
}

let currentLocale = initialLocale();

export function getLocale() {
  return currentLocale;
}

export function t(source, values = {}) {
  const translation = messages[currentLocale]?.[source] ?? source;
  return String(translation).replace(/\{([^{}]+)\}/g, (token, key) => (
    Object.hasOwn(values, key) ? String(values[key]) : token
  ));
}

export function onLocaleChange(callback) {
  listeners.add(callback);
  return () => listeners.delete(callback);
}

function saveLocale() {
  try {
    window.localStorage.setItem(storageKey, currentLocale);
  } catch {
    // The URL also carries the language when browser storage is unavailable.
  }
}

function applyLocale() {
  document.documentElement.lang = currentLocale;
  for (const { node, source, leading, trailing } of textBindings) {
    if (node.isConnected) node.nodeValue = `${leading}${t(source)}${trailing}`;
  }
  for (const { element, attribute, source } of attributeBindings) {
    element.setAttribute(attribute, t(source));
  }
  for (const selector of document.querySelectorAll('[data-language-select]')) selector.value = currentLocale;
  for (const { link, url } of pageLinks) {
    const localizedUrl = new URL(url);
    localizedUrl.searchParams.set('lang', currentLocale);
    link.href = localizedUrl.href;
  }
}

function setLocale(value, updateLocation = true) {
  const locale = normalizeLocale(value);
  if (!locale) return;
  const changed = locale !== currentLocale;
  currentLocale = locale;
  saveLocale();
  if (updateLocation) {
    const url = new URL(window.location.href);
    url.searchParams.set('lang', currentLocale);
    window.history.replaceState(window.history.state, '', url);
  }
  applyLocale();
  if (changed) for (const callback of listeners) callback(currentLocale);
}

export function initI18n() {
  if (initialized) return;
  initialized = true;

  // Only explicitly marked static text is bound. Existing elements and line
  // breaks stay intact, and release Markdown never enters this translator.
  for (const element of document.querySelectorAll('[data-i18n]')) {
    for (const node of element.childNodes) {
      if (node.nodeType !== Node.TEXT_NODE || !node.nodeValue.trim()) continue;
      const [, leading, source, trailing] = node.nodeValue.match(/^(\s*)([\s\S]*?)(\s*)$/);
      textBindings.push({ node, source, leading, trailing });
    }
  }
  for (const element of document.querySelectorAll('[data-i18n-attrs]')) {
    for (const attribute of element.dataset.i18nAttrs.split(/\s+/).filter(Boolean)) {
      const source = element.getAttribute(attribute);
      if (source !== null) attributeBindings.push({ element, attribute, source });
    }
  }
  for (const link of document.querySelectorAll('a[href]')) {
    const href = link.getAttribute('href');
    if (!href || href.startsWith('#')) continue;
    const url = new URL(href, window.location.href);
    if (url.origin === window.location.origin && (/\.html$/.test(url.pathname) || url.pathname.endsWith('/'))) {
      pageLinks.push({ link, url: url.href });
    }
  }
  for (const selector of document.querySelectorAll('[data-language-select]')) {
    selector.addEventListener('change', () => setLocale(selector.value));
  }
  window.addEventListener('popstate', () => setLocale(initialLocale(), false));
  window.addEventListener('storage', (event) => {
    if (event.key === storageKey && normalizeLocale(event.newValue)) setLocale(event.newValue);
  });

  currentLocale = initialLocale();
  saveLocale();
  applyLocale();
}
