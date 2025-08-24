/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'outfit': ['Outfit', 'sans-serif'],
        'roboto': ['Roboto', 'sans-serif'],
      },
      colors: {
        custom: {
          primary: '#040D12', // Very Dark Green
          accent: '#183D3D', // Dark Green
          secondary: '#5C8374', // Medium Green
          light: '#93B1A6', // Light Green
          white: '#FFFFFF', // White
        },
        primary: {
          50: '#f0f2f2',
          100: '#d9e0e0',
          200: '#b3c1c1',
          300: '#8da2a2',
          400: '#678383',
          500: '#040D12', // Main very dark green
          600: '#030a0f',
          700: '#02080c',
          800: '#020609',
          900: '#010406',
        },
        accent: {
          50: '#f0f5f5',
          100: '#d9e8e8',
          200: '#b3d1d1',
          300: '#8dbaba',
          400: '#67a3a3',
          500: '#183D3D', // Main dark green
          600: '#143232',
          700: '#102828',
          800: '#0c1e1e',
          900: '#081414',
        },
        secondary: {
          50: '#f0f4f2',
          100: '#d9e8e1',
          200: '#b3d1c3',
          300: '#8dbaa5',
          400: '#67a387',
          500: '#5C8374', // Main medium green
          600: '#4a6960',
          700: '#384f4c',
          800: '#263538',
          900: '#141b24',
        },
        light: {
          50: '#f5f8f7',
          100: '#e8f0ed',
          200: '#d1e1db',
          300: '#bad2c9',
          400: '#a3c3b7',
          500: '#93B1A6', // Main light green
          600: '#768e85',
          700: '#596b64',
          800: '#3c4843',
          900: '#1f2522',
        },
        dark: {
          50: '#f0f2f2',
          100: '#d9e0e0',
          200: '#b3c1c1',
          300: '#8da2a2',
          400: '#678383',
          500: '#040D12', // Very dark green
          600: '#030a0f',
          700: '#02080c',
          800: '#020609',
          900: '#010406',
        },
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'bounce-slow': 'bounce 2s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        }
      }
    },
  },
  plugins: [],
}
