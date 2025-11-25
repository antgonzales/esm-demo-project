export * from './api';
export * from './cache';
export { default as ApiService } from './api';
import ApiServiceClass from './api';
export declare const apiService: ApiServiceClass;
export { cache, cache as globalCache } from './cache';
export declare const services: {
    api: ApiServiceClass;
    cache: import("./cache").Cache<unknown>;
    ApiService: typeof ApiServiceClass;
};
export default services;
//# sourceMappingURL=index.d.ts.map