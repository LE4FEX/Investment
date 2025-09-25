import { sleep } from '../utils/time.js';

export class RequestQueue {
  constructor({ initialDelay = 0, maxDelay = 60000 } = {}) {
    this.queue = Promise.resolve();
    this.delay = initialDelay;
    this.maxDelay = maxDelay;
  }

  enqueue(task) {
    this.queue = this.queue.then(async () => {
      if (this.delay > 0) {
        await sleep(this.delay);
      }
      return task();
    });
    return this.queue;
  }

  backoff(increase = 2000) {
    this.delay = Math.min(this.delay + increase, this.maxDelay);
  }

  reset() {
    this.delay = 0;
  }
}
