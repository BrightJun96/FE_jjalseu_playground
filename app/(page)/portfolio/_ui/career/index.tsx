"use client";

import CareerItem from "@/app/(page)/portfolio/_ui/career/careerItem";
import Template from "@/app/(page)/portfolio/_ui/template";
import React from "react";

function Career() {
    return (
        <Template
            className={`!h-[4000px] flex flex-col gap-5`}
            headline={"career"}
            id={"career"}
        >
            <CareerItem
                companyName={"아이덴잇"}
                duration={"2023.03 - 2024.09"}
            />
        </Template>
    );
}

export default Career;
