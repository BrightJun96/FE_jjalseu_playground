import { StringUtils } from "@/app/_shared/utils/class/StringUtils";
import { Link } from "next-view-transitions";
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
            className={`min-h-screen py-[50px] ${className}`}
        >
            <Link
                href={`#${headline}`}
                className={"text-headline2"}
            >
                {StringUtils.capitalizeFirstLetter(
                    headline,
                )}
            </Link>
            <hr />
            {children}
        </div>
    );
}

export default Template;
