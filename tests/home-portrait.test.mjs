import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';

test('the homepage portrait loads from HTML before application scripts run', async () => {
  const html = await readFile(new URL('../index.html', import.meta.url), 'utf8');
  const portrait = html.match(/<img\b[^>]*\bdata-hero-layer="portrait"[^>]*>/)?.[0];
  assert.ok(portrait, 'homepage portrait is present');
  const src = portrait.match(/\bsrc="([^"]+)"/)?.[1];
  assert.ok(src, 'portrait has a source without requiring JavaScript');
  const asset = await readFile(new URL(`../public/${src.replace(/^\.\//, '')}`, import.meta.url));
  assert.equal(asset.subarray(0, 8).toString('hex'), '89504e470d0a1a0a');
  assert.ok(asset.readUInt32BE(16) > 0 && asset.readUInt32BE(20) > 0);
});
