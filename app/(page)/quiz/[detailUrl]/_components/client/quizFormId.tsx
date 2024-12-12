import React from 'react';

// 퀴즈 ID (form server action)
function QuizFormId({
    quizId
                    }:{
    quizId:number
}) {
    return (
        <input
            type={"hidden"}
            name={"quizId"}
            value={quizId}
        />
    );
}

export default QuizFormId;
