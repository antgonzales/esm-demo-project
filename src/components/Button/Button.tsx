// Button component with default export (comprehensive export pattern)
import React from 'react';

// Inline type definitions
export interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'danger';
  onClick?: () => void;
  disabled?: boolean;
}

export type ButtonVariant = 'primary' | 'secondary' | 'danger';

export const BUTTON_VARIANTS = {
  PRIMARY: 'primary' as const,
  SECONDARY: 'secondary' as const, 
  DANGER: 'danger' as const
} as const;

function Button({ 
  children, 
  variant = 'primary', 
  onClick,
  disabled = false 
}: ButtonProps) {
  const className = `btn btn-${variant} ${disabled ? 'disabled' : ''}`;
  
  return (
    <button 
      className={className}
      onClick={onClick}
      disabled={disabled}
      type="button"
    >
      {children}
    </button>
  );
}

// Default export - comprehensive export pattern for ESM
export default Button;