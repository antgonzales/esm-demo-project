// Modal component with default export
import React from 'react';

// Inline type definitions
export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  title?: string;
  size?: 'small' | 'medium' | 'large';
}

export type ModalSize = 'small' | 'medium' | 'large';

function Modal({ 
  isOpen, 
  onClose, 
  children, 
  title,
  size = 'medium' 
}: ModalProps) {
  if (!isOpen) return null;
  
  const modalClassName = `modal modal-${size}`;
  
  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className={modalClassName} onClick={e => e.stopPropagation()}>
        <div className="modal-header">
          <h2>{title}</h2>
          <button onClick={onClose} className="modal-close">×</button>
        </div>
        <div className="modal-content">
          {children}
        </div>
      </div>
    </div>
  );
}

// Another default export - comprehensive export patterns
export default Modal;