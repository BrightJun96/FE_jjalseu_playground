import PrimaryLink from "@/app/_components/link/primaryLink";
import React from 'react';

// 로고
function Logo() {
    return (
        <h1>
            <PrimaryLink
                href={"/"}
                color={"none"}
                className={"text-primary-normal text-title1 font-bold"}
            >
                코아
            </PrimaryLink>
        </h1>
    );
}

export default Logo;
