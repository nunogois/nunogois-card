/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        bg: '#1a1a1a',
        'icon-tw': '#1DA1F2',
        'icon-ln': '#0A66C2',
        'icon-mail': '#f9690f',
        'icon-web': '#f1c726'
      }
    }
  },
  plugins: []
}
