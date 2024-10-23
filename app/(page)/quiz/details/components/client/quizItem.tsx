"use client"

import React, {useEffect, useState} from 'react';
import {QuizListResponse} from "@/app/services/quiz/types";
import {getQuizDataCookie,  setQuizDataCookie} from "@/app/(page)/quiz/action";
import useQueryString from "@/app/_utils/hooks/useQueryString";
import QuizDetails from "@/app/(page)/quiz/details/components/client/quizDetails";
import {IResponse} from "@/app/services/network.types";


const QuizItem = ({
                      quizListResponse
                  }:{
    quizListResponse:IResponse<QuizListResponse>|null
}) => {
// const quizRef = useRef<QuizListResponse|null>(null)
    const [quizData,setQuizData] = useState<QuizListResponse|null>(null)
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

        async function initDataConfig(){
            const quizDataCookie = await  getQuizDataCookie()
            if(!quizDataCookie && quizListResponse){
                localStorage.setItem("quizData", JSON.stringify(quizListResponse.data))
                await setQuizDataCookie()


            }

            const data = localStorage.getItem("quizData")?
                JSON.parse(localStorage.getItem("quizData") as string):null

            setQuizData(data)


        }

        initDataConfig()

        // localStorage 비우기 및 쿠키 비우기
        // return () => {
        //     localStorage.removeItem("quizData")
        //     removeQuizDataCookie()
        //
        // }

    }, []);






    return (
        quizData?<QuizDetails
            quizData={quizData}
        />:<div>데이터없음</div>
    );
};

export default QuizItem;
