import ExceptionManager from "@/app/_utils/class/ExceptionManager";
import {
    CustomRequestInit,
    IResponse,
} from "@/app/services/api.types";
import ApiError from "@/app/services/ApiError";
import QuizApi from "@/app/services/quiz/QuizApi";
import {
    CheckAnswerResponse,
    QuizItem,
} from "@/app/services/quiz/types";
import { notFound } from "next/navigation";

// 퀴즈 API - 통신 + 예외 처리와 비즈니스 로직을 포함
export class QuizApiHandler extends QuizApi {
    // 퀴즈 정답 확인
    async fetchCheckAnswer(checkAnswer: {
        quizId: number;
        userAnswer: number[];
    }): Promise<IResponse<CheckAnswerResponse>> {
        return this.request<CheckAnswerResponse>(
            "quiz/check",
            {
                method: "POST",
                body: JSON.stringify(checkAnswer),
            },
        );
    }

    // 퀴즈 전체 DetailUrl 목록 조회
    async fetchQuizDetailUrlList(
        options?: CustomRequestInit,
    ): Promise<IResponse<string[]>> {
        const response = await this.request<string[]>(
            "quiz/list-detail-url",
            {
                method: "GET",
                ...options,
            },
        );

        const { data } = response;

        // 배열이 비어있는 경우, 예외 처리
        ExceptionManager.throwIfArrayEmpty<string>(
            data,
            "퀴즈 URL 목록이 비어있습니다.",
        );

        // 데이터가 없을 경우, 예외 처리
        ExceptionManager.throwIfNullOrUndefined(
            data,
            "퀴즈 URL 목록이 없습니다.",
        );

        return response;
    }

    // 퀴즈 상세 조회(상세 URL)
    async fetchQuizDetailByUrl(
        detailUrl: string,
    ): Promise<IResponse<QuizItem> | undefined> {
        try {
            return await this.request<QuizItem>(
                `quiz/detail-url/${detailUrl}`,
                {
                    method: "GET",
                    next: {
                        revalidate: 30,
                    },
                },
            );
        } catch (error) {
            if (error instanceof ApiError) {
                error.getDetailsLog(
                    "페이지 로드에러 - 퀴즈 상세 API 에러",
                );
                notFound();
            }
        }
    }
}

export const quizApiHandler = new QuizApiHandler();
