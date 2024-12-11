import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
        backgroundImage:{
          bannerImg:"url('/image.png')"
        },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
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
    },
  },
  plugins: [],
} satisfies Config;
