
// 퀴즈 목록
import networkInstance from "@/app/services/network.config";

export async function fetchQuizList(){
    return networkInstance("quiz/list",{
        method:"GET",
        queryString:{
            count:"10",
            lang:"JAVASCRIPT",
            field:"FRONTEND"
        },
        // cache:"no-cache"
    })
}
