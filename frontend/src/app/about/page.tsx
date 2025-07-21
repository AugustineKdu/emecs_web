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
    title: '회사 소개 | 전동기 설계 전문기업 - EMECS | About Us - Motor Design Specialist',
    description: '20년 이상의 전동기 설계 경험을 바탕으로 IE4-IE5 고효율 전동기를 개발하는 조립 전문 기술회사입니다. 탈탄소 시대를 선도하는 고효율 신기술 솔루션을 제공합니다. | With over 20 years of motor design experience, we are a specialized technology company developing IE4-IE5 high-efficiency motors.',
    keywords: '전동기 설계, 조립 전문, 고효율 전동기, 전동기 회사, 모터 설계, IE4, IE5, 탄소중립, 신기술 솔루션, motor design, high efficiency motor, motor company, carbon neutral',
    openGraph: {
        title: '회사 소개 | 전동기 설계 전문기업 - EMECS',
        description: '20년 이상의 전동기 설계 경험을 바탕으로 고효율 전동기를 개발하는 전문 기업입니다.',
        type: 'website',
        locale: 'ko_KR',
        url: 'https://emecs.kr/about',
        siteName: 'EMECS',
        // images: [
        //     {
        //         url: '/images/company-hero.jpg',
        //         width: 1200,
        //         height: 630,
        //         alt: 'EMECS 회사 소개 | About EMECS',
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
        'kakao-site-verification': SEO_VERIFICATION.kakao,
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