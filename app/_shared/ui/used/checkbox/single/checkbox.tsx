"use client";

import CheckboxLabel from "@/app/_shared/ui/used/checkbox/single/checkboxLabel";
import CheckInput from "@/app/_shared/ui/used/checkbox/single/checkInput";
import CheckText from "@/app/_shared/ui/used/checkbox/single/checkText";

import React, { ReactNode } from "react";

// 체크박스 핸들러 프롭스
export interface CheckBoxHandlerProps {
    checked: boolean;
    value: string | number;
}

// 체크박스 프롭스
export interface CheckboxProps {
    checked: boolean; // 체크 여부
    label: ReactNode; // 라벨
    value: string | number; // 값
    onChange: (value: CheckBoxHandlerProps) => void; // 체크박스 변경 핸들러
    name?: string; // 이름
    tabIndex?: number; // 탭 인덱스
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
        <CheckboxLabel value={value}>
            <CheckInput
                checked={checked}
                value={value}
                onChange={onChange}
                name={name}
                tabIndex={tabIndex}
            />
            <CheckText>{label}</CheckText>
        </CheckboxLabel>
    );
}

export default Checkbox;
