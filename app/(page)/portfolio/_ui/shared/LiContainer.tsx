import React from "react";

function LiContainer({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <article className={"flex flex-col gap-1 mt-3"}>
            {children}
        </article>
    );
}

export default LiContainer;
