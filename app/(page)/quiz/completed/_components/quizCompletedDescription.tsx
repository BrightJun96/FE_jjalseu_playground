import React from 'react';

// 퀴즈 완료 설명
function QuizCompletedDescription({
    description
                                  }:{
    description: string
}) {
    return (
        <p>
            {description}
        </p>
    );
}

export default QuizCompletedDescription;
