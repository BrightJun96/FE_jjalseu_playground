import React from "react";

// 메인 타이틀
function HomeTitle({ title }: { title: string }) {
    return (
        <h1
            className={
                "lg:text-headline2 md:text-headline3 sm:text-headline3 text-center"
            }>
            {title}
        </h1>
    );
}

export default HomeTitle;
