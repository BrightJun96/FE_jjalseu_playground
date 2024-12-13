import React from 'react';

// 퀴즈 정답 입력 폼 컨테이너
function QuizAnswerFormContainer({
    children,
                                     action
                                 }:{
    children: React.ReactNode,
    action: (payload: FormData) => void
}) {
    return (
        <form
            action={action}>
            {children}
        </form>
    );
}

export default QuizAnswerFormContainer;
