export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          // Earthy Light Mode
          stone: '#eef0f2', // soft warm grey base
          sand: '#e6dfd3', // cream/sand accent
          clay: '#d4b7a1', // deeper sand/clay
          
          // Primary Elements
          terracotta: '#c97a5e',
          olive: '#4b5320', 
          moss: '#596847', // softer olive
          
          // Earthy Dark Mode
          dark: '#1e1c1b', // warm black/charcoal
          zinc: '#2a2826', // warm dark grey
          amber: '#8b5a2b',
        }
      },
      fontFamily: {
        serif: ['"DM Serif Display"', 'serif'],
        sans: ['"DM Sans"', 'sans-serif'],
      },
      animation: {
        'ping-slow': 'ping 3s cubic-bezier(0, 0, 0.2, 1) infinite',
        'radar': 'radar 4s linear infinite',
      },
      keyframes: {
        radar: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        }
      }
    },
  },
  plugins: [],
}
