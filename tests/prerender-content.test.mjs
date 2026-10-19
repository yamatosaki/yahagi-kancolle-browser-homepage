import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import config from '../vite.config.js';
import { prerenderContent } from '../scripts/prerender-content.mjs';

const htmlTransform = config.plugins?.find((plugin) => plugin.name === 'prerender-content')
  ?.transformIndexHtml.handler ?? ((html) => html);

test('the build HTML transform includes the real feature text before JavaScript runs', async () => {
  const html = await readFile(new URL('../features.html', import.meta.url), 'utf8');
  const rendered = htmlTransform(html);
  assert.match(rendered, /<h2 id="feature-fleet">舰队与战斗<\/h2>/);
  assert.match(rendered, /未卜先知支持通常舰队与联合舰队，展示耐久变化、战果等级与 MVP 预测。/);
  assert.match(rendered, /<h2 id="feature-mobile">多屏与移动体验<\/h2>/);
  assert.equal((rendered.match(/class="feature-article"/g) ?? []).length, 6);
});

test('the build HTML transform includes platform versions and accessible download buttons', async () => {
  const html = await readFile(new URL('../download.html', import.meta.url), 'utf8');
  const rendered = htmlTransform(html);
  assert.match(rendered, /data-open-download="Android" aria-label="下载 Android 版"/);
  assert.match(rendered, /data-open-download="iOS" aria-label="下载 iOS 版"/);
  assert.match(rendered, /v1\.0\.8 · APK 安装包/);
  assert.match(rendered, /v1\.0\.8 · IPA 安装包/);
  assert.match(rendered, /本项目主要维护的版本。更新时请按照发布说明覆盖安装。/);
});

test('pre-rendering escapes content and attributes instead of creating HTML from text', () => {
  const unsafe = `"'><img src=x onerror=alert(1)>&`;
  const escaped = '&quot;&#39;&gt;&lt;img src=x onerror=alert(1)&gt;&amp;';
  const rendered = prerenderContent('<div id="feature-list"></div><div id="download-options"></div>', {
    featureGroups: [{ key: unsafe, number: unsafe, kicker: unsafe, title: unsafe, description: unsafe, details: [unsafe] }],
    downloads: [{ platform: unsafe, label: unsafe, version: unsafe, fileType: unsafe, note: unsafe }],
  });
  assert.ok(!rendered.includes('<img'), 'text does not turn into an image element');
  assert.ok(!rendered.includes(unsafe), 'raw HTML is never inserted');
  assert.ok(rendered.includes(`id="feature-${escaped}"`));
  assert.ok(rendered.includes(`aria-labelledby="feature-${escaped}"`));
  assert.ok(rendered.includes(`data-open-download="${escaped}" aria-label="${escaped}"`));
  assert.ok(rendered.includes(`<li>${escaped}</li>`));
  assert.ok(rendered.includes(`v${escaped} · ${escaped} 安装包`));
});

test('repeated HTML transforms do not duplicate feature content or download buttons', async () => {
  for (const page of ['features', 'download']) {
    const html = await readFile(new URL(`../${page}.html`, import.meta.url), 'utf8');
    const rendered = htmlTransform(html);
    assert.equal(htmlTransform(rendered), rendered);
  }
});

test('existing container content and unrelated elements remain unchanged', () => {
  const html = '<div id="feature-list"><article>手工维护的正文</article></div>'
    + '<div id="download-options"><button>现有下载</button></div>'
    + '<div data-id="feature-list"></div><div id="other"></div>';
  assert.equal(prerenderContent(html, {
    featureGroups: [{ key: 'fleet', number: '01', kicker: 'FLEET', title: '舰队与战斗', description: '正文', details: [] }],
    downloads: [{ platform: 'Android', label: '下载 Android 版', description: '兼容旧版本说明', note: '说明' }],
  }), html);
});

test('empty containers with whitespace and single-quoted IDs receive content', () => {
  const rendered = prerenderContent("<div class='download-options' id = 'download-options'>\n  </div>", {
    downloads: [{ platform: 'Android', label: '下载 Android 版', description: '兼容旧版本说明', note: '说明' }],
  });
  assert.match(rendered, /class="download-card-description">兼容旧版本说明<\/span>/);
});
