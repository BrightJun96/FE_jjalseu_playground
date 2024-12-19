"use client"

import AfterCheckButtons
    from "@/app/(page)/quiz/(page)/[detailUrl]/_components/client/quizAnswerForm/afterCheckButtons/afterCheckButtons";
import BeforeCheckButton
    from "@/app/(page)/quiz/(page)/[detailUrl]/_components/client/quizAnswerForm/beforeCheckButton";
import CheckButtonContainer
    from "@/app/(page)/quiz/(page)/[detailUrl]/_components/client/quizAnswerForm/checkButtonContainer";
import QuizAnswerFormContainer
    from "@/app/(page)/quiz/(page)/[detailUrl]/_components/client/quizAnswerForm/quizAnswerFormContainer";
import QuizAnswers from "@/app/(page)/quiz/(page)/[detailUrl]/_components/client/quizAnswerForm/quizAnswers";
import QuizFormId from "@/app/(page)/quiz/(page)/[detailUrl]/_components/client/quizAnswerForm/quizFormId";
import useQuizFormAction from "@/app/(page)/quiz/_helper/useQuizFormAction";
import {MultipleChoiceContent} from "@/app/services/quiz/types";
import React from 'react';

// 퀴즈 답안 입력 폼
function QuizAnswerForm({
                            quizId,
                            quizType,
                            quizMultipleChoiceContents
                        }:
                            {quizId:number, quizType:string, quizMultipleChoiceContents:MultipleChoiceContent[]}
) {

   const {
       isAnswerCheck,
       formAction
   } = useQuizFormAction()

    // 사용자 답안
    const [userAnswer,setUserAnswer] = React.useState<number[]>([])

    return (
        <QuizAnswerFormContainer
            action={formAction}
        >
            {/*퀴즈 ID*/}
            <QuizFormId
                quizId={quizId}
            />
            {/*퀴즈 답안*/}
            <QuizAnswers
                quizType={quizType}
                quizMultipleChoiceContents={quizMultipleChoiceContents}
                setUserAnswer={setUserAnswer}/>
            {/*채점 버튼*/}
            <CheckButtonContainer
            >
                {isAnswerCheck ?
                    <AfterCheckButtons
                    />
                    : <BeforeCheckButton
                        userAnswer={userAnswer}
                    />}
            </CheckButtonContainer>
        </QuizAnswerFormContainer>
    );
}

export default QuizAnswerForm;
