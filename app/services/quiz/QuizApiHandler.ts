import {IResponse} from "@/app/services/network.types";
import QuizApi from "@/app/services/quiz/QuizApi";
import {CheckAnswerResponse, QuizItem} from "@/app/services/quiz/types";

// 예외 처리와 비즈니스 로직을 포함한 메서드
class QuizApiHandler extends QuizApi {
    // 퀴즈 정답 확인
    async fetchCheckAnswer(checkAnswer: { quizId: number; userAnswer: number[] }): Promise<IResponse<CheckAnswerResponse>> {
        return this.request<CheckAnswerResponse>("quiz/check", {
            method: "POST",
            body: JSON.stringify(checkAnswer),
        });
    }

    // 퀴즈 전체 DetailUrl 목록 조회
    async fetchQuizDetailUrlList(): Promise<IResponse<string[]>> {
        return this.request<string[]>("quiz/list-detail-url", {
            method: "GET",
        });
    }

    // 퀴즈 전체 PK 목록 조회
    async fetchQuizPkList(): Promise<IResponse<number[]>> {
        return this.request<number[]>("quiz/list-pk", {
            method: "GET",
        });
    }

    // 퀴즈 상세 조회
    async fetchQuizDetail(quizId: number): Promise<IResponse<QuizItem>> {
        return this.request<QuizItem>(`quiz/${quizId}`, {
            method: "GET",
        });
    }

    // 퀴즈 상세 조회(상세 URL)
    async fetchQuizDetailByUrl(detailUrl: string): Promise<IResponse<QuizItem>> {
        return this.request<QuizItem>(`quiz/detail-url/${detailUrl}`, {
            method: "GET",
        });
    }
}

export const quizApiHandler = new QuizApiHandler();
export default quizApiHandler;
