import React from 'react';
export interface ButtonProps {
    children: React.ReactNode;
    variant?: 'primary' | 'secondary' | 'danger';
    onClick?: () => void;
    disabled?: boolean;
}
export type ButtonVariant = 'primary' | 'secondary' | 'danger';
export declare const BUTTON_VARIANTS: {
    readonly PRIMARY: "primary";
    readonly SECONDARY: "secondary";
    readonly DANGER: "danger";
};
//# sourceMappingURL=types.d.ts.map