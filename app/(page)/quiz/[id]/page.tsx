import React from 'react';
import {fetchQuizDetail, fetchQuizDetailPk, fetchQuizList, fetchQuizPkList} from "@/app/services/quiz/api.instance";
import {cookies} from "next/headers";
import {QuizListResponse} from "@/app/services/quiz/types";
import {IResponse} from "@/app/services/network.types";
import QuizDetails from "@/app/(page)/quiz/[id]/components/client/quizDetails";

/**
 * 퀴즈 문제 페이지
 * 정적 렌더링 방식
 * @todo SSG 방식으로 변경 필요
 * @todo API로부터 퀴즈 시작하기 옵션에 따른 PK 목록들을 받아와 해당 PK들에 대한 페이지를 SSG로 생성하여 보여준다.
 * @todo SEO를 위해 title,description 등 값 설정 필요
 */

export async function generateStaticParams() {

    const {data} = await fetchQuizPkList()

    return data.map((pk) => ({id:pk.toString()}))
}

const Page = async ({
    params
                    }:{
    params:{
        id:string
    }
}) => {

    const { id } = await params
    const {data} = await fetchQuizDetailPk(Number(id))

    console.log("data :",data)

    return (
        <QuizDetails
            quizData={data}
        />
    );
};

export default Page;
