"use client";

import {
    Drawer as DrawContainer,
    DrawerBody,
    DrawerContent,
    DrawerHeader,
} from "@nextui-org/react";
import React from "react";

interface IDrawer {
    isOpen: boolean;
    onOpenChange: () => void;
    title?: string;
    desc?: React.ReactNode;
    size?:
        | "xs"
        | "sm"
        | "md"
        | "lg"
        | "xl"
        | "2xl"
        | "3xl"
        | "4xl"
        | "5xl"
        | "full";
}

function Drawer({
    isOpen,
    onOpenChange,
    title = "",
    desc = "",
    size,
}: IDrawer) {
    return (
        <DrawContainer
            size={size}
            isOpen={isOpen}
            shouldBlockScroll={false}
            onOpenChange={onOpenChange}
        >
            <DrawerContent>
                {(onClose) => (
                    <>
                        <DrawerHeader className="flex flex-col gap-1">
                            {title}
                        </DrawerHeader>
                        <hr />
                        <DrawerBody>{desc}</DrawerBody>
                    </>
                )}
            </DrawerContent>
        </DrawContainer>
    );
}

export default Drawer;
