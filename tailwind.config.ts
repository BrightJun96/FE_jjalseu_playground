import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#333333",
        foreground: "var(--foreground)",
        primary:{
          // PRIMARY
          normal:"#FF6F00",
          light:"#FF8C33",
          dark:"#E65A00",
          // SECONDARY
          secondary:{
            normal:"#8A75FF",
            light:"#B7A3FF",
            dark:"#5F4DFF",
          }
        },
        white:"#FFFFFF",
      },
      fontSize: {
        headline1:[
          "72px",
          {
            fontWeight:"600"
          },
        ],
        headline2:[
          "56px",
          {
            fontWeight:"600"
          },
        ],

        headline3:[
          "32px",
          {
            fontWeight:"600"
          },
        ],
        title1:[
          "24px",
          {
            fontWeight:"600"
          },
        ],
        title2Bold:[
          "18px",
          {
            fontWeight:"600"
          },
        ],
        title2Normal:[
          "18px",
          {
            fontWeight:"500"
          },
        ],
        title3Bold:[
          "16px",
          {
            fontWeight:"600"
          },
        ],
        title3Normal:[
          "16px",
          {
            fontWeight:"400"
          },
        ],
        menu:[
          "15px",
          {
            fontWeight:"500"
          },
        ],
        label1:[
          "13px",
          {
            fontWeight:"500"
          },
        ],
        label2:[
          "12px",
          {
            fontWeight:"400"
          },
        ],
        body:[
          "14px",
          {
            fontWeight:"400"
          },
        ]
      },

    },
  },
  plugins: [],
};
export default config;
