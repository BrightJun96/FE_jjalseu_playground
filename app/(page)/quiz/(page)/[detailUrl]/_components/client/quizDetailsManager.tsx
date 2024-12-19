"use client"

import useQuizStorageContext from "@/app/(page)/quiz/_context/_hook/useQuizStorageContext";
import useQuizHelperContext from "@/app/(page)/quiz/_context/_hook/useQuizStorageHelperContext";
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

        // 모든 퀴즈를 푼 경우, 퀴즈 완료 페이지로 이동
        quizHelper?.redirectToCompletionPageIfAllSolved()

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
