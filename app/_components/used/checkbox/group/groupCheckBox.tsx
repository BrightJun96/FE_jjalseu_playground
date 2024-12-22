import GroupCheckBoxContainer from "@/app/_components/used/checkbox/group/groupCheckBoxContainer";
import GroupCheckBoxContent from "@/app/_components/used/checkbox/group/groupCheckBoxContent";
import { CheckBoxHandlerProps } from "@/app/_components/used/checkbox/single/checkbox";
import { primitive } from "@/app/_types/primitive";
import React, { ReactNode, useEffect } from "react";

// 체크박스 그룹 옵션
export interface GroupCheckBoxOption {
    label: ReactNode;
    value: string | number;
    // checked:boolean;
}

// 체크박스 그룹 프롭스
interface GroupCheckBoxProps {
    direction?: "row" | "col"; // 방향
    options: GroupCheckBoxOption[]; // 체크박스 그룹 옵션
    onChange: (value: primitive[]) => void; // 체크박스 그룹 변경 핸들러
    className?: string;
    isMultiSelect?: boolean; // 다중 선택 가능 여부
    tabIndex?: number;
}

// 체크박스 그룹 컴포넌트
function GroupCheckBox({
    direction = "col",
    options,
    onChange,
    isMultiSelect = true, // 기본 다중 선택 가능
    tabIndex = 0,
    className,
}: GroupCheckBoxProps) {
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
        if (value.checked) {
            setCheckedList((prev) =>
                Array.from(new Set([...prev, value.value])),
            );
        } else {
            setCheckedList((prev) =>
                prev.filter((v) => v !== value.value),
            );
        }
    }

    useEffect(() => {
        onChange(checkedList);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [checkedList]);

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
                    checkedList={checkedList}
                />
            ))}
        </GroupCheckBoxContainer>
    );
}

export default GroupCheckBox;
