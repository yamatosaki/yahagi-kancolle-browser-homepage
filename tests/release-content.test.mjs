import test from 'node:test';
import assert from 'node:assert/strict';
import { selectReleaseNotes } from '../src/release-content.js';

test('selects the requested language instead of the original Chinese release body', () => {
  const release = { body: '简中原文', notes: { ja: { body: '日本語の更新内容', sourceUrl: 'https://example.com/ja' }, en: { body: 'English notes' } } };
  assert.equal(selectReleaseNotes(release, 'ja').body, '日本語の更新内容');
  assert.equal(selectReleaseNotes(release, 'ja').sourceUrl, 'https://example.com/ja');
  assert.equal(selectReleaseNotes(release, 'ko').locale, 'en');
});

test('legacy and incomplete archives report the actual fallback language', () => {
  assert.deepEqual(selectReleaseNotes({ body: '简中原文', url: 'https://example.com' }, 'ko'), { body: '简中原文', locale: 'zh-CN', sourceUrl: 'https://example.com' });
  assert.equal(selectReleaseNotes({ body: null }, 'en').body, '');
  assert.equal(selectReleaseNotes({ notes: { en: { body: ' ' }, 'zh-CN': { body: '中文' } } }, 'en').locale, 'zh-CN');
});
