import React from 'react';
import { Moon, Sun } from 'lucide-react';
import { Theme } from '@/utils/theme';

interface ThemeToggleProps {
  theme: Theme;
  onToggle: () => void;
}

const ThemeToggle = ({ theme, onToggle }: ThemeToggleProps) => {
  return (
    <button
      onClick={onToggle}
      className="relative inline-flex h-10 w-16 items-center rounded-full bg-neutral/30 transition-colors
                hover:bg-primary/20 dark:bg-dark-lighter"
      aria-label="Toggle theme"
    >
      <span
        className={`${
          theme === 'dark' ? 'translate-x-8' : 'translate-x-1'
        } inline-block h-8 w-8 transform rounded-full bg-white shadow-lg 
        transition-transform duration-200 ease-in-out dark:bg-primary/90`}
      >
        {theme === 'dark' ? (
          <Moon className="h-8 w-8 p-1 text-neutral" />
        ) : (
          <Sun className="h-8 w-8 p-1 text-primary" />
        )}
      </span>
    </button>
  );
};
export default ThemeToggle;