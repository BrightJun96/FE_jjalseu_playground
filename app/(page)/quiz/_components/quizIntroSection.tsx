import React from 'react';

// 퀴즈 시작하기 페이지의 설명을 나타내는 컴포넌트
function QuizIntroSection({
    children
                          }:{
    children: React.ReactNode
}) {
    return (
        <section className={"flex flex-col gap-2 mt-24"}>
            {children}
        </section>
    );
}

export default QuizIntroSection;
