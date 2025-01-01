// 퀴즈 정답 확인 응답
export interface CheckAnswerResponse {
    correct: boolean; // 정답 여부
    answer: number[]; // 정답
    userAnswer: number[]; // 사용자 답안
}
