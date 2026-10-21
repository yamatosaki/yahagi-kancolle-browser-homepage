import test from 'node:test';
import assert from 'node:assert/strict';
import { trackLoadingTasks } from '../src/loading-progress.js';

function deferred() {
  let resolve;
  let reject;
  const promise = new Promise((yes, no) => { resolve = yes; reject = no; });
  return { promise, resolve, reject };
}

const flush = () => new Promise(setImmediate);

test('loading progress advances only when real tasks settle, including out-of-order completion', async () => {
  const pending = [deferred(), deferred(), deferred()];
  const started = [];
  const progress = [];
  const result = trackLoadingTasks(pending.map((item, index) => () => {
    started.push(index);
    return item.promise;
  }), { onProgress: value => progress.push(value) });
  assert.deepEqual(started, [0, 1, 2]);
  assert.deepEqual(progress, [{ completed: 0, total: 3, failed: 0 }]);
  await flush();
  assert.equal(progress.length, 1, 'pending resources cannot create progress');
  pending[2].resolve();
  await flush();
  assert.deepEqual(progress.at(-1), { completed: 1, total: 3, failed: 0 });
  pending[0].resolve();
  await flush();
  assert.deepEqual(progress.at(-1), { completed: 2, total: 3, failed: 0 });
  pending[1].resolve();
  assert.deepEqual(await result, { status: 'complete', completed: 3, total: 3, failed: 0 });
  assert.deepEqual(progress.map(value => value.completed), [0, 1, 2, 3]);
});

test('rejected resources and synchronous task failures finish without blocking other resources', async () => {
  const progress = [];
  const result = await trackLoadingTasks([
    () => Promise.reject(new Error('image failed')),
    () => { throw new Error('font failed'); },
    () => 42,
  ], { onProgress: value => progress.push(value) });
  assert.deepEqual(result, { status: 'complete', completed: 3, total: 3, failed: 2 });
  assert.deepEqual(progress.map(value => value.completed), [0, 1, 2, 3]);
  assert.deepEqual(progress.at(-1), { completed: 3, total: 3, failed: 2 });
});

test('a timeout retains the real completion count and ignores late resource completion', async () => {
  const pending = deferred();
  const progress = [];
  const result = await trackLoadingTasks([() => Promise.resolve(), () => pending.promise], {
    timeoutMs: 20,
    onProgress: value => progress.push(value),
  });
  assert.deepEqual(result, { status: 'timeout', completed: 1, total: 2, failed: 0 });
  assert.deepEqual(progress.map(value => value.completed), [0, 1]);
  pending.resolve();
  await flush();
  assert.equal(progress.length, 2, 'timeout must not be replaced with a fabricated 100%');
});

test('cancellation keeps the settled count and ignores late rejection', async () => {
  const controller = new AbortController();
  const pending = deferred();
  const progress = [];
  const result = trackLoadingTasks([() => Promise.resolve(), () => pending.promise], {
    signal: controller.signal,
    onProgress: value => progress.push(value),
  });
  await flush();
  controller.abort();
  assert.deepEqual(await result, { status: 'aborted', completed: 1, total: 2, failed: 0 });
  pending.reject(new Error('late image failure'));
  await flush();
  assert.deepEqual(progress.map(value => value.completed), [0, 1]);
});

test('a pre-cancelled load reports the initial count without starting resources', async () => {
  const controller = new AbortController();
  controller.abort();
  let started = false;
  const progress = [];
  const result = await trackLoadingTasks([() => { started = true; }], {
    signal: controller.signal,
    onProgress: value => progress.push(value),
  });
  assert.equal(started, false);
  assert.deepEqual(result, { status: 'aborted', completed: 0, total: 1, failed: 0 });
  assert.deepEqual(progress, [{ completed: 0, total: 1, failed: 0 }]);
});

test('an empty resource set finishes immediately', async () => {
  const progress = [];
  assert.deepEqual(await trackLoadingTasks([], { onProgress: value => progress.push(value) }), {
    status: 'complete', completed: 0, total: 0, failed: 0,
  });
  assert.deepEqual(progress, [{ completed: 0, total: 0, failed: 0 }]);
});

test('resource tasks receive the signal and the abort listener is removed after completion', async () => {
  const controller = new AbortController();
  const signal = controller.signal;
  const subscriptions = new Set();
  const add = signal.addEventListener.bind(signal);
  const remove = signal.removeEventListener.bind(signal);
  signal.addEventListener = (type, listener, options) => {
    if (type === 'abort') subscriptions.add(listener);
    add(type, listener, options);
  };
  signal.removeEventListener = (type, listener, options) => {
    if (type === 'abort') subscriptions.delete(listener);
    remove(type, listener, options);
  };
  const pending = deferred();
  const result = trackLoadingTasks([receivedSignal => {
    assert.equal(receivedSignal, signal);
    return pending.promise;
  }], { signal });
  assert.equal(subscriptions.size, 1);
  pending.resolve();
  await result;
  assert.equal(subscriptions.size, 0);
});
