"use server"

import networkInstance from "@/app/services/network.config";
import {CheckAnswerResponse, QuizForm, QuizItem, QuizListResponse} from "@/app/services/quiz/types";

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
export async function fetchQuizDetail({field,lang,excludeQuizId}:{
    field:string,
    lang:string,
    excludeQuizId?:string
}){
    return networkInstance<QuizItem>(`quiz/item`,{
        method:"GET",
        queryString:{
            field,
            lang,
    ...excludeQuizId && {
        excludeQuizId:excludeQuizId
    }
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


// 퀴즈 정답 확인
export async function fetchCheckAnswer(checkAnswer:{
    quizId:number,
    userAnswer:number[]
}){
    return networkInstance<CheckAnswerResponse>(`quiz/check`,{
        method:"POST",
        body:JSON.stringify(checkAnswer)
    })
}

// 퀴즈 전체 PK 목록 조회
export async function fetchQuizPkList(){
    return networkInstance<number[]>("quiz/list-pk",{
        method:"GET"
    })
}

