/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
    './public/**/*.html',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#166534',
        accent: '#7e22ce',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
