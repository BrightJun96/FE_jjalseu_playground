import PrimaryLink from "@/app/_components/link/primaryLink";
import PATHS from "@/app/_constants/paths";
import React from "react";

// 퀴즈 완료 링크
function QuizCompletedLink() {
    return (
        <PrimaryLink
            tabIndex={1}
            className={"h-[48px]"}
            href={`/${PATHS.QUIZ}`}
        >
            다른 퀴즈 풀러가기
        </PrimaryLink>
    );
}

export default QuizCompletedLink;
