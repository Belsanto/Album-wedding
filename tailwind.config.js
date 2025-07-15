/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'eb-garamond': ['EB Garamond', 'serif'],
        'alex': ['Alex Brush', 'cursive'],
        'great-vibes': ['Great Vibes', 'cursive'],
        'dancing': ['Dancing Script', 'cursive'],
        'allura': ['Allura', 'cursive'],
        'satisfy': ['Satisfy', 'cursive'],
        'cormorant': ['Cormorant Garamond', 'serif'],
      },
      animation: {
        fadeIn: "fadeIn 0.3s ease-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0", transform: "scale(0.95)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
      },
      colors: {
        primary: '#f0e6e8',
        secondary: '#c8a2c8',
        dark: '#4a4a4a',
        lilac: '#9b7b9b',
      },
    },
  },
  plugins: [],
}
