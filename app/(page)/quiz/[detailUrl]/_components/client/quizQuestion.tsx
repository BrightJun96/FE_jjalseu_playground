import React from 'react';

// 퀴즈 문제
function QuizQuestion({question}:{question:string}) {
    return (
        <p
            className={"text-menu"}>{question}</p>
    );
}

export default QuizQuestion;
