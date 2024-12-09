import React from 'react';

// 퀴즈 시작하기 페이지의 설명을 나타내는 컴포넌트
function QuizStartDescription({
    description
                              }:{
    description: string
}) {
    return (
        <p className={"mb-10 text-title2Normal text-center"}>
            {description}
        </p>
    );
}

export default QuizStartDescription;
