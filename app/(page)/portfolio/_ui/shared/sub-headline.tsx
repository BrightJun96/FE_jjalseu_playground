import React from "react";

function SubHeadline({
    children,
}: {
    children: React.ReactNode;
}) {
    return <h3 className={"text-title1"}>{children}</h3>;
}

export default SubHeadline;
