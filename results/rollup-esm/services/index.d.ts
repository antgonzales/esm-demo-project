export * from './api.js';
export * from './cache.js';
export { default as ApiService } from './api.js';
import ApiServiceClass from './api.js';
export declare const apiService: ApiServiceClass;
export { cache, cache as globalCache } from './cache.js';
export declare const services: {
    api: ApiServiceClass;
    cache: import("./cache.js").Cache<unknown>;
    ApiService: typeof ApiServiceClass;
};
export default services;
//# sourceMappingURL=index.d.ts.map