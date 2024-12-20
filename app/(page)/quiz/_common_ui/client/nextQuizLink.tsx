"use client"

import useRandomUrl from "@/app/(page)/quiz/_helper/useRandomUrl";
import PrimaryLink from "@/app/_components/link/primaryLink";
import PATHS from "@/app/_constants/paths";
import React from 'react';

// 다음 문제 링크
function NextQuizLink() {

    const randomUrl =useRandomUrl()

    return (
        <PrimaryLink href={`/${PATHS.QUIZ_RANDOM(randomUrl)}`}>
            다음 문제
        </PrimaryLink>
    );
}

export default NextQuizLink;
