import QuizFieldOption from "@/app/(page)/quiz/_components/quizOptionForm/quizOptions/quizFieldOption";
import React from "react";

// 퀴즈 옵션 컴포넌트
function QuizOptions() {
    return (
        <fieldset className={"flex flex-col gap-10 w-full"}>
            <legend className={"text-title2Bold"}>
                퀴즈 옵션
            </legend>
            {/*분야*/}
            <QuizFieldOption />
        </fieldset>
    );
}

export default QuizOptions;
