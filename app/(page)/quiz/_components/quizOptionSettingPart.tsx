"use client"

import React from 'react';
import Select from "@/app/_components/select/select";
import {FIELD_OPTIONS, LANGUAGE_OPTIONS} from "@/app/(page)/quiz/constant";
import Link from "next/link";
import PrimaryButton from "@/app/_components/button/primaryButton";

function QuizOptionSettingPart() {

    const [option,setOption] = React.useState<{field:string,lang:string}>({field:FIELD_OPTIONS[0].value,lang:LANGUAGE_OPTIONS[0].value});


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
            <Link
                prefetch={false}
                href={`/quiz/details?field=${option.field}&lang=${option.lang}`}>
                <PrimaryButton text={"시작하기"} color={"primary"} className={"!w-full !h-[48px] !mt-14"}/>
            </Link>
        </>
    );
}

export default QuizOptionSettingPart;
