
// 화면 이동과 관련된 로직 관리
export class QuizNavigator {
    constructor(private router: {
        navigate:(path: string) => void,
        prefetch?:(path: string) => void
    }) {}

    // 퀴즈 페이지로 이동
    moveToQuizPage(quizUrl: string) {
        this.router.navigate(`/quiz/${quizUrl}`);
        if(this.router.prefetch){
            this.router.prefetch(`/quiz/${quizUrl}`);
        }
    }

    // 퀴즈 완료 페이지로 이동
    moveToCompletedPage() {
        this.router.navigate("/quiz/completed");
    }

    // 퀴즈 시작 페이지로 이동
    moveToStartPage() {
        this.router.navigate("/quiz");
    }
}
