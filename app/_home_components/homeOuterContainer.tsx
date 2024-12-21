import React from "react";

// 메인 외부 컨테이너
function HomeOuterContainer({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div
            className="w-full h-full
        lg:pt-[250px] md:pt-[150px] sm:pt-[100px]"
        >
            {children}
        </div>
    );
}

export default HomeOuterContainer;
