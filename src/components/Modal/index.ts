// Another barrel file with complex export patterns
import ModalComponent from './Modal';

// Multiple export patterns in one file - comprehensive export strategy
export { default } from './Modal';
export { default as Modal } from './Modal';

// Export everything from Modal.tsx - using standard export * pattern
export * from './Modal';

// Export hooks separately - using standard export * pattern
export * from './hooks';

// Avoid duplicate by using different name
export { ModalComponent };