"use client"

import React from 'react';

/**
 * 공통 버튼
 */

interface IPrimaryButtonProps {
    text: string;
    onClick?: () => void;
    className?: string;
    type?: "button" | "submit" | "reset";
    disabled?: boolean;
    color: "primary" |'primarySecondary'//| "assistive" | "darkAssistive" | "alert"|"dark" | "whiteSub"|"alternative"|"border";
}

const PrimaryButton = ({text,onClick,className,disabled,color}:IPrimaryButtonProps) => {

    const colors = {
        primary:
            "bg-primary-normal text-white hover:bg-primary-dark disabled:bg-primary-disabled",
        primarySecondary: "bg-primary-secondary-normal text-white hover:bg-primary-secondary-dark",
        // assistive: "bg-achromatic-assistive text-achromatic-white ",
        // darkAssistive:
        //     "bg-achromatic-darkAssistive text-achromatic-alternative  hover:text-achromatic-white",
        // alert:
        //     "bg-alert-normal text-achromatic-white",
        // dark:"bg-achromatic-dark text-achromatic-white ",
        // whiteSub:"bg-achromatic-whiteSub text-achromatic-assistive",
        // alternative:"bg-achromatic-alternative text-achromatic-darkAssistive",
        // border:"border-[1px] border-achromatic-alternative text-achromatic-dark"
    };
    return (
        <button

            className={`${colors[color]} rounded-[8px] px-[16px] text-menu flex justify-center items-center min-w-[84px] h-[32px]  ${className}`}
            onClick={onClick}
            disabled={disabled}
        >
            <span>{text}</span>
        </button>
    );
};

export default PrimaryButton;
