import { CheckboxProps } from "@/app/_shared/ui/used/checkbox/single/checkbox";
import React from "react";

// 체크박스 인풋 컴포넌트
function CheckInput({
    checked,
    value,
    onChange,
    name,
    tabIndex,
}: Omit<CheckboxProps, "label">) {
    // 체크박스 변경 핸들러
    function handleChange(
        e: React.ChangeEvent<HTMLInputElement>,
    ) {
        onChange({
            checked: e.target.checked,
            value,
        });
    }

    return (
        <input
            id={`checkbox-${value}`}
            name={name}
            tabIndex={tabIndex}
            className={"accent-orange-600 w-5 h-5"}
            value={value}
            type={"checkbox"}
            checked={checked}
            onChange={handleChange}
        />
    );
}

export default CheckInput;
