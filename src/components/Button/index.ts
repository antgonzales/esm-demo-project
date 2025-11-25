// Barrel file with mixed default and named exports - comprehensive export pattern
import ButtonComponent from './Button';

// Re-export default as named export AND keep default export
export { default } from './Button';
export { default as Button } from './Button';

// Re-export named exports from Button.tsx - using standard export * pattern
export * from './Button';

// Make default available as named export too (avoid duplicate by using alias)
export { ButtonComponent };

// This creates multiple ways to import the same thing - flexible import patterns