import QuizStorageHelperContext from "@/app/(page)/quiz/_context/quizStorageHelperContext";
import {useContext} from 'react';

// 퀴즈 헬퍼 컨텍스트 사용
function useQuizStorageHelperContext() {

    return useContext(QuizStorageHelperContext)
}

export default useQuizStorageHelperContext;
