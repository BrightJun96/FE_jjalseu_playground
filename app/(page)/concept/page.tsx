import { conceptApi } from "@/app/_features/concept/api";
import ConceptCardItem from "@/app/_features/concept/ui/concept-card-item";
import ListSearchFilter from "@/app/_features/concept/ui/list-search-filter";
import { Link } from "next-view-transitions";
import React from "react";

export type SearchParams = Promise<{
    [key: string]: string | string[] | undefined;
}>;

export async function generateMetadata() {
    return {
        title: "개발 지식 - 여러 개발 지식들을 구경하세요.",
        description:
            "프론트,백엔드 등 여러 개발 개념, 지식들을 확인할 수 있어요!",
    };
}

async function Page({
    searchParams,
}: {
    searchParams: SearchParams;
}) {
    const sp = await searchParams;
    const response = await conceptApi.fetchConceptList(sp);

    return (
        <div
            className={"mt-10 sm:mt-5 flex flex-col gap-3"}
        >
            <ListSearchFilter searchParams={sp} />
            <hr />
            {response.data.length > 0 ? (
                <ul className={"flex flex-col gap-5"}>
                    {response.data.map((concept) => (
                        <li key={concept.id}>
                            <Link
                                href={`/concept/${concept.detailUrl}`}
                            >
                                <ConceptCardItem
                                    concept={concept}
                                />
                            </Link>
                        </li>
                    ))}
                </ul>
            ) : (
                <p
                    className={
                        "mt-10 text-title3Bold text-center text-gray-400"
                    }
                >
                    데이터가 존재하지않습니다.
                </p>
            )}
        </div>
    );
}

export default Page;
