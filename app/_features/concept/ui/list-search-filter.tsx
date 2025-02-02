import { Field } from "@/app/_entities/concept/enum/field.enum";
import { Tech } from "@/app/_entities/concept/enum/tech.enum";
import { Chip } from "@nextui-org/chip";
import { SearchParams } from "next/dist/server/request/search-params";
import Link from "next/link";
import React from "react";

type ChipColor =
    | "default"
    | "success"
    | "warning"
    | "secondary"
    | "danger";

interface IChip {
    color: ChipColor;
    text: string;
    value: string;
}

// 목록 검색 필터
function ListSearchFilter({
    searchParams,
}: {
    searchParams: SearchParams;
}) {
    const Fields: IChip[] = [
        {
            color: "success",
            text: "Front-End",
            value: Field.FrontEnd,
        },
        {
            color: "secondary",
            text: "Back-End",
            value: Field.BackEnd,
        },
    ];

    const Techs: IChip[] = [
        {
            color: "warning",
            text: "Javascript",
            value: Tech.Javascript,
        },
        {
            color: "success",
            text: "Typescript",
            value: Tech.Typescript,
        },
        {
            color: "secondary",
            text: "React.js",
            value: Tech.ReactJs,
        },
        {
            color: "default",
            text: "Next.js",
            value: Tech.NextJs,
        },
        {
            color: "danger",
            text: "Nest.js",
            value: Tech.NestJs,
        },
    ];

    function generateQueryString(
        searchParams: SearchParams,
    ) {
        let reduceSearchParams = "";

        for (const [key, value] of Object.entries(
            searchParams,
        )) {
            reduceSearchParams = `${key}=${value}&`;
        }

        return reduceSearchParams;
    }

    const sp = generateQueryString(searchParams);

    return (
        <div className={"flex flex-col gap-2"}>
            {/* 분야*/}
            <section className={"flex gap-2"}>
                <Link href={`/concept`}>
                    <Chip
                        color={"default"}
                        size={"sm"}
                    >
                        All
                    </Chip>
                </Link>

                {Fields.map((field) => (
                    <Link
                        key={field.text}
                        href={`/concept?field=${field.value}`}
                    >
                        <Chip
                            color={field.color}
                            size={"sm"}
                        >
                            {field.text}
                        </Chip>
                    </Link>
                ))}
            </section>
            {/*기술*/}
            <section className={"flex gap-2 flex-wrap"}>
                {Techs.map((tech) => (
                    <Link
                        key={tech.text}
                        href={`/concept?tech=${tech.value}`}
                    >
                        <Chip
                            color={tech.color}
                            size={"sm"}
                        >
                            {tech.text}
                        </Chip>
                    </Link>
                ))}
            </section>
        </div>
    );
}

export default ListSearchFilter;
