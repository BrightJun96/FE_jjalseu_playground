import useRandomUrl from "@/app/(page)/quiz/[detailUrl]/_helper/useRandomUrl";
import PrimaryLink from "@/app/_components/link/primaryLink";
import {useParams} from "next/navigation";
import React from 'react';

// 채점 후 버튼(해설, 다음문제)
function AfterCheckButtons() {
    const {detailUrl} = useParams()
    const randomUrl =useRandomUrl()

    return (
        <div className={"flex justify-center items-center gap-2 w-full"}>
            <PrimaryLink
                color={"primarySecondary"}
                href={`/quiz/${detailUrl}/explanation`}>
                해설
            </PrimaryLink>
             <PrimaryLink href={`/quiz/${randomUrl}`}>
                 다음 문제
             </PrimaryLink>
        </div>
    );
}

export default AfterCheckButtons;
