import React from "react";

/**
 * 내부 컨테이너(컨텐츠를 담는 컨테이너)
 */
const InnerContainer = ({
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string;
}) => {
    return (
        <div
            className={`flex flex-col justify-center items-center 
        p-[20px] bg-white border-[1px] border-[#E0E0E0] 
        lg:min-w-[700px] lg:max-w-[1000px] lg:min-h-[700px] lg:max-h-[800px]
        md:w-full md:h-full
        sm:mt-[40px] 
        rounded-primary 
        shadow-sm 
        overflow-y-scroll
        ${className}`}
        >
            {children}
        </div>
    );
};

export default InnerContainer;
