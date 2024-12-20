import AnswerExpression
    from "@/app/(page)/quiz/(page)/[detailUrl]/_components/client/modal/answerExpression/answerExpression";
import CorrectAnswerExpression
    from "@/app/(page)/quiz/(page)/[detailUrl]/_components/client/modal/answerExpression/correctAnswerExpression";
import IncorrectAnswerExpression
    from "@/app/(page)/quiz/(page)/[detailUrl]/_components/client/modal/answerExpression/incorrectAnswerExpression";
import CorrectAnswer from "@/app/(page)/quiz/(page)/[detailUrl]/_components/client/modal/correctAnswer";
import UserAnswer from "@/app/(page)/quiz/(page)/[detailUrl]/_components/client/modal/userAnswer";
import {CheckAnswerResponse} from "@/app/services/quiz/types";
import React from 'react';

// 퀴즈 결과 모달 컨텐츠
function QuizResultModalContent({
    checkAnswerData
                                }:{
    checkAnswerData:CheckAnswerResponse,

}) {
    return (
        <>
            {/*답안 표현(정답과 오답에 따라 표현이 다름.)*/}
            <AnswerExpression>
                {checkAnswerData.correct ?
                <CorrectAnswerExpression/>
                :<IncorrectAnswerExpression/>}
            </AnswerExpression>
            {/*정답*/}
            <CorrectAnswer
                answer={checkAnswerData.answer}
            />
            {/*사용자 답안*/}
            <UserAnswer
                userAnswer={checkAnswerData.userAnswer}
            />
        </>
    );
}

export default QuizResultModalContent;
