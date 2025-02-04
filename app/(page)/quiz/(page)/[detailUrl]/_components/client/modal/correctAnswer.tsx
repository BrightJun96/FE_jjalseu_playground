import { CheckAnswerResponse } from "@/app/_entities/quiz";
import React from "react";

// 정답
function CorrectAnswer({
    answer,
}: {
    answer: CheckAnswerResponse["answer"];
}) {
    return (
        <p className={"text-title3Bold"}>정답 : {answer}</p>
    );
}

export default CorrectAnswer;
