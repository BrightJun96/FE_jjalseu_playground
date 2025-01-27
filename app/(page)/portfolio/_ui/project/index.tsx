import ProjectContainer from "@/app/(page)/portfolio/_ui/project/ui/project-container";
import Template from "@/app/(page)/portfolio/_ui/template";
import React from "react";

function Project() {
    return (
        <Template
            headline={"project"}
            id={"project"}
        >
            <ProjectContainer />
        </Template>
    );
}

export default Project;
