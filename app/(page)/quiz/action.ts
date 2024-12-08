"use server"

import {quizApiHandler} from "@/app/services/quiz/QuizApiHandler";
import {CheckAnswerResponse} from "@/app/services/quiz/types";

/**
 * @description
 * QUIZ API를 서버 액션으로 가져오기 위한 액션 함수
 */

// 퀴즈 URL 목록
export async function getQuizDetailUrlListAction(){
   return await quizApiHandler.fetchQuizDetailUrlList()
}

interface CheckAnswerResponseExtends extends CheckAnswerResponse{
    check:boolean
}

// 퀴즈 정답 확인
export async function checkAnswerAction(prevState:CheckAnswerResponseExtends,formData:FormData){


   const options =  formData.getAll("options").map((option) => Number(option))

    const checkAnswer = {
        quizId:Number(formData.get("quizId")),
        userAnswer:options
    }


    const {data:checkAnswerData}  = await quizApiHandler.fetchCheckAnswer(checkAnswer)


    return {...checkAnswerData,check:true}
}

