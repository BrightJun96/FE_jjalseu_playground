"use client"

import AfterCheckButtons from "@/app/(page)/quiz/[detailUrl]/_components/client/afterCheckButtons";
import BeforeCheckButton from "@/app/(page)/quiz/[detailUrl]/_components/client/beforeCheckButton";
import CheckButton from "@/app/(page)/quiz/[detailUrl]/_components/client/checkButton";
import QuizContent from "@/app/(page)/quiz/[detailUrl]/_components/client/quizContent";
import QuizQuestion from "@/app/(page)/quiz/[detailUrl]/_components/client/quizQuestion";
import QuizTitle from "@/app/(page)/quiz/[detailUrl]/_components/client/quizTitle";
import useHandleQuizModal from "@/app/(page)/quiz/[detailUrl]/_helper/useHandleQuizModal";
import {checkAnswerAction} from "@/app/(page)/quiz/action";

import 'prismjs/themes/prism.css';
import MultipleChoiceGroupCheckBox from "@/app/_components/checkbox/groupCheckBox";
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
            <QuizTitle
                title={quizData.metaTitle}
            />
            {/*퀴즈 문제*/}
           <QuizQuestion
               question={quizData.title}
           />

            {/*퀴즈내용*/}
            <QuizContent
                content={quizData.content}
            />
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
                <MultipleChoiceGroupCheckBox
                    options={quizData.multipleChoiceContents.map((v) => ({label: `${v.content}`, value: v.number}))}
                    direction={"col"}
                    isMultiSelect={false}
                    onChange={(value) => setUserAnswer(value as number[]) }/>
            }
            {/*채점 버튼*/}
               <CheckButton
               >
                   check?
                   <AfterCheckButtons detailUrl={detailUrl as string}/>:<BeforeCheckButton userAnswer={userAnswer}/>
               </CheckButton>
            </form>

        </>
    );
};

export default QuizDetails;
