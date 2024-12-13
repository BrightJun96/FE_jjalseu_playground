import React from 'react';

// 퀴즈 해설 타이틀
function QuizExplanationTitle({
                                    title
                              }:{
    title:string
}) {
    return (
        <h1
            className={"text-title1"}
        >
            {title} 해설
        </h1>
    );
}

export default QuizExplanationTitle;
