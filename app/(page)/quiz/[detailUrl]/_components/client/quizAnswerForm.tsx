"use client"

import AfterCheckButtons from "@/app/(page)/quiz/[detailUrl]/_components/client/afterCheckButtons";
import BeforeCheckButton from "@/app/(page)/quiz/[detailUrl]/_components/client/beforeCheckButton";
import CheckButton from "@/app/(page)/quiz/[detailUrl]/_components/client/checkButton";
import QuizFormId from "@/app/(page)/quiz/[detailUrl]/_components/client/quizFormId";
import useHandleQuizModal from "@/app/(page)/quiz/[detailUrl]/_helper/useHandleQuizModal";
import {checkAnswerAction} from "@/app/(page)/quiz/action";
import MultipleChoiceGroupCheckBox from "@/app/_components/checkbox/groupCheckBox";
import {MultipleChoiceContent} from "@/app/services/quiz/types";
import {useParams} from "next/navigation";
import React, {useActionState, useEffect} from 'react';

// 퀴즈 답안 입력 폼
function QuizAnswerForm({
                            quizId,
                            quizType,
                            quizMultipleChoiceContents
                        }:{quizId:number, quizType:string, quizMultipleChoiceContents:MultipleChoiceContent[]}) {

    const {detailUrl} = useParams()

    const {handleShowQuizResultModal} =  useHandleQuizModal()

    const [state,formAction]= useActionState(checkAnswerAction,{
        correct:false,
        userAnswer:[],
        answer:[],
        check:false
    })

    // 사용자 답안
    const [userAnswer,setUserAnswer] = React.useState<number[]>([])

    const processedMultipleChoiceContents =
        quizMultipleChoiceContents
        .map((v) => ({label: `${v.content}`, value: v.number}))

    useEffect(() => {

        if(state.check) {
            handleShowQuizResultModal({checkAnswerData:state, detailUrl: detailUrl as string})
        }


    }, [state.check]);
    return (
        <form
            action={formAction}
        >
            {/*퀴즈 ID*/}
            <QuizFormId quizId={quizId}/>
            {/*객관식인 경우, 객관시 문제 5게*/}
            {quizType === "MULTIPLE_CHOICE" &&
                <MultipleChoiceGroupCheckBox
                    options={processedMultipleChoiceContents}
                    direction={"col"}
                    isMultiSelect={false}
                    onChange={(value) => setUserAnswer(value as number[])}/>
            }
            {/*채점 버튼*/}
            <CheckButton
            >
                {state.check ?
                    <AfterCheckButtons detailUrl={detailUrl as string}/> : <BeforeCheckButton userAnswer={userAnswer}/>}
            </CheckButton>
        </form>
    );
}

export default QuizAnswerForm;
