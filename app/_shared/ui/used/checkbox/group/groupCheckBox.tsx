import GroupCheckBoxContainer from "@/app/_shared/ui/used/checkbox/group/groupCheckBoxContainer";
import GroupCheckBoxContent from "@/app/_shared/ui/used/checkbox/group/groupCheckBoxContent";
import useGetCheckedList from "@/app/_shared/ui/used/checkbox/group/hook/useGetCheckedList";
import useHandleGroupCheckBox from "@/app/_shared/ui/used/checkbox/group/hook/useHandleGroupCheckBox";
import React, { ReactNode } from "react";

// 체크박스 그룹 옵션
export interface GroupCheckBoxOption {
    label: ReactNode;
    value: string | number;
}

// 체크박스 그룹 프롭스
interface GroupCheckBoxProps {
    direction?: "row" | "col"; // 방향
    options: GroupCheckBoxOption[]; // 체크박스 그룹 옵션
    className?: string;
    isMultiSelect?: boolean; // 다중 선택 가능 여부
    tabIndex?: number;
}

// 체크박스 그룹 컴포넌트
function GroupCheckBox({
    direction = "col",
    options,
    isMultiSelect = true, // 기본 다중 선택 가능
    tabIndex = 0,
    className,
}: GroupCheckBoxProps) {
    const groupCheckHandler =
        useHandleGroupCheckBox(isMultiSelect);

    const getCheckedList = useGetCheckedList();

    return (
        <GroupCheckBoxContainer
            direction={direction}
            containerClassName={className}
        >
            {options.map((v, i) => (
                <GroupCheckBoxContent
                    key={i}
                    index={i}
                    tabIndex={tabIndex}
                    value={v}
                    groupCheckHandler={groupCheckHandler}
                    checkedList={getCheckedList}
                />
            ))}
        </GroupCheckBoxContainer>
    );
}

export default GroupCheckBox;
