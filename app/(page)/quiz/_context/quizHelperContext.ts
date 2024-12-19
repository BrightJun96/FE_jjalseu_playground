import {QuizHelper} from "@/app/(page)/quiz/_helper/QuizHelper";
import {createContext} from "react";

// 퀴즈 헬퍼 컨텍스트
const QuizHelperContext = createContext<QuizHelper | null>(null);

export default QuizHelperContext;
