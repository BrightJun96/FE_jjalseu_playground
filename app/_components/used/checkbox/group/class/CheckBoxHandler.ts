// 체크 박스 핸들러 클래스
import { GroupCheckBoxContextStateType } from "@/app/_components/used/checkbox/group/context/groupCheckBoxContext";
import { CheckBoxHandlerProps } from "@/app/_components/used/checkbox/single/checkbox";
import { primitive } from "@/app/_types/primitive";
import { ArrayUtils } from "@/app/_utils/class/ArrayUtils";

// 체크 박스 핸들러 클래스
export default class CheckBoxHandler {
    constructor(
        private groupCheckState: GroupCheckBoxContextStateType | null,
        private isMultiSelect: boolean,
    ) {}

    // 체크 리스트
    private get getCheckedList() {
        if (!this.groupCheckState) return [];

        return this.groupCheckState.checkedList;
    }

    // 체크박스 그룹 핸들러
    groupCheckHandler = (value: CheckBoxHandlerProps) => {
        const handler = this.isMultiSelect
            ? this.multiCheckHandler
            : this.singleCheckHandler;

        handler(value);
    };

    // 업데이트 함수
    private updateCheckedList = (values: primitive[]) => {
        if (!this.groupCheckState) return;

        this.groupCheckState.setCheckedList(values);
    };

    // 단일 체크박스 핸들러
    private singleCheckHandler = (
        value: CheckBoxHandlerProps,
    ) => this.updateCheckedList([value.value]);

    // 멀티 체크박스 핸들러
    private multiCheckHandler = (
        value: CheckBoxHandlerProps,
    ) => {
        // 체크한 경우 값
        const CheckedCaseValues =
            ArrayUtils.removeDuplicate([
                ...this.getCheckedList,
                value.value,
            ]);

        // 체크 해제한 경우 값
        const UncheckedCaseValues = ArrayUtils.filter(
            this.getCheckedList,
            value.value,
        );

        // checked 여부에 따라 업데이트
        const updatedCheckedList = value.checked
            ? CheckedCaseValues
            : UncheckedCaseValues;

        // 업데이트된 리스트 저장
        this.updateCheckedList(updatedCheckedList);
    };
}
