"use server"

import networkInstance from "@/app/services/network.config";
import {QuizForm, QuizItem, QuizListResponse} from "@/app/services/quiz/types";

// 퀴즈 목록 조회
export async function fetchQuizList(){
    return networkInstance<QuizListResponse>("quiz/list",{
        method:"GET",
        queryString:{
            count:"10",
            lang:"ALL",
            field:"FRONTEND"
        },
    })
}

// 퀴즈 단일 조회
export async function fetchQuizDetail(){
    return networkInstance<QuizItem>(`quiz/item`,{
        method:"GET",
        queryString:{
            field:"FRONTEND",
            lang:"ALL",
        }
    })
}

// 퀴즈 등록
export async function fetchRegisterQuiz(quizForm:QuizForm){
    return networkInstance("quiz/register",{
        method:"POST",
        body:JSON.stringify(quizForm)
    })
}
