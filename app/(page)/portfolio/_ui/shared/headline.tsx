import React from "react";

function Headline({
    children,
}: {
    children: React.ReactNode;
}) {
    return <h2 className={"text-headline3"}>{children}</h2>;
}

export default Headline;
