import ButtonContainer from "@/app/(page)/quiz/(page)/[detailUrl]/(page)/explanation/_components/buttonContainer";
import QuizExplanationContent from "@/app/(page)/quiz/(page)/[detailUrl]/(page)/explanation/_components/quizExplanationContent";
import QuizExplanationTitle from "@/app/(page)/quiz/(page)/[detailUrl]/(page)/explanation/_components/quizExplanationTitle";
import ReturnButton from "@/app/(page)/quiz/(page)/[detailUrl]/(page)/explanation/_components/returnButton";
import { quizApiHandler } from "@/app/(page)/quiz/_api/QuizApiHandler";
import NextQuizLink from "@/app/(page)/quiz/_common_ui/client/nextQuizLink";
import { BASE_URL } from "@/app/_shared/constants/baseURL";
import PATHS from "@/app/_shared/constants/paths";
import CustomErrorUI from "@/app/_shared/ui/used/error/customErrorUI";
import { Metadata } from "next";
import React from "react";

type Params = Promise<{ detailUrl: string }>;

//
export async function generateStaticParams() {
    const response =
        await quizApiHandler.fetchQuizDetailUrlList({
            cache: "no-store",
        });

    return response
        ? response.data.map((url) => ({
              detailUrl: url,
          }))
        : [];
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
              title: `해설-${response.data.metaTitle}`,
              description: `해설-${response.data.metaDescription}`,
              alternates: {
                  canonical: `${BASE_URL}/${PATHS.QUIZ_EXPLANATION(detailUrl)}`,
              },
          }
        : {
              title: "퀴즈 에러 발생",
              description:
                  "퀴즈 정보를 가져오는 중 문제가 발생했습니다.",
          };
}

async function Page({ params }: { params: Params }) {
    const { detailUrl } = await params;
    const response =
        await quizApiHandler.fetchQuizDetailByUrl(
            detailUrl,
        );

    return response ? (
        <article
            className={
                "flex flex-col items-center justify-center"
            }
            aria-label={"퀴즈 해설 페이지"}
        >
            {/*퀴즈 설명 타이틀*/}
            <QuizExplanationTitle
                title={response.data.metaTitle}
            />
            {/*퀴즈 설명 내용*/}
            <QuizExplanationContent
                content={response.data.explanation}
            />
            <ButtonContainer>
                {/*돌아가기 버튼*/}
                <ReturnButton returnUrl={detailUrl} />
                {/*다음 퀴즈 버튼*/}
                <NextQuizLink />
            </ButtonContainer>
        </article>
    ) : (
        <CustomErrorUI>
            퀴즈 데이터를 가져오는 중 문제가 발생하였어요.
        </CustomErrorUI>
    );
}

export default Page;
