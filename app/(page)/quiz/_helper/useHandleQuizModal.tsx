import QuizResultModalContent
    from "@/app/(page)/quiz/(page)/[detailUrl]/_components/client/modal/quizResultModalContent";
import useRandomUrl from "@/app/(page)/quiz/_helper/useRandomUrl";
import useHandleModal from "@/app/_components/modal/_hook/useHandleModal";
import PATHS from "@/app/_constants/paths";
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
            content:<QuizResultModalContent
                checkAnswerData={checkAnswerData}
            />
        },
        )

        handleSetModalLinkContent(
            [
                {
            text:"해설",
            href:`/${PATHS.QUIZ_EXPLANATION(detailUrl)}`,
                    color:"primarySecondary"
                },
                {
            text:"다음문제",
            href:`/${PATHS.QUIZ_RANDOM(randomUrl)}`,
                    color:"primary"
                }
        ]
        )

    }

    return {handleShowQuizResultModal}
}

export default useHandleQuizModal;
