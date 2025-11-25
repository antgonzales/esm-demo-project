class Cache {
  store = new Map();
  constructor(config) {
    this.config = config;
  }
  set(key, value, ttl) {
    // Remove oldest entries if cache is full
    if (this.store.size >= this.config.maxSize) {
      const oldestKey = this.store.keys().next().value;
      if (oldestKey) {
        this.store.delete(oldestKey);
      }
    }
    const expiry = Date.now() + (ttl || this.config.defaultTTL);
    this.store.set(key, {
      value,
      expiry,
      created: Date.now()
    });
  }
  get(key) {
    const entry = this.store.get(key);
    if (!entry) return undefined;
    if (Date.now() > entry.expiry) {
      this.store.delete(key);
      return undefined;
    }
    return entry.value;
  }
  has(key) {
    return this.get(key) !== undefined;
  }
  delete(key) {
    return this.store.delete(key);
  }
  clear() {
    this.store.clear();
  }
  size() {
    return this.store.size;
  }
}
// Global cache instance
const cache = new Cache({
  maxSize: 1000,
  defaultTTL: 5 * 60 * 1000 // 5 minutes
});
// Cache utility functions
const createCache = config => {
  return new Cache(config);
};
const clearExpiredEntries = cacheInstance => {
  // Implementation would iterate and remove expired entries
  // Simplified for demo
  console.log('Clearing expired entries...');
};

export { Cache, cache, clearExpiredEntries, createCache };
//# sourceMappingURL=cache.js.map
