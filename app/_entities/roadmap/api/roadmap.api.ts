import { GetRoadmapResponse } from "@/app/_entities/roadmap/get-roadmap.response";
import { IResponse } from "@/app/_shared/api/api.types";
import BaseApi from "@/app/_shared/api/BaseApi";
import { API_PATHS } from "@/app/_shared/constants/api.path.const";
import { API_ENDPOINT } from "@/app/_shared/constants/baseURL";

export class RoadmapApi extends BaseApi {
    constructor() {
        super(API_ENDPOINT);
    }
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
