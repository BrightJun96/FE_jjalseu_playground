import PrimaryButton from "@/app/_components/used/button/primaryButton";
import GroupCheckBoxContext from "@/app/_components/used/checkbox/group/context/groupCheckBoxContext";
import PlaceOnCenter from "@/app/_layout/placeOnCenter";
import React, { useContext } from "react";

// 채점 버튼
function BeforeCheckButton() {
    const groupCheckState = useContext(
        GroupCheckBoxContext,
    );

    function getCheckedList() {
        return groupCheckState
            ? groupCheckState.checkedList
            : [];
    }

    const disabledCondition = getCheckedList().length === 0;

    return (
        <PlaceOnCenter>
            <PrimaryButton
                tabIndex={2}
                disabled={disabledCondition}
                type={"submit"}
                color={"primary"}
            >
                채점
            </PrimaryButton>
        </PlaceOnCenter>
    );
}

export default BeforeCheckButton;
