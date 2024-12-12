import useHandleQuizModal from "@/app/(page)/quiz/[detailUrl]/_helper/useHandleQuizModal";
import {checkAnswerAction} from "@/app/(page)/quiz/action";
import {useParams} from "next/navigation";
import {useActionState, useEffect} from 'react';

// 퀴즈 답안 입력 폼 관련 액션 커스텀 훅
function useQuizFormAction() {

    const {detailUrl} = useParams()

    const {handleShowQuizResultModal} =  useHandleQuizModal()

    const [state,formAction]= useActionState(checkAnswerAction,{
        correct:false,
        userAnswer:[],
        answer:[],
        check:false
    })


    useEffect(() => {

        if(state.check) {
            handleShowQuizResultModal(
                {
                    checkAnswerData:state,
                    detailUrl: detailUrl as string
                })
        }


    }, [state.check]);


    return {
        isAnswerCheck: state.check,
        formAction
    }

}

export default useQuizFormAction;
