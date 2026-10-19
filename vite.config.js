import { defineConfig } from 'vite';
import { fileURLToPath } from 'node:url';

export default defineConfig({
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
