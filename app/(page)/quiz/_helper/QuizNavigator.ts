
// 화면 이동과 관련된 로직 관리
export class QuizNavigator {
    constructor(private router: {
        navigate:(path: string) => void,
    }) {}

    // 페이지 이동
    navigate(path: string) {
        this.router.navigate(path);
    }

}
