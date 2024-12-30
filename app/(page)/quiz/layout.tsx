import QuizHelperProvider from "@/app/(page)/quiz/_provider/quizHelperProvider";
import QuizStorageProvider from "@/app/(page)/quiz/_provider/quizStorageProvider";
import InnerContainer from "@/app/_shared/layout/innerContainer";
import React from "react";

const QuizLayout = ({
    children,
}: {
    children: React.ReactNode;
}) => {
    return (
        <QuizStorageProvider>
            <QuizHelperProvider>
                <InnerContainer
                    className={"!justify-start"}
                >
                    {children}
                </InnerContainer>
            </QuizHelperProvider>
        </QuizStorageProvider>
    );
};

export default QuizLayout;
