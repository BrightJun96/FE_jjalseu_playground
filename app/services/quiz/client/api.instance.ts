import networkInstance from "@/app/services/network.config";
import {CheckAnswerResponse, QuizItem} from "@/app/services/quiz/types";


// 퀴즈 사용자 API
 class ClientQuizApi{
        // 퀴즈 정답 확인
       async fetchCheckAnswer(checkAnswer:{
         quizId:number,
         userAnswer:number[]
     }){
         return networkInstance<CheckAnswerResponse>(`quiz/check`,{
             method:"POST",
             body:JSON.stringify(checkAnswer)
         })
     }

      // 퀴즈 전체 PK 목록 조회
       async fetchQuizPkList(){
         return networkInstance<number[]>("quiz/list-pk",{
             method:"GET"
         })
     }

     // 퀴즈 상세 조회
     async  fetchQuizDetail(quizId:number) {
         return networkInstance<QuizItem>(`quiz/${quizId}`, {
             method: "GET"
         })
     }
 }

 export const clientQuizApi = new ClientQuizApi();


export default ClientQuizApi;









