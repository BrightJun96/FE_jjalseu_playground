"use client";

import React, { ReactNode } from "react";

export interface CheckBoxHandlerProps {
    checked: boolean;
    value: string | number;
}

interface CheckboxProps {
    checked: boolean;
    label: ReactNode;
    value: string | number;
    onChange: (value: CheckBoxHandlerProps) => void;
    name?: string;
    tabIndex?: number;
}

// 체크박스 컴포넌트
function Checkbox({
    checked,
    label,
    value,
    onChange,
    name = "options",
    tabIndex = 0,
}: CheckboxProps) {
    return (
        <label
            className={
                "w-full flex cursor-pointer gap-2 items-center"
            }
        >
            <input
                name={name}
                tabIndex={tabIndex}
                className={"accent-orange-600 w-5 h-5"}
                value={value}
                type={"checkbox"}
                checked={checked}
                onChange={(e) =>
                    onChange({
                        checked: e.target.checked,
                        value,
                    })
                }
            />
            {label}
        </label>
    );
}

export default Checkbox;
