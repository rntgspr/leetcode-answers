"use strict";

// you can write to stdout for debugging purposes, e.g.
console.log("This is a debug message");

class LRUCache {
  constructor(capacity) {
    this.capacity = capacity;
    this.cache = new Map();
  }

  get(key) {
    if (!this.cache.has(key)) {
      return null;
    }

    const value = this.cache.get(key);

    // re-add at top
    this.cache.delete(key);
    this.cache.set(key, value);

    return value;
  }

  put(key, value) {
    // protection
    if (this.cache.has(key)) {
      this.cache.delete(key);
    }

    // sets value at top
    this.cache.set(key, value);

    // check the size
    if (this.cache.size > this.capacity) {
      const old = this.cache.keys().next().value;
      this.cache.delete(old);
    }
  }
}

const cache = new LRUCache(3);

cache.put(1, 1);
cache.put(2, 2);
console.log(cache.get(1)); // 1
cache.put(3, 3);
console.log(cache.get(2)); // 2
cache.put(4, 4);
console.log(cache.get(1)); // null
console.log(cache.get(3)); // 3
console.log(cache.get(4)); // 4
