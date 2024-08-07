/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'pale-violet': '#d89eff', // sub-heading at the top of the app UI
        'moderate-violet': '#9241c8', // chat on the left
        'desaturated-dark-violet': '#6e5d7e', // chat on the right
        'grayish-blue': '#c6cacd', // placeholder text
        'very-dark-desaturated-violet': '#3e2753', // main heading & submit button background
        'dark-grayish-violet': '#a39daa', // paragraph
        'light-magenta': '#e942ff',
        'light-violet': '#8838ff',
        white: '#ffffff',
        'light-grayish-violet': '#f5f3f7', // app background
        'very-light-magenta': '#e570ff', // radio button outline
        'very-light-violet': '#ede4f5' // message bubble
      }
    }
  },
  plugins: []
};
