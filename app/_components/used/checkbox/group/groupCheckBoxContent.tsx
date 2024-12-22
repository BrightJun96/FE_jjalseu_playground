import { GroupCheckBoxOption } from "@/app/_components/used/checkbox/group/groupCheckBox";
import Checkbox, {
    CheckBoxHandlerProps,
} from "@/app/_components/used/checkbox/single/checkbox";
import { primitive } from "@/app/_types/primitive";
import React from "react";

interface GroupCheckBoxContentProps {
    index: number;
    tabIndex: number;
    value: GroupCheckBoxOption;
    groupCheckHandler: (
        value: CheckBoxHandlerProps,
    ) => void;
    checkedList: primitive[];
}

// 그룹 체크박스 컨텐츠
function GroupCheckBoxContent({
    index,
    tabIndex,
    value,
    groupCheckHandler,
    checkedList,
}: GroupCheckBoxContentProps) {
    return (
        <li className={`flex items-center gap-1`}>
            <span>{index + 1}.</span>
            <Checkbox
                tabIndex={tabIndex}
                checked={checkedList.includes(value.value)}
                label={value.label}
                value={value.value}
                onChange={groupCheckHandler}
            />
        </li>
    );
}

export default GroupCheckBoxContent;
