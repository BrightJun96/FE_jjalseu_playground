import PrimaryLink from "@/app/_components/link/primaryLink";
import PATHS from "@/app/_constants/paths";
import React from 'react';

// 메인 링크
function HomeLink() {
    return (
        <PrimaryLink
            className={"!w-[130px] !h-[42px]"}
            href={`/${PATHS.QUIZ}`}
        >
            퀴즈 풀어보기
        </PrimaryLink>
    );
}

export default HomeLink;
