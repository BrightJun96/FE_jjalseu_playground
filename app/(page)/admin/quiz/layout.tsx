import React from 'react';
import InnerContainer from "@/app/_layout/innerContainer";

const QuizLayout = ({
    children
                    }:{
    children:React.ReactNode
}) => {
    return (
        <InnerContainer className={"!justify-start"}>
            {children}
        </InnerContainer>
    );
};

export default QuizLayout;
