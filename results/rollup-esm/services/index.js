import ApiService, { createApiConfig } from './api.js';
export { isSuccessResponse } from './api.js';
import { cache } from './cache.js';
export { Cache, clearExpiredEntries, createCache } from './cache.js';

// Services barrel file - complex mixing of all "problematic" patterns
// This creates the deepest and most complex re-export chain
// Re-export everything from both services
// Export pre-configured service instances
const apiService = new ApiService(createApiConfig('https://api.example.com'));
// Create a services object combining everything
const services = {
  api: apiService,
  cache,
  ApiService: ApiService
};
// This file demonstrates the most complex "problematic" patterns:
// 1. ✅ Multiple export * statements
// 2. ✅ Default + named exports mixed
// 3. ✅ Re-exporting defaults as named
// 4. ✅ Creating new instances from imports
// 5. ✅ Multiple aliases for same export
// 6. ✅ Deep re-export chain (3+ levels deep)
// 7. ✅ Mixing all export patterns in one place

export { ApiService, apiService, cache, createApiConfig, services as default, cache as globalCache, services };
//# sourceMappingURL=index.js.map
