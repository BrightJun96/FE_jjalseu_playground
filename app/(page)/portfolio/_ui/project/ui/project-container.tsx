import ProjectDescList from "@/app/(page)/portfolio/_ui/project/ui/project-desc-list";
import ProjectHeader from "@/app/(page)/portfolio/_ui/project/ui/project-header";
import { Card } from "@nextui-org/card";
import React from "react";

function ProjectContainer() {
    return (
        <Card className={"mt-5"}>
            <ProjectHeader />
            <hr />
            <ProjectDescList />
        </Card>
    );
}

export default ProjectContainer;
