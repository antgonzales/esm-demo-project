export interface CacheEntry<T> {
    value: T;
    expiry: number;
    created: number;
}
export interface CacheConfig {
    maxSize: number;
    defaultTTL: number;
}
export declare class Cache<T> {
    private store;
    private config;
    constructor(config: CacheConfig);
    set(key: string, value: T, ttl?: number): void;
    get(key: string): T | undefined;
    has(key: string): boolean;
    delete(key: string): boolean;
    clear(): void;
    size(): number;
}
export declare const cache: Cache<unknown>;
export declare const createCache: <T>(config: CacheConfig) => Cache<T>;
export declare const clearExpiredEntries: <T>(cacheInstance: Cache<T>) => void;
//# sourceMappingURL=cache.d.ts.map