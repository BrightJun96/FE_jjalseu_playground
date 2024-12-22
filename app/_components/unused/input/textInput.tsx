"use client";

import React, { HTMLInputTypeAttribute } from "react";
import WarnIcon from "@/app/_components/unused/input/icons/warnIcon";

/**
 * TextInputProps는 TextInput 컴포넌트의 props를 정의합니다.

 */
interface TextInputProps {
    placeholder?: string;
    isReadOnly?: boolean;
    isDisabled?: boolean;
    value?: string | number;
    onChange?: (value: string) => void;
    label?: string;
    includeButton?: React.ReactNode;
    validation?: boolean;
    validationMessage?: string;
    type?: HTMLInputTypeAttribute;
    className?: string;
    labelClassName?: string;
    maxLength?: number;
    max?: number;
}

const TextInput = ({
    value,
    placeholder,
    isReadOnly,
    isDisabled,
    onChange,
    label = "라벨",
    includeButton,
    validation,
    validationMessage,
    type = "text",
    className,
    labelClassName,
    maxLength,
}: TextInputProps) => {
    function handleChange(
        e: React.ChangeEvent<HTMLInputElement>,
    ) {
        if (onChange) onChange(e.target.value);
    }

    return (
        <div
            className={`flex items-center gap-[24px] sm:flex-col sm:gap-[12px] md:gap-[12px] ${className}`}
        >
            {/*라벨*/}
            <label
                className={`w-full whitespace-nowrap text-title3Normal text-black sm:text-menu md:text-menu min-w-[160px] ${labelClassName}`}
            >
                {label}
            </label>
            <div
                className={
                    "flex w-full flex-col gap-[8px] border-[1px] border-gray-100 rounded-primary"
                }
            >
                {/*인풋*/}
                <div
                    className={
                        "flex h-[48px] w-full items-center justify-between rounded-[12px]  bg-white px-[12px] py-[14px] text-black focus-within:border-primary-light hover:border-primary-light sm:w-full md:w-full"
                    }
                >
                    <input
                        type={type}
                        value={value}
                        placeholder={placeholder}
                        readOnly={isReadOnly}
                        disabled={isDisabled}
                        onChange={handleChange}
                        className={
                            "h-full w-full bg-white text-black outline-none text-menu font-[400]"
                        }
                        {...(maxLength && { maxLength })}
                        // rounded-[10px] px-[16px] outline-none focus:ring-2 focus:ring-global-alternative focus:ring-opacity-50 focus:ring-offset-2 focus:ring-offset-achromatic-darkAssistive focus:ring-offset-opacity-50
                    />
                    {includeButton && includeButton}
                    {validation && <WarnIcon />}
                </div>
                {validation && (
                    <p
                        className={
                            "text-body-s text-alert-normal sm:text-body md:text-body"
                        }
                    >
                        {validationMessage}
                    </p>
                )}
            </div>
        </div>
    );
};

export default TextInput;
