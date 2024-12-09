import QuizCompletedDescription from "@/app/(page)/quiz/completed/_components/quizCompletedDescription";
import QuizCompletedLink from "@/app/(page)/quiz/completed/_components/quizCompletedLink";
import QuizCompletedTitle from "@/app/(page)/quiz/completed/_components/quizCompletedTitle";
import React from 'react';

export const dynamic = 'force-static'

// @question 페이지 자체를 클라이언트 컴포넌트로 만드는 거랑 서버컴포넌트로 만드는 것이랑 차이?
// 퀴즈를 다 풀었을 때, 페이지
function Page() {

    return (
        <>
            <QuizCompletedTitle
                title={"퀴즈 완료"}
            />
            <QuizCompletedDescription
                description={"축하드립니다. 모든 퀴즈를 다 푸셨습니다."}
            />
            <QuizCompletedLink/>
        </>
    );
}

export default Page;
