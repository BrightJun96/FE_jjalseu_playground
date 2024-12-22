import React from "react";

// 체크박스 라벨 컴포넌트
function CheckboxLabel({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <label
            className={
                "w-full flex cursor-pointer gap-2 items-center"
            }
            htmlFor={"checkbox"}
        >
            {children}
        </label>
    );
}

export default CheckboxLabel;
