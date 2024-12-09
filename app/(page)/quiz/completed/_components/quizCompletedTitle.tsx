import React from 'react';

// 퀴즈 완료 타이틀
function QuizCompletedTitle({
    title
                            }:{
    title: string
}) {
    return (
        <h1>
            {title}
        </h1>
    );
}

export default QuizCompletedTitle;
