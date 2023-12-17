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
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "team1-desktop": "url('../public/asset/image/team1.png')",
        "team2-desktop": "url('../public/asset/image/team2.png')",
        "pj2-desktop" : "url('./public/asset/image/')",
        "toy-1": "url('../public/asset/image/toyProject1.png')",
        "toy-2": "url('../public/asset/image/toyProject1.png')",
        "toy-3": "url('../public/asset/image/toyProject1.png')",
        "toy-4": "url('../public/asset/image/toyProject1.png')"
      },
      fontFamily: {
        sans: ["var(--font-roboto-flex)", "var(--font-noto-sans-kr)"],
        serif: ["var(--font-source-serif-4)"],
      },
      colors: {
        "bg-color1": "#121212",
        "bg-color2": "#1a1a1a",
        "bg-color3": "#f5f0e0",

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
