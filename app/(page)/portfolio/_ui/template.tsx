import React from "react";

function Template({
    children,
    className = "",
    id,
}: {
    children: React.ReactNode;
    className?: string;
    id?: string;
}) {
    return (
        <div
            id={id}
            className={`min-h-screen ${className}`}
        >
            {children}
        </div>
    );
}

export default Template;
