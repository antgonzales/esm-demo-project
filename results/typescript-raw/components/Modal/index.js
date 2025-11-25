// Another barrel file with complex export patterns
import ModalComponent from './Modal';
// Multiple export patterns in one file - critics hate this
export { default } from './Modal';
export { default as Modal } from './Modal';
// Export everything from hooks - using the "problematic" export *
export * from './hooks';
export { useModal, useModalKeyboard } from './hooks';
// Avoid duplicate by using different name
export { ModalComponent };
//# sourceMappingURL=index.js.map