import React from 'react';
import { cn } from '@/utils/cn';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  children: React.ReactNode;
}

const Button = ({ variant = 'primary', className, children, ...props }: ButtonProps) => {
  return (
    <button
      className={cn(
        variant === 'primary' ? 'btn-3d' : 'btn-3d-secondary',
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;