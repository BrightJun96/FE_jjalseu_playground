export interface GetRoadmapResponse {
    _id: string;
    title: string;
    link: string;
    children: GetRoadmapResponse[];
    parent?: null | string;
}
