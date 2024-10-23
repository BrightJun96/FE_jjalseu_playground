"use client"

import React from 'react';
import {MultipleChoiceContent} from "@/app/services/quiz/types";
import MultiChoiceContentsItem
    , {
    CheckHandlerProps
} from "@/app/(page)/quiz/details/components/client/multiChoiceContents/multiChoiceContentsItem";

function MultipleChoiceContents({
    multipleChoiceContents
                                }:{
    multipleChoiceContents:MultipleChoiceContent[]
}) {

    const [answerList,setAnswerList] = React.useState<number[]>([])


    function checkAnswer(value:CheckHandlerProps){

        if(value.checked) {
            setAnswerList(prev => Array.from(new Set([...prev, value.order])))
        }
        else{
            setAnswerList(prev => prev.filter(v=>v!==value.order))
        }
    }

    return (
        <ul>
            {multipleChoiceContents
                .map((v, i) =>
                        <li key={i}
                        >
                           <MultiChoiceContentsItem
                               onChange={(value) => checkAnswer(value)}
                               content={v}/>
                        </li>
            )}
        </ul>
    );
}

export default MultipleChoiceContents;
