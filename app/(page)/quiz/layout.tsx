import InnerContainer from "@/app/_layout/innerContainer";
import QuizHelperProvider from "@/app/_provider/quizHelperProvider";
import QuizStorageProvider from "@/app/_provider/quizStorageProvider";
import React from 'react';

const QuizLayout = ({
    children
                    }:{
    children:React.ReactNode
}) => {
    return (
        <QuizStorageProvider>
            <QuizHelperProvider>
                <InnerContainer className={"!justify-start"}>
                    {children}
                </InnerContainer>
            </QuizHelperProvider>
        </QuizStorageProvider>
    );
};

export default QuizLayout;
