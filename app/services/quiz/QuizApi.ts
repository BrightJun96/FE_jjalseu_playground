import BaseApi from "@/app/services/BaseApi";
import {IResponse} from "@/app/services/network.types";
import {CheckAnswerResponse, QuizItem} from "@/app/services/quiz/types";

export interface IQuizApi {
    // 퀴즈 정답 확인
    fetchCheckAnswer(checkAnswer: { quizId: number; userAnswer: number[] }): Promise<IResponse<CheckAnswerResponse>>;

    // 퀴즈 전체 DetailUrl 목록 조회
    fetchQuizDetailUrlList(): Promise<IResponse<string[]>>;

    // 퀴즈 전체 PK 목록 조회
    fetchQuizPkList(): Promise<IResponse<number[]>>;

    // 퀴즈 상세 조회
    fetchQuizDetail(quizId: number): Promise<IResponse<QuizItem>>;

    // 퀴즈 상세 조회 (상세 URL)
    fetchQuizDetailByUrl(detailUrl: string): Promise<IResponse<QuizItem>>;
}

class QuizApi extends BaseApi implements IQuizApi {
    constructor() {
        super(process.env.NEXT_PUBLIC_API_ENDPOINT!); // BaseApi에 API 엔드포인트 전달
    }

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


export default QuizApi;

