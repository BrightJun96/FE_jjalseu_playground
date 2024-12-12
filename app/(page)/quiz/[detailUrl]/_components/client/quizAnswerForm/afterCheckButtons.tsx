import PrimaryButton from "@/app/_components/button/primaryButton";
import useQuizHelperContext from "@/app/_context/useQuizContext";
import {Link} from 'next-view-transitions';
import {useParams} from "next/navigation";
import React from 'react';

// 채점 후 버튼(해설, 다음문제)
function AfterCheckButtons() {
    const quizHelper = useQuizHelperContext();
    const {detailUrl} = useParams()
    return (
        <div className={"flex justify-center items-center gap-2 w-full"}>
            <Link href={`/quiz/${detailUrl}/explanation`}>
                <PrimaryButton text={"해설"} color={"primarySecondary"}/>
            </Link>
                <PrimaryButton
                    text={"다음 문제"}
                    color={"primary"}
                    onClick={async ()=>{
                        await quizHelper?.moveToNextQuiz(detailUrl as string)
                    }}
                />
        </div>
    );
}

export default AfterCheckButtons;
