import QuizIntroSection from "@/app/(page)/quiz/_components/quizIntroSection";
import QuizOptionForm from "@/app/(page)/quiz/_components/quizOptionForm/quizOptionForm";
import QuizStartSubTitle from "@/app/(page)/quiz/_components/quizStartSubTitle";
import QuizStartTitle from "@/app/(page)/quiz/_components/quizStartTitle";
import {Metadata} from "next";
import React from 'react';

export const dynamic = 'force-static'

export const metadata: Metadata = {
    title: '퀴즈 시작하기',
    description: '퀴즈를 통해 개발 지식을 테스트해 보세요.' +
        '프론트 엔드, 백엔드, 데이터베이스, 네트워크, 알고리즘 등 다양한 주제의 퀴즈를 풀어보세요.',

}

// 퀴즈 시작하기 페이지
async function Page (){
    return (
            <>
                {/*퀴즈 시작하기 페이지의 설명을 나타내는 컴포넌트*/}
                <QuizIntroSection>
                    {/*타이틀*/}
                    <QuizStartTitle
                        title={"퀴즈 시작하기"}
                    />
                    {/*설명*/}
                    <QuizStartSubTitle
                        description={"퀴즈를 통해 개발 지식을 테스트해 보세요!"}
                    />
                </QuizIntroSection>
                {/*퀴즈 폼*/}
                <QuizOptionForm/>
            </>

    );
}

export default Page;
