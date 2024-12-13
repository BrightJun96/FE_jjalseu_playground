import {QuizStorageManager} from "@/app/(page)/quiz/[detailUrl]/_helper/QuizStoreManager";
import {ArrayUtils} from "@/app/_utils/class/ArrayUtils";

// 퀴즈 관련 데이터의 로직 처리.
export class QuizLogicHandler {
    constructor(private storageManager: QuizStorageManager) {}

    // 퀴즈 URL 목록 조회 후 저장
    // async fetchAndSaveQuizUrlList() {
    //     try {
    //         const {data} = await getQuizDetailUrlListAction();
    //         this.storageManager.saveQuizUrlList(data);
    //     } catch (error) {
    //         console.error(error);
    //     }
    // }

    // 안 푼 문제 조회
    getUnsolvedQuiz(): string[] {
        const quizUrlList = this.storageManager.getQuizUrlList();
        const solvedQuiz = this.storageManager.getSolvedQuiz();
        return ArrayUtils.getDifference<string>(quizUrlList, solvedQuiz);
    }

    // 모든 퀴즈가 풀렸는지 확인
    isAllQuizSolved(): boolean {
        const quizUrlList = this.storageManager.getQuizUrlList();
        const solvedQuiz = this.storageManager.getSolvedQuiz();
        return ArrayUtils.isEqualLength<string>(quizUrlList, solvedQuiz);
    }

    // 푼 문제 저장, 기존에 푼 문제가 있다면 추가,없다면 새로 저장
    addSolvedQuiz(quiz: string) {
        const solvedQuizList = this.storageManager.getSolvedQuiz();
        const updatedList = ArrayUtils.removeDuplicate([...solvedQuizList, quiz]);
        this.storageManager.saveSolvedQuiz(updatedList);
    }
}
