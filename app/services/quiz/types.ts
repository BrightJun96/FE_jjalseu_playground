
// 퀴즈 응답 타입
export interface QuizItem {
    quizId: number;
    title: string;
    content: string;
    multipleChoiceAnswer: number[];
    subjectiveAnswer: string;
    type: QuizType;
    hint: string;
    explanation: string;
    field: string;
    level: number;
    lang: string;
    time: number;
    multipleChoiceContents:MultipleChoiceContent[]
    metaTitle:string;
    metaDescription:string;
    metaImageUrl:string|null;
    createdAt: string;
    updatedAt: string;
    detailUrl:string // 상세 URL
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

export type QuizType = "MULTIPLE_CHOICE" | "SUBJECTIVE";

// 퀴즈 요청 타입 & 퀴즈 폼 타입
export interface QuizForm{
    title:string, // 퀴즈 제목
    content:string, // 퀴즈 내용
    subjectiveAnswer:string, // 주관식 답안
    multipleChoiceAnswer:number[], // 객관식 답안
    hint:string,
    explanation:string,
    type:QuizType,
    field:string,
    lang:string,
    level:number,
    isMultiple:boolean,// 객관식일 경우 중복 선택 여부
    time:number,
    multipleChoiceContents:string[]

    metaTitle:string, // 제목
    metaDescription:string, // 설명
    metaImageUrl:string // 이미지 URL
    detailUrl:string // 상세 URL
}

// QuizForm keys
export type QuizFormKey = keyof QuizForm;

// 퀴즈 정답 확인 응답
export interface CheckAnswerResponse{
    correct:boolean // 정답 여부
    answer : number[] // 정답
    userAnswer:number[] // 사용자 답안

}
