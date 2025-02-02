import { IResponse } from "@/app/_shared/api/api.types";
import BaseApi from "@/app/_shared/api/BaseApi";
import { GetConceptSharedDto } from "@/app/_shared/api/generate.api.types";
import { API_PATHS } from "@/app/_shared/constants/api.path.const";
import { API_ENDPOINT } from "@/app/_shared/constants/baseURL";

export class ConceptApi extends BaseApi {
    constructor() {
        super(API_ENDPOINT);
    }

    // 개념 목록
    async fetchConceptList(): Promise<
        IResponse<GetConceptSharedDto[]>
    > {
        return this.request<GetConceptSharedDto[]>(
            API_PATHS.CONCEPT.LIST,
            {
                method: "GET",
            },
        );
    }

    // 개념 상세
    async fetchConceptByUrl(
        url: string,
    ): Promise<IResponse<GetConceptSharedDto>> {
        return this.request<GetConceptSharedDto>(
            `${API_PATHS.CONCEPT.DETAIL}/${url}`,
            {
                method: "GET",
            },
        );
    }
}
