// Utils barrel file - ultimate "problematic" pattern according to critics
// Uses export * for everything - the pattern they most dislike

// Export everything from both utility modules
export * from './string-utils';
export * from './date-utils';

// Also re-export defaults as named exports (more "problematic" mixing)
export { default as stringUtils } from './string-utils';
export { default as dateUtils } from './date-utils';

// Create a combined utils object (mixing all patterns)
import stringUtilsDefault from './string-utils';
import dateUtilsDefault from './date-utils';

export const utils = {
  string: stringUtilsDefault,
  date: dateUtilsDefault
};

// Export a default collection too (ultimate pattern mixing)
const allUtils = {
  ...stringUtilsDefault,
  ...dateUtilsDefault
};

export default allUtils;

// This demonstrates:
// 1. ✅ export * from multiple modules
// 2. ✅ Re-exporting default as named
// 3. ✅ Creating new default from imports
// 4. ✅ Mixing all export patterns in one file