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
    title: '포트폴리오 | 고효율 전동기 설계 실적 - EMECS',
    description: '20년간 50개 이상 국가 R&D, 300건 이상의 산업용 전동기 설계 실적 보유. IE4-IE5 고효율 전동기 개발 경험과 다양한 맞춤형 프로젝트 포트폴리오를 확인하세요.',
    keywords: '전동기설계실적,포트폴리오,고효율전동기,IE4,IE5,국가R&D,산업용전동기,EMECS,모터설계,프로젝트실적',
    openGraph: {
        title: '포트폴리오 | 고효율 전동기 설계 실적 - EMECS',
        description: '20년간 50개 이상 국가 R&D, 300건 이상의 산업용 전동기 설계 실적 보유. IE4-IE5 고효율 전동기 개발 경험과 다양한 맞춤형 프로젝트 포트폴리오를 확인하세요.',
        type: 'website',
        locale: 'ko_KR',
        url: 'https://www.emecs.kr/portfolio',
        siteName: 'EMECS',

    },
    alternates: {
        canonical: 'https://www.emecs.kr/portfolio',
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