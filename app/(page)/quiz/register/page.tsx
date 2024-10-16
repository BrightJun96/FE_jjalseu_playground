import React from 'react';
import QuizRegisterForm from "@/app/(page)/quiz/register/components/client/quizRegisterForm";


const Page = async () => {
    return (
        <div className={"w-full"}>
            <h1 className={"text-title1"}>퀴즈 등록</h1>
            <QuizRegisterForm/>
        </div>
    );
};

export default Page;
