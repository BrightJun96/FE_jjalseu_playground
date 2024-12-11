"use client"

import {FIELD_OPTIONS, LANGUAGE_OPTIONS} from "@/app/(page)/quiz/constant";
import PrimaryButton from "@/app/_components/button/primaryButton";
import Select from "@/app/_components/select/select";
import useQuizHelperContext from "@/app/_context/useQuizContext";
import {Link} from "next-view-transitions";
import React, {useEffect, useState} from 'react';

// 퀴즈 옵션 설정 컴포넌트
function QuizOptionSettingPart() {

    const [url,setUrl] = useState<string>("")
    const quizHelper = useQuizHelperContext()
    const [option,setOption] = React.useState<{field:string,lang:string}>({field:FIELD_OPTIONS[0].value,lang:LANGUAGE_OPTIONS[0].value});

    function handleOptionChange(value:string,key:"field"|"lang"){
        setOption({...option,[key]:value})
    }


    useEffect(() => {

        async function getRandomUrl(){
           const url = await quizHelper?.startQuiz()
            if(url){
                setUrl(url)

            }
        }
        getRandomUrl()

    }, [quizHelper]);

    return (
        <>
            <div className={"flex flex-col gap-10 w-full"}>
                <Select
                    label={"분야"}
                    options={FIELD_OPTIONS}
                    handleOptionChange={(value) => handleOptionChange(value as string,"field")}
                />
                {/*<Select*/}
                {/*    label={"언어"}*/}
                {/*    options={LANGUAGE_OPTIONS}*/}
                {/*    handleOptionChange={(value) => handleOptionChange(value as string,"lang")}*/}

                {/*/>*/}
            </div>
            <Link href={`/quiz/${url}`}>
                <PrimaryButton
                    // onClick={async () => await quizHelper?.startQuiz()}
                    text={"시작하기"}
                    color={"primary"}
                    className={"!w-full !h-[48px] !mt-14"}
                />
            </Link>

        </>
    );
}

export default QuizOptionSettingPart;
