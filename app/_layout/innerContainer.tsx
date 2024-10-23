import React from 'react';

/**
 * 내부 컨테이너(컨텐츠를 담는 컨테이너)
 */
const InnerContainer = ({children,className}:{
    children: React.ReactNode,
    className?: string
}) => {
    return (
        <section className={`flex flex-col justify-center items-center 
        p-[20px] bg-white border-[1px] border-[#E0E0E0] 
        min-w-[700px] max-w-[1000px] min-h-[700px] max-h-[800px]
        rounded-primary 
        shadow-sm 
        overflow-y-scroll
        ${className}`}>
            {children}
        </section>
    );
};

export default InnerContainer;
