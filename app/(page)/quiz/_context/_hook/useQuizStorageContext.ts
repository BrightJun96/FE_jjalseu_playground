import QuizStorageContext from "@/app/(page)/quiz/_context/quizStorageContext";
import {useContext} from 'react';

// 퀴즈 스토리지 컨텍스트 훅
function useQuizStorageContext() {
    return useContext(QuizStorageContext)
}

export default useQuizStorageContext;
