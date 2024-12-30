import MultipleChoiceAnswers from "@/app/(page)/quiz/(page)/[detailUrl]/_components/client/quizAnswerForm/multipleChoiceAnswers";
import { MultipleChoiceContent } from "@/app/(page)/quiz/_api/types";
import React from "react";

// 퀴즈 답안(객관식, 주관식,OX) 컴포넌트
function QuizAnswers({
    quizType,
    quizMultipleChoiceContents,
}: {
    quizType: string;
    quizMultipleChoiceContents: MultipleChoiceContent[];
}) {
    return (
        <>
            {quizType === "MULTIPLE_CHOICE" && (
                <MultipleChoiceAnswers
                    tabIndex={1}
                    quizMultipleChoiceContents={
                        quizMultipleChoiceContents
                    }
                    // setUserAnswer={setUserAnswer}
                />
            )}
        </>
    );
}

export default QuizAnswers;
