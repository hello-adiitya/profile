import React from 'react';
import { cn } from '@/utils/cn';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

const Input = ({ label, id, className, ...props }: InputProps) => {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-dark mb-2">
        {label}
      </label>
      <input
        id={id}
        className={cn('input-3d', className)}
        {...props}
      />
    </div>
  );
};

export default Input;