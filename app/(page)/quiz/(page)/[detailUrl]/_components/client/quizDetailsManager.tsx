"use client"

import useQuizHelperContext from "@/app/(page)/quiz/_context/_hook/useQuizHelperContext";
import useQuizStorageContext from "@/app/(page)/quiz/_context/_hook/useQuizStorageContext";
import {useParams} from "next/navigation";
import React, {useEffect} from 'react';

// 퀴즈 상세 페이지 로직 관리
function QuizDetailsManager({
    children
                             }:{
    children:React.ReactNode
}) {

    const {detailUrl} = useParams()
    const quizHelper = useQuizHelperContext();
    const quizStorage = useQuizStorageContext();
    const allQuizUrls = quizStorage?.getQuizUrlList()

    useEffect(() => {

        // // 현재 경로가 solvedQuizList 스토리지에 있는 url에 있는 경우, 다른 문제로 이동
        // quizHelper?.redirectIfQuizSolved(detailUrl as string)

        // 모든 퀴즈를 푼 경우, 퀴즈 완료 페이지로 이동
        quizHelper?.redirectToCompletionPageIfAllSolved()

        // 퀴즈 데이터가 없는 경우, 시작 페이지로 이동
        quizHelper?.redirectToQuizStartPageIfNoQuizData()


        return () => {
            // 현재 URL 벗어날 시, 푼 문제 리스트에 저장
            quizHelper?.saveSolvedQuiz(detailUrl as string)
        }

    },
        // 퀴즈 URL 목록을 감지해야함.
        [detailUrl,allQuizUrls]
    )
    return (
        <>
            {children}
        </>
    );
}

export default QuizDetailsManager;
