import PrimaryButton from "@/app/_shared/ui/used/button/primaryButton";
import TextInput from "@/app/_shared/ui/used/input/textInput";
import { cookies } from "next/headers";
import React from "react";

/**
 * 로그인 페이지
 */
function Page() {
    async function login(formData: FormData) {
        "use server";

        const data = Object.fromEntries(formData);

        const basic = `${data.id}:${data.pw}`;
        const toBase64 =
            Buffer.from(basic).toString("base64");

        const BasicToken = `Basic ${toBase64}`;
        console.log("toBase64 :", toBase64);
        const response = await fetch(
            "http://localhost:8080/auth/login",
            {
                method: "POST",
                headers: {
                    Authorization: BasicToken,
                },
            },
        );

        const json = await response.json();
        console.log("json :", json);

        if (json && json.accessToken && json.refreshToken) {
            const cookieStore = await cookies();

            cookieStore.set({
                name: "act",
                value: json.accessToken,
                httpOnly: true,
                path: "/",
            });

            cookieStore.set({
                name: "rft",
                value: json.refreshToken,
                httpOnly: true,
                path: "/",
            });
        }
    }
    return (
        <div>
            <h1>로그인</h1>
            <form action={login}>
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
                    로그인
                </PrimaryButton>
            </form>
        </div>
    );
}

export default Page;
