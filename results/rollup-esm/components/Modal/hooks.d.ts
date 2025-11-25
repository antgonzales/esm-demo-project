import React from 'react';
export interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
    title?: string;
    size?: 'small' | 'medium' | 'large';
}
export type ModalSize = 'small' | 'medium' | 'large';
export declare const useModal: (initialOpen?: boolean) => {
    isOpen: boolean;
    openModal: () => void;
    closeModal: () => void;
    toggleModal: () => void;
};
export declare const useModalKeyboard: (isOpen: boolean, onClose: () => void) => void;
//# sourceMappingURL=hooks.d.ts.map