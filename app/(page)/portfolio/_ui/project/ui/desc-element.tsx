import { IDESC } from "@/app/(page)/portfolio/_ui/project/constant/desc.constant";
import Drawer from "@/app/_shared/ui/used/drawer/drawer";
import { Card, CardBody } from "@nextui-org/card";
import { useDisclosure } from "@nextui-org/react";
import React from "react";

function DescElement({
    children,
    desc,
}: {
    children: React.ReactNode;
    desc: IDESC;
}) {
    const { isOpen, onOpen, onOpenChange } =
        useDisclosure();
    return (
        <section>
            <Card
                className={"w-full"}
                isPressable
                onPress={onOpen}
            >
                <CardBody>
                    <p>{children}</p>
                </CardBody>
            </Card>
            <Drawer
                size={"2xl"}
                placement={"top"}
                title={desc.title}
                desc={desc.content}
                isOpen={isOpen}
                onOpenChange={onOpenChange}
            />
        </section>
    );
}

export default DescElement;
