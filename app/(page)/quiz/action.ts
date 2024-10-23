"use server"

import {cookies} from "next/headers";


// 쿠키에 quizData가 있는지 확인
export async function getQuizDataCookie () {
    return cookies().get("quizData")?.value
}


// 쿠키에 quizData가 있음을 저장
export async function setQuizDataCookie(){
    cookies().set("quizData", "true")
}

// 쿠키에 quizData를 삭제
export async function removeQuizDataCookie(){
    cookies().delete("quizData")
}
