"use server"

import {quizApiHandler} from "@/app/services/quiz/QuizApiHandler";

/**
 * @description
 * QUIZ API를 서버 액션으로 가져오기 위한 액션 함수
 */

export async function getQuizDetailUrlListAction(){
    await quizApiHandler.fetchQuizDetailUrlList()
}
