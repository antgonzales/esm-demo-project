// Barrel file with mixed default and named exports - "problematic" pattern
import ButtonComponent from './Button';
// Re-export default as named export AND keep default export
export { default } from './Button';
export { default as Button } from './Button';
// Re-export named exports - using export * (claimed to be problematic)
export * from './types';
export { BUTTON_VARIANTS } from './types';
// Make default available as named export too (avoid duplicate by using alias)
export { ButtonComponent };
// This creates multiple ways to import the same thing - exactly what critics dislike
//# sourceMappingURL=index.js.map