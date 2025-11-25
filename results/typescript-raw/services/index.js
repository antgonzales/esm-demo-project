// Services barrel file - demonstrates complex mixing of re-export patterns
// This creates comprehensive and deep re-export chains
// Re-export everything from both services
export * from './api';
export * from './cache';
// Re-export the default as named export
export { default as ApiService } from './api';
// Create service instances for convenience
import ApiServiceClass from './api';
import { createApiConfig } from './api';
import { cache } from './cache';
// Export pre-configured service instances
export const apiService = new ApiServiceClass(createApiConfig('https://api.example.com'));
// Export the cache instance with a different name too
export { cache, cache as globalCache } from './cache';
// Create a services object combining everything
export const services = {
    api: apiService,
    cache,
    ApiService: ApiServiceClass
};
// Export services as default too (comprehensive pattern mixing)
export default services;
// This file demonstrates complex re-export patterns:
// 1. ✅ Multiple export * statements
// 2. ✅ Default + named exports mixed
// 3. ✅ Re-exporting defaults as named
// 4. ✅ Creating new instances from imports
// 5. ✅ Multiple aliases for same export
// 6. ✅ Deep re-export chain (3+ levels deep)
// 7. ✅ Mixing all export patterns in one place
//# sourceMappingURL=index.js.map