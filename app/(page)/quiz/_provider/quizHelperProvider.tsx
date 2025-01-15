"use client";

import useQuizStorageContext from "@/app/(page)/quiz/_context/_hook/useQuizStorageContext";
import quizStorageHelperContext from "@/app/(page)/quiz/_context/quizStorageHelperContext";
import { QuizStorageHelper } from "@/app/(page)/quiz/_helper/QuizStorageHelper";
import React, { useEffect } from "react";

// 퀴즈 헬퍼 프로바이더(클라이언트용)
function QuizStorageHelperProvider({
    children,
}: {
    children: React.ReactNode;
}) {
    const quizStorage = useQuizStorageContext();
    const [quizHelper, setQuizHelper] =
        React.useState<QuizStorageHelper | null>(null);

    useEffect(() => {
        if (quizStorage) {
            // 하나의 인스턴스를 전역적으로 사용
            // Context API를 통한 의존성 주입
            // 위와 같이 하지 않으면 quizStorageHelper를 사용할 때마다 새로운 인스턴스가 생성됨
            // 뿐만 아니라 해당 코드 또한 반복해서 작성해야 함
            const quizHelper = new QuizStorageHelper(
                quizStorage,
            );
            setQuizHelper(quizHelper);
        }
    }, [quizStorage]);

    return (
        <quizStorageHelperContext.Provider
            value={quizHelper}
        >
            {children}
        </quizStorageHelperContext.Provider>
    );
}

export default QuizStorageHelperProvider;
