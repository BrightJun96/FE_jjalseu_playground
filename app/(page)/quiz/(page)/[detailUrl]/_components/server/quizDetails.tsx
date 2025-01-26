"use server";

import QuizAnswerForm from "@/app/(page)/quiz/(page)/[detailUrl]/_components/client/quizAnswerForm/quizAnswerForm";
import QuizDetailsManager from "@/app/(page)/quiz/(page)/[detailUrl]/_components/client/quizDetailsManager";
import QuizContent from "@/app/(page)/quiz/(page)/[detailUrl]/_components/server/quizContent";
import QuizQuestion from "@/app/(page)/quiz/(page)/[detailUrl]/_components/server/quizQuestion";
import QuizTitle from "@/app/(page)/quiz/(page)/[detailUrl]/_components/server/quizTitle";
import { GetQuizSharedDto } from "@/app/_shared/api/generate.api.types";

import React from "react";

// 퀴즈 상세 컴포넌트
const QuizDetails = ({
    quizData,
}: {
    quizData: GetQuizSharedDto;
}) => {
    return (
        <QuizDetailsManager>
            {/*퀴즈 제목*/}
            <QuizTitle
                title={quizData.quizMetaData.seoMetaTitle}
            />
            {/*퀴즈 문제*/}
            <QuizQuestion question={quizData.title} />
            {/*퀴즈내용*/}
            <QuizContent content={quizData.content} />
            {/*퀴즈 답안 폼*/}
            <QuizAnswerForm
                quizId={quizData.id}
                quizMultipleChoiceContents={
                    quizData.multipleChoices
                }
            />
        </QuizDetailsManager>
    );
};

export default QuizDetails;
