import { GroupCheckBoxContextStateType } from "@/app/_components/used/checkbox/group/context/groupCheckBoxContext";
import useGroupCheckContext from "@/app/_components/used/checkbox/group/context/useGroupCheckContext";
import { CheckBoxHandlerProps } from "@/app/_components/used/checkbox/single/checkbox";
import { ArrayUtils } from "@/app/_utils/class/ArrayUtils";

// 체크박스 그룹 핸들러 훅
function useHandleGroupCheckBox(isMultiSelect: boolean) {
    const groupCheckState = useGroupCheckContext();

    // // 단일 체크박스 핸들러
    // function singleCheckHandler(
    //     value: CheckBoxHandlerProps,
    // ) {
    //     if (!groupCheckState) return;
    //     const { setCheckedList } = groupCheckState;
    //
    //     setCheckedList([value.value]);
    // }
    //
    // // 멀티 체크박스 핸들러
    // function multiCheckHandler(
    //     value: CheckBoxHandlerProps,
    // ) {
    //     if (!groupCheckState) return;
    //
    //     const { setCheckedList } = groupCheckState;
    //
    //     // 체크한 경우
    //     if (value.checked) {
    //         setCheckedList((prev) =>
    //             ArrayUtils.removeDuplicate([
    //                 ...prev,
    //                 value.value,
    //             ]),
    //         );
    //     }
    //     // 체크 해제한 경우
    //     else {
    //         setCheckedList((prev) =>
    //             ArrayUtils.filter(prev, value.value),
    //         );
    //     }
    // }
    //
    // // 체크박스 그룹 핸들러
    // function groupCheckHandler(
    //     value: CheckBoxHandlerProps,
    // ) {
    //     // 다중 선택이 아닌 경우, 체크된 항목이 하나만 선택되도록
    //     if (!isMultiSelect) {
    //         singleCheckHandler(value);
    //         return;
    //     }
    //
    //     // 다중 선택인 경우
    //     multiCheckHandler(value);
    // }

    const { groupCheckHandler } = new CheckBoxHandler(
        groupCheckState,
        isMultiSelect,
    );

    return groupCheckHandler;
}

export default useHandleGroupCheckBox;

class CheckBoxHandler {
    constructor(
        private groupCheckState: GroupCheckBoxContextStateType | null,
        private isMultiSelect: boolean,
    ) {}

    // 체크박스 그룹 핸들러
    groupCheckHandler(value: CheckBoxHandlerProps) {
        // 다중 선택이 아닌 경우, 체크된 항목이 하나만 선택되도록
        if (!this.isMultiSelect) {
            this.singleCheckHandler(value);
            return;
        }

        // 다중 선택인 경우
        this.multiCheckHandler(value);
    }

    // 단일 체크박스 핸들러
    private singleCheckHandler(
        value: CheckBoxHandlerProps,
    ) {
        if (!this.groupCheckState) return;
        const { setCheckedList } = this.groupCheckState;

        setCheckedList([value.value]);
    }

    // 멀티 체크박스 핸들러
    private multiCheckHandler(value: CheckBoxHandlerProps) {
        if (!this.groupCheckState) return;

        const { setCheckedList } = this.groupCheckState;

        function handleCheckedCase() {
            setCheckedList((prev) =>
                ArrayUtils.removeDuplicate([
                    ...prev,
                    value.value,
                ]),
            );
        }

        function handleUncheckedCase() {
            setCheckedList((prev) =>
                ArrayUtils.filter(prev, value.value),
            );
        }

        // 체크한 경우
        if (value.checked) {
            handleCheckedCase();
        }
        // 체크 해제한 경우
        else {
            handleUncheckedCase();
        }
    }
}
