"use client";

import Template from "@/app/(page)/portfolio/_ui/template";
import Career from "@/app/(page)/portfolio/_ui/work/career";
import {
    useMotionValueEvent,
    useScroll,
} from "framer-motion";
import React, { useRef, useState } from "react";

function Work() {
    const ref = useRef<HTMLDivElement | null>(null);

    const [isSticky, setIsSticky] =
        useState<boolean>(false);
    const { scrollY } = useScroll();

    // 스크롤 변화 감지
    useMotionValueEvent(scrollY, "change", (latest) => {
        if (ref.current) {
            const scrollStart = ref.current.offsetTop;

            const height = ref.current.offsetHeight;
            const scrollEnd = scrollStart + height;

            // console.log("scrollStart :", scrollStart);
            // console.log("latest :", latest);
            // console.log("scrollEnd :", scrollEnd);

            if (
                latest > scrollStart &&
                latest < scrollEnd &&
                !isSticky
            ) {
                console.log("실행");
                setIsSticky(true);
            }
            if (
                (latest > scrollEnd ||
                    latest < scrollStart) &&
                isSticky
            ) {
                // setIsSticky(false);
                // if (isSticky) setIsSticky(false);
                // console.log("종료");
            }
        }
    });

    console.log("isSticky :", isSticky);
    const works = [
        {
            id: 1,
            title: "다수 웹 프로젝트 개발",
            description:
                "React,Nextjs를 사용하여 십여개 이상의 프로젝트 개발",
        },
        {
            id: 2,
            title: "공통 컴포넌트 제작",
            description:
                "공통 컴포넌트 설계를 통해 프로젝트 진행 속도 향상",
        },
        {
            id: 3,
            title: "프로젝트 템플릿 개발",
            description:
                "공통 템플릿 제작을 통한 프로젝트 진행 속도 향상",
        },
    ];

    return (
        <div ref={ref}>
            <Template
                className={`!h-[4000px] flex flex-col gap-5 ${isSticky && "fixed z-10 top-0"}`}
                headline={"work"}
                id={"work"}
            >
                <Career
                    companyName={"아이덴잇"}
                    duration={"2023.03 - 2024.09"}
                    works={works}
                />
            </Template>
        </div>
    );
}

export default Work;
