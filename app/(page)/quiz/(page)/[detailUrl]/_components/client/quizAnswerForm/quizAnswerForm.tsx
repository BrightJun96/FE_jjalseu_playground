"use client";

import AfterCheckButtons from "@/app/(page)/quiz/(page)/[detailUrl]/_components/client/quizAnswerForm/afterCheckButtons/afterCheckButtons";
import BeforeCheckButton from "@/app/(page)/quiz/(page)/[detailUrl]/_components/client/quizAnswerForm/beforeCheckButton";
import CheckButtonContainer from "@/app/(page)/quiz/(page)/[detailUrl]/_components/client/quizAnswerForm/checkButtonContainer";
import QuizAnswerFormContainer from "@/app/(page)/quiz/(page)/[detailUrl]/_components/client/quizAnswerForm/quizAnswerFormContainer";
import QuizAnswers from "@/app/(page)/quiz/(page)/[detailUrl]/_components/client/quizAnswerForm/quizAnswers";
import QuizFormId from "@/app/(page)/quiz/(page)/[detailUrl]/_components/client/quizAnswerForm/quizFormId";
import useAlertVisibleHandle from "@/app/(page)/quiz/(page)/[detailUrl]/_components/client/quizAnswerForm/useAlertVisibleHandle";
import useQuizFormAction from "@/app/(page)/quiz/_helper/useQuizFormAction";
import { GetQuizMultipleChoiceSharedDto } from "@/app/_shared/api/generate.api.types";
import Alert from "@/app/_shared/ui/used/alert/alert";
import GroupCheckBoxProvider from "@/app/_shared/ui/used/checkbox/group/provider/groupCheckBoxProvider";
import React, { useEffect } from "react";

// 퀴즈 답안 입력 폼
function QuizAnswerForm({
    quizId,

    quizMultipleChoiceContents,
}: {
    quizId: number;

    quizMultipleChoiceContents: GetQuizMultipleChoiceSharedDto[];
}) {
    const { isAnswerCheck, formAction, isCorrect } =
        useQuizFormAction();

    const { isAlertVisible, alertVisibleHandle } =
        useAlertVisibleHandle();

    useEffect(() => {
        if (isAnswerCheck) {
            alertVisibleHandle();
        }
    }, [isAnswerCheck]);
    return (
        <GroupCheckBoxProvider>
            <QuizAnswerFormContainer action={formAction}>
                <fieldset>
                    {/*퀴즈 ID*/}
                    <QuizFormId quizId={quizId} />
                    {/*퀴즈 답안*/}
                    <QuizAnswers
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
            {/*정답/오답 알럿*/}
            {isAnswerCheck && isAlertVisible && (
                <Alert
                    color={isCorrect ? "success" : "danger"}
                    title={
                        isCorrect
                            ? "정답입니다!"
                            : "오답입니다."
                    }
                />
            )}
        </GroupCheckBoxProvider>
    );
}

export default QuizAnswerForm;
