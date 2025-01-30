"use client";

import PATHS from "@/app/_shared/constants/paths";
import PrimaryLink from "@/app/_shared/ui/used/link/primaryLink";
import { usePathname } from "next/navigation";
import React from "react";

// 네비게이션
function Navigation() {
    const pathname = usePathname();
    // 현재 페이지에 맞는 클래스명
    function getActiveClass(link: string) {
        if (pathname === `/${link}`) {
            return "bg-primary-normal text-black hover:bg-primary-dark ";
        }
    }

    // 네비게이션 메뉴
    const NAVMENU = [
        {
            title: "퀴즈",
            link: PATHS.QUIZ,
        },
        // {
        //     title: "코드 템플릿",
        //     link: "code-template",
        // },
    ];

    return (
        <nav>
            <ul
                className={
                    "flex gap-3 text-title3Normal text-primary-normal"
                }
            >
                {NAVMENU.map((item, index) => (
                    <li
                        key={index}
                        className={`cursor-pointer px-[12px] flex justify-center items-center w-[100px]  h-[32px] rounded-[8px] hover:bg-primary-dark hover:text-black ${getActiveClass(item.link)}`}
                    >
                        <PrimaryLink
                            color={"none"}
                            href={`/${item.link}`}
                        >
                            {item.title}
                        </PrimaryLink>
                    </li>
                ))}
            </ul>
        </nav>
    );
}

export default Navigation;
