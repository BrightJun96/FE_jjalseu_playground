import PrimaryButton from "@/app/_components/button/primaryButton";
import Link from "next/link";
import React from 'react';

// 퀴즈를 다 풀었을 때, 페이지
function Page() {
    return (
        <div>
            <h1>퀴즈 완료</h1>
            <p>축하드립니다. 모든 퀴즈를 다 푸셨습니다.</p>
            <Link href={"/quiz"}>
                <PrimaryButton text={"다른 퀴즈 풀러가기"} color={"primary"}/>
            </Link>
        </div>
    );
}

export default Page;
