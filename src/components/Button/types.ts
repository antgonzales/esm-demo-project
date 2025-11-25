import React from 'react';

// Type definitions with named exports
export interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'danger';
  onClick?: () => void;
  disabled?: boolean;
}

// Additional named exports
export type ButtonVariant = 'primary' | 'secondary' | 'danger';

export const BUTTON_VARIANTS = {
  PRIMARY: 'primary' as const,
  SECONDARY: 'secondary' as const, 
  DANGER: 'danger' as const
} as const;