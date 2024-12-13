"use client"

import PrimaryButton from "@/app/_components/button/primaryButton";
import PrimaryLink from "@/app/_components/link/primaryLink";
import useQuizHelperContext from "@/app/_context/useQuizContext";
import React from 'react';

// 퀴즈 완료 링크
function QuizCompletedLink() {

    const quizHelper = useQuizHelperContext()

    return (
        <PrimaryLink href={"/quiz"}>
            <PrimaryButton
                text={"다른 퀴즈 풀러가기"}
                color={"primary"}
                onClick={() => quizHelper?.clearQuizStorage()  }
            />
        </PrimaryLink>
    );
}

export default QuizCompletedLink;
