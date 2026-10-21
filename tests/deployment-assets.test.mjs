import test from 'node:test';
import assert from 'node:assert/strict';
import { execFileSync } from 'node:child_process';
import { existsSync } from 'node:fs';
import { mkdtemp, mkdir, readFile, readdir, rm, writeFile } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import path from 'node:path';
import { retainDeploymentAssets } from '../scripts/retain-deployment-assets.mjs';

const previousAssets = {
  'assets/main-11111111.css': 'body { color: #111318; }\n',
  'assets/main-22222222.js': 'import("./release-notes-33333333.js");\n',
  'assets/release-notes-33333333.js': 'export const notes = "旧版发布说明";\n',
};
const currentOutput = {
  'index.html': '<!doctype html><title>Current homepage</title>',
  'download.html': '<!doctype html><title>Current download</title>',
  'assets/main-44444444.css': 'body { color: #2456ff; }\n',
  'assets/main-55555555.js': 'import("./release-notes-66666666.js");\n',
  'assets/release-notes-66666666.js': 'export const notes = "Current notes";\n',
  'assets/hero.png': 'current image bytes',
};

async function writeFiles(directory, files) {
  for (const [name, content] of Object.entries(files)) {
    const destination = path.join(directory, name);
    await mkdir(path.dirname(destination), { recursive: true });
    await writeFile(destination, content);
  }
}

async function fixture() {
  const temporaryDir = await mkdtemp(path.join(tmpdir(), 'yahagi-deployment-assets-'));
  const repositoryDir = path.join(temporaryDir, 'repository');
  const outputDir = path.join(temporaryDir, 'dist');
  await mkdir(repositoryDir);
  await mkdir(outputDir);
  const git = (...args) => execFileSync('git', args, { cwd: repositoryDir, stdio: 'pipe' });
  try {
    git('init', '--initial-branch=gh-pages');
    git('config', 'user.name', 'Deployment Assets Test');
    git('config', 'user.email', 'deployment-assets-test@example.invalid');
    git('config', 'commit.gpgsign', 'false');
    git('config', 'core.autocrlf', 'false');
    await writeFiles(repositoryDir, {
      ...previousAssets,
      'index.html': '<!doctype html><title>Old homepage</title>',
      'retired.html': '<!doctype html><title>Retired page</title>',
      'navigation-lifecycle.js': 'console.log("old stable script");',
      'assets/helper.js': 'console.log("unhashed helper");',
      'assets/retired-art.png': 'old retired image bytes',
      'assets/hero.png': 'old image bytes',
    });
    git('add', '.');
    git('commit', '-m', 'First published build');

    // The second publication deletes the first build's hashed assets.
    for (const name of [...Object.keys(previousAssets), 'retired.html', 'navigation-lifecycle.js', 'assets/helper.js', 'assets/retired-art.png']) {
      await rm(path.join(repositoryDir, name));
    }
    await writeFiles(repositoryDir, currentOutput);
    git('add', '-A');
    git('commit', '-m', 'Second published build');
    git('update-ref', 'refs/remotes/origin/gh-pages', 'HEAD');
    await writeFiles(outputDir, currentOutput);
    return { temporaryDir, repositoryDir, outputDir };
  } catch (error) {
    await rm(temporaryDir, { recursive: true, force: true });
    throw error;
  }
}

async function listFiles(directory, prefix = '') {
  const files = [];
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const name = prefix ? `${prefix}/${entry.name}` : entry.name;
    if (entry.isDirectory()) files.push(...await listFiles(path.join(directory, entry.name), name));
    else files.push(name);
  }
  return files.sort();
}

test('retains deleted hashed CSS, entry scripts and lazy release chunks from published history', async () => {
  const directories = await fixture();
  try {
    const result = await retainDeploymentAssets(directories);
    for (const [name, content] of Object.entries(previousAssets)) {
      const restoredPath = path.join(directories.outputDir, name);
      assert.ok(existsSync(restoredPath), `missing retained deployment asset: ${name}`);
      assert.equal(await readFile(restoredPath, 'utf8'), content);
    }
    assert.deepEqual(result, {
      restored: Object.keys(previousAssets).length,
      bytes: Object.values(previousAssets).reduce((sum, content) => sum + Buffer.byteLength(content), 0),
    });
  } finally {
    await rm(directories.temporaryDir, { recursive: true, force: true });
  }
});

test('preserves current build files and excludes old HTML, unhashed scripts and artwork', async () => {
  const directories = await fixture();
  try {
    // Even a path also present in history must retain the current dist bytes.
    const protectedPath = 'assets/main-11111111.css';
    const protectedContent = 'current output takes precedence over archived bytes';
    await writeFiles(directories.outputDir, { [protectedPath]: protectedContent });
    await retainDeploymentAssets(directories);
    assert.equal(await readFile(path.join(directories.outputDir, protectedPath), 'utf8'), protectedContent);
    for (const [name, content] of Object.entries(currentOutput)) {
      assert.equal(await readFile(path.join(directories.outputDir, name), 'utf8'), content, `current output changed: ${name}`);
    }
    const expected = [...Object.keys(currentOutput), ...Object.keys(previousAssets)].sort();
    assert.deepEqual(await listFiles(directories.outputDir), expected, 'only content-hashed scripts and styles may be recovered');
  } finally {
    await rm(directories.temporaryDir, { recursive: true, force: true });
  }
});

test('running asset retention twice leaves the output unchanged', async () => {
  const directories = await fixture();
  try {
    const options = { ...directories, revision: 'HEAD', historyLimit: 2 };
    await retainDeploymentAssets(options);
    assert.ok(existsSync(path.join(directories.outputDir, 'assets/main-11111111.css')), 'first run must recover the old stylesheet');
    const filesAfterFirstRun = await listFiles(directories.outputDir);
    const result = await retainDeploymentAssets(options);
    assert.deepEqual(result, { restored: 0, bytes: 0 });
    assert.deepEqual(await listFiles(directories.outputDir), filesAfterFirstRun);
  } finally {
    await rm(directories.temporaryDir, { recursive: true, force: true });
  }
});
