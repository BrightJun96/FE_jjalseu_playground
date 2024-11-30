import {ArrayUtils} from "@/app/_utils/function/ArrayUtils";
import {QUIZ_URL_LIST, SOLVED_QUIZ_LIST, StorageService} from "@/app/_utils/StorageService";
import quizApiHandler from "@/app/services/quiz/QuizApiHandler";

// 퀴즈 페이지에서 사용할 헬퍼 함수들
class QuizHelper{

    constructor() {
        this.startQuiz = this.startQuiz.bind(this)
    }


    // 퀴즈 URL 목록 조회 후 저장
    async saveQuizUrlList(storage:StorageService){
        try {
            // 퀴즈 URL 목록 조회
            const {data} = await quizApiHandler.fetchQuizDetailUrlList()

            // 퀴즈 URL 목록을 localStorage에 저장
            storage.save(QUIZ_URL_LIST, JSON.stringify(data))
        }
        catch (error){
            console.error(error)
        }
    }


    // 퀴즈 시작하기
    async startQuiz(storage:StorageService,navigate:(path:string) => void){

            // 퀴즈 URL 목록 조회 후 저장
            await this.saveQuizUrlList(storage)

            // 데이터 중 랜덤으로 하나뽑기
            const randomOne = ArrayUtils.pickRandomOne<string>(this.getQuizUrlList(storage))

            // 랜덤으로 뽑은 퀴즈 URL로 이동
            navigate(`/quiz/${randomOne}`)

    }

    // 푼 문제 저장, 기존에 푼 문제가 있다면 추가,없다면 새로 저장
    storeSolvedQuiz(quiz:string,storage:StorageService){

        const solvedQuizList= storage.get(SOLVED_QUIZ_LIST)

        if(solvedQuizList){
            const solvedQuizListArray = JSON.parse(solvedQuizList)
            solvedQuizListArray.push(quiz)
            storage.save(SOLVED_QUIZ_LIST,JSON.stringify(ArrayUtils.removeDuplicate(solvedQuizListArray)))
        }else{
            storage.save(SOLVED_QUIZ_LIST,JSON.stringify([quiz]))
        }

    }



    // 다음 문제로 이동
    async moveToNextQuiz(storage:StorageService,navigate:(path:string) => void,currentQuiz:string){
        try {
            // 퀴즈 URL 없을 때 , 퀴즈 시작페이지로 이동
            await this.moveToQuizStartPage(storage, navigate)

            // 현재 문제 푼 문제로 저장
            this.storeSolvedQuiz(currentQuiz,storage)

            // 퀴즈가 모두 풀렸다면 퀴즈 완료 페이지로 이동
            if(this.isAllQuizSolved(storage)) navigate("/quiz/completed")

            // 데이터 중 랜덤으로 하나뽑기
            const randomOne = ArrayUtils.pickRandomOne<string>(this.getUnsolvedQuiz(storage))

            // 랜덤으로 뽑은 퀴즈 URL로 이동
            navigate(`/quiz/${randomOne}`)

        }
        catch (error){
            console.error(error)
        }
    }

    // 퀴즈 URL 목록이 없다면 퀴즈 시작페이지로 돌아가기
    async moveToQuizStartPage(storage:StorageService,navigate:(path:string) => void){
            // 퀴즈 URL 목록 조회
            const quizUrlList = storage.get(QUIZ_URL_LIST)
            // 퀴즈 URL 목록이 없다면 퀴즈 시작페이지로 이동
            if (!quizUrlList) {
                navigate("/quiz")
            }
    }

    // 푼 문제, 스토리지로부터 조회
    getSolvedQuiz(storage:StorageService):string[] {
        return storage.getParsed<string[]>(SOLVED_QUIZ_LIST)??[]
    }

    // 모든 퀴즈 URL 목록 조회
    getQuizUrlList(storage:StorageService):string[]{
        return storage.getParsed<string[]>(QUIZ_URL_LIST)??[]
    }

    // 모든 퀴즈가 풀렸는지 확인
    isAllQuizSolved(storage:StorageService):boolean{
        const quizUrlList = storage.getParsed<string[]>(QUIZ_URL_LIST)
        const solvedQuiz = storage.getParsed<string[]>(SOLVED_QUIZ_LIST)
        return ArrayUtils.isEqualLength<string>(quizUrlList??[],solvedQuiz??[])
    }

    // 안 푼 문제 조회
    getUnsolvedQuiz(storage:StorageService):string[]{
        const quizUrlList = this.getQuizUrlList(storage)
        const solvedQuiz = this.getSolvedQuiz(storage)
        return ArrayUtils.getDifference<string>(quizUrlList,solvedQuiz)
    }


    // 퀴즈 관련 스토리지 초기화
    clearQuizStorage(storage:StorageService){
        storage.remove(SOLVED_QUIZ_LIST)
        storage.remove(QUIZ_URL_LIST)
    }
}

const quizHelper = new QuizHelper();

export default quizHelper;
