import { roadmapAPI } from "@/app/_features/roadmap/api/roadmap.api.feature";
import Roadmap from "@/app/_features/roadmap/ui/roadmap";
import React from "react";

async function Page() {
    const response =
        await roadmapAPI.fetchRoadmapByTitle("Front-End");
    return (
        <div className={"w-full h-screen"}>
            {/*<FlowProvider>*/}
            <Roadmap roadmap={response.data} />
            {/*</FlowProvider>*/}
        </div>
    );
}

export default Page;
