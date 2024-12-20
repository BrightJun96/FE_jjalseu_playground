import PrimaryLink from "@/app/_components/link/primaryLink";
import PATHS from "@/app/_constants/paths";
import React from 'react';

// 돌아가기 버튼
function ReturnButton({returnUrl}:{returnUrl:string}) {
    return (
        <PrimaryLink
            color={"primarySecondary"}
            href={`/${PATHS.QUIZ_DETAIL(returnUrl)}`}>
            돌아가기
        </PrimaryLink>
    );
}

export default ReturnButton;
