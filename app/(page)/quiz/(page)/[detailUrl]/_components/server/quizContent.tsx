"use server"

import sanitize from "@/app/_utils/function/sanitize";
import React from 'react';
import 'prismjs/themes/prism.css';

// 퀴즈 내용
function QuizContent({
                        content
                     }:{content:string}) {

    return (
        <div
            className={"w-full"}
            dangerouslySetInnerHTML={{__html: sanitize(content)}}
        ></div>
    );
}

export default QuizContent;
