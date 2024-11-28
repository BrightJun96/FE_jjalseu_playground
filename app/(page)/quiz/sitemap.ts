import {clientQuizApi} from "@/app/services/quiz/client/api.instance";
import type {MetadataRoute} from 'next'


export default async function sitemap():Promise<MetadataRoute.Sitemap>{

   const {data} =  await clientQuizApi.fetchQuizDetailUrlList()

    return data.map((detailUrl) => ({
        url: `${process.env.NEXT_PUBLIC_BASE_URL}/quiz/${detailUrl}`,
        lastModified: new Date(),
        changeFrequency: 'daily',
        priority: 1,
    }))

}
