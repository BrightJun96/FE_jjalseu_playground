"use client";

import { IDESC } from "@/app/(page)/portfolio/_ui/career/constant/desc.constant";
import Drawer from "@/app/_shared/ui/used/drawer/drawer";
import {
    Card as CardContainer,
    CardBody,
    CardHeader,
} from "@nextui-org/card";
import { useDisclosure } from "@nextui-org/react";
import React from "react";

function Card({ desc }: { desc: IDESC }) {
    const { isOpen, onOpen, onOpenChange } =
        useDisclosure();

    return (
        <>
            <CardContainer
                isPressable
                onPress={onOpen}
                className={"w-full "}
            >
                <CardHeader className={"font-semibold"}>
                    {desc.title}
                </CardHeader>
                <hr />
                <CardBody>{desc.content}</CardBody>
            </CardContainer>
            <Drawer
                isOpen={isOpen}
                title={desc.title}
                desc={desc.desc}
                onOpenChange={onOpenChange}
            />
        </>
    );
}

export default Card;
