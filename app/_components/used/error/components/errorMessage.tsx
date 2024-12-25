import React from "react";

// 에러 메시지
function ErrorMessage({
    children,
}: {
    children: React.ReactNode;
}) {
    return <p className={"text-red-500"}>{children}</p>;
}

export default ErrorMessage;
