"use client"

import PrimaryButton from "@/app/_components/button/primaryButton";
import useQuizHelperContext from "@/app/_context/useQuizContext";
import React from 'react';

// 다음 퀴즈로 이동하는 버튼
function NextQuizButton({currentUrl}:{currentUrl:string}) {

    const quizHelper = useQuizHelperContext();



    return (
            <PrimaryButton
                color={"primarySecondary"}
                onClick={async () => await quizHelper?.moveToNextQuiz(currentUrl)}
            >
                다음 문제
            </PrimaryButton>
    );
}

export default NextQuizButton;
