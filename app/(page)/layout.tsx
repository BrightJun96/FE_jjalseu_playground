import Header from "@/app/_shared/layout/header/header";
import MainContainer from "@/app/_shared/layout/mainContainer";
import NextUIProvider from "@/app/_shared/provider/nextUIProvider";
import ModalProvider from "@/app/_shared/ui/used/modal/_provider/modalProvider";
import type { Metadata } from "next";
import { ViewTransitions } from "next-view-transitions";
import localFont from "next/font/local";
import "./globals.css";

const geistMono = localFont({
    src: "../fonts/GeistMonoVF.woff",
    variable: "--font-geist-mono",
    weight: "100 900",
    display: "swap",
});

export const metadata: Metadata = {
    title: "개발 핸드북",
    description: "퀴즈를 풀고 함께 성장하세요.",
    generator: "Next.js",
    applicationName: "개발자 앱",
    referrer: "origin-when-cross-origin",
    keywords: [
        "Next.js",
        "퀴즈",
        "quiz",
        "개발자",
        "개발지식",
        "개발자들을 위한 퀴즈",
        "개발 퀴즈",
    ],
    authors: [
        {
            name: "jjalseu",
            url: "https://github.com/BrightJun96",
        },
    ],
    creator: "jjalseu",
    publisher: "jjalseu",
    manifest: "/site.json",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <ViewTransitions>
            <html lang="en">
                <body
                    className={`${geistMono.className} antialiased bg-gray-100`}
                >
                    <NextUIProvider>
                        {/*헤더*/}
                        <Header />
                        <MainContainer>
                            <ModalProvider>
                                {children}
                            </ModalProvider>
                        </MainContainer>
                    </NextUIProvider>
                </body>
            </html>
        </ViewTransitions>
    );
}
