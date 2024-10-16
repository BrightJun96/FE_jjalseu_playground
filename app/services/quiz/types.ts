
// 퀴즈 응답 타입
export interface QuizItem {
    quizId: number;
    questionTitle: string;
    questionContent: string;
    answer: string;
    type: string;
    hint: string;
    explanation: string;
    field: string;
    lang: string;
    time: number;
}

// 퀴즈 목록 응답 타입
export interface QuizListResponse {
    quizList:QuizItem[]
    totalTime: number;
    totalCount: number;
}


// 퀴즈 요청 타입 & 퀴즈 폼 타입
export interface QuizForm{
    questionTitle:string,
    questionContent:string,
    answer:string,
    hint:string,
    explanation:string,
    type:"MULTIPLE_CHOICE"|"SUBJECTIVE",
    field:string,
    lang:string,
    level:number,
    isMultiple:boolean,// 객관식일 경우 중복 선택 여부
    time:number,
    multipleChoiceContents:string[]
}

// QuizForm keys
export type QuizFormKey = keyof QuizForm;
