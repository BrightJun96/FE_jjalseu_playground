import React from 'react';

// 메인 컨테이너(루트 레이아웃 내부의 컨테이너)
function MainContainer({
    children,
                       }:{
    children: React.ReactNode;
}) {
    return (
        <main
            className={"w-full lg:h-[calc(100vh-80px)] md:h-[calc(100vh-60px)] sm:h-[calc(100vh-60px)] lg:flex lg:justify-center lg:items-center md:flex md:justify-center md:items-center sm:px-[10px]"}
        >
            {children}
        </main>
    );
}

export default MainContainer;
