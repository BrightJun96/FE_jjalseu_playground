import React from 'react';

// 퀴즈 내용
function QuizContent({
                        content
                     }:{content:string}) {
    return (
        <div
            className={"w-full"}
            dangerouslySetInnerHTML={{__html: content}}
        ></div>
    );
}

export default QuizContent;
