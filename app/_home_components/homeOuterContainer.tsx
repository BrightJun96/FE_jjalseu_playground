import React from 'react';

// 메인 외부 컨테이너
function HomeOuterContainer({
    children
                            }:{
    children: React.ReactNode
}) {
    return (
        <div
            className="font-[family-name:var(--font-geist-sans)] w-full h-full
    lg:pt-[250px] md:pt-[150px] sm:pt-[100px]"
        >
            {children}
        </div>
    );
}

export default HomeOuterContainer;
