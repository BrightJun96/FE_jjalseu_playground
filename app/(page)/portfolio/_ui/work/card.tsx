"use client";

import Drawer from "@/app/_shared/ui/used/drawer/drawer";
import {
    Card as CardContainer,
    CardBody,
    CardHeader,
} from "@nextui-org/card";
import { useDisclosure } from "@nextui-org/react";
import React from "react";

function Card({
    title,
    description,
}: {
    title: string;
    description: string;
}) {
    const { isOpen, onOpen, onOpenChange } =
        useDisclosure();

    return (
        <>
            <CardContainer
                isPressable
                onPress={onOpen}
                className={"max-w-[250px] h-[200px]"}
            >
                <CardHeader className={"font-semibold"}>
                    {title}
                </CardHeader>
                <hr />
                <CardBody>{description}</CardBody>
            </CardContainer>
            <Drawer
                isOpen={isOpen}
                onOpenChange={onOpenChange}
            />
        </>
    );
}

export default Card;
