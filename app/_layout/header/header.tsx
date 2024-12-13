"use client"

import PrimaryLink from "@/app/_components/link/primaryLink";
import {usePathname} from "next/navigation";
import React from 'react';

/**
 * 헤더
 */
const Header = () => {
    const pathname = usePathname();


    // 네비게이션 메뉴
    const NAVMENU = [
        {
            title: "퀴즈",
            link: "quiz",
        },
        // {
        //     title: "코드 템플릿",
        //     link: "codeTemplate",
        // },
        // {
        //     title: "스터디",
        //     link: "study",
        // },
    ]


    // 현재 페이지에 맞는 클래스명
    function getActiveClass(link:string){
        if(pathname===`/${link}`){
            return "bg-primary-normal text-white hover:bg-primary-dark "
        }
    }
    return (
        <header className={"w-full h-[80px] md:h-[60px] sm:h-[60px] bg-headerBackground flex justify-between items-center lg:px-container md:px-10 sm:px-10"}>
            {/*로고,메뉴*/}
            <div className={"flex gap-10 items-center"}>
                <PrimaryLink
                    href={"/"}
                    color={"none"}
                    className={"text-primary-normal text-title1 font-bold"}
                >
                   코아
                </PrimaryLink>
                <nav>
                    <ul className={"flex gap-3 text-title3Normal text-primary-normal"}>
                        {NAVMENU.map((item, index) => (
                            <li key={index} className={`cursor-pointer px-[12px] flex justify-center items-center w-[100px]  h-[32px] rounded-[8px] hover:bg-primary-dark hover:text-white ${getActiveClass(item.link)}`}>
                                <PrimaryLink
                                    color={"none"}
                                    href={`/${item.link}`}
                                >{item.title}</PrimaryLink>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
            {/* 로그인,회원가입 & 프로필 */}
            {/*<AuthContainer/>*/}
        </header>
    );
};

export default Header;
