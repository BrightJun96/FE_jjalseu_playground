"use client";

import useQuizStorageHelperContext from "@/app/(page)/quiz/_context/_hook/useQuizStorageHelperContext";
import PATHS from "@/app/_shared/constants/paths";
import PrimaryButton from "@/app/_shared/ui/used/button/primaryButton";
import { useParams, useRouter } from "next/navigation";
import React from "react";

// 다음 문제 링크
function NextQuizButton() {
    const { detailUrl } = useParams();
    const quizStorageHelper = useQuizStorageHelperContext();
    const router = useRouter();
    function nextQuiz() {
        if (quizStorageHelper) {
            // 퀴즈 다 풀면 완료 페이지 이동
            if (quizStorageHelper.isAllQuizSolved()) {
                router.push(`/${PATHS.QUIZ_COMPLETED}`);
                return;
            }

            // 퀴즈 저장
            quizStorageHelper.saveSolvedQuiz(
                detailUrl as string,
            );

            // 퀴즈 중 랜덤 추출
            const randomQuiz =
                quizStorageHelper.getRandomOneFromUnsolvedQuiz();

            router.push(randomQuiz);
        }
    }
    return (
        <PrimaryButton
            color={"primary"}
            onClick={nextQuiz}
        >
            다음 문제
        </PrimaryButton>
    );
}

export default NextQuizButton;
