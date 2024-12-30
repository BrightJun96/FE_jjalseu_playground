import PATHS from "@/app/_shared/constants/paths";
import PrimaryLink from "@/app/_shared/ui/used/link/primaryLink";
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
