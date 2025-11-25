import stringUtils from './string-utils.js';
export { capitalize, formatString, slugify, truncate } from './string-utils.js';
import dateUtils from './date-utils.js';
export { addDays, formatDate, getDaysDifference, getStartOfWeek, isWeekend } from './date-utils.js';

// Utils barrel file - demonstrates comprehensive export * patterns
// Uses export * for everything - showcasing re-export capabilities
// Export everything from both utility modules
const utils = {
  string: stringUtils,
  date: dateUtils
};
// Export a default collection too (comprehensive pattern mixing)
const allUtils = {
  ...stringUtils,
  ...dateUtils
};
// This demonstrates:
// 1. ✅ export * from multiple modules
// 2. ✅ Re-exporting default as named
// 3. ✅ Creating new default from imports
// 4. ✅ Mixing all export patterns in one file

export { dateUtils, allUtils as default, stringUtils, utils };
//# sourceMappingURL=index.js.map
