import React from 'react';

// 퀴즈 완료 타이틀
function QuizCompletedTitle({
                                children
                            }:{
    children: React.ReactNode
}) {
    return (
        <h1
            className="lg:text-title1 md:text-title2Bold sm:text-title2Bold
             text-center"
        >
            {children}
        </h1>
    );
}

export default QuizCompletedTitle;
