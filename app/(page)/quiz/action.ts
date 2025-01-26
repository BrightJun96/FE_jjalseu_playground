"use server";

import { CheckAnswerResponse } from "@/app/_entities/quiz";
import { quizApiHandler } from "@/app/_features/quiz";
import { QuizDetailURLResponseDto } from "@/app/_shared/api/generate.api.types";

/**
 * @description
 * QUIZ API를 서버 액션으로 가져오기 위한 액션 함수
 */

// 퀴즈 URL 목록
export async function getQuizDetailUrlListAction(
    prevState: {
        urlList: QuizDetailURLResponseDto[];
        isSubmit: boolean;
    },
    formData: FormData,
) {
    const field = formData.get("field");
    // console.log("field", field);
    const response =
        await quizApiHandler.fetchQuizDetailUrlList();

    return {
        urlList: response ? response.data : [],
        isSubmit: true,
    };
}

interface CheckAnswerResponseExtends
    extends CheckAnswerResponse {
    check: boolean;
}

// 퀴즈 정답 확인
export async function checkAnswerAction(
    prevState: CheckAnswerResponseExtends,
    formData: FormData,
) {
    const options = formData
        .getAll("options")
        .map((option) => Number(option));

    const checkAnswer = {
        quizId: Number(formData.get("quizId")),
        answer: options[0],
    };

    const { data: checkAnswerData } =
        await quizApiHandler.fetchCheckAnswer(checkAnswer);

    return { ...checkAnswerData, check: true };
}
