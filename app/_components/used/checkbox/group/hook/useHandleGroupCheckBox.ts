import useGroupCheckContext from "@/app/_components/used/checkbox/group/context/useGroupCheckContext";
import { CheckBoxHandlerProps } from "@/app/_components/used/checkbox/single/checkbox";

// 체크박스 그룹 핸들러 훅
function useHandleGroupCheckBox(isMultiSelect: boolean) {
    const groupCheckState = useGroupCheckContext();

    // 단일 체크박스 핸들러
    function singleCheckHandler(
        value: CheckBoxHandlerProps,
    ) {
        if (!groupCheckState) return;
        const { setCheckedList } = groupCheckState;

        setCheckedList([value.value]);
    }

    // 멀티 체크박스 핸들러
    function multiCheckHandler(
        value: CheckBoxHandlerProps,
    ) {
        if (!groupCheckState) return;

        const { setCheckedList } = groupCheckState;

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

    // 체크박스 그룹 핸들러
    function groupCheckHandler(
        value: CheckBoxHandlerProps,
    ) {
        // 다중 선택이 아닌 경우, 체크된 항목이 하나만 선택되도록
        if (!isMultiSelect) {
            singleCheckHandler(value);
            return;
        }

        // 다중 선택인 경우
        multiCheckHandler(value);
    }

    return groupCheckHandler;
}

export default useHandleGroupCheckBox;
