import {QuizLogicHandler} from "@/app/(page)/quiz/[detailUrl]/_helper/QuizLogicHandler";
import {QuizNavigator} from "@/app/(page)/quiz/[detailUrl]/_helper/QuizNavigator";
import {QuizStorageManager} from "@/app/(page)/quiz/[detailUrl]/_helper/QuizStoreManager";
import {ArrayUtils} from "@/app/_utils/class/ArrayUtils";


export class QuizHelper {

    constructor(
        private storageManager: QuizStorageManager,
        private navigator: QuizNavigator,
        private logicHandler: QuizLogicHandler
    ) {}

    // 퀴즈 시작
    async startQuiz() {

        await this.logicHandler.fetchAndSaveQuizUrlList();

        const unsolvedQuiz = this.logicHandler.getUnsolvedQuiz();
        if (unsolvedQuiz.length > 0) {
            const randomQuiz = ArrayUtils.pickRandomOne<string>(unsolvedQuiz);
             return randomQuiz
            // this.navigator.moveToQuizPage(randomQuiz);
        }
        // else {
        //     this.navigator.moveToStartPage();
        // }
    }

    // 다음 문제 이동
    async moveToNextQuiz(currentQuiz: string) {
        this.logicHandler.addSolvedQuiz(currentQuiz);

        if (this.logicHandler.isAllQuizSolved()) {
            this.navigator.moveToCompletedPage();
        } else {
            const unsolvedQuiz = this.logicHandler.getUnsolvedQuiz();
            const randomQuiz = ArrayUtils.pickRandomOne<string>(unsolvedQuiz);
            this.navigator.moveToQuizPage(randomQuiz);
        }
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

    clearQuizStorage() {
        this.storageManager.clearStorage();
    }
}

