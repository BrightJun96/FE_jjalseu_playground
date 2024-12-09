"use client"

import PrimaryButton from "@/app/_components/button/primaryButton";
import useQuizHelperContext from "@/app/_context/useQuizContext";
import Link from "next/link";
import React from 'react';

export const dynamic = 'force-static'

// @question 페이지 자체를 클라이언트 컴포넌트로 만드는 거랑 서버컴포넌트로 만드는 것이랑 차이?
// 퀴즈를 다 풀었을 때, 페이지
function Page() {

    const quizHelper = useQuizHelperContext()
    return (
        <>
            <h1>퀴즈 완료</h1>
            <p>축하드립니다. 모든 퀴즈를 다 푸셨습니다.</p>
            <Link href={"/quiz"}>
                <PrimaryButton
                    text={"다른 퀴즈 풀러가기"}
                    color={"primary"}
                    onClick={() => quizHelper?.clearQuizStorage()  }
                />
            </Link>
        </>
    );
}

export default Page;
