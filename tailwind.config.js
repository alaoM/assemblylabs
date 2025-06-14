/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        lilita: ["var(--font-lilita)"],
        roboto: ["var(--font-roboto)"],
        inter: ["var(--font-inter)"],
      },
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1920px',
      },

    },
  },
  plugins: [],
};
