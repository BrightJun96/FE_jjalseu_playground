import React from 'react';

// 메인 내부 컨테이너
function HomeInnerContainer({
    children
                            }:{
    children: React.ReactNode
}) {
    return (
        <section
            className={"flex justify-center items-center flex-col gap-[40px]"}
        >
            {children}
        </section>
    );
}

export default HomeInnerContainer;
