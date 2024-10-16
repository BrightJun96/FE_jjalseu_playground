"use client"

import React, {useState} from 'react';
import TextInput from "@/app/_components/input/textInput";
import Select from "@/app/_components/select/select";
import {
    DUPLICATE_OPTIONS,
    FIELD_OPTIONS,
    LANGUAGE_OPTIONS,
    LEVEL_OPTIONS,
    TYPE_OPTIONS
} from "@/app/(page)/quiz/constant";
import PrimaryButton from "@/app/_components/button/primaryButton";
import MultipleChoiceContents from "@/app/(page)/quiz/register/components/client/multipleChoiceContents";
import TextEditorWrapper from "@/app/_components/editor/textEditorWrapper";
import {QuizForm, QuizFormKey} from "@/app/services/quiz/types";
import {fetchRegisterQuiz} from "@/app/services/quiz/api.instance";

// 퀴즈 등록 폼 컴포넌트
const QuizRegisterForm = () => {

    // 초기값
    const initialQuizForm:QuizForm={
        questionTitle:"",
        questionContent:"",
        answer:"",
        hint:"",
        explanation:"",
        type:TYPE_OPTIONS[0].value as "SUBJECTIVE"|"MULTIPLE_CHOICE",
        field: FIELD_OPTIONS[0].value,
        lang:LANGUAGE_OPTIONS[0].value,
        level:1,
        isMultiple:false,
        time:0,
        multipleChoiceContents:["","","","",""]
    }

    const [quizForm,setQuizForm]=useState<QuizForm>(initialQuizForm);

    async function handleSubmit(e:React.FormEvent<HTMLFormElement>){
            e.preventDefault()
            const response = await fetchRegisterQuiz(quizForm)
            if (response.isSuccess) {
                setQuizForm(initialQuizForm)
            }
    }

    // onChange 함수
    function commonHandleChange( value:string|number|boolean|string[],key:QuizFormKey) {
        setQuizForm((prev)=>({...prev,[key]:value}))
    }

    return (
        <form
            onSubmit={handleSubmit}
            className={"flex flex-col gap-4 mt-[12px] items-center"}
        >
            <TextEditorWrapper
                label={"퀴즈 제목"}
                onHTMLChange={(value)=> commonHandleChange(value,"questionTitle")}
            />

            {/*퀴즈 내용 (텍스트 에디터)*/}
            <TextEditorWrapper
                label={"퀴즈 내용"}
                onHTMLChange={(value)=> commonHandleChange(value,"questionContent") }
            />
            {/*힌트 (텍스트 에디터)*/}
            <TextEditorWrapper
                label={"힌트"}
                onHTMLChange={(value)=> commonHandleChange(value,"hint")}
            />
            {/*해설 (텍스트 에디터)*/}
            <TextEditorWrapper
                label={"해설"}
                onHTMLChange={(value)=> commonHandleChange(value,"explanation")}
            />

            {/*정답*/}
            <TextEditorWrapper
                label={"정답"}
                onHTMLChange={(value)=> commonHandleChange(value,"answer")}
            />

            <Select
                options={FIELD_OPTIONS}
                label={"분야"}
                handleOptionChange={(value) => commonHandleChange(value,"field")}
            />

            <Select
                options={LANGUAGE_OPTIONS}
                label={"언어"}
                handleOptionChange={(value) => commonHandleChange(value,"lang")}
            />

            <Select
                options={LEVEL_OPTIONS}
                label={"문제 난이도"}
                handleOptionChange={(value) => commonHandleChange(value,"level")}
            />

            {/*문제 타입(객관식 or 주관식)*/}
            <Select
                options={TYPE_OPTIONS}
                label={"문제타입"}
                handleOptionChange={(value)=>commonHandleChange(value,"type")}

            />

            {/*객관식일 경우,나타날 필드(중복 선택 여부)*/}
            {quizForm.type==="MULTIPLE_CHOICE"&&
                <Select
                    options={DUPLICATE_OPTIONS}
                    label={"객관식 - 중복 선택 여부"}
                    handleOptionChange={(value) => commonHandleChange(value,"isMultiple")}
                />}

            {/*객관식일 경우,나타날 필드(객관식 선택지 리스트)*/}
            {quizForm.type==="MULTIPLE_CHOICE"&&
                <MultipleChoiceContents
                    quizForm={quizForm}
                    onChange={(value)=>commonHandleChange(value,"multipleChoiceContents")}

                />}

            {/*문제풀이 소요시간*/}
            <TextInput
                value={quizForm.time}
                type={"number"}
                label={"문제풀이 소요시간(초)"}
                className={"w-full"}
                placeholder={"문제풀이 소요시간을 입력해주세요."}
                onChange={(value)=>commonHandleChange(value,"time")}
            />

            {/*문제*/}
            <PrimaryButton
                text={"퀴즈 등록"}
                color={"primary"}
                type={"submit"}
                className={"!w-full !h-[40px]"}/>
        </form>
    );
};

export default QuizRegisterForm;
