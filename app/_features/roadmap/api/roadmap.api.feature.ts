import { RoadmapApi } from "@/app/_entities/roadmap/api/roadmap.api";
import { GetRoadmapResponse } from "@/app/_entities/roadmap/get-roadmap.response";
import { IResponse } from "@/app/_shared/api/api.types";
import { API_PATHS } from "@/app/_shared/constants/api.path.const";

export class RoadmapApiFeature extends RoadmapApi {
    async fetchRoadmap() {
        return this.request(API_PATHS.ROADMAP.LIST, {
            method: "GET",
        });
    }

    async fetchRoadmapByTitle(
        title: string,
    ): Promise<IResponse<GetRoadmapResponse>> {
        return this.request(
            `${API_PATHS.ROADMAP.DETAIL}/${title}`,
            {
                method: "GET",
            },
        );
    }
}

export const roadmapAPI = new RoadmapApiFeature();
