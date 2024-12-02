import {quizApiHandler} from "@/app/services/quiz/QuizApiHandler";
import type {MetadataRoute} from 'next'


export default async function sitemap():Promise<MetadataRoute.Sitemap>{

   const {data} =  await quizApiHandler.fetchQuizDetailUrlList()

    return data.map((detailUrl) => ({
        url: `${process.env.NEXT_PUBLIC_BASE_URL}/quiz/${detailUrl}`,
        lastModified: new Date(),
        changeFrequency: 'daily',
        priority: 1,
    }))

}
