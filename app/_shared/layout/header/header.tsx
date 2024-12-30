import HeaderContainer from "@/app/_shared/layout/header/components/headerContainer";
import Logo from "@/app/_shared/layout/header/components/logo";
import Navigation from "@/app/_shared/layout/header/components/navigation";
import React from "react";

/**
 * 헤더
 */
const Header = () => {
    return (
        <HeaderContainer>
            {/*로고*/}
            <Logo />
            {/*네비게이션*/}
            <Navigation />
        </HeaderContainer>
    );
};

export default Header;
