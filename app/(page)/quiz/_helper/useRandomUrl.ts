import useQuizStorageHelperContext from "@/app/(page)/quiz/_context/_hook/useQuizStorageHelperContext";
import {useEffect, useState} from 'react';

// 안푼 문제 중 랜덤 URL 생성
function useRandomUrl() {
    const [randomUrl,setRandomUrl] = useState<string>("")
    const quizHelper = useQuizStorageHelperContext()
    useEffect(() => {

        if(quizHelper){
            const url = quizHelper.getRandomOneFromUnsolvedQuiz()
                setRandomUrl(url)
        }


    }, [quizHelper]);
    return randomUrl
}

export default useRandomUrl;
