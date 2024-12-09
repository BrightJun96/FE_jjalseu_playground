import React from 'react';

// 메인 설명
function HomeDescription({
    description
                         }:{
    description: string
}) {
    return (
        <p
            className={"lg:text-headline3 md:text-title2Bold sm:text-title2Bold"}
        >
            {description}
        </p>
    );
}

export default HomeDescription;
