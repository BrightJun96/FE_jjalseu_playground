import {BASE_URL} from "@/app/(page)/_constants";
import type {MetadataRoute} from 'next'

export default async function sitemap():Promise<MetadataRoute.Sitemap>{

    return [
        {
            url: BASE_URL,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.5,
        },
        {
            url: `${BASE_URL}/quiz`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
    ]
}
