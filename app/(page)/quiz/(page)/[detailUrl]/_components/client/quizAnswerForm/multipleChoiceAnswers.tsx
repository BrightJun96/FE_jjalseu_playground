import { GetQuizMultipleChoiceSharedDto } from "@/app/_shared/api/generate.api.types";
import GroupCheckBox from "@/app/_shared/ui/used/checkbox/group/groupCheckBox";
import React from "react";

// 객관식 문제 답안들
function MultipleChoiceAnswers({
    quizMultipleChoiceContents,
    tabIndex = 0,
}: {
    quizMultipleChoiceContents: GetQuizMultipleChoiceSharedDto[];

    tabIndex?: number;
}) {
    const processedMultipleChoiceContents =
        quizMultipleChoiceContents.map((v) => ({
            label: `${v.content}`,
            value: v.id,
        }));

    return (
        <GroupCheckBox
            tabIndex={tabIndex}
            options={processedMultipleChoiceContents}
            direction={"col"}
            isMultiSelect={false}
        />
    );
}

export default MultipleChoiceAnswers;
