import {BASE_URL} from "@/app/_constants/baseURL";
import PATHS from "@/app/_constants/paths";
import type {MetadataRoute} from 'next'

export default async function sitemap():Promise<MetadataRoute.Sitemap>{

    return [
        {
            url: BASE_URL,
            // @todo 마지막 수정날짜로 변경
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.5,
        },
        {
            url: `${BASE_URL}/${PATHS.QUIZ}`,
            // @todo 마지막 수정날짜로 변경
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
    ]
}
