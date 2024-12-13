"use client"

import {QuizHelper} from "@/app/(page)/quiz/(page)/[detailUrl]/_helper/QuizHelper";
import {QuizLogicHandler} from "@/app/(page)/quiz/(page)/[detailUrl]/_helper/QuizLogicHandler";
import {QuizNavigator} from "@/app/(page)/quiz/(page)/[detailUrl]/_helper/QuizNavigator";
import {QuizStorageManager} from "@/app/(page)/quiz/(page)/[detailUrl]/_helper/QuizStoreManager";
import QuizHelperContext from "@/app/_context/quizHelperContext";
import {StorageAdapter} from "@/app/_utils/StorageService";
import {useRouter} from "next/navigation";
import React, {useEffect} from 'react';

// 퀴즈 헬퍼 프로바이더(클라이언트용)
function QuizHelperProvider({children}:{children:React.ReactNode}) {

    const router = useRouter();

    const [quizHelper, setQuizHelper] = React.useState<QuizHelper | null>(null);

    useEffect(() => {
        const storageManager = new QuizStorageManager(new StorageAdapter(localStorage));
        const navigator = new QuizNavigator({
            navigate: (url: string) => router.push(url),
            prefetch: (url: string) => router.prefetch(url)
        });
        const logicHandler = new QuizLogicHandler(storageManager);
        const quizHelper =   new QuizHelper(storageManager, navigator, logicHandler)
        setQuizHelper(quizHelper);
    }, []);


    return (
        <QuizHelperContext.Provider value={quizHelper}>{ children}</QuizHelperContext.Provider>
    );
}

export default QuizHelperProvider;
