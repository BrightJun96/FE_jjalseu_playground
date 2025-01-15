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
            <div className={"h-full flex flex-col"}>
                {children}
            </div>
        </>
    );
}

export default Layout;
