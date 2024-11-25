"use client"

import MetaDataForm from "@/app/(page)/admin/quiz/(details)/_components/client/form/metaDataForm";
import MultipleChoiceForm from "@/app/(page)/admin/quiz/(details)/_components/client/form/multipleChoiceForm";
import {FIELD_OPTIONS, LANGUAGE_OPTIONS, LEVEL_OPTIONS, TYPE_OPTIONS} from "@/app/(page)/quiz/constant";
import PrimaryButton from "@/app/_components/button/primaryButton";
import TextEditorWrapper from "@/app/_components/editor/textEditorWrapper";
import TextInput from "@/app/_components/input/textInput";
import Select from "@/app/_components/select/select";
import {primitive} from "@/app/_types/primitive";
import {fetchRegisterQuiz} from "@/app/services/quiz/admin/api.action";
import {QuizForm, QuizFormKey, QuizItem, QuizType} from "@/app/services/quiz/types";
import React, {useEffect, useState} from 'react';

// 퀴즈 등록 폼 컴포넌트
const QuizDetailsForm = ({detailsData}:{detailsData:QuizItem|null}) => {

    // console.log("detailsData",detailsData)

    // 초기값
    const initialQuizForm:QuizForm={
        title:"", // 퀴즈 제목
        content:"", // 퀴즈 내용
        subjectiveAnswer:"", // 주관식 답안
        multipleChoiceAnswer:[], // 객관식 답안
        hint:"",
        explanation:"",
        type:TYPE_OPTIONS[0].value as QuizType,
        field: FIELD_OPTIONS[0].value,
        lang:LANGUAGE_OPTIONS[0].value,
        level:1,
        isMultiple:false,
        time:0,
        multipleChoiceContents:["","","","",""], // 객관식 선택지
        // 메타데이터
        metaTitle:"", // 제목
        metaDescription:"", // 설명
        metaImageUrl:"" // 이미지 URL
    }

    // 퀴즈 폼 상태
    const [quizForm,setQuizForm]=useState<QuizForm>(initialQuizForm);

    // 등록 핸들러
    async function handleSubmit(e:React.FormEvent<HTMLFormElement>){
            e.preventDefault()
            const response = await fetchRegisterQuiz(quizForm)
            if (response.isSuccess) {
                setQuizForm(initialQuizForm)
            }
    }

    // onChange 함수
    function commonHandleChange( value:primitive|primitive[],key:QuizFormKey) {
        setQuizForm((prev)=>({...prev,[key]:value}))
    }


    useEffect(() => {
        if(detailsData){

            const {level,title,content,multipleChoiceAnswer,subjectiveAnswer,type,hint,explanation,field,lang,time,metaTitle,metaDescription,metaImageUrl} =detailsData
            setQuizForm(prev => ({...prev,
                title,
                content,
                multipleChoiceAnswer ,
                subjectiveAnswer,
                type,
                hint,
                explanation,
                field,
                lang,
                time,
                metaTitle,
                metaDescription,
                metaImageUrl:metaImageUrl??"",

            }))
        }
    }, [detailsData]);

    return (
        <form
            onSubmit={handleSubmit}
            className={"flex flex-col gap-4 mt-[12px] items-center"}
        >
            {/*제목*/}
            <TextInput
                label={"메타데이터-제목"}
                placeholder={"제목을 입력하세요"}
                className={"w-full"}
                value={quizForm.title}
                onChange={(value) => commonHandleChange(value, "title")}
            />

            {/*퀴즈 내용 (텍스트 에디터)*/}
            <TextEditorWrapper
                label={"퀴즈 내용"}
                onHTMLChange={(value)=> commonHandleChange(value,"content") }
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
            {/*분야*/}
            <Select
                options={FIELD_OPTIONS}
                label={"분야"}
                handleOptionChange={(value) => commonHandleChange(value,"field")}
            />
            {/*언어*/}
            <Select
                options={LANGUAGE_OPTIONS}
                label={"언어"}
                handleOptionChange={(value) => commonHandleChange(value,"lang")}
            />
            {/*문제 난이도*/}
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
            {/*주관식 답안*/}
            {quizForm.type==="SUBJECTIVE"&&
                <TextEditorWrapper
                label={"주관식 답안"}
                onHTMLChange={(value) => commonHandleChange(value, "subjectiveAnswer")}
            />}
            {/*객관식 폼*/}
            {quizForm.type==="MULTIPLE_CHOICE"&&
            <MultipleChoiceForm quizForm={quizForm} commonHandleChange={commonHandleChange}/>
            }
            {/*문제풀이 소요시간*/}
            <TextInput
                value={quizForm.time}
                type={"number"}
                label={"문제풀이 소요시간(초)"}
                className={"w-full"}
                placeholder={"문제풀이 소요시간을 입력해주세요."}
                onChange={(value)=>commonHandleChange(value,"time")}
            />
            {/*메타데이터 섹션(제목,설명,이미지 URL)*/}
            <MetaDataForm
                metaData={{
                    metaTitle:quizForm.metaTitle,
                    metaDescription:quizForm.metaDescription,
                    metaImageUrl:quizForm.metaImageUrl,
                    commonHandleChange
                }}
            />
            {/*등록*/}
            <PrimaryButton
                text={"퀴즈 등록"}
                color={"primary"}
                type={"submit"}
                className={"!w-full !h-[40px]"}/>
        </form>
    );
};

export default QuizDetailsForm;
