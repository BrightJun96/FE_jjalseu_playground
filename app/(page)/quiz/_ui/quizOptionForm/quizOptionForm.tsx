"use server";

import QuizOptionFormContainer from "@/app/(page)/quiz/_ui/quizOptionForm/quizOptionFormContainer";
import QuizStartButton from "@/app/(page)/quiz/_ui/quizOptionForm/quizStartButton";
import React from "react";

// 퀴즈 옵션 폼
function QuizOptionForm() {
    return (
        <QuizOptionFormContainer>
            {/*옵션*/}
            {/*<QuizOptions />*/}
            {/*시작하기 버튼*/}
            <QuizStartButton>퀴즈 시작하기</QuizStartButton>
        </QuizOptionFormContainer>
    );
}

export default QuizOptionForm;
