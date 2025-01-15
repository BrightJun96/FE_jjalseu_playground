import { StringUtils } from "@/app/_shared/utils/class/StringUtils";
import React from "react";

function Template({
    children,
    className = "",
    id,
    headline = "headline",
}: {
    children: React.ReactNode;
    className?: string;
    id?: string;
    headline?: string;
}) {
    return (
        <div
            id={id}
            className={`min-h-screen py-[100px] ${className}`}
        >
            <span className={"text-headline2"}>
                {StringUtils.capitalizeFirstLetter(
                    headline,
                )}
            </span>
            <hr />
            {children}
        </div>
    );
}

export default Template;
