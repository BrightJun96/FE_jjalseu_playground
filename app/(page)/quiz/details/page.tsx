import React from 'react';
import {fetchQuizDetail, fetchQuizList} from "@/app/services/quiz/api.instance";
import {cookies} from "next/headers";
import {QuizListResponse} from "@/app/services/quiz/types";
import {IResponse} from "@/app/services/network.types";
import QuizDetails from "@/app/(page)/quiz/details/components/client/quizDetails";

/**
 * 퀴즈 문제 페이지 - 다이나믹 렌더링 방식
 * 사용자 요청에 따라 동적 렌더링
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
