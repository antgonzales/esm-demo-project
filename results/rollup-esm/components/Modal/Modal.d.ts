import React from 'react';
export interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
    title?: string;
    size?: 'small' | 'medium' | 'large';
}
export type ModalSize = 'small' | 'medium' | 'large';
declare function Modal({ isOpen, onClose, children, title, size }: ModalProps): import("react/jsx-runtime").JSX.Element | null;
export default Modal;
//# sourceMappingURL=Modal.d.ts.map