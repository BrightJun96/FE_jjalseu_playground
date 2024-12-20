import {QuizStorage} from "@/app/(page)/quiz/_helper/QuizStorage";
import {createContext} from "react";

// 퀴즈 스토리지 컨텍스트
const QuizStorageContext = createContext<QuizStorage | null>(null);

export default QuizStorageContext;
