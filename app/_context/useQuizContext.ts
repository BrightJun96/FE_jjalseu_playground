import QuizHelperContext from "@/app/_context/quizHelperContext";
import {useContext} from 'react';

// 퀴즈 헬퍼 컨텍스트 사용
function useQuizHelperContext() {

    return useContext(QuizHelperContext)
}

export default useQuizHelperContext;
