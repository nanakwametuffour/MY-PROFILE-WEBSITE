/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      // animation: {
      //   "infinite-scroll": "infinite-scroll 25s linear infinite",
      // },
      // keyframes: {
      //   "infinite-scroll": {
      //     from: { transform: "translateX(0)" },
      //     to: { transform: "translateX(-100%)" },
      //   },
      // },
      animation: {
        rotate: "rotate 10s linear infinite",
      },
      keyframes: {
        rotate: {
          "0%": { transform: "rotate(0deg) scale(10)" },
          "100%": { transform: "rotate(-360deg) scale(10)" },
        },
      },
    },
  },
  plugins: [],
};
