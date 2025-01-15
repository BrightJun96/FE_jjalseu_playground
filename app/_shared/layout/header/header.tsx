"use client";
import HeaderContainer from "@/app/_shared/layout/header/components/headerContainer";
import Logo from "@/app/_shared/layout/header/components/logo";
import Navigation from "@/app/_shared/layout/header/components/navigation";
import { StringUtils } from "@/app/_shared/utils/class/StringUtils";
import { usePathname } from "next/navigation";
import React from "react";

/**
 * 헤더
 */
const Header = () => {
    const pathname = usePathname();

    const portfolioPath =
        StringUtils.removeFirstChar(pathname) ===
        "portfolio";

    return (
        !portfolioPath && (
            <HeaderContainer>
                {/*로고*/}
                <Logo />
                {/*네비게이션*/}
                <Navigation />
            </HeaderContainer>
        )
    );
};

export default Header;
