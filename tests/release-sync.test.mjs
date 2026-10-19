import test from 'node:test';
import assert from 'node:assert/strict';
import { documentBody, buildArchive } from '../scripts/sync-releases.mjs';

const revision = 'a'.repeat(40);
const raw = (body) => `# ヤハギ v1.0.0\n\n简体中文 ｜ 繁體中文 ｜ 日本語 ｜ English ｜ 한국어\n\n[Download](https://github.com/yamatosaki/yahagi-kancolle-browser/releases/tag/1.0.0)\n\n---\n\n${body}\n`;
const release = { id: 1, tag_name: '1.0.0', name: 'ヤハギ v1.0.0', html_url: 'https://github.com/yamatosaki/yahagi-kancolle-browser/releases/tag/1.0.0', published_at: '2026-08-01T00:00:00Z', prerelease: false, draft: false, body: 'Original release body' };

test('removes the source wrapper and preserves body headings and separators', () => {
  assert.equal(documentBody(raw('## Changes\n\nFirst.\n\n---\n\nSecond.'), '1.0.0'), '## Changes\n\nFirst.\n\n---\n\nSecond.');
  assert.throws(() => documentBody('# Unrecognized\n\n---\n\nText', '1.0.0'), /Unexpected/);
  assert.throws(() => documentBody(raw('  '), '1.0.0'), /Empty/);
});

function mockFetch(missingLanguage = false) {
  return async (value) => {
    const url = String(value);
    if (url.includes('/releases?')) return Response.json([release, { ...release, id: 2, draft: true }]);
    if (url.endsWith('/git/ref/heads/master')) return Response.json({ object: { sha: revision } });
    assert.ok(url.includes(`/${revision}/docs/releases/1.0.0/`), 'documents must use the same pinned revision');
    if (missingLanguage && url.endsWith('README.ko.md')) return new Response('Missing', { status: 404 });
    return new Response(raw(`Official notes from ${url.split('/').at(-1)}`));
  };
}

test('syncs all five documents and retains the original release metadata', async () => {
  const archive = await buildArchive(mockFetch());
  assert.equal(archive.releases.length, 1, 'drafts are excluded');
  assert.equal(archive.notesRevision, revision);
  assert.equal(archive.releases[0].body, release.body);
  assert.deepEqual(Object.keys(archive.releases[0].notes), ['zh-CN', 'zh-TW', 'ja', 'ko', 'en']);
  assert.match(archive.releases[0].notes['zh-TW'].body, /README.zh-Hant.md/);
  assert.match(archive.releases[0].notes.ko.sourceUrl, /README.ko.md$/);
});

test('a missing language rejects the entire sync instead of publishing incomplete notes', async () => {
  await assert.rejects(buildArchive(mockFetch(true)), /404/);
});
