"use client";

import {
    Drawer as DrawContainer,
    DrawerBody,
    DrawerContent,
    DrawerHeader,
} from "@nextui-org/react";
import React from "react";

function Drawer({
    isOpen,
    onOpenChange,
}: {
    isOpen: boolean;
    onOpenChange: () => void;
}) {
    return (
        <DrawContainer
            isOpen={isOpen}
            shouldBlockScroll={false}
            motionProps={
                {
                    // transition: {
                    //     //     // damping: 20,
                    //     //     // stiffness: 50,
                    //     type: "spring",
                    //     damping: 10,
                    //     stiffness: 100,
                    // },
                }
            }
            onOpenChange={onOpenChange}
        >
            <DrawerContent>
                {(onClose) => (
                    <>
                        <DrawerHeader className="flex flex-col gap-1">
                            Drawer Title
                        </DrawerHeader>
                        <DrawerBody>
                            <p>
                                Lorem ipsum dolor sit amet,
                                consectetur adipiscing elit.
                                Nullam pulvinar risus non
                                risus hendrerit venenatis.
                                Pellentesque sit amet
                                hendrerit risus, sed
                                porttitor quam.
                            </p>
                            <p>
                                Lorem ipsum dolor sit amet,
                                consectetur adipiscing elit.
                                Nullam pulvinar risus non
                                risus hendrerit venenatis.
                                Pellentesque sit amet
                                hendrerit risus, sed
                                porttitor quam.
                            </p>
                            <p>
                                Magna exercitation
                                reprehenderit magna aute
                                tempor cupidatat consequat
                                elit dolor adipisicing.
                                Mollit dolor eiusmod sunt ex
                                incididunt cillum quis.
                                Velit duis sit officia
                                eiusmod Lorem aliqua enim
                                laboris do dolor eiusmod. Et
                                mollit incididunt nisi
                                consectetur esse laborum
                                eiusmod pariatur proident
                                Lorem eiusmod et. Culpa
                                deserunt nostrud ad veniam.
                            </p>
                        </DrawerBody>
                    </>
                )}
            </DrawerContent>
        </DrawContainer>
    );
}

export default Drawer;
