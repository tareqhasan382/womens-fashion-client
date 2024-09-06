/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    // screens: {
    //   tablet: "641px",
    //   laptop: "1025px",
    //   desktop: "1281px",
    // },
    extend: {
      scrollbar: {
        thin: {
          "scrollbar-width": "thin",
          "scrollbar-color": "#888 #ddd",
        },
      },
    },
  },
  plugins: [],
};
