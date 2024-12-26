import React from "react";

function SubTitle({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <h2 className={"text-title3Bold"}>{children}</h2>
    );
}

export default SubTitle;
