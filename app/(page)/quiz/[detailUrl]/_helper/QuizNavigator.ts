
// 화면 이동과 관련된 로직 관리
export class QuizNavigator {
    constructor(private navigate: (path: string) => void) {}

    // 퀴즈 페이지로 이동
    moveToQuizPage(quizUrl: string) {
        this.navigate(`/quiz/${quizUrl}`);
    }

    // 퀴즈 완료 페이지로 이동
    moveToCompletedPage() {
        this.navigate("/quiz/completed");
    }

    // 퀴즈 시작 페이지로 이동
    moveToStartPage() {
        this.navigate("/quiz");
    }
}
