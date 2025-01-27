import { Techs } from "@/app/(page)/portfolio/_ui/project/constant/tech.constant";
import { Chip } from "@nextui-org/chip";
import Image from "next/image";
import React from "react";

function ProjectLeftSection() {
    return (
        <section className={"w-[30%] flex flex-col gap-3"}>
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
    );
}

export default ProjectLeftSection;
