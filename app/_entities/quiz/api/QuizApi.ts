import { CheckAnswerResponse } from "@/app/_entities/quiz";
import { IResponse } from "@/app/_shared/api/api.types";
import BaseApi from "@/app/_shared/api/BaseApi";
import {
    GetQuizSharedDto,
    QuizDetailURLResponseDto,
} from "@/app/_shared/api/generate.api.types";
import { API_PATHS } from "@/app/_shared/constants/api.path.const";

interface IQuizApi {
    // 퀴즈 정답 확인
    fetchCheckAnswer(checkAnswer: {
        quizId: number;
        answer: number;
    }): Promise<IResponse<CheckAnswerResponse>>;

    // 퀴즈 전체 DetailUrl 목록 조회
    fetchQuizDetailUrlList(): Promise<
        IResponse<QuizDetailURLResponseDto[]> | undefined
    >;

    // 퀴즈 상세 조회 (상세 URL)
    fetchQuizDetailByUrl(
        detailUrl: string,
    ): Promise<IResponse<GetQuizSharedDto> | undefined>;
}

// 퀴즈 API(통신만이 목적)
export class QuizApi extends BaseApi implements IQuizApi {
    constructor() {
        super(process.env.NEXT_PUBLIC_API_ENDPOINT!); // BaseApi에 API 엔드포인트 전달
    }

    // 퀴즈 정답 확인
    async fetchCheckAnswer(checkAnswer: {
        quizId: number;
        answer: number;
    }): Promise<IResponse<CheckAnswerResponse>> {
        return this.request<CheckAnswerResponse>(
            API_PATHS.QUIZ.CHECH_ANSWER,
            {
                method: "POST",
                body: JSON.stringify(checkAnswer),
            },
        );
    }

    // 퀴즈 전체 DetailUrl 목록 조회
    async fetchQuizDetailUrlList(): Promise<
        IResponse<QuizDetailURLResponseDto[]> | undefined
    > {
        return this.request<QuizDetailURLResponseDto[]>(
            API_PATHS.QUIZ.DETAIL_URLS,
            {
                method: "GET",
            },
        );
    }

    // 퀴즈 상세 조회(상세 URL)
    async fetchQuizDetailByUrl(
        detailUrl: string,
    ): Promise<IResponse<GetQuizSharedDto> | undefined> {
        return this.request<GetQuizSharedDto>(
            `${API_PATHS.QUIZ.DETAIL_URL}/${detailUrl}`,
            {
                method: "GET",
            },
        );
    }
}
