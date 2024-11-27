import QuizDetails from "@/app/(page)/quiz/[detailUrl]/components/client/quizDetails";
import {clientQuizApi} from "@/app/services/quiz/client/api.instance";
import {Metadata} from "next";
import React from 'react';

/**
 * 퀴즈 문제 페이지
 * 정적 렌더링 방식
 */

// SSG 실행할 페이지 ID 추출, 서버에 받아오는 PK들은 모두 SSG 방식으로 구현
export async function generateStaticParams() {

    const {data} = await clientQuizApi.fetchQuizDetailUrlList();

    return data.map((pk) => ({detailUrl:pk.toString()}))

}

// SEO를 위해 메타데이터(title, description) 설정
export async function generateMetadata({
                                           params
                                       }:{
    params:{
        detailUrl:string
    }
}):Promise<Metadata>{

    const detailUrl = (await params).detailUrl

    const {data} = await clientQuizApi.fetchQuizDetailByUrl(detailUrl)

    return {
        title:data.metaTitle,
        description:data.metaDescription
    }
}

const Page = async ({
    params
                    }:{
    params:{
        detailUrl:string
    }
}) => {

    const { detailUrl } = await params
    const {data} = await clientQuizApi.fetchQuizDetailByUrl(detailUrl)

    return (
        <QuizDetails
            quizData={data}
        />
    );
};

export default Page;
