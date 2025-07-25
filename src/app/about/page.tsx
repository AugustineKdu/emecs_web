// src/app/about/page.tsx
import { Metadata, Viewport } from 'next'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { CompanyAboutSection } from '@/components/company/CompanyAboutSection'
import { SEO_VERIFICATION } from '@/lib/seoVerification'

export const viewport: Viewport = {
    width: 'device-width',
    initialScale: 1,
    themeColor: '#2563eb',
}

export const metadata: Metadata = {
    title: 'EMECS 소개 | KERI 출신 고효율 전동기 재설계 전문가 그룹',
    description: '한국전기연구원 20년 경력 연구책임자가 설립. 국가 R&D 50개 이상 수행. B2B 맞춤형 모터 재설계로 에너지 효율 극대화. 검증된 기술력으로 신뢰받는 파트너.',
    keywords: 'EMECS,전동기재설계,KERI,고효율전동기,전동기설계전문가,20년경력,국가R&D,맞춤형모터,에너지효율,신뢰성',
    openGraph: {
        title: 'EMECS 소개 | KERI 출신 고효율 전동기 재설계 전문가 그룹',
        description: '한국전기연구원 20년 경력 연구책임자가 설립. 국가 R&D 50개 이상 수행. B2B 맞춤형 모터 재설계로 에너지 효율 극대화. 검증된 기술력으로 신뢰받는 파트너.',
        type: 'website',
        locale: 'ko_KR',
        url: 'https://emecs.kr/about',
        siteName: 'EMECS',
        // images: [
        //     {
        //         url: '/images/company-hero.jpg',
        //         width: 1200,
        //         height: 630,
        //         alt: 'EMECS 회사소개',
        //     },
        // ],
    },
    alternates: {
        canonical: 'https://emecs.kr/about',
        languages: {
            'ko': 'https://emecs.kr/about',
            'en': 'https://emecs.kr/en/about',
        },
    },
    other: {
        'naver-site-verification': SEO_VERIFICATION.naver,
        'google-site-verification': SEO_VERIFICATION.google,
    },
}

export default function AboutPage() {
    return (
        <main className="min-h-screen">
            <Navbar />

            {/* 회사 소개 메인 섹션 */}
            <CompanyAboutSection />

            <Footer />
        </main>
    )
}