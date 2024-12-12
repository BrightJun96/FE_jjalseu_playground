"use client"

import AfterCheckButtons from "@/app/(page)/quiz/[detailUrl]/_components/client/afterCheckButtons";
import BeforeCheckButton from "@/app/(page)/quiz/[detailUrl]/_components/client/beforeCheckButton";
import CheckButton from "@/app/(page)/quiz/[detailUrl]/_components/client/checkButton";
import QuizAnswers from "@/app/(page)/quiz/[detailUrl]/_components/client/quizAnswers";
import QuizFormId from "@/app/(page)/quiz/[detailUrl]/_components/client/quizFormId";
import useQuizFormAction from "@/app/(page)/quiz/[detailUrl]/_helper/useQuizFormAction";
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
        <form
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
            <CheckButton
            >
                {isAnswerCheck ?
                    <AfterCheckButtons
                    />
                    : <BeforeCheckButton
                        userAnswer={userAnswer}
                    />}
            </CheckButton>
        </form>
    );
}

export default QuizAnswerForm;
