"use client";

import AfterCheckButtons from "@/app/(page)/quiz/(page)/[detailUrl]/_components/client/quizAnswerForm/afterCheckButtons/afterCheckButtons";
import BeforeCheckButton from "@/app/(page)/quiz/(page)/[detailUrl]/_components/client/quizAnswerForm/beforeCheckButton";
import CheckButtonContainer from "@/app/(page)/quiz/(page)/[detailUrl]/_components/client/quizAnswerForm/checkButtonContainer";
import QuizAnswerFormContainer from "@/app/(page)/quiz/(page)/[detailUrl]/_components/client/quizAnswerForm/quizAnswerFormContainer";
import QuizAnswers from "@/app/(page)/quiz/(page)/[detailUrl]/_components/client/quizAnswerForm/quizAnswers";
import QuizFormId from "@/app/(page)/quiz/(page)/[detailUrl]/_components/client/quizAnswerForm/quizFormId";
import { MultipleChoiceContent } from "@/app/(page)/quiz/_api/types";
import useQuizFormAction from "@/app/(page)/quiz/_helper/useQuizFormAction";
import GroupCheckBoxProvider from "@/app/_shared/ui/used/checkbox/group/provider/groupCheckBoxProvider";
import React from "react";

// 퀴즈 답안 입력 폼
function QuizAnswerForm({
    quizId,
    quizType,
    quizMultipleChoiceContents,
}: {
    quizId: number;
    quizType: string;
    quizMultipleChoiceContents: MultipleChoiceContent[];
}) {
    const { isAnswerCheck, formAction } =
        useQuizFormAction();

    return (
        <GroupCheckBoxProvider>
            <QuizAnswerFormContainer action={formAction}>
                <fieldset>
                    {/*퀴즈 ID*/}
                    <QuizFormId quizId={quizId} />
                    {/*퀴즈 답안*/}
                    <QuizAnswers
                        quizType={quizType}
                        quizMultipleChoiceContents={
                            quizMultipleChoiceContents
                        }
                    />
                </fieldset>
                {/*채점 버튼*/}
                <CheckButtonContainer>
                    {isAnswerCheck ? (
                        <AfterCheckButtons />
                    ) : (
                        <BeforeCheckButton />
                    )}
                </CheckButtonContainer>
            </QuizAnswerFormContainer>
        </GroupCheckBoxProvider>
    );
}

export default QuizAnswerForm;
