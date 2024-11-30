"use client"

import quizHelper from "@/app/(page)/quiz/[detailUrl]/_helper/QuizHelper";
import PrimaryButton from "@/app/_components/button/primaryButton";

import 'prismjs/themes/prism.css';
import GroupCheckBox from "@/app/_components/checkbox/groupCheckBox";
import useHandleModal from "@/app/_components/modal/useHandleModal";
import {StorageAdapter} from "@/app/_utils/StorageService";
import {clientQuizApi} from "@/app/services/quiz/client/api.instance";
import {QuizItem} from "@/app/services/quiz/types";
import {useParams, useRouter} from "next/navigation";
import React, {useEffect} from 'react';

// 퀴즈 상세 컴포넌트
const QuizDetails = ({
                         quizData
                     }:{quizData:QuizItem}) => {

    // 힌트 노출 여부
    const hintRef = React.useRef<HTMLDivElement>(null)

    const {detailUrl} = useParams()

    // 모달 관련 함수
   const {
        handleOpenModal,
       handleInitModal,
       handleSetModalContent,
       handleSetModalButtonContent
   } = useHandleModal()

    const router = useRouter()


    // 사용자 답안
    const [userAnswer,setUserAnswer] = React.useState<number[]>([])

    /**
     * @TODO
     * API 요청 과 모달 관련 로직 분리 필요
     */
    // 채점
    async function handleGetAnswer(){

     const response = await clientQuizApi.fetchCheckAnswer({
                quizId:quizData.quizId,
                userAnswer:userAnswer
            })


        console.log("quizData",quizData)
        handleOpenModal()
        handleSetModalContent({
            title:"채점 결과",
            content:<div
            >
             <p>   {response.data.correct?"정답입니다 🥳":"오답입니다 🥲"}</p>
                <p>정답 : {response.data.answer.join(",")}</p>
                <p>사용자 답안 : {response.data.userAnswer.length>0?response.data.userAnswer.join(","):"답안을 체크하지 않았어요 🥲"}</p>
            </div>
        })
         handleSetModalButtonContent({
                confirm:{
                    text:"다음문제",
                    onClick:async ()=>{
                        console.log("다음문제 함수")
                        await quizHelper.moveToNextQuiz(new StorageAdapter(window.localStorage),router.push,quizData.detailUrl)
                    }
                },
                cancel:{
                    isShow:true,
                    text:"해설",
                    onClick:()=>{
                        // @todo

                    }
                }
         })
    }


    useEffect(() => {

        const storage = new StorageAdapter(window.localStorage)

        // 현재 경로가 solvedQuizList 스토리지에 있는 url에 있는 경우, 다른 문제로 이동
        if(quizHelper.getSolvedQuiz(storage).includes(detailUrl as string)){
             const unsolvedOne=  quizHelper.pickRandomOne<string>(quizHelper.getUnsolvedQuiz(storage))
            router.push(`/quiz/${unsolvedOne}`)
        }

        // 모든 퀴즈를 푼 경우, 퀴즈 완료 페이지로 이동
        if(quizHelper.isAllQuizSolved(storage)){
            router.push("/quiz/completed")
        }
    }, [detailUrl])

    return (
        <div>
            {/*퀴즈 제목*/}
            <h1
                className={"text-title2Normal"}
            >{quizData.title}</h1>

            {/*퀴즈내용*/}
            <div
                className={"prose"}
                dangerouslySetInnerHTML={{__html: quizData.content}}
            ></div>

            {/*객관식인 경우, 객관시 문제 5게*/}
            {quizData.type === "MULTIPLE_CHOICE" &&
                // <MultipleChoiceContents multipleChoiceContents={quizData.multipleChoices}/>
                <GroupCheckBox
                    options={quizData.multipleChoices.map((v) => ({label: `${v.number}. ${v.content}`, value: v.number}))}
                    direction={"col"}
                    isMultiSelect={false}
                    onChange={(value) => setUserAnswer(value as number[]) }/>
            }
            <div className={"flex justify-center gap-1"}>
                    <PrimaryButton
                        onClick={handleGetAnswer}
                        text={"채점"}
                        color={"primary"}/>
            </div>
            {/*<Pagination totalPage={quizData.quizList.length} queryKey={"order"}/>*/}
        </div>
    );
};

export default QuizDetails;
