import {FIELD_OPTIONS, LANGUAGE_OPTIONS} from "@/app/(page)/quiz/constant";
import React from 'react';

// 퀴즈 옵션 상태 타입
export interface QuizOptionType {
    field:string,
    lang:string
}

//퀴즈 옵션 상태 타입 키
export type QuizOptionKeyType = keyof QuizOptionType

function useQuizOptionHandler() {
    const [option,setOption] = React.useState<QuizOptionType>({field:FIELD_OPTIONS[0].value,lang:LANGUAGE_OPTIONS[0].value});


    function handleOptionChange(value:string,key:QuizOptionKeyType){
        setOption({...option,[key]:value})
    }
    return {handleOptionChange,option}
}

export default useQuizOptionHandler;
