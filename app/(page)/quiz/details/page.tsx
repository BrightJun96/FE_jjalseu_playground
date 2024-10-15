import React from 'react';
import {fetchQuizList} from "@/app/services/quiz/api.instance";
import QuizItem from "@/app/(page)/quiz/details/components/client/quizItem";
import {cookies} from "next/headers";
import {QuizListResponse} from "@/app/services/quiz/types";

/**
 * 퀴즈 문제 페이지
 */
const Page = async () => {


    const existQuizData = cookies().get("quizData")?.value
    const quizListResponse:QuizListResponse|null=existQuizData?null:await fetchQuizList()


        return (
        <QuizItem
        quizListResponse={quizListResponse}
        />
    );
};

export default Page;
