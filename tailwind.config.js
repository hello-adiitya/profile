/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#D96846',    // Orange/rust
        secondary: '#596235',  // Olive green
        neutral: '#CDCBD6',    // Light gray
        dark: '#2F3020',       // Dark olive
        white: '#FFFFFF',
        midnight: '#121063',
        navyblue:'#000080',
        dark: {
          DEFAULT: '#0A1929',  // Deep blue-black
          lighter: '#132F4C',  // Lighter blue-black
          accent: '#173A5E',  // Accent blue
          white: '#FFFFFF',
          neutral: '#CDCBD6'
        }       
      },
      boxShadow: {
        '3d': '0 4px 0 0 #2F3020',
        '3d-hover': '0 2px 0 0 #2F3020',
        'glow': '0 0 20px rgba(100, 181, 246, 0.4)',
        'glow-strong': '0 0 30px rgba(100, 181, 246, 0.6)'
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(circle, var(--tw-gradient-stops))',
        'gradient-dots': 'radial-gradient(circle, rgba(100, 181, 246, 0.1) 1px, transparent 1px)',
      },
      animation: {
        'gradient': 'gradient 8s linear infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
    },
  },
  plugins: [],
};

