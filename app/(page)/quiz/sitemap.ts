import {BASE_URL} from "@/app/(page)/_constants";
import {clientQuizApi} from "@/app/services/quiz/client/api.instance";
import type {MetadataRoute} from 'next'


export async function generateSitemaps() {

    const {data} = await clientQuizApi.fetchQuizPkList();

    return data.map((pk) => ({id:pk.toString()}))
}
/**
 * @todo 퀴즈 API 호출해서 퀴즈 목록을 가져와서 Sitemap 생성
 */
export default async function sitemap({
                                          id,
                                      }: {
    id: number
}):Promise<MetadataRoute.Sitemap>{


    return  [{
        url: `${BASE_URL}/quiz/${id}`,
        lastModified: new Date(),
        changeFrequency: 'daily',
        priority: 1,
    }]



}
