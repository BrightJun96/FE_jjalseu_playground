import Header from "@/app/_layout/header/header";
import ModalProvider from "@/app/_provider/modalProvider";
import type {Metadata} from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
      <Header/>
      <main className={"w-full lg:h-[calc(100vh-80px)] md:h-[calc(100vh-80px)] sm:h-[calc(100vh-80px)] bg-background  lg:flex lg:justify-center lg:items-center md:flex md:justify-center md:items-center sm:px-[10px] sm:mt-[40px]"}>
          <ModalProvider>
            {children}
          </ModalProvider>
      </main>
      </body>
    </html>
  );
}
