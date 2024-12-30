import { quizApiHandler } from "@/app/(page)/quiz/_api/QuizApiHandler";
import { BASE_URL } from "@/app/_shared/constants/baseURL";
import PATHS from "@/app/_shared/constants/paths";
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
