import Infos from "@/app/(page)/portfolio/_ui/infos";
import Menus from "@/app/(page)/portfolio/_ui/menus";
import React from "react";

/**
 * 사이드 네비게이션
 */
function SideNavigation() {
    return (
        <aside
            className={
                "lg:w-[250px] flex flex-col justify-between shadow bg-gray-50 h-full py-[50px] fixed top-0 left-0"
            }
        >
            <Menus />
            <Infos />
        </aside>
    );
}

export default SideNavigation;
