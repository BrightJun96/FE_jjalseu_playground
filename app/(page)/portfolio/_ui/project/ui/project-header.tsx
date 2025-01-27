import { CardHeader } from "@nextui-org/card";
import { Link } from "next-view-transitions";
import React from "react";

function ProjectHeader() {
    return (
        <CardHeader>
            <Link
                className={"text-title2Bold"}
                href={"/"}
            >
                # thedevlounge.com - 개발 퀴즈 및 여러 가지
                코드를 구경할 수 있는 개발 플랫폼
            </Link>
        </CardHeader>
    );
}

export default ProjectHeader;
