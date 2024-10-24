
// 퀴즈 응답 타입
export interface QuizItem {
    quizId: number;
    title: string;
    content: string;
    multipleChoiceAnswer: number[];
    subjectiveAnswer: string;
    type: string;
    hint: string;
    explanation: string;
    field: string;
    lang: string;
    time: number;
    multipleChoices:MultipleChoiceContent[]
}

// 객관식 컨텐츠
export interface MultipleChoiceContent{
    multipleChoiceId:number;
    content:string;
    quizId:number;
    number:number;
}

// 퀴즈 목록 응답 타입
export interface QuizListResponse {
    quizList:QuizItem[]
    totalTime: number;
    totalCount: number;
}


// 퀴즈 요청 타입 & 퀴즈 폼 타입
export interface QuizForm{
    title:string, // 퀴즈 제목
    content:string, // 퀴즈 내용
    subjectiveAnswer:string, // 주관식 답안
    multipleChoiceAnswer:number[], // 객관식 답안
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
