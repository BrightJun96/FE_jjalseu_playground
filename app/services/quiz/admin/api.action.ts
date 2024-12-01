"use server"

// SERVER ACTION API

import AdminQuizApi from "@/app/services/quiz/admin/api.instance";
import {QuizForm} from "@/app/services/quiz/types";


export async function fetchRegisterQuiz(quizForm:QuizForm){
    return AdminQuizApi.fetchRegisterQuiz(quizForm)
}
