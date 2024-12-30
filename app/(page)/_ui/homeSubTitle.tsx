import React from 'react';

// 메인 부제
function HomeSubTitle({
    subTitle
                         }:{
    subTitle: string
}) {
    return (
        <h2
            className={"lg:text-headline3 md:text-title2Bold sm:text-title2Bold"}
        >
            {subTitle}
        </h2>
    );
}

export default HomeSubTitle;
