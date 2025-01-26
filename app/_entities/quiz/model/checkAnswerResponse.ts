// 퀴즈 정답 확인 응답
import { CheckAnswerResponseDto } from "@/app/_shared/api/generate.api.types";

export interface CheckAnswerResponse
    extends CheckAnswerResponseDto {
    answer: number[]; // 정답
    userAnswer: number[]; // 사용자 답안
}
