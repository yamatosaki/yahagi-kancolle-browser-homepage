// Include the same default-language product text in every visitor's built HTML.
// The browser replaces these children when initializing or switching languages.
const escapeHtml = (value) => String(value ?? '').replace(/[&<>"']/g, (character) => ({
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&#39;',
})[character]);

function renderFeatureGroups(featureGroups) {
  return featureGroups.map((feature) => {
    const titleId = escapeHtml(`feature-${feature.key}`);
    return `<article class="feature-article" aria-labelledby="${titleId}">`
      + `<div class="feature-index"><span>${escapeHtml(feature.number)}</span><span>${escapeHtml(feature.kicker)}</span></div>`
      + `<h2 id="${titleId}">${escapeHtml(feature.title)}</h2>`
      + `<div class="feature-description"><p>${escapeHtml(feature.description)}</p>`
      + `<ul>${feature.details.map((detail) => `<li>${escapeHtml(detail)}</li>`).join('')}</ul></div></article>`;
  }).join('');
}

function renderDownloads(downloads) {
  return downloads.map((download) => {
    const description = download.version && download.fileType
      ? `v${download.version} · ${download.fileType} 安装包`
      : download.description;
    return `<button type="button" class="download-card" data-open-download="${escapeHtml(download.platform)}" aria-label="${escapeHtml(download.label)}">`
      + `<span class="download-card-label">${escapeHtml(download.platform)}</span>`
      + `<span class="download-card-description">${escapeHtml(description)}</span>`
      + '<span class="download-card-action">选择下载方式</span>'
      + '<span class="download-card-arrow" aria-hidden="true">↗</span>'
      + `<span class="download-card-note">${escapeHtml(download.note)}</span></button>`;
  }).join('');
}

function fillEmptyContainer(html, id, content) {
  // These fixed containers are authored by this project. Requiring an empty
  // body preserves hand-written content and makes repeated transforms harmless.
  const container = new RegExp(`(<div\\b(?=[^>]*\\sid\\s*=\\s*(["'])${id}\\2)[^>]*>)\\s*(<\\/div>)`, 'g');
  return html.replace(container, (_match, opening, _quote, closing) => `${opening}${content}${closing}`);
}

export function prerenderContent(html, { featureGroups = [], downloads = [] } = {}) {
  return fillEmptyContainer(
    fillEmptyContainer(html, 'feature-list', renderFeatureGroups(featureGroups)),
    'download-options',
    renderDownloads(downloads),
  );
}
