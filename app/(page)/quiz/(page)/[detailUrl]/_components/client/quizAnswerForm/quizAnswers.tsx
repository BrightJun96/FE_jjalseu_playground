import MultipleChoiceAnswers
    from "@/app/(page)/quiz/(page)/[detailUrl]/_components/client/quizAnswerForm/multipleChoiceAnswers";
import {MultipleChoiceContent} from "@/app/services/quiz/types";
import React from 'react';

// 퀴즈 답안(객관식, 주관식,OX) 컴포넌트
function QuizAnswers({
                            quizType,
                            quizMultipleChoiceContents,
                            setUserAnswer
                     }:{
    quizType:string,
    quizMultipleChoiceContents:MultipleChoiceContent[],
    setUserAnswer: React.Dispatch<React.SetStateAction<number[]>>
}) {
    return (
        <>
            {quizType === "MULTIPLE_CHOICE" &&
                <MultipleChoiceAnswers
                    quizMultipleChoiceContents={quizMultipleChoiceContents}
                    setUserAnswer={setUserAnswer}
                />
            }
        </>
    );
}

export default QuizAnswers;
