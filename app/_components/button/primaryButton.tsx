"use client"

import React from 'react';

/**
 * 공통 버튼
 */

interface IPrimaryButtonProps {
    children: React.ReactNode;
    onClick?: () => void;
    className?: string;
    type?: "button" | "submit" | "reset";
    disabled?: boolean;
    color: "primary" |'primarySecondary';
}

const PrimaryButton = ({children,onClick,className,disabled,color}:IPrimaryButtonProps) => {

    const colors = {
        primary: "bg-primary-normal text-white hover:bg-primary-dark disabled:bg-primary-disabled",
        primarySecondary: "bg-primary-secondary-normal text-white hover:bg-primary-secondary-dark",
    };
    return (
        <button
            className={`${colors[color]} rounded-[8px] px-[16px] text-menu flex justify-center items-center min-w-[84px] h-[32px]  ${className}`}
            onClick={onClick}
            disabled={disabled}
        >
         {children}
        </button>
    );
};

export default PrimaryButton;
