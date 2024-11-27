"use client"

import quizHelper from "@/app/(page)/quiz/[detailUrl]/_helper/QuizHelper";
import {FIELD_OPTIONS, LANGUAGE_OPTIONS} from "@/app/(page)/quiz/constant";
import PrimaryButton from "@/app/_components/button/primaryButton";
import Select from "@/app/_components/select/select";
import useIsClient from "@/app/_utils/hooks/useIsClient";
import {localStorageService} from "@/app/_utils/StorageService";
import {useRouter} from "next/navigation";
import React from 'react';

// 퀴즈 옵션 설정 컴포넌트
function QuizOptionSettingPart() {

    const isClient= useIsClient()

    const [option,setOption] = React.useState<{field:string,lang:string}>({field:FIELD_OPTIONS[0].value,lang:LANGUAGE_OPTIONS[0].value});


    const router = useRouter();

    function handleOptionChange(value:string,key:"field"|"lang"){
        setOption({...option,[key]:value})
    }


    return (
        <>
            <div className={"flex flex-col gap-10 w-full"}>
                <Select
                    label={"분야"}
                    options={FIELD_OPTIONS}
                    handleOptionChange={(value) => handleOptionChange(value as string,"field")}
                />
                <Select
                    label={"언어"}
                    options={LANGUAGE_OPTIONS}
                    handleOptionChange={(value) => handleOptionChange(value as string,"lang")}

                />
            </div>
                <PrimaryButton
                    onClick={async() => {
                        if(isClient) await quizHelper.startQuiz(localStorageService, router.push)
                    }}
                    text={"시작하기"}
                    color={"primary"}
                    className={"!w-full !h-[48px] !mt-14"}/>
        </>
    );
}

export default QuizOptionSettingPart;
