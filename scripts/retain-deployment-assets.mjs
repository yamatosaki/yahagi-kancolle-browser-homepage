import { execFileSync } from 'node:child_process';
import { existsSync, mkdirSync, statSync, writeFileSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const projectRoot = fileURLToPath(new URL('../', import.meta.url));
const versionedBundle = /^assets\/[A-Za-z0-9._-]+-[A-Za-z0-9_-]{6,}\.(?:css|js)$/;

// Cached HTML can outlive a deployment. Keep its immutable bundles available,
// including lazy chunks; never restore old pages or replace the current build.
export function retainDeploymentAssets({
  repositoryDir = projectRoot,
  outputDir = path.join(repositoryDir, 'dist'),
  revision = 'origin/gh-pages',
  historyLimit = 12,
} = {}) {
  if (!statSync(outputDir).isDirectory()) throw new Error('Build output must be a directory');
  const git = (args, encoding = 'utf8') => execFileSync('git', args, {
    cwd: repositoryDir,
    encoding,
    maxBuffer: 16 * 1024 * 1024,
    windowsHide: true,
  });
  const revisions = git(['rev-list', `--max-count=${historyLimit}`, revision, '--', 'assets'])
    .trim().split(/\s+/).filter(Boolean);
  let restored = 0;
  let bytes = 0;
  for (const commit of revisions) {
    const assets = git(['ls-tree', '-r', '--name-only', commit, '--', 'assets'])
      .split(/\r?\n/).filter((asset) => versionedBundle.test(asset));
    for (const asset of assets) {
      const destination = path.join(outputDir, asset);
      if (existsSync(destination)) continue;
      const content = git(['show', `${commit}:${asset}`], null);
      mkdirSync(path.dirname(destination), { recursive: true });
      writeFileSync(destination, content);
      restored += 1;
      bytes += content.byteLength;
    }
  }
  return { restored, bytes };
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  // Fail before publishing if the deployment branch cannot be fetched or read.
  execFileSync('git', ['fetch', '--no-tags', 'origin', 'gh-pages'], {
    cwd: projectRoot,
    stdio: 'inherit',
    windowsHide: true,
  });
  const { restored, bytes } = retainDeploymentAssets();
  console.log(`Retained ${restored} previous deployment bundles (${bytes} bytes).`);
}
