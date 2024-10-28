"use client"

import React from 'react';

// 모달 컨텐츠 컨테이너
function ModalContentContainer({
    children
                               }:{
    children?: React.ReactNode;
}) {
    return (
        <div
            className={"relative flex justify-between min-h-[180px] w-[320px] flex-col rounded-[12px] bg-white p-[24px] text-achromatic-dark shadow-lg sm:w-[280px]"}
        >
            {children}
        </div>
    );
}

export default ModalContentContainer;
