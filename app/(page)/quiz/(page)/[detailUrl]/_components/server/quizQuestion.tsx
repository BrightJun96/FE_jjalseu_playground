"use server"

import React from 'react';

// 퀴즈 문제
function QuizQuestion({question}:{question:string}) {
    return (
        <h2
            className={"text-menu"}>{question}</h2>
    );
}

export default QuizQuestion;
