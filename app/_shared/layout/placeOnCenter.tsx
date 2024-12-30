import React from 'react';

// 중앙 정렬 컴포넌트
function PlaceOnCenter({
    children
                       }:{
    children: React.ReactNode
}) {
    return (
        <div
            className={"flex justify-center items-center"}
        >
            {children}
        </div>
    );
}

export default PlaceOnCenter;
