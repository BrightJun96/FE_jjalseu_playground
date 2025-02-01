import React from "react";

// 메인 타이틀
function HomeTitle({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <h1
            className={
                "lg:text-headline3 md:text-title1 sm:text-title1 text-center"
            }
        >
            {children}
        </h1>
    );
}

export default HomeTitle;
