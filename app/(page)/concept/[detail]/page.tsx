import { conceptApi } from "@/app/_features/concept/api";
import ConceptCategory from "@/app/_features/concept/ui/concept-category";
import CopyCode from "@/app/_shared/ui/used/copy-code";
import sanitize from "@/app/_shared/utils/function/sanitize";
import { Chip } from "@nextui-org/chip";
import { Metadata } from "next";
import React from "react";
import "prismjs/themes/prism-tomorrow.css";

/**
 * 개념 상세 페이지
 * 렌더링 방식 :ISR
 */

// 재검증 주기 1시간
export const revalidate = 3600;

type Params = Promise<{ detail: string }>;

export async function generateMetadata({
    params,
}: {
    params: Params;
}): Promise<Metadata> {
    const { detail } = await params;

    const response =
        await conceptApi.fetchConceptByUrl(detail);

    const { data } = response;
    const { conceptMeta } = data;
    const { metaTitle, metaDescription } = conceptMeta;

    return {
        title: metaTitle,
        description: metaDescription,
    };
}

async function ConceptDetailPage({
    params,
}: {
    params: Params;
}) {
    const { detail } = await params;

    const response =
        await conceptApi.fetchConceptByUrl(detail);

    const { data } = response;
    return (
        <div
            className={
                "sm:w-full w-[800px] mt-20 flex flex-col gap-5"
            }
        >
            <h1 className={"text-title1"}>{data.title}</h1>
            <hr />
            <ConceptCategory>
                <Chip
                    color={"success"}
                    size={"sm"}
                >
                    {data.field}
                </Chip>
                <Chip
                    color={"warning"}
                    size={"sm"}
                >
                    {data.tech}
                </Chip>
            </ConceptCategory>
            <div
                className={"prose prose-base sm:prose-sm"}
                dangerouslySetInnerHTML={{
                    __html: sanitize(data.content),
                }}
            />
            <CopyCode />
        </div>
    );
}

export default ConceptDetailPage;
