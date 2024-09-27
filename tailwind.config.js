/** @type {import('tailwindcss').Config} */

export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    extend: {
      extend: {
        backgroundImage: {
          hero: "url('/img/background.jpg')",
        },
      },
    },
  },
  plugins: [],
};
