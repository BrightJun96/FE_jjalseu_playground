import React from "react";

// 셀렉트 레이아웃 컴포넌트
function SelectLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className={"w-full flex flex-col gap-4"}>
            {children}
        </div>
    );
}

export default SelectLayout;
