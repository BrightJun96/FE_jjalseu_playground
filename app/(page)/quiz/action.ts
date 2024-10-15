"use server"

import {cookies} from "next/headers";

export async function getQuizDataCookie () {
    return cookies().get("quizData")?.value
}


export async function setQuizDataCookie(){
    cookies().set("quizData", "true")
}
