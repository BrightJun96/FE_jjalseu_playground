"use client";

import useQuizStorageContext from "@/app/(page)/quiz/_context/_hook/useQuizStorageContext";
import useQuizStorageHelperContext from "@/app/(page)/quiz/_context/_hook/useQuizStorageHelperContext";
import { QuizDetailURLResponseDto } from "@/app/_shared/api/generate.api.types";
import { useParams, useRouter } from "next/navigation";
import React, { useEffect } from "react";

// 퀴즈 상세 페이지 로직 관리
function QuizDetailsManager({
    children,
}: {
    children: React.ReactNode;
}) {
    const router = useRouter();
    const { detailUrl } = useParams();
    const quizStorageHelper = useQuizStorageHelperContext();
    const quizStorage = useQuizStorageContext();
    const allQuizUrls = quizStorage?.getQuizUrlList();

    useEffect(
        () => {
            // 모든 퀴즈를 푼 경우, 퀴즈 완료 페이지로 이동
            if (quizStorageHelper) {
                quizStorageHelper.redirectToCompletionPageIfAllSolved(
                    router.push,
                );
            }

            return () => {
                // 현재 URL 벗어날 시, 푼 문제 리스트에 저장
                if (quizStorageHelper) {
                    quizStorageHelper.saveSolvedQuiz({
                        detailUrl,
                    } as QuizDetailURLResponseDto);
                }
            };
        },
        // 퀴즈 URL 목록을 감지해야함.
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [detailUrl, allQuizUrls, quizStorageHelper],
    );
    return (
        <article aria-label={"퀴즈 상세 페이지"}>
            {children}
        </article>
    );
}

export default QuizDetailsManager;
