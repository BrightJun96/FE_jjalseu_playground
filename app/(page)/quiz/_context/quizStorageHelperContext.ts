import {QuizStorageHelper} from "@/app/(page)/quiz/_helper/QuizStorageHelper";
import {createContext} from "react";

// 퀴즈 헬퍼 컨텍스트
const QuizStorageHelperContext = createContext<QuizStorageHelper | null>(null);

export default QuizStorageHelperContext;
