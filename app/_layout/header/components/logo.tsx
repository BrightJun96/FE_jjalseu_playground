import PrimaryLink from "@/app/_components/used/link/primaryLink";
import PATHS from "@/app/_constants/paths";
import React from "react";

// 로고
function Logo() {
    return (
        <h1>
            <PrimaryLink
                href={PATHS.HOME}
                color={"none"}
                className={
                    "text-primary-normal text-title1 font-bold"
                }
            >
                코아
            </PrimaryLink>
        </h1>
    );
}

export default Logo;
