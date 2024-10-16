"use client"

import React, {useEffect, useRef, useState} from 'react';
import {QuizListResponse} from "@/app/services/quiz/types";
import {getQuizDataCookie, setQuizDataCookie} from "@/app/(page)/quiz/action";
import useQueryString from "@/app/_utils/hooks/useQueryString";
import QuizDetails from "@/app/(page)/quiz/details/components/client/quizDetails";



const QuizItem = ({
                      quizListResponse
                  }:{
    quizListResponse:QuizListResponse|null
}) => {
    // let quizData = null;
    const quizRef = useRef<QuizListResponse|null>(null)
//     const [quizData,setQuizData] = useState<QuizListResponse|null>(null)
    const [state,setState] = useState("")
    const {
        getQueryString
        ,setQueryString
    }= useQueryString()

    const order = getQueryString("order")

    // console.log("render")

    useEffect(() => {

        if(!order){
            setQueryString("order", "1")
        }
        console.log("effect")

        async function initDataConfig(){
            const quizDataCookie = await  getQuizDataCookie()
            if(!quizDataCookie){
                localStorage.setItem("quizData", JSON.stringify(quizListResponse))
                await setQuizDataCookie()

                return

            }



            // quizData = localStorage.getItem("quizData")?
            //     JSON.parse(localStorage.getItem("quizData") as string):null
            quizRef.current = localStorage.getItem("quizData")?
                    JSON.parse(localStorage.getItem("quizData") as string):null
            setState("rerender trigger")
            // console.log("quizData", quizData)
            // setQuizData(data)


        }

        initDataConfig()

    }, []);


    console.log(
        'quizRef.current', quizRef.current
    )




    return (
        quizRef.current?<QuizDetails
            quizData={quizRef.current}
        />:<div>데이터없음</div>
    );
};

export default QuizItem;
