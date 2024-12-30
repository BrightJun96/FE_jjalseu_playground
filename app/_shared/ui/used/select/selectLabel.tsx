import React from "react";

// 셀렉트 레이블 컴포넌트
function SelectLabel({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <label
            htmlFor={"select"}
            className={"text-title3Normal px-2"}
        >
            {children}
        </label>
    );
}

export default SelectLabel;
