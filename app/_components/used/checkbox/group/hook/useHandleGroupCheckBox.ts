import { CheckBoxHandlerProps } from "@/app/_components/used/checkbox/single/checkbox";
import { primitive } from "@/app/_types/primitive";
import React from "react";

function useHandleGroupCheckBox(isMultiSelect: boolean) {
    // 체크박스 그룹 상태
    const [checkedList, setCheckedList] = React.useState<
        primitive[]
    >([]);

    // 체크박스 그룹 핸들러
    function groupCheckHandler(
        value: CheckBoxHandlerProps,
    ) {
        // 다중 선택이 아닌 경우, 체크된 항목이 하나만 선택되도록
        if (!isMultiSelect) {
            setCheckedList([value.value]);
            return;
        }

        // 다중 선택인 경우
        // 체크한 경우
        if (value.checked) {
            setCheckedList((prev) =>
                Array.from(new Set([...prev, value.value])),
            );
        }
        // 체크 해제한 경우
        else {
            setCheckedList((prev) =>
                prev.filter((v) => v !== value.value),
            );
        }
    }

    return { checkedList, groupCheckHandler };
}

export default useHandleGroupCheckBox;
