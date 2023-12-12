import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        sans: ["var(--font-roboto-flex)", "var(--font-noto-sans-kr)"],
      },
      colors: {
        "bg-color1": "#121212",
        "bg-color2": "#1a1a1a",

        "theme-color1": "#ffe998",
        "theme-color2": "#57370d",

        "sub-color1": "#391a41",
        "sub-color2": "#f5536b",
        "sub-color3": "#aba5c9",
      },
      dropShadow: {
        theme: "5px 5px 4px 4px rgba(0,0,0,1)",
      },
      textShadow: {
        theme: "5px 5px 4px 4px rgba(0,0,0,1)",
      },
      keyframes: {
        move: {
          "50%": {
            strokeDashoffset: "0",
          },
          "100%": {
            strokeDashoffset: "0",
          },
        },
      },
    },
  },
  plugins: [],
};
export default config;
