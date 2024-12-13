"use client"

import useQuizHelperContext from "@/app/(page)/quiz/_context/_hook/useQuizHelperContext";
import React, {useEffect} from 'react';

// 퀴즈 완료 로직 관리
// 페이지 진입시 퀴즈 스토리지를 비움
function QuizCompletedManager({
    children
                              }:{
    children: React.ReactNode
}) {

    const quizHelper = useQuizHelperContext()


    useEffect(() => {
        quizHelper?.clearQuizStorage()
    }, [quizHelper]);

    return (
        <>
            {children}
        </>
    );
}

export default QuizCompletedManager;
