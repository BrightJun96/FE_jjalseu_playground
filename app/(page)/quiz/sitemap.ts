import {BASE_URL} from "@/app/(page)/_constants";
import {clientQuizApi} from "@/app/services/quiz/client/api.instance";
import type {MetadataRoute} from 'next'


export async function generateSitemaps() {

    const {data} = await clientQuizApi.fetchQuizPkList();

    return data.map((pk) => ({id:pk.toString()}))
}

export default async function sitemap({
                                          id,
                                      }: {
    id: number
}):Promise<MetadataRoute.Sitemap>{

   const {data} =  await clientQuizApi.fetchQuizDetail(id)

    return  [{
        url: `${BASE_URL}/quiz/${id}`,
        lastModified: data.updatedAt,
        changeFrequency: 'daily',
        priority: 1,
    }]



}
