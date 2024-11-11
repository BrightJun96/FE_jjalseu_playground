import type { MetadataRoute } from 'next'


export async function generateSitemaps() {
    // Fetch the total number of products and calculate the number of sitemaps needed
    return [{ id: 0 }, { id: 1 }, { id: 2 }, { id: 3 }]
}
/**
 * @todo 퀴즈 API 호출해서 퀴즈 목록을 가져와서 Sitemap 생성
 */
export default async function sitemap({
                                          id,
                                      }: {
    id: number
}):Promise<MetadataRoute.Sitemap>{

    return [
        {
            url: 'https://thedevlounge.com',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.5,
        },
        {
            url: 'https://thedevlounge.com/quiz',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        // @todo 퀴즈 API 호출해서 퀴즈 목록을 가져와서 Sitemap 생성, 교체되어야함
        {
            url: 'https://thedevlounge.com/quiz/:id',
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 1,
        },
    ]
}
