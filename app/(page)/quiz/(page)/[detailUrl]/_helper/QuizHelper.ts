import {QuizLogicHandler} from "@/app/(page)/quiz/(page)/[detailUrl]/_helper/QuizLogicHandler";
import {QuizNavigator} from "@/app/(page)/quiz/(page)/[detailUrl]/_helper/QuizNavigator";
import {QuizStorageManager} from "@/app/(page)/quiz/(page)/[detailUrl]/_helper/QuizStoreManager";
import {ArrayUtils} from "@/app/_utils/class/ArrayUtils";


export class QuizHelper {

    constructor(
        private storageManager: QuizStorageManager,
        private navigator: QuizNavigator,
        private logicHandler: QuizLogicHandler
    ) {}

    // 다음 문제 이동
    async moveToNextQuiz(currentQuiz: string) {
        this.logicHandler.addSolvedQuiz(currentQuiz);

        if (this.logicHandler.isAllQuizSolved()) {
            this.navigator.moveToCompletedPage();
        }
        // else {
        //     return this.getUnsolvedQuiz();
        // }
    }
    // 푼 문제 저장, 기존에 푼 문제가 있다면 추가,없다면 새로 저장
    saveSolvedQuiz(currentQuiz: string) {
        this.logicHandler.addSolvedQuiz(currentQuiz);
    }

    // 안 푼 문제 중 랜덤으로 하나 반환
     getRandomOneFromUnsolvedQuiz() {
        const unsolvedQuiz = this.logicHandler.getUnsolvedQuiz();
        return ArrayUtils.pickRandomOne<string>(unsolvedQuiz);
    }

    // 현재 경로가 solvedQuizList 스토리지에 있는 url에 있는 경우, 다른 문제로 이동
    redirectIfQuizSolved(currentQuizUrl:string){
        if(this.storageManager.getSolvedQuiz().includes(currentQuizUrl)){
            const unsolvedOne=  ArrayUtils.pickRandomOne<string>(this.logicHandler.getUnsolvedQuiz())
            this.navigator.moveToQuizPage(unsolvedOne);
        }
    }

    // 모든 퀴즈를 푼 경우, 퀴즈 완료 페이지로 이동
    redirectToCompletionPageIfAllSolved(){
        if(this.logicHandler.isAllQuizSolved()) {
            this.navigator.moveToCompletedPage();
        }
    }

    // 퀴즈 URL 저장
    saveQuizUrlList(urlList: string[]) {
        this.storageManager.saveQuizUrlList(urlList);
    }

    clearQuizStorage() {
        this.storageManager.clearStorage();
    }
}

