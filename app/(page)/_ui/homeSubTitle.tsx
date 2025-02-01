import React from "react";

// 메인 부제
function HomeSubTitle({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <h2
            className={
                "lg:text-title1 md:text-title2Bold sm:text-title2Bold text-center"
            }
        >
            {children}
        </h2>
    );
}

export default HomeSubTitle;
