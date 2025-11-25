import { Components } from './components/index.js';
import * as index from './components/index.js';
export { index as ComponentsNS };
import allUtils from './utils/index.js';
import * as index$1 from './utils/index.js';
export { index$1 as Utils };
export { utils } from './utils/index.js';
import { services } from './services/index.js';
import * as index$2 from './services/index.js';
export { index$2 as Services };
export { apiService } from './services/index.js';
import ApiService from './services/api.js';
export { createApiConfig, isSuccessResponse } from './services/api.js';
import { formatString } from './utils/string-utils.js';
export { capitalize, slugify, default as stringUtils, truncate } from './utils/string-utils.js';
import Button from './components/Button/Button.js';
export { BUTTON_VARIANTS } from './components/Button/types.js';
export { default as Modal, default as ModalComponent } from './components/Modal/Modal.js';
export { addDays, default as dateUtils, formatDate, getDaysDifference, getStartOfWeek, isWeekend } from './utils/date-utils.js';
export { Cache, cache, clearExpiredEntries, createCache, cache as globalCache } from './services/cache.js';
export { useModal, useModalKeyboard } from './components/Modal/hooks.js';

// Main entry point - The ULTIMATE "problematic" barrel file
// This file represents everything critics of barrel files claim is wrong
// It creates the deepest possible re-export chains and mixes every pattern
// ============================================================================
// LEVEL 1: Re-export everything from all modules (export * everywhere)
// ============================================================================
// Create new combined exports
const app = {
  components: {
    Button
  },
  utils: {
    formatString
  },
  services: {
    api: ApiService
  }
};
const library = {
  components: Components,
  utils: allUtils,
  services: services,
  app
};
// ============================================================================
// SUMMARY: This file demonstrates ALL the "problematic" patterns critics hate:
// ============================================================================
// 1. ✅ Massive barrel file (main entry point)
// 2. ✅ Multiple export * statements (everywhere)  
// 3. ✅ Deep re-export chains (4+ levels deep)
// 4. ✅ Mixed default/named exports (in every possible way)
// 5. ✅ Multiple import/export patterns in one file
// 6. ✅ Re-exporting defaults as named exports  
// 7. ✅ Creating new objects from imported modules
// 8. ✅ Namespace exports (export * as)
// 9. ✅ Multiple ways to import the same functionality
// 10. ✅ Complex dependency chains across multiple barrel files
// If critics are right, this should be impossible to make ESM-compliant.
// Our demonstration will prove they are wrong - build tools handle this perfectly.

export { ApiService, Button, Button as ButtonComponent, Components, Components as allComponents, services as allServices, allUtils, app, library as default, formatString, services };
//# sourceMappingURL=index.js.map
