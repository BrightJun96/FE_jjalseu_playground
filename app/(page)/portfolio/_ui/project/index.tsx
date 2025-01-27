import {
    Desc,
    IDESC,
} from "@/app/(page)/portfolio/_ui/project/constant/desc.constant";
import Template from "@/app/(page)/portfolio/_ui/template";
import Drawer from "@/app/_shared/ui/used/drawer/drawer";
import {
    Card,
    CardBody,
    CardHeader,
} from "@nextui-org/card";
import { Chip } from "@nextui-org/chip";
import { useDisclosure } from "@nextui-org/react";
import { Tab, Tabs } from "@nextui-org/tabs";
import { Link } from "next-view-transitions";
import Image from "next/image";
import React from "react";

interface ITech {
    id: number;
    tech: string;
    chipColor:
        | "default"
        | "primary"
        | "secondary"
        | "success"
        | "warning"
        | "danger";
}

function Project() {
    const Techs: ITech[] = [
        {
            id: 1,
            tech: "Next.js",
            chipColor: "primary",
        },
        {
            id: 2,
            tech: "tailwind css",
            chipColor: "secondary",
        },
        {
            id: 3,
            tech: "Typescript",
            chipColor: "success",
        },
    ];

    return (
        <Template
            headline={"project"}
            id={"project"}
        >
            <Card className={"mt-5"}>
                <CardHeader>
                    <Link
                        className={"text-title2Bold"}
                        href={"/public"}
                    >
                        thedevlounge.com - 개발 퀴즈 및 여러
                        가지 코드를 구경할 수 있는 개발
                        플랫폼
                    </Link>
                </CardHeader>
                <hr />
                <CardBody>
                    <div className={"flex gap-5"}>
                        <section>
                            <Tabs>
                                <Tab>Front-End</Tab>
                                <Tab>Back-End</Tab>
                            </Tabs>
                            <Image
                                className={
                                    "rounded-2xl max-h-[250px] max-w-[250px]"
                                }
                                width={250}
                                height={200}
                                src={"/icon-512x512.png"}
                                alt={"프로젝트 이미지"}
                            />
                            <span>Tech</span>
                            <ul
                                className={
                                    "flex gap-2 flex-wrap"
                                }
                            >
                                {Techs.map((tech) => (
                                    <li key={tech.id}>
                                        <Chip
                                            color={
                                                tech.chipColor
                                            }
                                            // variant={"flat"}
                                        >
                                            {tech.tech}
                                        </Chip>
                                    </li>
                                ))}
                            </ul>
                        </section>
                        <div className={"flex-1"}>
                            <section>
                                <h4>Front-End</h4>
                                <ul
                                    className={
                                        "flex flex-col gap-2"
                                    }
                                >
                                    {Desc.FRONT_DESC.map(
                                        (desc) => (
                                            <li
                                                key={
                                                    desc.id
                                                }
                                            >
                                                <DescElement
                                                    desc={
                                                        desc
                                                    }
                                                >
                                                    {
                                                        desc.title
                                                    }
                                                </DescElement>
                                            </li>
                                        ),
                                    )}
                                </ul>
                            </section>
                        </div>
                    </div>
                </CardBody>
            </Card>
        </Template>
    );
}

export default Project;

function DescElement({
    children,
    desc,
}: {
    children: React.ReactNode;
    desc: IDESC;
}) {
    const { isOpen, onOpen, onOpenChange } =
        useDisclosure();
    return (
        <section>
            <Card
                className={"w-full"}
                isPressable
                onPress={onOpen}
            >
                <CardBody>
                    <p>{children}</p>
                </CardBody>
            </Card>
            <Drawer
                size={"2xl"}
                title={desc.title}
                desc={desc.content}
                isOpen={isOpen}
                onOpenChange={onOpenChange}
            />
        </section>
    );
}
