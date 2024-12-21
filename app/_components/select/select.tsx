"use client";

import CheckIcon from "@/app/_components/select/_icons/checkIcon";
import DropIcon from "@/app/_components/select/_icons/dropIcon";
import React, { useEffect, useRef, useState } from "react";

interface Option {
    text: string;
    value: string | number | boolean;
}

interface SelectProps {
    options: Option[];
    handleOptionChange?: (
        value: string | number | boolean,
    ) => void;
    label?: string;
    tabIndex?: number;
}

/**
 * 셀렉트박스
 */
const Select = ({
    options,
    handleOptionChange,
    label,
    tabIndex = 0,
}: SelectProps) => {
    const [isClicked, setIsClicked] = useState(false);
    const [selectedOption, setSelectedOption] =
        useState<Option>(options[0]);
    const ref = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                ref.current &&
                !ref.current.contains(
                    event.target as HTMLElement,
                )
            ) {
                setIsClicked(false);
            }
        };

        document.addEventListener(
            "mousedown",
            handleClickOutside,
        );
        return () => {
            document.removeEventListener(
                "mousedown",
                handleClickOutside,
            );
        };
    }, []);
    return (
        <div
            ref={ref}
            className="relative sm:w-full md:w-full "
        >
            <div className={"flex flex-col gap-2"}>
                {/*라벨*/}
                {label && (
                    <label className="text-title3Normal px-2">
                        {label}
                    </label>
                )}
                {/*선택버튼*/}
                <button
                    type="button"
                    tabIndex={tabIndex}
                    className="flex h-[48px] w-full items-center justify-between gap-[12px] rounded-[12px] bg-white px-[12px] py-[6px] text-black sm:w-full md:w-full border-[1px] border-gray-200"
                    onClick={() => setIsClicked(!isClicked)}
                >
                    <span className={"text-body"}>
                        {selectedOption.text}
                    </span>
                    <DropIcon
                        rotate={isClicked ? 180 : 0}
                    />
                </button>
            </div>
            {/*옵션목록*/}
            <div
                className={`absolute right-0 z-10 
        mt-2 min-w-[120px] rounded-[12px] bg-white text-black shadow-primary outline-0 border-[1px] border-gray-100 ${isClicked ? "block" : "hidden"}`}
            >
                <div
                    className="py-1"
                    role="none"
                >
                    <ul>
                        {options.map((option, index) => (
                            <li
                                key={index}
                                className="mx-[4px] rounded-[8px] text-[14px] text-black hover:bg-background"
                            >
                                <button
                                    tabIndex={tabIndex}
                                    type={"button"}
                                    className={
                                        "flex h-fit w-full justify-between px-[12px] py-[8px]"
                                    }
                                    onClick={() => {
                                        setSelectedOption(
                                            option,
                                        );
                                        setIsClicked(false);
                                        if (
                                            handleOptionChange
                                        ) {
                                            handleOptionChange(
                                                option.value,
                                            );
                                        }
                                    }}
                                >
                                    <span>
                                        {option.text}
                                    </span>
                                    {option.value ===
                                        selectedOption.value && (
                                        <CheckIcon />
                                    )}
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Select;
