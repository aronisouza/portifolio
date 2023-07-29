/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'a-primary': '#c8c8c9',
        'a-secondary': '#1e3d63',
        'a-background': '#006983',
        'a-background-a': '#9dbdf4',
        'a-background-b': '#1e3d63'
      },
      width: {
        120: '30rem',
        125: '31.25rem'
      },
      height: {
        125: '31.25rem'
      }
    },
  },
  plugins: [],
}
