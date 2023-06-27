class EventEmitter {
  constructor() {
    this.subscriptions = new Map;
  }

  subscribe(event, cb) {
    if (!this.subscriptions.has(event)) {
      this.subscriptions.set(event, new Set);
    }
    this.subscriptions.get(event).add(cb);

    return {
      unsubscribe: () => {
        const eventCB = this.subscriptions.get(event);
        eventCB.delete(cb);
      }
    }
  }

  emit(event, args = []) {
    const cbs = this.subscriptions?.get(event) ?? [];
    return [...cbs].map(cb => cb?.(...args));
  }
}

/**
 * const emitter = new EventEmitter();
 *
 * // Subscribe to the onClick event with onClickCallback
 * function onClickCallback() { return 99 }
 * const sub = emitter.subscribe('onClick', onClickCallback);
 *
 * emitter.emit('onClick'); // [99]
 * sub.unsubscribe(); // undefined
 * emitter.emit('onClick'); // []
 */