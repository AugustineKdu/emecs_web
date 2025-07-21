// src/app/portfolio/page.tsx
import { Metadata, Viewport } from 'next'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { PortfolioSection } from '@/components/portfolio/PortfolioSection'
import { SEO_VERIFICATION } from '@/lib/seoVerification'

export const viewport: Viewport = {
    width: 'device-width',
    initialScale: 1,
    themeColor: '#2563eb',
}

export const metadata: Metadata = {
    title: '포트폴리오 | 전동기 설계 프로젝트 실적 - EMECS | Portfolio - Motor Design Projects',
    description: '20년간 수행한 50개 이상의 국가 R&D 프로젝트와 300개 이상의 산업용 전동기 설계 프로젝트 실적을 확인하세요. IE4-IE5 고효율 전동기 개발 경험을 보유하고 있습니다. | Check our track record of over 50 national R&D projects and 300+ industrial motor design projects over 20 years.',
    keywords: '전동기 설계 실적, R&D 프로젝트, 고효율 전동기 개발, IE4 IE5, 국가 연구개발, 전동기 포트폴리오, motor design portfolio, R&D projects, high efficiency motor development',
    openGraph: {
        title: '포트폴리오 | 전동기 설계 프로젝트 실적 - EMECS',
        description: '20년간 수행한 50개 이상의 국가 R&D 프로젝트와 300개 이상의 산업용 전동기 설계 프로젝트 실적',
        type: 'website',
        locale: 'ko_KR',
        url: 'https://emecs.kr/portfolio',
        siteName: 'EMECS',
        // images: [
        //     {
        //         url: '/images/portfolio-hero.jpg',
        //         width: 1200,
        //         height: 630,
        //         alt: 'EMECS 포트폴리오 | EMECS Portfolio',
        //     },
        // ],
    },
    alternates: {
        canonical: 'https://emecs.kr/portfolio',
        languages: {
            'ko': 'https://emecs.kr/portfolio',
            'en': 'https://emecs.kr/en/portfolio',
        },
    },
    other: {
        'naver-site-verification': SEO_VERIFICATION.naver,
        'google-site-verification': SEO_VERIFICATION.google,
        'kakao-site-verification': SEO_VERIFICATION.kakao,
    },
}

export default function PortfolioPage() {
    return (
        <main className="min-h-screen">
            <Navbar />

            {/* 포트폴리오 메인 섹션 */}
            <PortfolioSection />

            <Footer />
        </main>
    )
}