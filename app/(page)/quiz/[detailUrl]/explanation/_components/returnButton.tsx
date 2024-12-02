import PrimaryButton from "@/app/_components/button/primaryButton";
import Link from "next/link";
import React from 'react';

// 돌아가기 버튼
function ReturnButton({returnUrl}:{returnUrl:string}) {
    return (
        <Link href={`/quiz/${returnUrl}`}>
            <PrimaryButton text={"돌아가기"} color={"primary"}/>
        </Link>
    );
}

export default ReturnButton;
