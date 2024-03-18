/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.html",
    "./src/**/*.vue",
    "./src/**/*.jsx",
    "./src/**/*.js",
  ],
  theme: {
    extend: {
      fontFamily: {
        commissioner: ["Commissioner", "sans-serif"],
        redHatText: ["Red Hat Text", "sans-serif"],
        varelaRound: ["Varela Round", "sans-serif"],
        victorMono: ["Victor Mono", "monospace"],
      },
    },
  },
  plugins: [],
};
