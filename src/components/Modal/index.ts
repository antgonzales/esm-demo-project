// Another barrel file with complex export patterns
import ModalComponent from './Modal';

// Multiple export patterns in one file - critics hate this
export { default } from './Modal';
export { default as Modal } from './Modal';

// Export everything from hooks - using the "problematic" export *
export * from './hooks';

// Selective re-exports for better tree-shaking (but still "problematic" to critics)
export type { ModalProps, ModalSize } from './hooks';
export { useModal, useModalKeyboard } from './hooks';

// Avoid duplicate by using different name
export { ModalComponent };