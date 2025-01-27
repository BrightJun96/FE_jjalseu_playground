import Card from "@/app/(page)/portfolio/_ui/work/card";
import React from "react";

interface Work {
    id: number;
    title: string;
    description: string;
}

interface CareerProps {
    companyName: string;
    duration: string;
    works: Work[];
}

function Career({
    companyName,
    duration,
    works,
}: CareerProps) {
    return (
        <>
            <h2 className={"text-headline3"}>
                {companyName}
            </h2>

            <h3 className={"text-title3Bold"}>
                {duration}
            </h3>

            <ul className={"flex gap-5"}>
                {works.map((w) => (
                    <li key={w.id}>
                        <Card
                            title={w.title}
                            description={w.description}
                        />
                    </li>
                ))}
            </ul>
        </>
    );
}

export default Career;
