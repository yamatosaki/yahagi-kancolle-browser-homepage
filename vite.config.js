import { defineConfig } from 'vite';
import { fileURLToPath } from 'node:url';
import { downloads, featureGroups } from './src/site-config.js';
import { prerenderContent } from './scripts/prerender-content.mjs';

export default defineConfig({
  plugins: [{
    name: 'prerender-content',
    apply: 'build',
    transformIndexHtml: {
      order: 'pre',
      handler: (html) => prerenderContent(html, { featureGroups, downloads }),
    },
  }],
  build: {
    rolldownOptions: {
      input: {
        home: fileURLToPath(new URL('./index.html', import.meta.url)),
        features: fileURLToPath(new URL('./features.html', import.meta.url)),
        download: fileURLToPath(new URL('./download.html', import.meta.url)),
        updates: fileURLToPath(new URL('./updates.html', import.meta.url)),
        support: fileURLToPath(new URL('./support.html', import.meta.url)),
        disclaimer: fileURLToPath(new URL('./disclaimer.html', import.meta.url)),
      },
    },
  },
});
