import useQuizStorageContext from "@/app/(page)/quiz/_context/_hook/useQuizStorageContext";
import {getQuizDetailUrlListAction} from "@/app/(page)/quiz/action";
import {ArrayUtils} from "@/app/_utils/class/ArrayUtils";
import {useRouter} from "next/navigation";
import {useActionState, useEffect} from "react";

// 퀴즈 옵션 폼 관련 액션 커스텀 훅
function useQuizOptionFormAction() {
    const router = useRouter()
    const quizStorage = useQuizStorageContext()

    const [state,formAction]=useActionState(getQuizDetailUrlListAction,{urlList:[],isAction:false})
    useEffect(() => {
        if(state.isAction){
            quizStorage?.saveQuizUrlList(state.urlList)

            const randomOne = ArrayUtils.pickRandomOne<string>(state.urlList)

            router.push(`/quiz/${randomOne}`)

        }
    }, [state.isAction]);
    return {formAction}
}

export default useQuizOptionFormAction;
