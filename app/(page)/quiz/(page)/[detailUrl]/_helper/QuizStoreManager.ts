import {QUIZ_URL_LIST, SOLVED_QUIZ_LIST, StorageService} from "@/app/_utils/StorageService";

// 퀴즈 데이터 저장과 관련된 로직을 처리하는 클래스
export class QuizStorageManager {
    constructor(private storage: StorageService) {}

    // 퀴즈 URL 목록 저장
    saveQuizUrlList(quizUrlList: string[]) {
        this.storage.save(QUIZ_URL_LIST, JSON.stringify(quizUrlList));
    }

    // 퀴즈 URL 목록 조회
    getQuizUrlList(): string[] {
        return this.storage.getParsed<string[]>(QUIZ_URL_LIST) ?? [];
    }

    // 푼 문제 저장
    saveSolvedQuiz(solvedQuizList: string[]) {
        this.storage.save(SOLVED_QUIZ_LIST, JSON.stringify(solvedQuizList));
    }

    // 푼 문제 조회
    getSolvedQuiz(): string[] {
        return this.storage.getParsed<string[]>(SOLVED_QUIZ_LIST) ?? [];
    }

    // 퀴즈 관련 스토리지 초기화
    clearStorage() {
        this.storage.remove(SOLVED_QUIZ_LIST);
        this.storage.remove(QUIZ_URL_LIST);
    }
}
