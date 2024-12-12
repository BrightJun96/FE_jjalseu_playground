import QuizDetails from "@/app/(page)/quiz/[detailUrl]/_components/server/quizDetails";
import {quizApiHandler} from "@/app/services/quiz/QuizApiHandler";
import {Metadata} from "next";
import React from 'react';


// export const config = { amp: true }
/**
 * 퀴즈 문제 페이지
 * 정적 렌더링 방식
 */

export const revalidate = 60


export const dynamicParams = true // or false, to 404 on unknown paths

type Params = Promise<{detailUrl:string}>

// SSG 실행할 페이지 ID 추출, 서버에 받아오는 PK들은 모두 SSG 방식으로 구현
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

    const {detailUrl} = (await params)

    const {data} = await quizApiHandler.fetchQuizDetailByUrl(detailUrl)

    return {
        title:data.metaTitle,
        description:data.metaDescription,
        alternates:{
            canonical:`/quiz/${data.detailUrl}`
        }
    }
}


const Page = async ({
    params
                    }:{
    params:Params
}) => {

    const {detailUrl} = await params
    const {data} = await quizApiHandler.fetchQuizDetailByUrl(detailUrl)

    return (
        <QuizDetails
            quizData={data}
        />
    );
};

export default Page;
