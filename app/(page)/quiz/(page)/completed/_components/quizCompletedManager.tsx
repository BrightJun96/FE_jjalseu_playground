"use client";

import useQuizStorageContext from "@/app/(page)/quiz/_context/_hook/useQuizStorageContext";
import React, { useEffect } from "react";

// 퀴즈 완료 로직 관리
// 페이지 진입시 퀴즈 스토리지를 비움
function QuizCompletedManager({
    children,
}: {
    children: React.ReactNode;
}) {
    const quizStorage = useQuizStorageContext();

    useEffect(() => {
        quizStorage?.clearStorage();
    }, [quizStorage]);

    return (
        <section
            aria-label={"퀴즈 완료 페이지"}
            className={
                "w-full flex flex-col gap-3 lg:mt-[50px]"
            }
        >
            {children}
        </section>
    );
}

export default QuizCompletedManager;
