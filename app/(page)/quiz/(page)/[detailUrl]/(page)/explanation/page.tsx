import ButtonContainer from "@/app/(page)/quiz/(page)/[detailUrl]/(page)/explanation/_components/buttonContainer";
import QuizExplanationContent from "@/app/(page)/quiz/(page)/[detailUrl]/(page)/explanation/_components/quizExplanationContent";
import QuizExplanationTitle from "@/app/(page)/quiz/(page)/[detailUrl]/(page)/explanation/_components/quizExplanationTitle";
import ReturnButton from "@/app/(page)/quiz/(page)/[detailUrl]/(page)/explanation/_components/returnButton";
import NextQuizLink from "@/app/(page)/quiz/_common_ui/client/nextQuizLink";
import { BASE_URL } from "@/app/_constants/baseURL";
import PATHS from "@/app/_constants/paths";
import { quizApiHandler } from "@/app/services/quiz/QuizApiHandler";
import { Metadata } from "next";
import React from "react";

type Params = Promise<{ detailUrl: string }>;

//
export async function generateStaticParams() {
    const { data } =
        await quizApiHandler.fetchQuizDetailUrlList({
            cache: "no-store",
        });

    return data.map((url) => ({ detailUrl: url }));
}

// SEO를 위해 메타데이터(title, description) 설정
export async function generateMetadata({
    params,
}: {
    params: Params;
}): Promise<Metadata> {
    const { detailUrl } = await params;

    const { data } =
        await quizApiHandler.fetchQuizDetailByUrl(
            detailUrl,
        );

    return {
        title: `해설-${data.metaTitle}`,
        description: `해설-${data.metaDescription}`,
        alternates: {
            canonical: `${BASE_URL}/${PATHS.QUIZ_EXPLANATION(detailUrl)}`,
        },
    };
}

async function Page({ params }: { params: Params }) {
    const { detailUrl } = await params;
    const { data } =
        await quizApiHandler.fetchQuizDetailByUrl(
            detailUrl,
        );

    return (
        <article aria-label={"퀴즈 해설 페이지"}>
            {/*퀴즈 설명 타이틀*/}
            <QuizExplanationTitle title={data.metaTitle} />
            {/*퀴즈 설명 내용*/}
            <QuizExplanationContent
                content={data.explanation}
            />
            <ButtonContainer>
                {/*돌아가기 버튼*/}
                <ReturnButton returnUrl={detailUrl} />
                {/*다음 퀴즈 버튼*/}
                <NextQuizLink />
            </ButtonContainer>
        </article>
    );
}

export default Page;
