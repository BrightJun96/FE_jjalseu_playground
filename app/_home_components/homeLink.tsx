import PrimaryButton from "@/app/_components/button/primaryButton";
import {Link} from 'next-view-transitions';
import React from 'react';

// 메인 링크
function HomeLink() {
    return (
        <Link href={"/quiz"}>
            <PrimaryButton text={"퀴즈 풀어보기"} color={"primary"} className={"!w-[130px] !h-[42px]"}/>
        </Link>
    );
}

export default HomeLink;
