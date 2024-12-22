import GroupCheckBox from "@/app/_components/used/checkbox/group/groupCheckBox";
import { primitive } from "@/app/_types/primitive";
import { MultipleChoiceContent } from "@/app/services/quiz/types";
import React from "react";

// 객관식 문제 답안들
function MultipleChoiceAnswers({
    quizMultipleChoiceContents,
    setUserAnswer,
    tabIndex = 0,
}: {
    quizMultipleChoiceContents: MultipleChoiceContent[];
    setUserAnswer: React.Dispatch<
        React.SetStateAction<number[]>
    >;
    tabIndex?: number;
}) {
    const processedMultipleChoiceContents =
        quizMultipleChoiceContents.map((v) => ({
            label: `${v.content}`,
            value: v.number,
        }));

    // 객관식 문제 답안 선택 핸들러
    function groupCheckHandler(values: primitive[]) {
        setUserAnswer(values as number[]);
    }

    return (
        <GroupCheckBox
            tabIndex={tabIndex}
            options={processedMultipleChoiceContents}
            direction={"col"}
            isMultiSelect={false}
            onChange={groupCheckHandler}
        />
    );
}

export default MultipleChoiceAnswers;
