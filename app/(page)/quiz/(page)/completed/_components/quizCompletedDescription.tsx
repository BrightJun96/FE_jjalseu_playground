import React from "react";

// 퀴즈 완료 설명
function QuizCompletedDescription({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <h2
            className={
                "text-title2Bold text-center"
            }>
            {children}
        </h2>
    );
}

export default QuizCompletedDescription;
