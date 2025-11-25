// Modal component with default export
import React from 'react';
import { ModalProps } from './hooks';

const Modal: React.FC<ModalProps> = ({ 
  isOpen, 
  onClose, 
  children, 
  title,
  size = 'medium' 
}) => {
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
};

// Another default export - more "problematic" patterns
export default Modal;