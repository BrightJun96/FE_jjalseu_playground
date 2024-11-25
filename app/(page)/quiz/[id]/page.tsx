import QuizDetails from "@/app/(page)/quiz/[id]/components/client/quizDetails";
import {clientQuizApi} from "@/app/services/quiz/client/api.instance";
import {Metadata} from "next";
import React from 'react';

/**
 * 퀴즈 문제 페이지
 * 정적 렌더링 방식
 * @todo SEO를 위해 title,description 등 값 설정 필요
 * @todo SEO 노출을 위해 어떤값들을 설정하면 되는지 알아보기
 */

// SSG 실행할 페이지 ID 추출, 서버에 받아오는 PK들은 모두 SSG 방식으로 구현
export async function generateStaticParams() {

    const {data} = await clientQuizApi.fetchQuizPkList();

    return data.map((pk) => ({id:pk.toString()}))

}

// SEO를 위해 설정
export async function generateMetadata({
                                           params
                                       }:{
    params:{
        id:string
    }
}):Promise<Metadata>{

    const id = (await params).id

    const {data} = await clientQuizApi.fetchQuizDetail(Number(id))

    return {
        title:data.metaTitle,
        description:data.metaDescription
    }
}

const Page = async ({
    params
                    }:{
    params:{
        id:string
    }
}) => {

    const { id } = await params
    const {data} = await clientQuizApi.fetchQuizDetail(Number(id))

    console.log("data",data)
    return (
        <QuizDetails
            quizData={data}
        />
    );
};

export default Page;
