import ButtonContainer from "@/app/(page)/quiz/[detailUrl]/explanation/_components/buttonContainer";
import QuizExplanationContent from "@/app/(page)/quiz/[detailUrl]/explanation/_components/quizExplanationContent";
import QuizExplanationTitle from "@/app/(page)/quiz/[detailUrl]/explanation/_components/quizExplanationTitle";
import ReturnButton from "@/app/(page)/quiz/[detailUrl]/explanation/_components/returnButton";
import NextQuizLink from "@/app/(page)/quiz/_common_ui/client/nextQuizLink";
import {quizApiHandler} from "@/app/services/quiz/QuizApiHandler";
import {Metadata} from "next";
import React from 'react';
import 'prismjs/themes/prism.css';


type Params = Promise<{detailUrl:string}>

export async function generateStaticParams() {

    const {data} = await quizApiHandler.fetchQuizDetailUrlList({cache:"no-store"});

    return data.map((url) => ({detailUrl:url}))

}

// SEO를 위해 메타데이터(title, description) 설정
export async function generateMetadata({
                                           params
                                       }:{
    params:Params
}):Promise<Metadata>{

    const {detailUrl} = await params

    const {data} = await quizApiHandler.fetchQuizDetailByUrl(detailUrl)

    return {
        title:`해설-${data.metaTitle}`,
        description: `해설-${data.metaDescription}`,
        alternates:{
            canonical:`/quiz/explanation/${data.detailUrl}`
        }
    }
}


async function Page({
                        params
                    }:{
    params:Params
}) {

    const { detailUrl } = await params
    const {data} = await quizApiHandler.fetchQuizDetailByUrl(detailUrl)


    return (
        <>
            {/*퀴즈 설명 타이틀*/}
            <QuizExplanationTitle
                title={data.metaTitle}
            />
            {/*퀴즈 설명 내용*/}
            <QuizExplanationContent
                content={data.explanation}
                />
            <ButtonContainer>
                {/*돌아가기 버튼*/}
                <ReturnButton returnUrl={detailUrl}/>
                {/*다음 퀴즈 버튼*/}
                <NextQuizLink/>
            </ButtonContainer>
        </>
    );
}

export default Page;
