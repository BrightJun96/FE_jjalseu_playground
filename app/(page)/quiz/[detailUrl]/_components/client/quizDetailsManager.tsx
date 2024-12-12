"use client"

import useQuizHelperContext from "@/app/_context/useQuizContext";
import {useParams} from "next/navigation";
import React, {useEffect} from 'react';

function QuizDetailsManager({
    children
                             }:{
    children:React.ReactNode
}) {

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
            {children}
        </>
    );
}

export default QuizDetailsManager;
