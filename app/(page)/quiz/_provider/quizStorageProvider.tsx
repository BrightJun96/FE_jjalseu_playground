"use client";

import {QuizStorageManager} from "@/app/(page)/quiz/(page)/[detailUrl]/_helper/QuizStoreManager";
import QuizStorageContext from "@/app/(page)/quiz/_context/quizStorageContext";
import {StorageAdapter} from "@/app/_utils/StorageService";
import React from 'react';

// 퀴즈 스토리지 프로바이더(클라이언트용)-브라우저 스토리지 API 사용하기 위함
function QuizStorageProvider({children}:{children:React.ReactNode}) {

    const [quizStorage, setQuizStorage] = React.useState<QuizStorageManager | null>(null);

    React.useEffect(() => {
        const ImplLocalStorage = new StorageAdapter(localStorage)
        const quizStorageManager = new QuizStorageManager(ImplLocalStorage);
        setQuizStorage(quizStorageManager);
    }, []);

    return (
        <QuizStorageContext.Provider
            value={quizStorage}
        >
            {children}
        </QuizStorageContext.Provider>
    );
}

export default QuizStorageProvider;
