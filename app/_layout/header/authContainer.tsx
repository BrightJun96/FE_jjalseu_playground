import PrimaryButton from "@/app/_components/button/primaryButton";
import Link from "next/link";
import React from 'react';

/**
 * 로그인,회원가입,마이페이지 컨테이너
 */
function AuthContainer() {
    return (
        <div className={"flex gap-3 items-center"}>
            <Link
                href={"/login"}
                // prefetch={false}
            >
                <PrimaryButton text={"로그인"} color={"primary"}/>
            </Link>
            <Link
                href={"/signup"}
                // prefetch={false}
            >
                <PrimaryButton text={"회원가입"} color={"primarySecondary"}/>
            </Link>

        </div>
    );
}

export default AuthContainer;
