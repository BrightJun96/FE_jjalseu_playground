import { CheckAnswerResponse } from "@/app/_entities/quiz";
import React from "react";

// 사용자 정답
function UserAnswer({
    userAnswer,
}: {
    userAnswer: CheckAnswerResponse["userAnswer"];
}) {
    return (
        <p className={"text-title3Bold"}>
            사용자 답안 :{userAnswer}
        </p>
    );
}

export default UserAnswer;
