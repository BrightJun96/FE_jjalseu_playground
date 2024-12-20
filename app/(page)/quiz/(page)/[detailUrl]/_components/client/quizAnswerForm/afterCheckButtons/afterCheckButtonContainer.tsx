import React from 'react';

function AfterCheckButtonContainer({
    children
                                   }:{
    children: React.ReactNode
}) {
    return (
        <nav
            aria-label={"Quiz navigation"}
            className={"flex justify-center items-center gap-2 w-full"}>
            {children}
        </nav>
    );
}

export default AfterCheckButtonContainer;
