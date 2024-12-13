import PrimaryLink from "@/app/_components/link/primaryLink";
import React from 'react';

// 퀴즈 완료 링크
function QuizCompletedLink() {
    return (
        <PrimaryLink href={"/quiz"}>
            다른 퀴즈 풀러가기
        </PrimaryLink>
    );
}

export default QuizCompletedLink;
