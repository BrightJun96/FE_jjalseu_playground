"use client"

import CheckButton from "@/app/(page)/quiz/[detailUrl]/_components/client/checkButton";
import useHandleQuizModal from "@/app/(page)/quiz/[detailUrl]/_helper/useHandleQuizModal";
import {checkAnswerAction} from "@/app/(page)/quiz/action";

import 'prismjs/themes/prism.css';
import GroupCheckBox from "@/app/_components/checkbox/groupCheckBox";
import useQuizHelperContext from "@/app/_context/useQuizContext";
import {QuizItem} from "@/app/services/quiz/types";
import {useParams} from "next/navigation";
import React, {useEffect} from 'react';
import {useFormState} from 'react-dom'

// 퀴즈 상세 컴포넌트
const QuizDetails = ({
                         quizData
                     }:{quizData:QuizItem}) => {

    const {detailUrl} = useParams()
    const quizHelper = useQuizHelperContext();


    const {handleShowQuizResultModal} =  useHandleQuizModal()

    // 사용자 답안
    const [userAnswer,setUserAnswer] = React.useState<number[]>([])






    const [state,formAction]= useFormState(checkAnswerAction,{
        correct:false,
        userAnswer:[],
        answer:[],
        check:false
    })

    console.log("state",state)

    useEffect(() => {

        // 현재 경로가 solvedQuizList 스토리지에 있는 url에 있는 경우, 다른 문제로 이동
        quizHelper?.redirectIfQuizSolved(detailUrl as string)

        // 모든 퀴즈를 푼 경우, 퀴즈 완료 페이지로 이동
        quizHelper?.redirectToCompletionPageIfAllSolved()

    }, [detailUrl])


    useEffect(() => {

        if(state.check) {
            handleShowQuizResultModal({checkAnswerData:state, detailUrl: detailUrl as string})
        }


    }, [state.check]);

    return (
        <>
            {/*퀴즈 제목*/}
            <h1 className={"lg:text-title1 md:text-title2Bold sm:text-title2Bold"}>{quizData.metaTitle}</h1>
            <p
                className={"text-menu"}
            >{quizData.title}</p>

            {/*퀴즈내용*/}
            <div
                className={"prose w-full"}
                dangerouslySetInnerHTML={{__html: quizData.content}}
            ></div>

            <form
                action={formAction}
            >
                <input
                    type={"hidden"}
                    name={"quizId"}
                    value={quizData.quizId}
                />
            {/*객관식인 경우, 객관시 문제 5게*/}
            {quizData.type === "MULTIPLE_CHOICE" &&
                // <MultipleChoiceContents multipleChoiceContents={quizData.multipleChoices}/>
                <GroupCheckBox
                    options={quizData.multipleChoiceContents.map((v) => ({label: `${v.content}`, value: v.number}))}
                    direction={"col"}
                    isMultiSelect={false}
                    onChange={(value) => setUserAnswer(value as number[]) }/>
            }
            {/*채점 버튼*/}
               <CheckButton
                   check={state.check}
                   userAnswer={userAnswer}
                   detailUrl={detailUrl as string}
               />
            </form>

        </>
    );
};

export default QuizDetails;
