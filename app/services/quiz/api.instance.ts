"use server"

import networkInstance from "@/app/services/network.config";
import {QuizForm} from "@/app/services/quiz/types";

// 퀴즈 목록 가져오기
export async function fetchQuizList(){
    return networkInstance("quiz/list",{
        method:"GET",
        queryString:{
            count:"10",
            lang:"JAVASCRIPT",
            field:"FRONTEND"
        },
        // cache:"no-cache"
    })
}

// 퀴즈 등록
export async function fetchRegisterQuiz(quizForm:QuizForm){
    console.log("quizForm",quizForm)
    return networkInstance("quiz/register",{
        method:"POST",
        body:JSON.stringify(quizForm)
    })
}
