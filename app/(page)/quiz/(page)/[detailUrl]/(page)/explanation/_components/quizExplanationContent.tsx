import "prismjs/themes/prism.css";

import sanitize from "@/app/_utils/function/sanitize";
import React from "react";

// 퀴즈 해설 컨텐츠
function QuizExplanationContent({
    content,
}: {
    content: string;
}) {
    return (
        <div
            className={"prose w-full"}
            aria-live={"polite"}
            dangerouslySetInnerHTML={{
                __html: sanitize(content),
            }}
        />
    );
}

export default QuizExplanationContent;
