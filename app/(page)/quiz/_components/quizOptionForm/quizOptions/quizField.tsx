import {QuizOptionKeyType, QuizOptionType} from "@/app/(page)/quiz/_helper/useQuizOptionHandler";
import {FIELD_OPTIONS} from "@/app/(page)/quiz/constant";
import Select from "@/app/_components/select/select";
import React from 'react';

// 퀴즈 옵션 컴포넌트(분야)
function QuizField({
    handleOptionChange,
    option
                   }:{
    handleOptionChange:(value:string,key:QuizOptionKeyType)=>void
    option:QuizOptionType
}) {

    return (
        <>
            <Select
                label={"분야"}
                options={FIELD_OPTIONS}
                handleOptionChange={(value) => handleOptionChange(value as string, "field")}
            />
            <input
                type={"hidden"}
                name={"field"}
                value={option.field}
            />
        </>
    );
}

export default QuizField;
