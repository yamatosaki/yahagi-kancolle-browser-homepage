// Count finished resource attempts; time passing never advances the progress.
export function trackLoadingTasks(tasks, { onProgress, timeoutMs = 15000, signal } = {}) {
  return new Promise((resolve, reject) => {
    const total = tasks.length;
    let completed = 0;
    let failed = 0;
    let finished = false;
    let timer;
    const snapshot = () => ({ completed, total, failed });

    function finish(status, error) {
      if (finished) return;
      finished = true;
      clearTimeout(timer);
      signal?.removeEventListener('abort', abort);
      if (status === undefined) reject(error);
      else resolve({ status, ...snapshot() });
    }

    function report() {
      try { onProgress?.(snapshot()); }
      catch (error) { finish(undefined, error); }
    }

    function settle(didFail) {
      if (finished) return;
      completed++;
      if (didFail) failed++;
      report();
      if (completed === total) finish('complete');
    }

    function abort() { finish('aborted'); }
    signal?.addEventListener('abort', abort, { once: true });
    report();
    if (finished) return;
    if (signal?.aborted) { finish('aborted'); return; }
    if (total === 0) { finish('complete'); return; }
    timer = setTimeout(() => finish('timeout'), timeoutMs);

    for (const task of tasks) {
      if (finished) break;
      try {
        Promise.resolve(task(signal)).then(() => settle(false), () => settle(true));
      } catch {
        settle(true);
      }
    }
  });
}
