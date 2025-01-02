/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#D96846',    // Orange/rust
        secondary: '#596235',  // Olive green
        neutral: '#CDCBD6',    // Light gray
        dark: '#2F3020',       // Dark olive
      },
      boxShadow: {
        '3d': '0 4px 0 0 #2F3020',
        '3d-hover': '0 2px 0 0 #2F3020',
      }
    },
  },
  plugins: [],
};