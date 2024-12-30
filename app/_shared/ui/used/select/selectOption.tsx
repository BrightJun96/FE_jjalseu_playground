import { primitive } from "@/app/_shared/types/primitive";
import React from "react";

// 셀렉트 옵션 컴포넌트
function SelectOption({
    children,
    value,
}: {
    children: React.ReactNode;
    value: primitive;
}) {
    return (
        <option value={value.toString()}>{children}</option>
    );
}

export default SelectOption;
