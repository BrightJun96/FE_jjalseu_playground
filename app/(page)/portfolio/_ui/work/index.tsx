"use client";

import Template from "@/app/(page)/portfolio/_ui/template";
import Career from "@/app/(page)/portfolio/_ui/work/career";
import React from "react";

function Work() {
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
        <Template
            className={`!h-[4000px] flex flex-col gap-5`}
            headline={"work"}
            id={"work"}
        >
            <Career
                companyName={"아이덴잇"}
                duration={"2023.03 - 2024.09"}
                works={works}
            />
        </Template>
    );
}

export default Work;
