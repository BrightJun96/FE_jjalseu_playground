import React from 'react';

// 퀴즈 해설 컨텐츠
function QuizExplanationContent({
                                        content
                                }:{
    content:string
}) {
    return (
        <div
            className={"prose"}
            dangerouslySetInnerHTML={{__html:content}}
        />
    );
}

export default QuizExplanationContent;
