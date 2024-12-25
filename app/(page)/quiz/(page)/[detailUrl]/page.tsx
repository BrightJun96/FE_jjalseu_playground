import QuizDetails from "@/app/(page)/quiz/(page)/[detailUrl]/_components/server/quizDetails";
import CustomErrorUI from "@/app/_components/used/error/customErrorUI";
import { BASE_URL } from "@/app/_constants/baseURL";
import { quizApiHandler } from "@/app/services/quiz/QuizApiHandler";
import { Metadata } from "next";
import React from "react";

// export const config = { amp: true }
/**
 * 퀴즈 문제 페이지
 * 정적 렌더링 방식
 */

export const revalidate = 60;

export const dynamicParams = true; // or false, to 404 on unknown paths

type Params = Promise<{ detailUrl: string }>;

// SSG 실행할 페이지 ID 추출, 서버에 받아오는 PK들은 모두 SSG 방식으로 구현
export async function generateStaticParams() {
    const { data } =
        await quizApiHandler.fetchQuizDetailUrlList({
            cache: "no-store",
        });

    return data.map((url) => ({
        detailUrl: url,
    }));
}

// SEO를 위해 메타데이터(title, description) 설정
export async function generateMetadata({
    params,
}: {
    params: Params;
}): Promise<Metadata> {
    const { detailUrl } = await params;

    const response =
        await quizApiHandler.fetchQuizDetailByUrl(
            detailUrl,
        );

    return response
        ? {
              title: response.data.metaTitle,
              description: response.data.metaDescription,
              alternates: {
                  canonical: `${BASE_URL}/quiz/${response.data.detailUrl}`,
              },
          }
        : {
              title: "퀴즈 에러 발생",
              description:
                  "퀴즈 정보를 가져오는 중 문제가 발생했습니다.",
          };
}

const Page = async ({ params }: { params: Params }) => {
    const { detailUrl } = await params;

    const response =
        await quizApiHandler.fetchQuizDetailByUrl(
            detailUrl,
        );

    return response ? (
        <QuizDetails quizData={response.data} />
    ) : (
        <CustomErrorUI>
            퀴즈 데이터를 가져오는 중 문제가 발생하였어요.
        </CustomErrorUI>
    );
};

export default Page;
