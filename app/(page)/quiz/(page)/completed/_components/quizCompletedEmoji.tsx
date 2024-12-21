import React from "react";

function QuizCompletedEmoji({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <span
            className={
                "text-[120px] text-center"
            }>
            {children}
        </span>
    );
}

export default QuizCompletedEmoji;
