import React from 'react';

import QuizOptionSettingPart from "@/app/(page)/quiz/_components/quizOptionSettingPart";

const Page = async () => {


    return (
            <div className={"w-full"}>
                <div className={"flex flex-col gap-2 mt-24"}>
                    <h1 className={"text-title1 text-center"}>개발 퀴즈</h1>
                    <p className={"mb-10 text-title2Normal text-center"}>퀴즈를 통해 개발 지식을 테스트해 보세요!</p>
                </div>
                <QuizOptionSettingPart/>
            </div>

    );
};

export default Page;
