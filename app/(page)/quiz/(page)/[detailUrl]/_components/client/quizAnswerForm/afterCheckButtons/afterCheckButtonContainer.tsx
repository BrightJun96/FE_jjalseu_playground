import React from 'react';

function AfterCheckButtonContainer({
    children
                                   }:{
    children: React.ReactNode
}) {
    return (
        <div className={"flex justify-center items-center gap-2 w-full"}>
            {children}
        </div>
    );
}

export default AfterCheckButtonContainer;
