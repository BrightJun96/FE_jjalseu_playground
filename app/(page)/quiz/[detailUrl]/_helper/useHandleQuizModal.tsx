import useHandleModal from "@/app/_components/modal/useHandleModal";
import useQuizHelperContext from "@/app/_context/useQuizContext";
import {ArrayUtils} from "@/app/_utils/class/ArrayUtils";
import {CheckAnswerResponse} from "@/app/services/quiz/types";
import {useRouter} from "next/navigation";
import React from "react";


// 퀴즈 모달 관련 함수
function useHandleQuizModal() {

    const router = useRouter()
    const quizHelper = useQuizHelperContext();


    const {
        handleOpenModal,
        handleSetModalContent,
        handleSetModalButtonContent
    } = useHandleModal()

    // 사용자 답안이 체크되지 않았는지 확인하는 함수
    function isUserAnswerEmpty(userAnswer:number[]) {
        return ArrayUtils.isEmpty<number>(userAnswer)
    }

    // 채점 결과에 대한 모달을 띄우는 함수
    function handleShowQuizResultModal({checkAnswerData,detailUrl}:{
        checkAnswerData:CheckAnswerResponse,
        detailUrl:string
    }) {
        handleOpenModal()
        handleSetModalContent({
            title:"채점 결과",
            content:<div
            >
                <p>   {checkAnswerData.correct?"정답입니다 🥳":"오답입니다 🥲"}</p>
                <p>정답 : {checkAnswerData.answer.join(",")}</p>
                <p>사용자 답안 : {checkAnswerData.userAnswer.length>0?checkAnswerData.userAnswer.join(","):"답안을 체크하지 않았어요 🥲"}</p>
            </div>
        })
        handleSetModalButtonContent({
            confirm:{
                text:"다음문제",
                onClick:async ()=>{
                    await quizHelper?.moveToNextQuiz(detailUrl)
                }
            },
            cancel:{
                isShow:true,
                text:"해설",
                onClick:()=>{
                    router.push(`/quiz/${detailUrl}/explanation`)

                }
            }
        })
    }

    // 사용자 답안이 체크되지 않았을 경우, 경고창을 띄우는 함수
    function handleEmptyUserAnswer(userAnswer:number[]) {
        if (isUserAnswerEmpty(userAnswer)) {
            handleOpenModal()
            handleSetModalContent({
                title:"답안 체크",
                content: <p>답안을 체크해주세요</p>,
            })
            handleSetModalButtonContent({
                confirm:{
                    text:"확인",
                    onClick:()=>{}
                },
                cancel:{
                    isShow:false,
                    text:"",
                    onClick:()=>{}
                }
            })

            return true
        }
        return false
    }

    return {handleShowQuizResultModal,handleEmptyUserAnswer}
}

export default useHandleQuizModal;
