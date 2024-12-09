"use client"

import PrimaryButton from "@/app/_components/button/primaryButton";
import useQuizHelperContext from "@/app/_context/useQuizContext";
import Link from "next/link";
import React from 'react';

// 퀴즈 완료 링크
function QuizCompletedLink() {

    const quizHelper = useQuizHelperContext()

    return (
        <Link href={"/quiz"}>
            <PrimaryButton
                text={"다른 퀴즈 풀러가기"}
                color={"primary"}
                onClick={() => quizHelper?.clearQuizStorage()  }
            />
        </Link>
    );
}

export default QuizCompletedLink;
