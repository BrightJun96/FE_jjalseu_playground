import { primitive } from "@/app/_shared/types/primitive";
import { GroupCheckBoxOption } from "@/app/_shared/ui/used/checkbox/group/groupCheckBox";
import Checkbox, {
    CheckBoxHandlerProps,
} from "@/app/_shared/ui/used/checkbox/single/checkbox";
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
