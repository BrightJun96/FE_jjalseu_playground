import PrimaryButton from "@/app/_components/button/primaryButton";
import React from 'react';

// 채점 버튼
function BeforeCheckButton({userAnswer}:{userAnswer:number[]}) {
    return (
        <div
            className={"flex justify-center gap-1"}
        >
            <PrimaryButton
                disabled={userAnswer.length === 0}
                type={"submit"}
                color={"primary"}>
                채점
            </PrimaryButton>
        </div>
    );
}

export default BeforeCheckButton;
