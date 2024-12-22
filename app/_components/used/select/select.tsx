import SelectContainer from "@/app/_components/used/select/selectContainer";
import SelectLabel from "@/app/_components/used/select/selectLabel";
import SelectLayout from "@/app/_components/used/select/selectLayout";
import SelectOption from "@/app/_components/used/select/selectOption";
import { primitive } from "@/app/_types/primitive";
import React, { ReactNode } from "react";

// 셀렉트 프롭스
interface SelectProps {
    label: ReactNode; //
    options: Option[]; // 옵션
    name: string; // 이름
    tabIndex?: number; // 탭 인덱스
}

// 옵션 타입
interface Option {
    text: string;
    value: primitive;
}

// 셀렉트 컴포넌트
function Select({
    label,
    options,
    name,
    tabIndex = 0,
}: SelectProps) {
    return (
        <SelectLayout>
            <SelectLabel>{label}</SelectLabel>
            <SelectContainer
                tabIndex={tabIndex}
                name={name}
            >
                {options.map((option, index) => (
                    <SelectOption
                        key={index}
                        value={option.value}
                    >
                        {option.text}
                    </SelectOption>
                ))}
            </SelectContainer>
        </SelectLayout>
    );
}

export default Select;
