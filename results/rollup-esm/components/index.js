import Button from './Button/Button.js';
export { BUTTON_VARIANTS } from './Button/Button.js';
import Modal from './Modal/Modal.js';
export { useModal, useModalKeyboard } from './Modal/hooks.js';

// Main components barrel file - demonstrates comprehensive re-export patterns
// This creates a deep re-export chain that goes: 
// components/index.ts -> Button/index.ts -> Button.tsx
// components/index.ts -> Modal/index.ts -> Modal.tsx & hooks.ts
// Re-export everything from Button (export * pattern)
// Create a components object with default exports (mixing patterns)
const Components = {
  Button: Button,
  Modal: Modal
};
// This file demonstrates comprehensive re-export patterns:
// 1. ✅ Barrel file structure
// 2. ✅ export * statements  
// 3. ✅ Mixed default/named exports
// 4. ✅ Deep re-export chains
// 5. ✅ Multiple import patterns for same functionality

export { Button, Button as ButtonComponent, Components, Modal, Modal as ModalComponent, Components as default };
//# sourceMappingURL=index.js.map
