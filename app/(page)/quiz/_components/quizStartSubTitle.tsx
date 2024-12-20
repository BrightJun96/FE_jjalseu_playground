import React from 'react';

// 퀴즈 시작하기 페이지의 설명을 나타내는 컴포넌트
function QuizStartSubTitle({
    description
                              }:{
    description: string
}) {
    return (
        <h2 className={"mb-10 text-title2Normal text-center"}>
            {description}
        </h2>
    );
}

export default QuizStartSubTitle;
