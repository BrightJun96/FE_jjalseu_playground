// URL 경로를 상수로 정의
const PATHS ={
    HOME: "/",
    QUIZ: "quiz",
    QUIZ_COMPLETED: "quiz/completed",
    QUIZ_RANDOM: (id:string) => `quiz/${id}`, // 퀴즈 랜덤
    QUIZ_DETAIL: (id:string) => `quiz/${id}`, // 퀴즈 상세
    QUIZ_EXPLANATION: (id:string) => `quiz/${id}/explanation`, // 퀴즈 설명
};

export default PATHS;
