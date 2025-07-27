// src/app/en/about/page.tsx
import { Metadata, Viewport } from 'next'
import AboutPage from '@/app/about/page'
import { SEO_VERIFICATION } from '@/lib/seoVerification'

export const viewport: Viewport = {
    width: 'device-width',
    initialScale: 1,
    themeColor: '#2563eb',
}

export const metadata: Metadata = {
    title: 'About Us - Motor Design Specialist | EMECS | 회사 소개 - 전동기 설계 전문기업',
    description: 'With over 20 years of motor design experience, we are a specialized technology company developing IE4-IE5 high-efficiency motors. We provide high-efficiency new technology solutions leading the decarbonization era. | 20년 이상의 전동기 설계 경험을 바탕으로 IE4-IE5 고효율 전동기를 개발하는 조립 전문 기술회사입니다.',
    keywords: 'motor design, high efficiency motor, motor company, carbon neutral, IE4, IE5, assembly specialist, technology solutions, 전동기 설계, 고효율 전동기, 탄소중립',
    openGraph: {
        title: 'About Us - Motor Design Specialist | EMECS',
        description: 'With over 20 years of motor design experience, we are a specialized technology company developing IE4-IE5 high-efficiency motors.',
        type: 'website',
        locale: 'en_US',
        url: 'https://www.emecs.kr/en/about',
        siteName: 'EMECS',
        // images: [
        //     {
        //         url: '/images/company-hero-en.jpg',
        //         width: 1200,
        //         height: 630,
        //         alt: 'About EMECS - Motor Design Specialist',
        //     },
        // ],
    },
    alternates: {
        canonical: 'https://www.emecs.kr/en/about',
        languages: {
            'ko': 'https://www.emecs.kr/about',
            'en': 'https://www.emecs.kr/en/about',
        },
    },
    other: {
        'naver-site-verification': SEO_VERIFICATION.naver,
        'google-site-verification': SEO_VERIFICATION.google,
    },
}

export default function EnglishAboutPage() {
    return <AboutPage />
}