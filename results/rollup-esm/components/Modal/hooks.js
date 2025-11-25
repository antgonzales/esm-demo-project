import { useState, useEffect } from 'react';

// Custom hook with named export
const useModal = (initialOpen = false) => {
  const [isOpen, setIsOpen] = useState(initialOpen);
  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);
  const toggleModal = () => setIsOpen(prev => !prev);
  return {
    isOpen,
    openModal,
    closeModal,
    toggleModal
  };
};
// Another custom hook
const useModalKeyboard = (isOpen, onClose) => {
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = event => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);
};

export { useModal, useModalKeyboard };
//# sourceMappingURL=hooks.js.map
