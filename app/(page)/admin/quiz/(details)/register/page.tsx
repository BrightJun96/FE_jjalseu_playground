import React from 'react';
import QuizRegisterForm from "@/app/(page)/admin/quiz/(details)/_components/client/form/quizRegisterForm";


/**
 * 퀴즈 관리-등록 페이지
 */
const Page = async () => {
    return (
        <div className={"w-full"}>
            <h1 className={"text-title1"}>퀴즈 등록</h1>
            <QuizRegisterForm/>
        </div>
    );
};

export default Page;
