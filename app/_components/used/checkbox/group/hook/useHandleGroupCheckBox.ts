import GroupCheckBoxContext from "@/app/_components/used/checkbox/group/context/groupCheckBoxContext";
import { CheckBoxHandlerProps } from "@/app/_components/used/checkbox/single/checkbox";
import { useContext } from "react";

function useHandleGroupCheckBox(isMultiSelect: boolean) {
    const groupCheckState = useContext(
        GroupCheckBoxContext,
    );

    // 체크상태 조회
    function getCheckedList() {
        return groupCheckState
            ? groupCheckState.checkedList
            : [];
    }

    // 체크박스 그룹 핸들러
    function groupCheckHandler(
        value: CheckBoxHandlerProps,
    ) {
        if (groupCheckState) {
            const { setCheckedList } = groupCheckState;
            // 다중 선택이 아닌 경우, 체크된 항목이 하나만 선택되도록
            if (!isMultiSelect) {
                setCheckedList([value.value]);
                return;
            }

            // 다중 선택인 경우
            // 체크한 경우
            if (value.checked) {
                setCheckedList((prev) =>
                    Array.from(
                        new Set([...prev, value.value]),
                    ),
                );
            }
            // 체크 해제한 경우
            else {
                setCheckedList((prev) =>
                    prev.filter((v) => v !== value.value),
                );
            }
        }
    }

    return {
        getCheckedList,
        groupCheckHandler,
    };
}

export default useHandleGroupCheckBox;
