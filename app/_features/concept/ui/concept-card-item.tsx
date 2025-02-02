import ConceptCategory from "@/app/_features/concept/ui/concept-category";
import ConceptDescription from "@/app/_features/concept/ui/concept-description";
import ConceptTitle from "@/app/_features/concept/ui/concept-title";
import { GetConceptSharedDto } from "@/app/_shared/api/generate.api.types";
import { Card } from "@nextui-org/card";
import { Chip } from "@nextui-org/chip";
import React from "react";

/**
 * 목록에 보일 아이템
 */
function ConceptCardItem({
    concept,
}: {
    concept: GetConceptSharedDto;
}) {
    function handlePress() {}
    return (
        <Card
            isPressable={true}
            className={"w-full p-5 flex gap-2"}
        >
            <ConceptTitle>{concept.title}</ConceptTitle>
            <ConceptDescription>
                {concept.conceptMeta.metaDescription}
            </ConceptDescription>
            <ConceptCategory>
                <Chip
                    color={"success"}
                    size={"sm"}
                >
                    {concept.field}
                </Chip>
                <Chip
                    color={"warning"}
                    size={"sm"}
                >
                    {concept.tech}
                </Chip>
            </ConceptCategory>
        </Card>
    );
}

export default ConceptCardItem;
