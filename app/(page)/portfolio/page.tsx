import Ability from "@/app/(page)/portfolio/_ui/ability";
import Main from "@/app/(page)/portfolio/_ui/main";
import Project from "@/app/(page)/portfolio/_ui/project";
import Tech from "@/app/(page)/portfolio/_ui/tech";
import Work from "@/app/(page)/portfolio/_ui/work";
import React from "react";

function Page() {
    return (
        <div className={"h-full flex flex-col w-full"}>
            <Main />
            <Work />
            <Tech />
            <Ability />
            <Project />
        </div>
    );
}

export default Page;
