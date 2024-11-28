import {clientQuizApi} from "@/app/services/quiz/client/api.instance";
import type {MetadataRoute} from 'next'


export async function generateSitemaps() {

    const {data} = await clientQuizApi.fetchQuizDetailUrlList();

    return data.map((url) => ({detailUrl:url}))
}

export default async function sitemap({
                                          detailUrl,
                                      }: {
    detailUrl: string
}):Promise<MetadataRoute.Sitemap>{

   const {data} =  await clientQuizApi.fetchQuizDetailByUrl(detailUrl)

    return  [{
        url: `${process.env.NEXT_PUBLIC_BASE_URL}/quiz/${detailUrl}`,
        lastModified: data.updatedAt,
        changeFrequency: 'daily',
        priority: 1,
    }]



}
