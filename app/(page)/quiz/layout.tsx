import InnerContainer from "@/app/_layout/innerContainer";
import QuizHelperProvider from "@/app/_provider/quizHelperProvider";
import React from 'react';

const QuizLayout = ({
    children
                    }:{
    children:React.ReactNode
}) => {
    return (
        <QuizHelperProvider>
            <InnerContainer className={"!justify-start"}>
                {children}
            </InnerContainer>
        </QuizHelperProvider>
    );
};

export default QuizLayout;
