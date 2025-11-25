// Main entry point - Comprehensive barrel file demonstration
// This file demonstrates extensive re-export patterns and mixed export strategies
// It creates deep re-export chains and combines multiple export patterns
// ============================================================================
// LEVEL 1: Re-export everything from all modules (export * everywhere)
// ============================================================================
export * from './components';
export * from './utils';
export * from './services';
// ============================================================================
// LEVEL 2: Re-export specific items with aliases (pattern mixing)
// ============================================================================
export { Button, Modal } from './components';
export { formatString, formatDate, utils } from './utils';
export { ApiService, cache, services } from './services';
// ============================================================================
// LEVEL 3: Import and re-export as new combinations (deep complexity)
// ============================================================================
import { Button } from './components';
import { formatString } from './utils';
import { ApiService as apiService } from './services';
// Create new combined exports
export const app = {
    components: { Button },
    utils: { formatString },
    services: { api: apiService }
};
// ============================================================================
// LEVEL 4: Default export combining everything (comprehensive pattern mixing)
// ============================================================================
import { default as componentsDefault } from './components';
import { default as utilsDefault } from './utils';
import { default as servicesDefault } from './services';
const library = {
    components: componentsDefault,
    utils: utilsDefault,
    services: servicesDefault,
    app
};
export default library;
// ============================================================================
// LEVEL 5: Additional convenience exports (comprehensive export patterns)
// ============================================================================
// Re-export defaults as named exports
export { default as allComponents } from './components';
export { default as allUtils } from './utils';
export { default as allServices } from './services';
// Create namespace-style exports  
export * as ComponentsNS from './components';
export * as Utils from './utils';
export * as Services from './services';
// ============================================================================
// SUMMARY: This file demonstrates comprehensive re-export patterns:
// ============================================================================
// 1. ✅ Extensive barrel file (main entry point)
// 2. ✅ Multiple export * statements (across all modules)  
// 3. ✅ Deep re-export chains (4+ levels deep)
// 4. ✅ Mixed default/named exports (in various combinations)
// 5. ✅ Multiple import/export patterns in one file
// 6. ✅ Re-exporting defaults as named exports  
// 7. ✅ Creating new objects from imported modules
// 8. ✅ Namespace exports (export * as)
// 9. ✅ Multiple ways to import the same functionality
// 10. ✅ Complex dependency chains across multiple barrel files
// This demonstrates how modern build tools handle complex re-export patterns
// and maintain proper ESM compliance with comprehensive barrel file architectures.
//# sourceMappingURL=index.js.map