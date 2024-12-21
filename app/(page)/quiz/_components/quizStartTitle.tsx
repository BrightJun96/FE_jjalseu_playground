import React from "react";

// 퀴즈 시작하기 페이지의 제목을 나타내는 컴포넌트
function QuizStartTitle({ title }: { title: string }) {
    return <h1 className={"text-title1 text-center"}>{title}</h1>;
}

export default QuizStartTitle;
