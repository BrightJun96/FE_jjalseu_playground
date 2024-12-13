import QuizCompletedDescription from "@/app/(page)/quiz/(page)/completed/_components/quizCompletedDescription";
import QuizCompletedLink from "@/app/(page)/quiz/(page)/completed/_components/quizCompletedLink";
import QuizCompletedManager from "@/app/(page)/quiz/(page)/completed/_components/quizCompletedManager";
import QuizCompletedTitle from "@/app/(page)/quiz/(page)/completed/_components/quizCompletedTitle";
import React from 'react';

export const dynamic = 'force-static'

// 퀴즈 완료 페이지
function Page() {

    return (
        <QuizCompletedManager>
            <QuizCompletedTitle
                title={"퀴즈 완료"}
            />
            <QuizCompletedDescription
                description={"축하드립니다. 모든 퀴즈를 다 푸셨습니다."}
            />
            <QuizCompletedLink/>
        </QuizCompletedManager>
    );
}

export default Page;
