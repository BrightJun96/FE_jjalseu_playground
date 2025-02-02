import React, { ReactNode } from "react";

function ConceptDescription({
    children,
}: {
    children: ReactNode;
}) {
    return <p className={"text-body"}>{children}</p>;
}

export default ConceptDescription;
