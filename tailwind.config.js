/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        orangeMain: "hsl(26, 100%, 55%)",
        paleOrange: "hsl(25, 100%, 94%)",
        neutrals: {
          veryDarkBlue: "hsl(220, 13%, 13%)",
          veryGrayishBlue: "hsl(219, 9%, 45%)",
          grayishBlue: "hsl(220, 14%, 75%)",
          lightGrayishBlue: "hsl(223, 64%, 98%)",
          white: "hsl(0, 0%, 100%)",
          black: "hsl(0, 0%, 80%)",
        },
      },
      screens: {
        tablet: "640px",
        desktop: "1280px",
      },
    },
  },
  plugins: [],
};
