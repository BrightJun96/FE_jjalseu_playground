import { conceptApi } from "@/app/_features/concept/api";
import ConceptCardItem from "@/app/_features/concept/ui/concept-card-item";
import { Link } from "next-view-transitions";
import React from "react";

export async function generateMetadata() {
    return {
        title: "개발 지식 - 여러 개발 지식들을 구경하세요.",
        description:
            "프론트,백엔드 등 여러 개발 개념, 지식들을 확인할 수 있어요!",
    };
}

async function Page() {
    const response = await conceptApi.fetchConceptList();

    return (
        <div>
            <ul className={"flex flex-col gap-5 mt-10"}>
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
        </div>
    );
}

export default Page;
