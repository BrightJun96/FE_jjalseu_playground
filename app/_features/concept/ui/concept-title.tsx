import React, { ReactNode } from "react";

function ConceptTitle({
    children,
}: {
    children: ReactNode;
}) {
    return (
        <h2 className={"text-title3Bold"}>{children}</h2>
    );
}

export default ConceptTitle;
