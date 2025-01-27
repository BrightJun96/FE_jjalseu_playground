import SideNavigation from "@/app/(page)/portfolio/_ui/sideNavigation";
import React from "react";

function Layout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <SideNavigation />
            <div
                className={
                    "absolute lg:left-[250px] w-[calc(100%-250px)] h-full flex flex-col lg:px-[200px]"
                }
            >
                {children}
            </div>
        </>
    );
}

export default Layout;
