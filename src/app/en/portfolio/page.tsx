// src/app/en/portfolio/page.tsx
import { Metadata, Viewport } from 'next'
import PortfolioPage from '@/app/portfolio/page'
import { SEO_VERIFICATION } from '@/lib/seoVerification'

export const viewport: Viewport = {
    width: 'device-width',
    initialScale: 1,
    themeColor: '#2563eb',
}

export const metadata: Metadata = {
    title: 'Portfolio - Motor Design Projects | EMECS | 포트폴리오 - 전동기 설계 프로젝트 실적',
    description: 'Check our track record of over 50 national R&D projects and 300+ industrial motor design projects over 20 years. We have experience in developing IE4-IE5 high-efficiency motors. | 20년간 수행한 50개 이상의 국가 R&D 프로젝트와 300개 이상의 산업용 전동기 설계 프로젝트 실적을 확인하세요.',
    keywords: 'motor design portfolio, R&D projects, high efficiency motor development, IE4 IE5, national R&D, motor portfolio, 전동기 설계 실적, 고효율 전동기 개발',
    openGraph: {
        title: 'Portfolio - Motor Design Projects | EMECS',
        description: 'Track record of over 50 national R&D projects and 300+ industrial motor design projects over 20 years.',
        type: 'website',
        locale: 'en_US',
        url: 'https://www.emecs.kr/en/portfolio',
        siteName: 'EMECS',
        // images: [
        //     {
        //         url: '/images/portfolio-hero-en.jpg',
        //         width: 1200,
        //         height: 630,
        //         alt: 'EMECS Portfolio - Motor Design Projects',
        //     },
        // ],
    },
    alternates: {
        canonical: 'https://www.emecs.kr/en/portfolio',
        languages: {
            'ko': 'https://www.emecs.kr/portfolio',
            'en': 'https://www.emecs.kr/en/portfolio',
        },
    },
    other: {
        'naver-site-verification': SEO_VERIFICATION.naver,
        'google-site-verification': SEO_VERIFICATION.google,
    },
}

export default function EnglishPortfolioPage() {
    return <PortfolioPage />
}