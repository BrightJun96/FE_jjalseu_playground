// 퀴즈 페이지에서 사용할 헬퍼 함수들
import {ArrayUtils} from "@/app/_utils/function/ArrayUtils";
import {StorageService} from "@/app/_utils/StorageService";
import {clientQuizApi} from "@/app/services/quiz/client/api.instance";

class QuizHelper{

    constructor() {
        this.startQuiz = this.startQuiz.bind(this)
    }

    // 배열에서 랜덤한 요소를 반환
    pickRandomOne<T>(arr: T[]): T  {
            if (arr.length === 0) {
                throw new Error("배열이 비어있습니다. 랜덤 선택이 불가능합니다.");
            }

        return ArrayUtils.pickRandomOne(arr);
    }

    // 퀴즈 시작하기
    async startQuiz(storage:StorageService,navigate:(path:string) => void){
        try {
            // 퀴즈 URL 목록 조회
            const {data} = await clientQuizApi.fetchQuizDetailUrlList()

            // 퀴즈 URL 목록을 localStorage에 저장
            storage.save("quizUrlList", JSON.stringify(data))

            // 데이터 중 랜덤으로 하나뽑기
            const randomOne = this.pickRandomOne<string>(data)

            // 랜덤으로 뽑은 퀴즈 URL로 이동
            navigate(`/quiz/${randomOne}`)

        }
        catch (error){
            console.error(error)
        }

    }
}

const quizHelper = new QuizHelper();

export default quizHelper;
