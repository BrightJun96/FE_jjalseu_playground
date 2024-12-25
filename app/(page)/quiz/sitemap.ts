import { BASE_URL } from "@/app/_constants/baseURL";
import PATHS from "@/app/_constants/paths";
import { quizApiHandler } from "@/app/services/quiz/QuizApiHandler";
import type { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const response =
        await quizApiHandler.fetchQuizDetailUrlList();

    return response
        ? response.data.map((detailUrl) => ({
              url: `${BASE_URL}/${PATHS.QUIZ_DETAIL(detailUrl)}`,
              lastModified: new Date(),
              changeFrequency: "daily",
              priority: 1,
          }))
        : [];
}
