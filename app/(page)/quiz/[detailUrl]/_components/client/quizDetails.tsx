"use client"

import useHandleQuizModal from "@/app/(page)/quiz/[detailUrl]/_helper/useHandleQuizModal";
import PrimaryButton from "@/app/_components/button/primaryButton";

import 'prismjs/themes/prism.css';
import GroupCheckBox from "@/app/_components/checkbox/groupCheckBox";
import useQuizHelperContext from "@/app/_context/useQuizContext";
import {quizApiHandler} from "@/app/services/quiz/QuizApiHandler";
import {QuizItem} from "@/app/services/quiz/types";
import {useParams} from "next/navigation";
import React, {useEffect} from 'react';

// 퀴즈 상세 컴포넌트
const QuizDetails = ({
                         quizData
                     }:{quizData:QuizItem}) => {

    const {detailUrl} = useParams()
    const quizHelper = useQuizHelperContext();

    const {handleEmptyUserAnswer,handleShowQuizResultModal} =  useHandleQuizModal()

    // 사용자 답안
    const [userAnswer,setUserAnswer] = React.useState<number[]>([])

    // 채점
    async function handleGetAnswer(userAnswer:number[],quizId:number){

        // 사용자 답안이 체크되지 않았을 경우, 경고창을 띄우는 함수
        if(handleEmptyUserAnswer(userAnswer)) return

        // 채점 결과 요청
         const {data:checkAnswerData} = await quizApiHandler.fetchCheckAnswer({
                    quizId,
                    userAnswer
                })

        // 채점 결과에 대한 모달을 띄우는 함수
        handleShowQuizResultModal({checkAnswerData,detailUrl:detailUrl as string})
    }


    useEffect(() => {

        // 현재 경로가 solvedQuizList 스토리지에 있는 url에 있는 경우, 다른 문제로 이동
        quizHelper?.redirectIfQuizSolved(detailUrl as string)

        // 모든 퀴즈를 푼 경우, 퀴즈 완료 페이지로 이동
        quizHelper?.redirectToCompletionPageIfAllSolved()

    }, [detailUrl])

    return (
        <>
            {/*퀴즈 제목*/}
            <h1 className={"text-title1"}>{quizData.metaTitle}</h1>
            <p
                className={"text-body"}
            >{quizData.title}</p>

            {/*퀴즈내용*/}
            <div
                className={"w-full"}
                dangerouslySetInnerHTML={{__html: quizData.content}}
            ></div>

            {/*객관식인 경우, 객관시 문제 5게*/}
            {quizData.type === "MULTIPLE_CHOICE" &&
                // <MultipleChoiceContents multipleChoiceContents={quizData.multipleChoices}/>
                <GroupCheckBox
                    options={quizData.multipleChoiceContents.map((v) => ({label: `${v.content}`, value: v.number}))}
                    direction={"col"}
                    isMultiSelect={false}
                    onChange={(value) => setUserAnswer(value as number[]) }/>
            }
            <div className={"flex justify-center gap-1"}>
                    <PrimaryButton
                        onClick={async () => await handleGetAnswer(userAnswer,quizData.quizId)}
                        text={"채점"}
                        color={"primary"}/>
            </div>
        </>
    );
};

export default QuizDetails;
