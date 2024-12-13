import {Link} from 'next-view-transitions';
import React, {ReactNode} from 'react';

/**
 * 공통 링크 컴포넌트
 */

interface PrimaryLinkProps {
    href: string;
    children: ReactNode;
    className?: string;
    color?: "primary" | "primarySecondary"|"none";
}

function PrimaryLink({
                            href,
                            children,
    color = "primary",
    className = ""
                     }: PrimaryLinkProps) {
    const colors = {
        primary: "bg-primary-normal text-white hover:bg-primary-dark",
        primarySecondary: "bg-primary-secondary-normal text-white hover:bg-primary-secondary-dark",
        none:""
    };

    return (
        <Link
            className={`
            ${colors[color]} rounded-[8px] px-[16px] text-menu flex justify-center items-center min-w-[84px] h-[32px] ${className}`}
            href={href}
        >
            {children}
        </Link>
    );
}

export default PrimaryLink;
