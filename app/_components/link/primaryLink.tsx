import { Link } from "next-view-transitions";
import React, { forwardRef, ReactNode } from "react";

/**
 * 공통 링크 컴포넌트
 */

interface PrimaryLinkProps {
    href: string;
    children: ReactNode;
    className?: string;
    color?: "primary" | "primarySecondary" | "none";
    tabIndex?: number;
}

const PrimaryLink = forwardRef<
    HTMLAnchorElement,
    PrimaryLinkProps
>(
    (
        {
            href,
            children,
            color = "primary",
            className = "",
        },
        ref,
    ) => {
        const colors = {
            primary:
                "bg-primary-normal text-black hover:bg-primary-dark",
            primarySecondary:
                "bg-primary-secondary-normal text-white hover:bg-primary-secondary-dark",
            none: "",
        };

        return (
            <Link
                className={`
                ${colors[color]} rounded-[8px] px-[16px] text-menu flex justify-center items-center min-w-[84px] h-[32px] ${className}`}
                href={href}
                ref={ref} // ref 전달
            >
                {children}
            </Link>
        );
    },
);

PrimaryLink.displayName = "PrimaryLink"; // React DevTools에서 이름 표시를 위해 설정

export default PrimaryLink;
