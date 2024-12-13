"use client"

import {QuizHelper} from "@/app/(page)/quiz/(page)/[detailUrl]/_helper/QuizHelper";
import {QuizNavigator} from "@/app/(page)/quiz/(page)/[detailUrl]/_helper/QuizNavigator";
import useQuizStorageContext from "@/app/(page)/quiz/_context/_hook/useQuizStorageContext";
import QuizHelperContext from "@/app/(page)/quiz/_context/quizHelperContext";
import {useRouter} from "next/navigation";
import React, {useEffect} from 'react';

// 퀴즈 헬퍼 프로바이더(클라이언트용)
function QuizHelperProvider({children}:{children:React.ReactNode}) {

    const router = useRouter();
    const quizStorage = useQuizStorageContext()
    const [quizHelper, setQuizHelper] = React.useState<QuizHelper | null>(null);

    useEffect(() => {
        if(quizStorage) {
            const navigator = new QuizNavigator({
                navigate: (url: string) => router.push(url),
            });
            const quizHelper = new QuizHelper(quizStorage, navigator)
            setQuizHelper(quizHelper);
        }
    }, [quizStorage]);


    return (
        <QuizHelperContext.Provider
            value={quizHelper}>
            {children}
        </QuizHelperContext.Provider>
    );
}

export default QuizHelperProvider;
