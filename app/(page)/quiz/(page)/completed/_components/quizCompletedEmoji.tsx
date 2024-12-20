import React from "react";

function QuizCompletedEmoji({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <span
            aria-label={"이모티콘"}
            className={"text-[120px] text-center"}
        >
            {children}
        </span>
    );
}

export default QuizCompletedEmoji;
