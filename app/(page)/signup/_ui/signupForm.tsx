"use client"

import React, {useState} from 'react';
import TextInput from "@/app/_components/input/textInput";
import {ISignupForm} from "@/app/(page)/signup/_types/types";
import PrimaryButton from "@/app/_components/button/primaryButton";

/**
 * 회원가입 폼
 */
const SignupForm = () => {

    // 회원가입 폼
    const [signupForm, setSignupForm] = useState<ISignupForm>({
        id: "",// 아이디
        password: "",// 비밀번호
    })

    // 인풋 변경 이벤트
    function handleChange(key: string, value: string) {
        setSignupForm((prev) => ({...prev, [key]: value}))
    }
    return (
        <form className={"w-full flex flex-col gap-6"}>
            <h1 className={"text-title1 text-center"}>회원가입</h1>
            <TextInput
                placeholder={"아이디를 입력해주세요."}
                type={"text"}
                label={"아이디"}
                value={signupForm.id}
                onChange={(value)=> handleChange("id", value)}
            />
            <TextInput
                placeholder={"비밀번호를 입력해주세요."}
                type={"password"}
                label={"비밀번호"}
                value={signupForm.password}
                onChange={(value)=> handleChange("password", value)}
            />
            <PrimaryButton text={"회원가입"} color={"primarySecondary"} className={"!w-full !h-[48px]"} />
        </form>
    );
};

export default SignupForm;
