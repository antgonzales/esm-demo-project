// Main components barrel file - the ultimate "problematic" pattern according to critics
// This creates a deep re-export chain that goes: 
// components/index.ts -> Button/index.ts -> Button.tsx
// components/index.ts -> Modal/index.ts -> Modal.tsx & hooks.ts
// Re-export everything from Button (export * is "problematic")
export * from './Button';
// Re-export everything from Modal (more export *)
export * from './Modal';
// Import defaults for creating the components object
import { default as ButtonDefault } from './Button';
import { default as ModalDefault } from './Modal';
// Also provide direct named exports for convenience
export { Button } from './Button';
export { Modal } from './Modal';
// Create a components object with default exports (mixing patterns)
export const Components = {
    Button: ButtonDefault,
    Modal: ModalDefault
};
// Export a default that combines everything
export default Components;
// This file demonstrates ALL the patterns critics claim are problematic:
// 1. ✅ Barrel file
// 2. ✅ export * statements  
// 3. ✅ Mixed default/named exports
// 4. ✅ Deep re-export chains
// 5. ✅ Multiple ways to import same thing
//# sourceMappingURL=index.js.map