import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: '540px',
        'b1': {'min': '1100px'},
        'b2': {'min': '961px', 'max' :'1099px'},
        'b3': {'max': '960px'},
        'b4': {'min': '961px'},
        'b5': {'min': '650px', 'max' :'760px'},
        'b6': {'max': '650px'},
        'b7': {'min': '650px'},
        'k1': '1250px',    
        'k2': '900px',
        'k3': '310px'
      },
      clipPath: {
        'circle': 'circle(50%)',
        'polygon': 'polygon(50% 0%, 100% 100%, 0% 100%)',
        'ellipse1': 'ellipse(80% 100px at top center)',
        'ellipse2': 'ellipse(80% 100px at bottom center)',
      },
      translate: {
        '128': '32rem',
      },
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
  plugins: [
    function ({ addUtilities }:any) {
      addUtilities({
        '.clip-circle': {
          'clip-path': 'circle(50%)',
        },
        '.clip-polygon': {
          'clip-path': 'polygon(50% 0%, 100% 100%, 0% 100%)',
        },
        '.clip-ellipse1':{
          'clip-path': 'ellipse(400px 100% at top center)',
        },
        '.clip-ellipse2':{
          'clip-path': 'ellipse(400px 100% at bottom center)',
        },
      });
    },
  ],
};

export default config;