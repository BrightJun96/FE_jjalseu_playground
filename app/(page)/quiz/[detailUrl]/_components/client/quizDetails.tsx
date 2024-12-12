"use client"

import QuizAnswerForm from "@/app/(page)/quiz/[detailUrl]/_components/client/quizAnswerForm";
import QuizContent from "@/app/(page)/quiz/[detailUrl]/_components/client/quizContent";
import QuizQuestion from "@/app/(page)/quiz/[detailUrl]/_components/client/quizQuestion";
import QuizTitle from "@/app/(page)/quiz/[detailUrl]/_components/client/quizTitle";

import 'prismjs/themes/prism.css';
import useQuizHelperContext from "@/app/_context/useQuizContext";
import {QuizItem} from "@/app/services/quiz/types";
import {useParams} from "next/navigation";
import React, {useEffect} from 'react';

// 퀴즈 상세 컴포넌트
const QuizDetails = ({
                         quizData
                     }:{quizData:QuizItem}) => {

    const {detailUrl} = useParams()
    const quizHelper = useQuizHelperContext();


    useEffect(() => {

        // 현재 경로가 solvedQuizList 스토리지에 있는 url에 있는 경우, 다른 문제로 이동
        quizHelper?.redirectIfQuizSolved(detailUrl as string)

        // 모든 퀴즈를 푼 경우, 퀴즈 완료 페이지로 이동
        quizHelper?.redirectToCompletionPageIfAllSolved()

    }, [detailUrl])




    return (
        <>
            {/*퀴즈 제목*/}
            <QuizTitle
                title={quizData.metaTitle}
            />
            {/*퀴즈 문제*/}
           <QuizQuestion
               question={quizData.title}
           />

            {/*퀴즈내용*/}
            <QuizContent
                content={quizData.content}
            />
            {/*퀴즈 답안 폼*/}
            <QuizAnswerForm
                quizId={quizData.quizId}
                quizType={quizData.type}
                quizMultipleChoiceContents={quizData.multipleChoiceContents}
                />

        </>
    );
};

export default QuizDetails;
