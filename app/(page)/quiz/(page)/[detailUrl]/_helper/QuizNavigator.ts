
// 화면 이동과 관련된 로직 관리
export class QuizNavigator {
    constructor(private router: {
        navigate:(path: string) => void,
    }) {}


    // 퀴즈 완료 페이지로 이동
    moveToCompletedPage() {
        this.router.navigate("/quiz/completed");
    }


}
