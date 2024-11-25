import QuizDetailsForm from "@/app/(page)/admin/quiz/(details)/_components/client/form/quizDetailsForm";
import React from 'react';


/**
 * 퀴즈 관리-등록 페이지
 */
const Page = async () => {
    return (
        <div className={"w-full"}>
            <h1 className={"text-title1"}>퀴즈 등록</h1>
            <QuizDetailsForm
                detailsData={null}
            />
        </div>
    );
};

export default Page;
