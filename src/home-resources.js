function decodeImage(image, signal) {
  return new Promise((resolve, reject) => {
    let settled = false;
    let decoding = false;

    function finish(error) {
      if (settled) return;
      settled = true;
      image.removeEventListener('load', ready);
      image.removeEventListener('error', failed);
      signal?.removeEventListener('abort', aborted);
      if (error) reject(error);
      else resolve();
    }

    function failed() { finish(new Error('Homepage image could not load')); }
    function aborted() { finish(new DOMException('Opening cancelled', 'AbortError')); }
    function ready() {
      if (decoding || settled) return;
      if (!image.naturalWidth) { failed(); return; }
      decoding = true;
      if (typeof image.decode === 'function') image.decode().then(() => finish(), error => finish(error));
      else finish();
    }

    if (signal?.aborted) { aborted(); return; }
    image.addEventListener('load', ready, { once: true });
    image.addEventListener('error', failed, { once: true });
    signal?.addEventListener('abort', aborted, { once: true });
    if (image.complete) ready();
  });
}

export function createHomeResourceTasks({ portrait, wordmarks, body }) {
  const tasks = [];
  if (portrait) tasks.push(signal => decodeImage(portrait, signal));

  if (document.fonts?.load) {
    tasks.push(() => document.fonts.load('italic 900 24px "Yahagi Display"', 'YAHAGI'));
    const uiFamily = getComputedStyle(body).fontFamily.split(',')[0].trim();
    tasks.push(() => document.fonts.load(`500 16px ${uiFamily}`, body.textContent));
  }

  const masks = new Set();
  for (const wordmark of wordmarks.filter(Boolean)) {
    const mask = getComputedStyle(wordmark).maskImage;
    for (const match of mask.matchAll(/url\(["']?([^"')]+)["']?\)/g)) masks.add(match[1]);
  }
  for (const url of masks) {
    tasks.push(signal => {
      const image = new Image();
      image.src = url;
      return decodeImage(image, signal);
    });
  }
  return tasks;
}
