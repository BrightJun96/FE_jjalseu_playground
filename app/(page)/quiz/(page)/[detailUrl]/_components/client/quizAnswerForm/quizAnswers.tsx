import MultipleChoiceAnswers from "@/app/(page)/quiz/(page)/[detailUrl]/_components/client/quizAnswerForm/multipleChoiceAnswers";
import { GetQuizMultipleChoiceSharedDto } from "@/app/_shared/api/generate.api.types";
import React from "react";

// 퀴즈 답안(객관식, 주관식,OX) 컴포넌트
function QuizAnswers({
    quizMultipleChoiceContents,
}: {
    quizMultipleChoiceContents: GetQuizMultipleChoiceSharedDto[];
}) {
    return (
        <>
            <MultipleChoiceAnswers
                tabIndex={1}
                quizMultipleChoiceContents={
                    quizMultipleChoiceContents
                }
                // setUserAnswer={setUserAnswer}
            />
        </>
    );
}

export default QuizAnswers;
