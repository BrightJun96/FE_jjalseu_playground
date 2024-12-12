import GroupCheckBox from "@/app/_components/checkbox/groupCheckBox";
import {MultipleChoiceContent} from "@/app/services/quiz/types";
import React from 'react';

// 객관식 문제 답안들
function MultipleChoiceAnswers({
                                   quizMultipleChoiceContents,
                                setUserAnswer
}:{
    quizMultipleChoiceContents:MultipleChoiceContent[],
    setUserAnswer: React.Dispatch<React.SetStateAction<number[]>>
}) {

    const processedMultipleChoiceContents =
        quizMultipleChoiceContents
            .map((v) => ({label: `${v.content}`, value: v.number}))


    return (
        <GroupCheckBox
            options={processedMultipleChoiceContents}
            direction={"col"}
            isMultiSelect={false}
            onChange={(value) => setUserAnswer(value as number[])}
        />
    );
}

export default MultipleChoiceAnswers;
