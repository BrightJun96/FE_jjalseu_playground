import { Desc } from "@/app/(page)/portfolio/_ui/project/constant/desc.constant";
import { Techs } from "@/app/(page)/portfolio/_ui/project/constant/tech.constant";
import DescElement from "@/app/(page)/portfolio/_ui/project/ui/desc-element";
import { CardBody } from "@nextui-org/card";
import { Chip } from "@nextui-org/chip";
import { Tab, Tabs } from "@nextui-org/tabs";
import Image from "next/image";
import React from "react";

function ProjectDescList() {
    return (
        <CardBody>
            <Tabs>
                <Tab
                    key={"front"}
                    title={"Front-End"}
                >
                    <FrontContents />
                </Tab>
                <Tab
                    key={"back"}
                    title={"Back-End"}
                >
                    <BackContents />
                </Tab>
                <Tab
                    key={"devops"}
                    title={"DevOps"}
                >
                    <DevOpsContents />
                </Tab>
            </Tabs>
        </CardBody>
    );
}

export default ProjectDescList;

function FrontContents() {
    return (
        <div className={"flex gap-5"}>
            <section
                className={"w-[30%] flex flex-col gap-3"}
            >
                <Image
                    className={
                        "rounded-2xl max-h-[250px] max-w-[250px]"
                    }
                    width={250}
                    height={200}
                    src={"/icon-512x512.png"}
                    alt={"프로젝트 이미지"}
                />
                <ul className={"flex gap-2 flex-wrap"}>
                    {Techs.map((tech) => (
                        <li key={tech.id}>
                            <Chip
                                color={tech.chipColor}
                                variant={"flat"}
                            >
                                {tech.tech}
                            </Chip>
                        </li>
                    ))}
                </ul>
            </section>
            <div className={"flex-1"}>
                <section>
                    <ul className={"flex flex-col gap-2"}>
                        {Desc.FRONT_DESC.map((desc) => (
                            <li key={desc.id}>
                                <DescElement desc={desc}>
                                    {desc.title}
                                </DescElement>
                            </li>
                        ))}
                    </ul>
                </section>
            </div>
        </div>
    );
}

function BackContents() {
    return (
        <div className={"flex gap-5"}>
            <section
                className={"w-[30%] flex flex-col gap-3"}
            >
                <Image
                    className={
                        "rounded-2xl max-h-[250px] max-w-[250px]"
                    }
                    width={250}
                    height={200}
                    src={"/icon-512x512.png"}
                    alt={"프로젝트 이미지"}
                />
                <ul className={"flex gap-2 flex-wrap"}>
                    {Techs.map((tech) => (
                        <li key={tech.id}>
                            <Chip
                                color={tech.chipColor}
                                variant={"flat"}
                            >
                                {tech.tech}
                            </Chip>
                        </li>
                    ))}
                </ul>
            </section>
            <div className={"flex-1"}>
                <section>
                    <ul className={"flex flex-col gap-2"}>
                        {Desc.BACK_DESC.map((desc) => (
                            <li key={desc.id}>
                                <DescElement desc={desc}>
                                    {desc.title}
                                </DescElement>
                            </li>
                        ))}
                    </ul>
                </section>
            </div>
        </div>
    );
}

function DevOpsContents() {
    return (
        <div className={"flex gap-5"}>
            <section
                className={"w-[30%] flex flex-col gap-3"}
            >
                <Image
                    className={
                        "rounded-2xl max-h-[250px] max-w-[250px]"
                    }
                    width={250}
                    height={200}
                    src={"/icon-512x512.png"}
                    alt={"프로젝트 이미지"}
                />
                <ul className={"flex gap-2 flex-wrap"}>
                    {Techs.map((tech) => (
                        <li key={tech.id}>
                            <Chip
                                color={tech.chipColor}
                                variant={"flat"}
                            >
                                {tech.tech}
                            </Chip>
                        </li>
                    ))}
                </ul>
            </section>
            <div className={"flex-1"}>
                <section>
                    <ul className={"flex flex-col gap-2"}>
                        {Desc.DEV_OPS_DESC.map((desc) => (
                            <li key={desc.id}>
                                <DescElement desc={desc}>
                                    {desc.title}
                                </DescElement>
                            </li>
                        ))}
                    </ul>
                </section>
            </div>
        </div>
    );
}
