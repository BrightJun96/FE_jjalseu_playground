import PrimaryLink from "@/app/_components/link/primaryLink";
import React from 'react';

// 돌아가기 버튼
function ReturnButton({returnUrl}:{returnUrl:string}) {
    return (
        <PrimaryLink
            href={`/quiz/${returnUrl}`}>
            돌아가기
        </PrimaryLink>
    );
}

export default ReturnButton;
