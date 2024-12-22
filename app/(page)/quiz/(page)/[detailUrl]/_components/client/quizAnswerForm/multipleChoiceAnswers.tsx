import GroupCheckBox from "@/app/_components/used/checkbox/group/groupCheckBox";
import { MultipleChoiceContent } from "@/app/services/quiz/types";
import React from "react";

// 객관식 문제 답안들
function MultipleChoiceAnswers({
    quizMultipleChoiceContents,
    tabIndex = 0,
}: {
    quizMultipleChoiceContents: MultipleChoiceContent[];

    tabIndex?: number;
}) {
    const processedMultipleChoiceContents =
        quizMultipleChoiceContents.map((v) => ({
            label: `${v.content}`,
            value: v.number,
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
