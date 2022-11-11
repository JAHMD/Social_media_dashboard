/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./public/**/*.{html,js}", "./src/**/*.{html,js}", "./index.html"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "2rem",
      },
      fontFamily: {
        Inter: ["Inter"],
      },
      fontSize: {
        heading: "14px",
      },
      colors: {
        primary: {
          limeGreen: "hsl(163, 72%, 41%)",
          brightRed: "hsl(356, 69%, 56%)",
          Facebook: "hsl(208, 92%, 53%)",
          Twitter: " hsl(203, 89%, 53%)",
          InstagramFrom: "hsl(37, 97%, 70%)",
          InstagramTo: "hsl(329, 70%, 58%)",
          YouTube: "hsl(348, 97%, 39%)",
          toggle: {
            darkFrom: "hsl(210, 78%, 56%)",
            darkTo: "hsl(146, 68%, 55%)",
            light: "hsl(230, 22%, 74%)",
          },
        },
        darkMode: {
          blueBackground: "hsl(230, 17%, 14%)",
          blueTop: "hsl(232, 19%, 15%)",
          blueCardBg: "hsl(228, 28%, 20%)",
          blueText: "hsl(228, 34%, 66%)",
        },
        lightMode: {
          blueTop: "hsl(225, 100%, 98%)",
          blueCardBg: "hsl(227, 47%, 96%)",
          blueText: "hsl(228, 12%, 44%)",
          darkBlueText: "hsl(230, 17%, 14%)",
        },
      },
    },
  },
  plugins: [],
};
