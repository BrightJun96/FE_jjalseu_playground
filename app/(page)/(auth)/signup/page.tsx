import PrimaryButton from "@/app/_shared/ui/used/button/primaryButton";
import TextInput from "@/app/_shared/ui/used/input/textInput";
import React from "react";

/**
 * 회원가입
 * @constructor
 */

interface Auth {
    id: string;
    pw: string;
}
async function Page() {
    async function signup(formData: FormData) {
        "use server";

        const data = Object.fromEntries(formData);

        const basic = `${data.id}:${data.pw}`;
        const toBase64 =
            Buffer.from(basic).toString("base64");

        const BasicToken = `Basic ${toBase64}`;
        console.log("toBase64 :", toBase64);
        const response = await fetch(
            "http://localhost:8080/auth/register",
            {
                method: "POST",
                headers: {
                    Authorization: BasicToken,
                },
            },
        );

        const json = await response.json();
        console.log("json :", json);
    }

    return (
        <div>
            <h1>회원가입</h1>
            <form action={signup}>
                <TextInput
                    name={"id"}
                    label={"아이디"}
                />
                <TextInput
                    type={"password"}
                    name={"pw"}
                    label={"비밀번호"}
                />

                <PrimaryButton
                    type={"submit"}
                    color={"primary"}
                >
                    회원가입
                </PrimaryButton>
            </form>
        </div>
    );
}

export default Page;
