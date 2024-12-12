import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        bannerImg: "url('/background.jpg')",
        'warrior-texture': "url('/warrior-texture.png')",
      },
      colors: {
        foreground: "var(--foreground)",
        lightOrange: "#F3B333",
        darkOrange: '#B46100',
        lightGray: '#D3D3D3',
        darkGray: '#A9A9A9',
      },
      animation: {
        'glow-pulse': 'glow-pulse 2s ease-in-out infinite',
        'navbar-slash': 'navbar-slash 2s linear infinite',
        'sword-slash': 'sword-slash 2s linear infinite',
        'background-shift': 'backgroundShift 15s ease infinite',
      },
      keyframes: {
        'glow-pulse': {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.8' },
        },
        'navbar-slash': {
          '0%': { 
            transform: 'translateX(-50%)',
          },
          '100%': { 
            transform: 'translateX(0%)',
          },
        },
        'sword-slash': {
          '0%': { 
            transform: 'translateX(-100%) skewX(-20deg)',
            opacity: '0'
          },
          '50%': {
            opacity: '1'
          },
          '100%': { 
            transform: 'translateX(100%) skewX(-20deg)',
            opacity: '0'
          },
        },
        backgroundShift: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
    },
  },
  plugins: [],
};

export default config;