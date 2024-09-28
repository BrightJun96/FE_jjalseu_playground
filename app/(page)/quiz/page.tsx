import React from 'react';
import InnerContainer from "@/app/_layout/innerContainer";
import Select from "@/app/_components/select/select";
import {FIELD_OPTIONS, LANGUAGE_OPTIONS} from "@/app/(page)/quiz/constant";
import PrimaryButton from "@/app/_components/button/primaryButton";

const Page = async () => {

    return (
            <InnerContainer className={"!justify-start"}>
                <div className={"flex flex-col gap-2 mt-24"}>
                    <h1 className={"text-title1 text-center"}>개발 퀴즈</h1>
                    <p className={"mb-10 text-title2Normal"}>퀴즈를 통해 개발 지식을 테스트해 보세요!</p>
                </div>
                <div className={"flex flex-col gap-10 w-full"}>
                    <Select label={"분야"} options={FIELD_OPTIONS}/>
                    <Select label={"언어"} options={LANGUAGE_OPTIONS}/>
                </div>
                <PrimaryButton text={"시작하기"} color={"primary"} className={"!w-full !h-[48px] !mt-14"}/>
            </InnerContainer>

    );
};

export default Page;
