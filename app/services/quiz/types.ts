
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
