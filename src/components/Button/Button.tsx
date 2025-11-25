// Button component with default export (claimed to be problematic)
import React from 'react';
import { ButtonProps } from './types';

const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  onClick,
  disabled = false 
}) => {
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
};

// Default export - claimed to be "problematic" for ESM
export default Button;