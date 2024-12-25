import React from "react";

// 에러 타이틀
function ErrorTitle({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <h1 className={"text-title2Bold text-red-600"}>
            {children}
        </h1>
    );
}

export default ErrorTitle;
