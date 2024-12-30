import React from "react";

// 체크박스 그룹 컨테이너
function GroupCheckBoxContainer({
    children,
    direction = "col",
    containerClassName,
}: {
    children: React.ReactNode;
    containerClassName?: string;
    direction?: "row" | "col";
}) {
    return (
        <ul
            className={`flex ${direction === "col" ? "flex-col" : "flex-row"}
            w-full
            ${containerClassName}
            `}
        >
            {children}
        </ul>
    );
}

export default GroupCheckBoxContainer;
