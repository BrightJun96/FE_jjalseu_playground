"use client";

import React, { ReactNode } from "react";
import CheckedSVG from "@/app/_components/checkbox/_icons/checkedSVG";
import NonCheckedSVG from "@/app/_components/checkbox/_icons/nonCheckedSVG";

interface CheckboxProps {
  checked: boolean;
  label: ReactNode | string;
  className?: string;
  onClick?: () => void;
}

const Checkbox = ({ checked, label, className, onClick }: CheckboxProps) => {
  function handleClick(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    e.preventDefault();
    if (onClick) {
      onClick();
    }
  }

  return (
    <button className={"flex gap-[12px]"} type={"button"} onClick={handleClick}>
      {checked ?<div className={"w-[24px] h-[24px]"}> <CheckedSVG /></div> :<div className={"w-[24px] h-[24px]"}> <NonCheckedSVG /></div>}
      {<div className={`text-menu text-achromatic-dark lg:text-title3Bold ${className}`}>{label}</div>}
    </button>
  );
};

export default Checkbox;
