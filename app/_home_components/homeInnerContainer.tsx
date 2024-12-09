import React from 'react';

// 메인 내부 컨테이너
function HomeInnerContainer({
    children
                            }:{
    children: React.ReactNode
}) {
    return (
        <div
            className={"flex justify-center items-center flex-col gap-[40px]"}
        >
            {children}
        </div>
    );
}

export default HomeInnerContainer;
