import PrimaryButton from "@/app/_components/button/primaryButton";
import PlaceOnCenter from "@/app/_layout/placeOnCenter";
import React from 'react';

// 채점 버튼
function BeforeCheckButton({userAnswer}:{userAnswer:number[]}) {
    return (
        <PlaceOnCenter>
            <PrimaryButton
                disabled={userAnswer.length === 0}
                type={"submit"}
                color={"primary"}>
                채점
            </PrimaryButton>
        </PlaceOnCenter>
    );
}

export default BeforeCheckButton;
