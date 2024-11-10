import React from 'react';
import {fetchQuizDetail, fetchQuizList} from "@/app/services/quiz/api.instance";
import {cookies} from "next/headers";
import {QuizListResponse} from "@/app/services/quiz/types";
import {IResponse} from "@/app/services/network.types";
import QuizDetails from "@/app/(page)/quiz/details/components/client/quizDetails";

/**
 * 퀴즈 문제 페이지
 * 정적 렌더링 방식
 * @todo SSG 방식으로 변경 필요
 * @todo API로부터 퀴즈 시작하기 옵션에 따른 PK 목록들을 받아와 해당 PK들에 대한 페이지를 SSG로 생성하여 보여준다.
 * @todo SEO를 위해 title,description 등 값 설정 필요
 */
const Page = async ({searchParams}:{
    searchParams:Promise<{ [key: string]: string | string[] | undefined }>
}) => {

    const filters = await searchParams
    const fetchRequestOption={
        field:filters.field as string,
        lang:filters.lang as string,
        excludeQuizId:(filters.excludeQuizId) as string
    }



    const quizResponse = await fetchQuizDetail(fetchRequestOption)


        return (
        <QuizDetails
            quizResponse={quizResponse}
        />
    );
};

export default Page;
