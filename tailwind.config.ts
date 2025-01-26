import { nextui } from "@nextui-org/react";
import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            //색상
            colors: {
                // 헤더 배경
                headerBackground: "#333333",
                // 사이드 네비게이션 배경

                // 배경
                background: "#FCFCFC",
                primary: {
                    // PRIMARY
                    normal: "#FF6F00",
                    light: "#FF8C33",
                    dark: "#E65A00",
                    disabled: "#B25400",
                    // SECONDARY
                    secondary: {
                        normal: "#8A75FF",
                        light: "#B7A3FF",
                        dark: "#5F4DFF",
                    },
                },
                white: "#FFFFFF",
                black: "#0A0A0A",
            },
            // 폰트 사이즈
            fontSize: {
                headline1: [
                    "72px",
                    {
                        fontWeight: "600",
                    },
                ],
                headline2: [
                    "48px",
                    {
                        fontWeight: "600",
                    },
                ],

                headline3: [
                    "32px",
                    {
                        fontWeight: "500",
                    },
                ],
                title1: [
                    "24px",
                    {
                        fontWeight: "600",
                    },
                ],
                title2Bold: [
                    "18px",
                    {
                        fontWeight: "600",
                    },
                ],
                title2Normal: [
                    "18px",
                    {
                        fontWeight: "500",
                    },
                ],
                title3Bold: [
                    "16px",
                    {
                        fontWeight: "600",
                    },
                ],
                title3Normal: [
                    "16px",
                    {
                        fontWeight: "400",
                    },
                ],
                menu: [
                    "15px",
                    {
                        fontWeight: "500",
                    },
                ],
                label1: [
                    "13px",
                    {
                        fontWeight: "500",
                    },
                ],
                label2: [
                    "12px",
                    {
                        fontWeight: "400",
                    },
                ],
                body: [
                    "14px",
                    {
                        fontWeight: "400",
                    },
                ],
            },
            // 배경 이미지
            backgroundImage: {
                main: "url('/mainImage.png')",
            },
            // 배경 사이즈
            backgroundSize: {
                full: "100% 100%",
            },
            borderRadius: {
                primary: "10px",
            },
            // 패딩
            padding: {
                container: "300px",
            },
            screens: {
                sm: { min: "320px", max: "767px" },
                md: { min: "768px", max: "1079px" },
                lg: { min: "1080px" },
            },
        },
    },
    darkMode: "class",
    plugins: [require("@tailwindcss/typography"), nextui()],
};
export default config;
