import networkInstance from "@/app/services/network.config";
import {QuizForm, QuizItem, QuizListResponse} from "@/app/services/quiz/types";

// 퀴즈 관리자 API
class AdminQuizApi {

    // 퀴즈 목록 조회
    async fetchQuizList(){
        return networkInstance<QuizListResponse>("quiz/list",{
            method:"GET",
            queryString:{
                count:"10",
                lang:"ALL",
                field:"FRONTEND"
            },
        })
    }

    // 퀴즈 상세 조회
     async  fetchQuizDetailPk(quizId:number) {
         return networkInstance<QuizItem>(`quiz/${quizId}`, {
             method: "GET"
         })
     }

     // 퀴즈 등록
    async fetchRegisterQuiz(quizForm:QuizForm){
        return networkInstance("quiz/register",{
            method:"POST",
            body:JSON.stringify(quizForm)
        })
    }
}
const adminQuizApi = new AdminQuizApi();

export default adminQuizApi;
