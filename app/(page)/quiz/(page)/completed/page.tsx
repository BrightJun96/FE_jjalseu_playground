import QuizCompletedDescription from "@/app/(page)/quiz/(page)/completed/_components/quizCompletedDescription";
import QuizCompletedEmoji from "@/app/(page)/quiz/(page)/completed/_components/quizCompletedEmoji";
import QuizCompletedLink from "@/app/(page)/quiz/(page)/completed/_components/quizCompletedLink";
import QuizCompletedManager from "@/app/(page)/quiz/(page)/completed/_components/quizCompletedManager";
import QuizCompletedTitle from "@/app/(page)/quiz/(page)/completed/_components/quizCompletedTitle";
import React from 'react';

export const dynamic = 'force-static'

// 퀴즈 완료 페이지
function Page() {

    return (
        <QuizCompletedManager>
            {/*타이틀*/}
            <QuizCompletedTitle
            >
                퀴즈 완료
            </QuizCompletedTitle>
            {/*이모지*/}
            <QuizCompletedEmoji>
                🥳
            </QuizCompletedEmoji>
            {/*축하 메시지*/}
            <QuizCompletedDescription>
                축하드립니다!<br/>
                모든 퀴즈를 다 푸셨습니다.
            </QuizCompletedDescription>
            {/*퀴즈 완료 링크*/}
            <QuizCompletedLink/>
        </QuizCompletedManager>
    );
}

export default Page;
