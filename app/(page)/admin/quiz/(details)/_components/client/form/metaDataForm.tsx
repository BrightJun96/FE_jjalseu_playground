import TextInput from "@/app/_components/input/textInput";
import {QuizFormKey} from "@/app/services/quiz/types";
import React from 'react';



interface MetaDataFormProps {
    metaData: {
        metaTitle:string,
        metaDescription:string,
        metaImageUrl:string
        commonHandleChange: (value: string, key: QuizFormKey) => void;
    }
}

{/*메타데이터 섹션(제목,설명,이미지 URL)*/}
function MetaDataForm({
                                metaData,
                         }:MetaDataFormProps) {
    const {metaTitle,metaDescription,metaImageUrl,commonHandleChange}=metaData

    return (
        <>
            <span
            className={"text-title2Normal"}
            >메타데이터</span>
            {/*제목*/}
            <TextInput
                label={"메타데이터-제목"}
                placeholder={"제목을 입력하세요"}
                className={"w-full"}
                value={metaTitle}
                onChange={(value) => commonHandleChange(value, "metaTitle")}
            />
            {/*설명*/}
            <TextInput
                label={"메타데이터-설명"}
                placeholder={"설명을 입력하세요"}
                className={"w-full"}
                value={metaDescription}
                onChange={(value) => commonHandleChange(value, "metaDescription")}
            />
            {/*이미지 URL*/}
            <TextInput
                label={"메타데이터-이미지 URL"}
                placeholder={"이미지 URL을 입력하세요"}
                className={"w-full"}
                value={metaImageUrl}
                onChange={(value) => commonHandleChange(value, "metaImageUrl")}
            />
        </>
    );
}

export default MetaDataForm;
