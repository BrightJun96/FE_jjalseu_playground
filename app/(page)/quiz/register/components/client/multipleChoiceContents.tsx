"use client"

import React from 'react';
import TextInput from "@/app/_components/input/textInput";
import {QuizForm} from "@/app/services/quiz/types";

// 객관식 문제 컨텐츠
const MultipleChoiceContents = ({
                                    onChange,
                                    quizForm
}:{
    onChange:(value:string[])=>void,
    quizForm :QuizForm
}) => {


    function handleChoiceContentChange(value:string,index:number) {

        onChange(quizForm.multipleChoiceContents.map((v,i)=>i===index?value:v))

    }




    return (
        <div className={"w-full"}>
            <span className={"text-title3Normal mb-[12px]"}>객관식 문제안</span>
            <div className={"ml-[16px] flex flex-col gap-2"}>
                {
                    new Array(5)
                        .fill(0)
                        .map((v,i)=>
                            <TextInput
                                key={i}
                                label={`${i+1}번`}
                                className={"w-full"}
                                placeholder={"문제안을 입력해주세요."}
                                value={quizForm.multipleChoiceContents[i]}
                                onChange={(value)=>handleChoiceContentChange(value,i)}
                            />
                        )
                }
            </div>
        </div>
    );
};

export default MultipleChoiceContents;
