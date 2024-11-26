"use client"

import quizHelper from "@/app/(page)/quiz/[detailUrl]/_helper/quizHelper";
import {FIELD_OPTIONS, LANGUAGE_OPTIONS} from "@/app/(page)/quiz/constant";
import PrimaryButton from "@/app/_components/button/primaryButton";
import Select from "@/app/_components/select/select";
import {localStorageService, StorageService} from "@/app/_utils/StorageService";
import {clientQuizApi} from "@/app/services/quiz/client/api.instance";
import {useRouter} from "next/navigation";
import React from 'react';

function QuizOptionSettingPart() {

    const [option,setOption] = React.useState<{field:string,lang:string}>({field:FIELD_OPTIONS[0].value,lang:LANGUAGE_OPTIONS[0].value});


    const router = useRouter();

    function handleOptionChange(value:string,key:"field"|"lang"){
        setOption({...option,[key]:value})
    }

    async function handleStartQuiz(storage:StorageService){

        try {
            // 퀴즈 URL 목록 조회
            const {data} = await clientQuizApi.fetchQuizDetailUrlList()

            // 퀴즈 URL 목록을 localStorage에 저장
            storage.save("quizUrlList", JSON.stringify(data))

            // 데이터 중 랜덤으로 하나뽑기
            const randomOne = quizHelper.pickRandomOne<string>(data)

            // 랜덤으로 뽑은 퀴즈 URL로 이동
            router.push(`/quiz/${randomOne}`)

        }
        catch (error){
            console.error(error)
        }

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
                    onClick={async() => handleStartQuiz(localStorageService)}
                    text={"시작하기"}
                    color={"primary"}
                    className={"!w-full !h-[48px] !mt-14"}/>
        </>
    );
}

export default QuizOptionSettingPart;
