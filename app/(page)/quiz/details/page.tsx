import React from 'react';
import {fetchQuizDetail, fetchQuizList} from "@/app/services/quiz/api.instance";
import {cookies} from "next/headers";
import {QuizListResponse} from "@/app/services/quiz/types";
import {IResponse} from "@/app/services/network.types";
import QuizDetails from "@/app/(page)/quiz/details/components/client/quizDetails";

/**
 * 퀴즈 문제 페이지
 */
const Page = async () => {


    const quizResponse = await fetchQuizDetail()


        return (
        <QuizDetails
            quizResponse={quizResponse}
        />
    );
};

export default Page;
