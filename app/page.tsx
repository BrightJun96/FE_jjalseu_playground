import PrimaryButton from "@/app/_components/button/primaryButton";
import Link from "next/link";


/**
 * 메인 페이지
 * SSG
 */
export const dynamic = 'force-static'

export async function generateStaticParams() {
    return []
}

export default function Home() {
  return (
    <div className="font-[family-name:var(--font-geist-sans)] w-full">
      <div className={"w-full h-[calc(100vh-80px)] bg-no-repeat bg-center bg-cover"}>
      {/* 내부 카피 컨텐츠  */}
          <div className={"flex justify-center items-center flex-col gap-[40px] pt-[250px]"}>
            <h1 className={"text-headline2 text-center"}>개발자들의 아지트</h1>
            <p className={"text-headline3 "}>퀴즈로 실력을 키우고, 함께 성장하세요.</p>
              <Link href={"/quiz"}>
                <PrimaryButton text={"퀴즈 풀어보기"} color={"primary"} className={"!w-[130px] !h-[42px]"}/>
              </Link>
          </div>
      </div>
    </div>
  );
}
