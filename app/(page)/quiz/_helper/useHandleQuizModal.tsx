import useRandomUrl from "@/app/(page)/quiz/_helper/useRandomUrl";
import useHandleModal from "@/app/_components/modal/_hook/useHandleModal";
import {CheckAnswerResponse} from "@/app/services/quiz/types";
import React from "react";


// 퀴즈 모달 관련 함수
function useHandleQuizModal() {

    const randomUrl =useRandomUrl()
    const {
        handleOpenModal,
        handleSetModalContent,
        handleSetModalButtonContent,
        handleSetModalLinkContent
    } = useHandleModal()

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
        },
        )

        handleSetModalLinkContent(
            [
                {
            text:"해설",
            href:`/quiz/${detailUrl}/explanation`,
                    color:"primarySecondary"
                },
                {
            text:"다음문제",
            href:`/quiz/${randomUrl}`,
                    color:"primary"
                }
        ]
        )

    }

    return {handleShowQuizResultModal}
}

export default useHandleQuizModal;
