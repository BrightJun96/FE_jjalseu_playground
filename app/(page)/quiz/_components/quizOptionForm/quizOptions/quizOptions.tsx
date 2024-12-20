"use client"

import QuizField from "@/app/(page)/quiz/_components/quizOptionForm/quizOptions/quizField";
import useQuizOptionHandler from "@/app/(page)/quiz/_helper/useQuizOptionHandler";
import React from 'react';

// 퀴즈 옵션 컴포넌트
function QuizOptions() {

    const {
        option,
        handleOptionChange
    } = useQuizOptionHandler()

    return (
        <fieldset className={"flex flex-col gap-10 w-full"}>
            <legend>퀴즈 옵션</legend>
            {/*분야*/}
            <QuizField
                handleOptionChange={handleOptionChange}
                option={option}
            />
        </fieldset>
    );
}

export default QuizOptions;
