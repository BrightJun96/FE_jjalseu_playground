import React, { ReactNode } from "react";

function ConceptCategory({
    children,
}: {
    children: ReactNode;
}) {
    return (
        <section className={"flex gap-2"}>
            {children}
        </section>
    );
}

export default ConceptCategory;
