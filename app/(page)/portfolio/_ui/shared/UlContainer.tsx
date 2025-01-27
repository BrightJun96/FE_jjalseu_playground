import React from "react";

function UlContainer({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <ul
            className={"list-disc flex flex-col gap-3 py-3"}
        >
            {children}
        </ul>
    );
}

export default UlContainer;
