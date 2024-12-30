import { primitive } from "@/app/_shared/types/primitive";
import React from "react";

// 체크박스 라벨 컴포넌트
function CheckboxLabel({
    children,
    value,
}: {
    children: React.ReactNode;
    value: primitive;
}) {
    return (
        <label
            className={
                "w-full flex cursor-pointer gap-2 items-center"
            }
            htmlFor={`checkbox-${value}`}
        >
            {children}
        </label>
    );
}

export default CheckboxLabel;
