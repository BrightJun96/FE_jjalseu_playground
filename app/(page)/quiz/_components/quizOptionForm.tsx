"use client"

import useQuizOptionFormAction from "@/app/(page)/quiz/_hook/useQuizOptionFormAction";
import {FIELD_OPTIONS, LANGUAGE_OPTIONS} from "@/app/(page)/quiz/constant";
import PrimaryButton from "@/app/_components/button/primaryButton";
import Select from "@/app/_components/select/select";
import React from 'react';

// 퀴즈 옵션 설정 컴포넌트
function QuizOptionForm() {


    const [option,setOption] = React.useState<{field:string,lang:string}>({field:FIELD_OPTIONS[0].value,lang:LANGUAGE_OPTIONS[0].value});

    const {formAction} =useQuizOptionFormAction()

    function handleOptionChange(value:string,key:"field"|"lang"){
        setOption({...option,[key]:value})
    }

    return (
        <form
        className={"w-full"}
            action={formAction}>
            <div className={"flex flex-col gap-10 w-full"}>
                {/*분야*/}
                <>
                    <Select
                        label={"분야"}
                        options={FIELD_OPTIONS}
                        handleOptionChange={(value) => handleOptionChange(value as string,"field")}
                    />
                    <input
                    type={"hidden"}
                    name={"field"}
                    value={option.field}
                    />
                </>
                {/*<Select*/}
                {/*    label={"언어"}*/}
                {/*    options={LANGUAGE_OPTIONS}*/}
                {/*    handleOptionChange={(value) => handleOptionChange(value as string,"lang")}*/}

                {/*/>*/}
            </div>
            <PrimaryButton
                type={"submit"}
                color={"primary"}
                className={"!w-full !h-[48px] !mt-14"}
            >
                퀴즈 시작하기
            </PrimaryButton>

        </form>
    );
}

export default QuizOptionForm;
