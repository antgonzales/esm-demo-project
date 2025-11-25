// Cache service with named exports only
export interface CacheEntry<T> {
  value: T;
  expiry: number;
  created: number;
}

export interface CacheConfig {
  maxSize: number;
  defaultTTL: number; // Time to live in milliseconds
}

export class Cache<T> {
  private store = new Map<string, CacheEntry<T>>();
  private config: CacheConfig;
  
  constructor(config: CacheConfig) {
    this.config = config;
  }
  
  set(key: string, value: T, ttl?: number): void {
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
  
  get(key: string): T | undefined {
    const entry = this.store.get(key);
    if (!entry) return undefined;
    
    if (Date.now() > entry.expiry) {
      this.store.delete(key);
      return undefined;
    }
    
    return entry.value;
  }
  
  has(key: string): boolean {
    return this.get(key) !== undefined;
  }
  
  delete(key: string): boolean {
    return this.store.delete(key);
  }
  
  clear(): void {
    this.store.clear();
  }
  
  size(): number {
    return this.store.size;
  }
}

// Global cache instance
export const cache = new Cache({
  maxSize: 1000,
  defaultTTL: 5 * 60 * 1000 // 5 minutes
});

// Cache utility functions
export const createCache = <T>(config: CacheConfig): Cache<T> => {
  return new Cache<T>(config);
};

export const clearExpiredEntries = <T>(cacheInstance: Cache<T>): void => {
  // Implementation would iterate and remove expired entries
  // Simplified for demo
  console.log('Clearing expired entries...');
};