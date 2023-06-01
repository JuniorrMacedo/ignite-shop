/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: 'var(--font-roboto)',
      },

      colors: {
        gray: {
          100: '#e1e1e6',
          300: '#c4c4cc',
          800: '#202024',
          900: '#121214',
        },

        white: '#fff',

        green: {
          300: '#00b37e',
          500: '#00875f',
        },
      },
    },
  },
  plugins: [],
}
