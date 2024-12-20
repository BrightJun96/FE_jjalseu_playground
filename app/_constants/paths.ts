// URL 경로를 상수로 정의
const PATHS ={
    QUIZ: "/quiz",
    QUIZ_COMPLETED: "/quiz/completed",
    QUIZ_RANDOM: (id:string) => `/quiz/${id}`, // 동적 URL
};

export default PATHS;
