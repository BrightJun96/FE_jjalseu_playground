import PATHS from "@/app/_shared/constants/paths";
import PrimaryLink from "@/app/_shared/ui/used/link/primaryLink";
import React from "react";

// 메인 링크
function HomeLink() {
    return (
        <PrimaryLink
            tabIndex={1}
            className={"!w-[130px] !h-[42px]"}
            href={`/${PATHS.QUIZ}`}
        >
            퀴즈 풀어보기
        </PrimaryLink>
    );
}

export default HomeLink;
