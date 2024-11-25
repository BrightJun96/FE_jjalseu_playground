import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: '개발자들을 위한 퀴즈 앱',
        short_name: '퀴즈 앱',
        description: '개발자들을 위한 퀴즈 플랫폼 ,퀴즈를 통해 개발 지식을 테스트해 보세요.',
        start_url: '/',
        display: 'standalone',
        background_color: '#FCFCFC',
        theme_color: '#FF6F00',
        icons: [

        ],
    }
}
