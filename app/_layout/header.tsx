"use client"

import React from 'react';
import Link from "next/link";
import {usePathname} from "next/navigation";
import PrimaryButton from "@/app/_components/button/primaryButton";

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
        {
            title: "코드 템플릿",
            link: "codeTemplate",
        },
        {
            title: "스터디",
            link: "study",
        },
    ]


    // 현재 페이지에 맞는 클래스명
    function getActiveClass(link:string){
        if(pathname===`/${link}`){
            return "bg-primary-normal text-white hover:bg-primary-dark "
        }
    }
    return (
        <header className={"w-full h-[96px] bg-background flex justify-between items-center px-[32px]"}>
            {/*로고,메뉴*/}
            <div className={"flex gap-28 items-center"}>
                <Link href={"/"}>
                <h1 className={"text-primary-normal text-title1"}>Dev Lounge</h1>
                </Link>
                <nav>
                    <ul className={"flex gap-3 text-title3Normal text-primary-normal"}>
                        {NAVMENU.map((item, index) => (
                            <li key={index} className={`cursor-pointer px-[12px] flex justify-center items-center w-[100px]  h-[32px] rounded-[8px] hover:bg-primary-dark hover:text-white ${getActiveClass(item.link)}`}>
                                <Link href={`/${item.link}`}>{item.title}</Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
            {/* 로그인,회원가입 & 프로필 */}
            <div className={"flex gap-3 items-center"}>
                <Link href={"/login"}>
                    <PrimaryButton text={"로그인"} color={"primary"} />
                </Link>
                <Link href={"/signup"}>
                    <PrimaryButton text={"회원가입"} color={"primarySecondary"} />
                </Link>

            </div>
        </header>
    );
};

export default Header;
