"use server"

import networkInstance from "@/app/services/network.config";
import {QuizForm, QuizListResponse} from "@/app/services/quiz/types";

// 퀴즈 목록 가져오기
export async function fetchQuizList(){
    return networkInstance<QuizListResponse>("quiz/list",{
        method:"GET",
        queryString:{
            count:"10",
            lang:"javascript",
            field:"frontend"
        },
        // cache:"no-cache"
    })
}

// 퀴즈 등록
export async function fetchRegisterQuiz(quizForm:QuizForm){
    return networkInstance("quiz/register",{
        method:"POST",
        body:JSON.stringify(quizForm)
    })
}
