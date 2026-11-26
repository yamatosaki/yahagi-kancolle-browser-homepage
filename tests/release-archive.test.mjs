import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';

const archive = JSON.parse(await readFile(new URL('../src/data/releases.json', import.meta.url), 'utf8'));
const files = { 'zh-CN': 'README.md', 'zh-TW': 'README.zh-Hant.md', ja: 'README.ja.md', ko: 'README.ko.md', en: 'README.en.md' };

test('every published version has complete official documents or its identified Chinese release page', () => {
  assert.ok(archive.releases.length > 0);
  assert.match(archive.notesRevision || '', /^[a-f0-9]{40}$/);
  for (const release of archive.releases) {
    if (release.notes?.['zh-CN']?.sourceUrl === release.url) {
      assert.deepEqual(Object.keys(release.notes), ['zh-CN'], `${release.tag}: release-page notes must not invent translations`);
      const notes = release.notes['zh-CN'];
      assert.ok(notes.body.trim(), `${release.tag}: missing release-page body`);
      assert.ok(release.body.replace(/\r\n/g, '\n').includes(notes.body), `${release.tag}: notes must come from the official API body`);
      assert.ok(!notes.body.includes('README.zh-Hant.md'), `${release.tag}: stale language menu leaked into notes`);
      continue;
    }
    for (const [locale, filename] of Object.entries(files)) {
      const notes = release.notes?.[locale];
      assert.ok(notes?.body?.trim(), `${release.tag}: missing ${locale} notes`);
      assert.equal(notes.sourceUrl, `${archive.repositoryUrl}/blob/${archive.notesRevision}/docs/releases/${release.tag}/${filename}`);
      assert.ok(!notes.body.includes('README.zh-Hant.md'), `${release.tag}/${locale}: source language menu leaked into notes`);
    }
  }
});
