"use client"

import QuizFieldOption from "@/app/(page)/quiz/_components/quizOptionForm/quizOptions/quizFieldOption";
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
            <legend
                className={"text-title3Normal"}
            >퀴즈 옵션</legend>
            {/*분야*/}
            <QuizFieldOption
                handleOptionChange={handleOptionChange}
                option={option}
            />
        </fieldset>
    );
}

export default QuizOptions;
