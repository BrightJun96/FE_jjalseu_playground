import Card from "@/app/(page)/portfolio/_ui/career/card";
import { Career_Desc } from "@/app/(page)/portfolio/_ui/career/constant/desc.constant";
import React from "react";

interface Work {
    id: number;
    title: string;
    description: string;
}

interface CareerProps {
    companyName: string;
    duration: string;
}

function CareerItem({
    companyName,
    duration,
}: CareerProps) {
    return (
        <>
            <h2 className={"text-headline3"}>
                {companyName}
            </h2>

            <h3 className={"text-title3Bold"}>
                {duration}
            </h3>

            <ul className={"flex flex-col gap-5"}>
                {Career_Desc.map((desc) => (
                    <li key={desc.id}>
                        <Card desc={desc} />
                    </li>
                ))}
            </ul>
        </>
    );
}

export default CareerItem;
