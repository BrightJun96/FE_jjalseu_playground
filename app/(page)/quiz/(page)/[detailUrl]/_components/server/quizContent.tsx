"use server";

import CopyCode from "@/app/_shared/ui/used/copy-code";
import sanitize from "@/app/_shared/utils/function/sanitize";
import React from "react";
import "prismjs/themes/prism-tomorrow.css";

// 퀴즈 내용
function QuizContent({ content }: { content: string }) {
    return (
        <>
            <div
                className={"w-full"}
                aria-live={"polite"}
                dangerouslySetInnerHTML={{
                    __html: sanitize(content),
                }}
            ></div>
            <CopyCode />
        </>
    );
}

export default QuizContent;
