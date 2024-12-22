import PrimaryButton from "@/app/_components/used/button/primaryButton";
import useGetCheckedList from "@/app/_components/used/checkbox/group/hook/useGetCheckedList";
import PlaceOnCenter from "@/app/_layout/placeOnCenter";
import { ArrayUtils } from "@/app/_utils/class/ArrayUtils";
import React from "react";

// 채점 버튼
function BeforeCheckButton() {
    const checkedList = useGetCheckedList();

    return (
        <PlaceOnCenter>
            <PrimaryButton
                tabIndex={2}
                disabled={ArrayUtils.isEmpty(checkedList)}
                type={"submit"}
                color={"primary"}
            >
                채점
            </PrimaryButton>
        </PlaceOnCenter>
    );
}

export default BeforeCheckButton;
