import { MultipleChoiceContent } from "@/app/(page)/quiz/_api/types";
import GroupCheckBox from "@/app/_shared/ui/used/checkbox/group/groupCheckBox";
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
