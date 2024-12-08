import AfterCheckButtons from "@/app/(page)/quiz/[detailUrl]/_components/client/afterCheckButtons";
import BeforeCheckButton from "@/app/(page)/quiz/[detailUrl]/_components/client/beforeCheckButton";
import React from 'react';

// 채점 버튼(채점 전, 채점 후 버튼)
function CheckButton({
                         check,
                        userAnswer,
                        detailUrl
                     }:{check:boolean, userAnswer:number[], detailUrl:string}) {
    return (
        check?
            <AfterCheckButtons detailUrl={detailUrl as string}/>:<BeforeCheckButton userAnswer={userAnswer}/>    );
}

export default CheckButton;
