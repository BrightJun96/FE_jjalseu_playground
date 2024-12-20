import useQuizStorageHelperContext from "@/app/(page)/quiz/_context/_hook/useQuizStorageHelperContext";
import {useEffect, useState} from 'react';

// 안푼 문제 중 랜덤 URL 생성
function useRandomUrl() {
    const [randomUrl,setRandomUrl] = useState<string>("")
    const quizStorageHelper = useQuizStorageHelperContext()
    useEffect(() => {

        if(quizStorageHelper){
            const url = quizStorageHelper.getRandomOneFromUnsolvedQuiz()
                setRandomUrl(url)
        }

    }, [quizStorageHelper]);
    return randomUrl
}

export default useRandomUrl;
