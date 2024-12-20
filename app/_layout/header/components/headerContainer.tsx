import React from 'react';

// 헤더 컨테이너
function HeaderContainer({
    children,
                         }:{
    children: React.ReactNode;
}) {
    return (
        <header
            className={"w-full h-[80px] md:h-[60px] sm:h-[60px] bg-headerBackground flex gap-10 items-center lg:px-container md:px-10 sm:px-10"}
        >
            {children}
        </header>
    );
}

export default HeaderContainer;
