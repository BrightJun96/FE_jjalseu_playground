import ModalProvider from "@/app/_components/modal/_provider/modalProvider";
import {WebVitals} from "@/app/_components/webVitals/webVitails";
import Header from "@/app/_layout/header/header";
import MainContainer from "@/app/_layout/mainContainer";
import type {Metadata} from "next";
import {ViewTransitions} from 'next-view-transitions';
import localFont from "next/font/local";
import "./globals.css";

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
    display: "swap",
});

export const metadata: Metadata = {
  title: "개발자들의 아지트, 코아",
  description: "퀴즈를 풀고 함께 성장하세요.",
    generator: 'Next.js',
    applicationName: '개발 퀴즈 앱',
    referrer: 'origin-when-cross-origin',
    keywords: ['Next.js', '퀴즈', 'quiz',"코아","개발자","개발지식","개발자들을 위한 퀴즈","개발 퀴즈"],
    authors: [{ name: 'jjalseu', url: 'https://github.com/BrightJun96' }],
    creator: 'jjalseu',
    publisher: 'jjalseu',
    manifest: '/site.json',

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
      {/*웹 성능 측정*/}
      <WebVitals/>
      {/*헤더*/}
      <Header/>
     <MainContainer>
          <ModalProvider>
              {children}
          </ModalProvider>
     </MainContainer>
      </body>
    </html>
  </ViewTransitions>
  );
}
