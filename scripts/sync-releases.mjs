// Refresh the website's static release archive with:
// node scripts/sync-releases.mjs
// The browser reads the committed JSON and never needs to call GitHub's API.
import { mkdir, rename, unlink, writeFile } from 'node:fs/promises';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { dirname } from 'node:path';

const repositoryUrl = 'https://github.com/yamatosaki/yahagi-kancolle-browser';
const apiUrl = 'https://api.github.com/repos/yamatosaki/yahagi-kancolle-browser/releases';
const outputFile = fileURLToPath(new URL('../src/data/releases.json', import.meta.url));
const pageSize = 100;
const requestTimeoutMs = 30_000;
const noteFiles = {
  'zh-CN': 'README.md',
  'zh-TW': 'README.zh-Hant.md',
  ja: 'README.ja.md',
  ko: 'README.ko.md',
  en: 'README.en.md',
};

// Strip only the known document wrapper, leaving all Markdown in the notes intact.
export function documentBody(markdown, tag) {
  const lines = markdown.replace(/^\uFEFF/, '').split(/\r?\n/);
  const separator = lines.findIndex((line) => line.trim() === '---');
  const preamble = lines.slice(0, separator).join('\n');
  if (separator < 0 || separator > 10
    || lines[0].trim() !== `# ヤハギ v${tag.replace(/^v/i, '')}`
    || !['简体中文', '繁體中文', '日本語', 'English', '한국어'].every((label) => preamble.includes(label))
    || !preamble.includes(`/releases/tag/${encodeURIComponent(tag)}`)) {
    throw new Error(`Unexpected language document format for ${tag}. The existing archive was kept.`);
  }
  const body = lines.slice(separator + 1).join('\n').trim();
  if (!body) throw new Error(`Empty language document for ${tag}. The existing archive was kept.`);
  return body;
}

function normalizeRelease(release) {
  if (!Number.isSafeInteger(release.id)
    || typeof release.tag_name !== 'string'
    || typeof release.html_url !== 'string'
    || typeof release.published_at !== 'string'
    || !Number.isFinite(Date.parse(release.published_at))
    || typeof release.prerelease !== 'boolean'
    || (release.body !== null && typeof release.body !== 'string')) {
    throw new Error('GitHub returned an incomplete release. The existing archive was kept.');
  }

  return {
    id: release.id,
    tag: release.tag_name,
    name: release.name || release.tag_name,
    publishedAt: release.published_at,
    url: release.html_url,
    prerelease: release.prerelease,
    // Preserve the API's original Markdown without trimming or rewriting it.
    body: release.body ?? '',
  };
}

async function request(url, fetchImpl) {
  const response = await fetchImpl(url, {
    headers: {
      Accept: 'application/vnd.github+json',
      'X-GitHub-Api-Version': '2022-11-28',
      'User-Agent': 'Yahagi-Website-Release-Sync',
    },
    signal: AbortSignal.timeout(requestTimeoutMs),
  });
  if (!response.ok) {
    throw new Error(`GitHub returned ${response.status} ${response.statusText}: ${url}`);
  }
  return response;
}

async function fetchPage(page, fetchImpl) {
  const url = new URL(apiUrl);
  url.searchParams.set('per_page', String(pageSize));
  url.searchParams.set('page', String(page));

  let response;
  try {
    response = await request(url, fetchImpl);
  } catch (error) {
    throw new Error(`GitHub request failed on page ${page}: ${error.message}`);
  }

  let releases;
  try {
    releases = await response.json();
  } catch (error) {
    throw new Error(`Could not read GitHub's response on page ${page}: ${error.message}`);
  }
  if (!Array.isArray(releases)) {
    throw new Error(`GitHub returned an unexpected response on page ${page}.`);
  }
  return releases;
}

export async function buildArchive(fetchImpl = fetch) {
  const releasesById = new Map();
  let page = 1;

  while (true) {
    const batch = await fetchPage(page, fetchImpl);
    for (const release of batch) {
      if (release.draft) continue;
      const normalized = normalizeRelease(release);
      releasesById.set(normalized.id, normalized);
    }
    console.log(`Fetched page ${page}: ${batch.length} releases.`);
    if (batch.length < pageSize) break;
    page += 1;
  }

  const releases = [...releasesById.values()].sort((left, right) => (
    Date.parse(right.publishedAt) - Date.parse(left.publishedAt) || right.id - left.id
  ));
  if (!releases.length) {
    throw new Error('GitHub returned no public releases. The existing archive was kept.');
  }

  // Pin all language documents to one revision so a simultaneous upstream edit
  // cannot mix content from different commits in the same archive.
  const ref = await (await request(`${apiUrl.replace(/\/releases$/, '')}/git/ref/heads/master`, fetchImpl)).json();
  const notesRevision = ref.object?.sha;
  if (!/^[a-f0-9]{40}$/.test(notesRevision || '')) throw new Error('GitHub returned an invalid notes revision.');

  for (const release of releases) {
    const path = `docs/releases/${encodeURIComponent(release.tag)}`;
    release.notes = Object.fromEntries(await Promise.all(Object.entries(noteFiles).map(async ([locale, filename]) => {
      const rawUrl = `https://raw.githubusercontent.com/yamatosaki/yahagi-kancolle-browser/${notesRevision}/${path}/${filename}`;
      const response = await request(rawUrl, fetchImpl);
      return [locale, {
        body: documentBody(await response.text(), release.tag),
        sourceUrl: `${repositoryUrl}/blob/${notesRevision}/${path}/${filename}`,
      }];
    })));
    console.log(`Loaded ${release.tag}: all five language documents.`);
  }

  return {
    syncedAt: new Date().toISOString(),
    repositoryUrl,
    notesRevision,
    releases,
  };
}

async function main() {
  const archive = await buildArchive();
  const { releases } = archive;
  const json = `${JSON.stringify(archive, null, 2)}\n`;
  const temporaryFile = `${outputFile}.${process.pid}.${Date.now()}.tmp`;

  // Only replace the archive after every page has been fetched and validated.
  // A failed request, JSON parse, or write leaves the previous file intact.
  await mkdir(dirname(outputFile), { recursive: true });
  try {
    await writeFile(temporaryFile, json, { encoding: 'utf8', flag: 'wx' });
    await rename(temporaryFile, outputFile);
  } finally {
    await unlink(temporaryFile).catch((error) => {
      if (error.code !== 'ENOENT') console.error(`Could not remove temporary archive: ${error.message}`);
    });
  }

  console.log(`Saved ${releases.length} public releases (${releases.filter((release) => release.prerelease).length} prereleases).`);
  console.log(`Newest: ${releases[0].tag} — ${releases[0].publishedAt}`);
  console.log(`Oldest: ${releases.at(-1).tag} — ${releases.at(-1).publishedAt}`);
  console.log(`Archive: ${outputFile} (${Buffer.byteLength(json, 'utf8')} bytes)`);
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  main().catch((error) => {
    console.error(`Release sync failed: ${error.message}`);
    process.exitCode = 1;
  });
}
