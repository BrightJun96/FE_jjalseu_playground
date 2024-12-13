import useQuizHelperContext from "@/app/(page)/quiz/_context/_hook/useQuizHelperContext";
import {useEffect, useState} from 'react';

// 안푼 문제 중 랜덤 URL 생성
function useRandomUrl() {
    const [randomUrl,setRandomUrl] = useState<string>("")
    const quizHelper = useQuizHelperContext()
    useEffect(() => {

            const url = quizHelper?.getRandomOneFromUnsolvedQuiz()
            if(url){
                setRandomUrl(url)

            }

    }, [quizHelper]);
    return randomUrl
}

export default useRandomUrl;
