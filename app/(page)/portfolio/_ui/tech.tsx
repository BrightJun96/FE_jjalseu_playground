import Template from "@/app/(page)/portfolio/_ui/template";
import { Card } from "@nextui-org/card";
import { Chip } from "@nextui-org/chip";
import React from "react";

/**
 * @description 보유 기술
 * 프론트,백엔드 사용 기술
 * @constructor
 */
function Tech() {
    const FRONT_TECHS = [
        {
            id: 1,
            tech: "Next.js",
        },
        {
            id: 2,
            tech: "React",
        },
        {
            id: 3,
            tech: "TypeScript",
        },
        {
            id: 4,
            tech: "JavaScript",
        },
        {
            id: 5,
            tech: "CSS",
        },
        {
            id: 6,
            tech: "Tailwind CSS",
        },
        {
            id: 7,
            tech: "HTML",
        },
    ];

    const BACKEND_TECHS = [
        {
            id: 1,
            tech: "Nest.js",
        },
        {
            id: 2,
            tech: "Postgresql",
        },
        {
            id: 3,
            tech: "MongoDb",
        },
        {
            id: 4,
            tech: "Typeorm",
        },
        {
            id: 5,
            tech: "Mongoose",
        },
    ];

    const DEVOPS_TECHS = [
        {
            id: 1,
            tech: "EC2",
        },
        {
            id: 2,
            tech: "RDS",
        },
        {
            id: 3,
            tech: "S3",
        },
        {
            id: 4,
            tech: "Github Action",
        },
        {
            id: 5,
            tech: "Docker",
        },
    ];

    return (
        <Template
            headline={"tech"}
            id={"tech"}
        >
            <div className={"flex justify-between mt-5"}>
                <TechSectionContainer>
                    <h3 className={"text-title1"}>
                        Front-End
                    </h3>
                    <hr />
                    <ul className={"flex flex-col gap-2"}>
                        {FRONT_TECHS.map((tech) => (
                            <li key={tech.id}>
                                <Chip
                                    size={"lg"}
                                    color={"warning"}
                                    variant={"flat"}
                                >
                                    {tech.tech}
                                </Chip>
                            </li>
                        ))}
                    </ul>
                </TechSectionContainer>
                <TechSectionContainer>
                    <h3 className={"text-title1"}>
                        Back-End
                    </h3>
                    <hr />

                    <ul className={"flex flex-col gap-2"}>
                        {BACKEND_TECHS.map((tech) => (
                            <li key={tech.id}>
                                <Chip
                                    color={"default"}
                                    variant={"faded"}
                                >
                                    {tech.tech}
                                </Chip>
                            </li>
                        ))}
                    </ul>
                </TechSectionContainer>
                <TechSectionContainer>
                    <h3 className={"text-title1"}>
                        DevOps
                    </h3>
                    <hr />

                    <ul className={"flex flex-col gap-2"}>
                        {DEVOPS_TECHS.map((tech) => (
                            <li key={tech.id}>
                                <Chip
                                    color={"success"}
                                    variant={"flat"}
                                >
                                    {tech.tech}
                                </Chip>
                            </li>
                        ))}
                    </ul>
                </TechSectionContainer>
            </div>
        </Template>
    );
}

export default Tech;

function TechSectionContainer({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <Card
            className={" flex flex-col gap-4 p-5 w-[30%]"}
        >
            {children}
        </Card>
    );
}
