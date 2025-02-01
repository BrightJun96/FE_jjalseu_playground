import PATHS from "@/app/_shared/constants/paths";
import PrimaryLink from "@/app/_shared/ui/used/link/primaryLink";
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
                TheDevLounge
            </PrimaryLink>
        </h1>
    );
}

export default Logo;
