"use client";

import useRandomUrl from "@/app/(page)/quiz/_helper/useRandomUrl";
import PATHS from "@/app/_shared/constants/paths";
import PrimaryLink from "@/app/_shared/ui/used/link/primaryLink";
import React from "react";

// 다음 문제 링크
function NextQuizLink() {
    const randomUrl = useRandomUrl();

    return (
        <PrimaryLink
            tabIndex={2}
            href={`/${PATHS.QUIZ_RANDOM(randomUrl)}`}
        >
            다음 문제
        </PrimaryLink>
    );
}

export default NextQuizLink;
