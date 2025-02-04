import useQuizStorageContext from "@/app/(page)/quiz/_context/_hook/useQuizStorageContext";
import { getQuizDetailUrlListAction } from "@/app/(page)/quiz/action";
import { QuizDetailURLResponseDto } from "@/app/_shared/api/generate.api.types";
import PATHS from "@/app/_shared/constants/paths";
import { ArrayUtils } from "@/app/_shared/utils/class/ArrayUtils";
import { useRouter } from "next/navigation";
import { useActionState, useEffect } from "react";

// 퀴즈 옵션 폼 관련 액션 커스텀 훅
function useQuizOptionFormAction() {
    const router = useRouter();
    const quizStorage = useQuizStorageContext();

    const [state, formAction] = useActionState(
        getQuizDetailUrlListAction,
        { urlList: [], isSubmit: false },
    );
    useEffect(() => {
        if (state.isSubmit) {
            quizStorage?.saveQuizUrlList(state.urlList);

            const randomOne =
                ArrayUtils.pickRandomOne<QuizDetailURLResponseDto>(
                    state.urlList,
                );

            router.push(
                `/${PATHS.QUIZ_RANDOM(randomOne.detailUrl)}`,
            );
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [state.isSubmit]);
    return { formAction };
}

export default useQuizOptionFormAction;
