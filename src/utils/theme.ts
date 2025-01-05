export type Theme = 'light' | 'dark';

export const toggleTheme = (theme: Theme): Theme => {
  return theme === 'light' ? 'dark' : 'light';
};

export const applyTheme = (theme: Theme) => {
  if (theme === 'dark') {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
  
  // Save theme preference
  localStorage.setItem('theme', theme);
};