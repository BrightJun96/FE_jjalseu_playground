import React from "react";

function Container({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className={"h-full p-10 flex flex-col gap-4"}>
            {children}
        </div>
    );
}

export default Container;
