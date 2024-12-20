import {CheckAnswerResponse} from "@/app/services/quiz/types";
import React from 'react';

// 정답
function CorrectAnswer({
    answer
                       }:{
    answer:CheckAnswerResponse['answer']
}) {
    return (
        <p
        className={"text-title3Bold"}
        >
            정답 : {answer.join(",")}
        </p>
    );
}

export default CorrectAnswer;
