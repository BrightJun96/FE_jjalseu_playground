import {QuizStorageManager} from "@/app/(page)/quiz/_helper/QuizStoreManager";
import {createContext} from "react";

// 퀴즈 스토리지 컨텍스트
const QuizStorageContext = createContext<QuizStorageManager | null>(null);

export default QuizStorageContext;
