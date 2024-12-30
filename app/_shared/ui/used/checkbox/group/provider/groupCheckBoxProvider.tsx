import { primitive } from "@/app/_shared/types/primitive";
import GroupCheckBoxContext from "@/app/_shared/ui/used/checkbox/group/context/groupCheckBoxContext";
import React from "react";

// 그룹 체크박스 컨텍스트 제공자
function GroupCheckBoxProvider({
    children,
}: {
    children: React.ReactNode;
}) {
    // 체크박스 그룹 상태
    const [checkedList, setCheckedList] = React.useState<
        primitive[]
    >([]);

    return (
        <GroupCheckBoxContext.Provider
            value={{ checkedList, setCheckedList }}
        >
            {children}
        </GroupCheckBoxContext.Provider>
    );
}

export default GroupCheckBoxProvider;
