import { QuizDetailURLResponseDto } from "@/app/_shared/api/generate.api.types";
import { StorageService } from "@/app/_shared/utils/StorageService";

// Storage 상수

// 퀴즈 URL 목록
export const QUIZ_URL_LIST = "quizUrlList";
// 푼 퀴즈 목록
export const SOLVED_QUIZ_LIST = "solvedQuizList";

// 퀴즈 데이터 저장과 관련된 로직을 처리하는 클래스
export class QuizStorage {
    constructor(private storage: StorageService) {}

    // 퀴즈 URL 목록 저장
    saveQuizUrlList(
        quizUrlList: QuizDetailURLResponseDto[],
    ) {
        this.storage.save(
            QUIZ_URL_LIST,
            JSON.stringify(quizUrlList),
        );
    }

    // 퀴즈 URL 목록 조회
    getQuizUrlList(): QuizDetailURLResponseDto[] {
        return (
            this.storage.getParsed<
                QuizDetailURLResponseDto[]
            >(QUIZ_URL_LIST) ?? []
        );
    }

    // 푼 문제 저장
    saveSolvedQuiz(
        solvedQuizList: QuizDetailURLResponseDto[],
    ) {
        this.storage.save(
            SOLVED_QUIZ_LIST,
            JSON.stringify(solvedQuizList),
        );
    }

    // 푼 문제 조회
    getSolvedQuiz(): QuizDetailURLResponseDto[] {
        return (
            this.storage.getParsed<
                QuizDetailURLResponseDto[]
            >(SOLVED_QUIZ_LIST) ?? []
        );
    }

    // 퀴즈 관련 스토리지 초기화
    clearStorage() {
        this.storage.remove(SOLVED_QUIZ_LIST);
        this.storage.remove(QUIZ_URL_LIST);
    }
}
