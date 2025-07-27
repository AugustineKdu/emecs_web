// src/app/en/page.tsx
import { Metadata, Viewport } from 'next'
import HomePage from '@/app/page'
import { SEO_VERIFICATION } from '@/lib/seoVerification'

export const viewport: Viewport = {
    width: 'device-width',
    initialScale: 1,
    themeColor: '#2563eb',
}

export const metadata: Metadata = {
    title: 'EMECS - High Efficiency Motors | IE4-IE5 Industrial Motors | 고효율 전동기 전문기업',
    description: 'EMECS is a specialized company developing IE4-IE5 high-efficiency motors based on 20 years of motor design experience. We provide customized solutions for energy cost reduction and carbon neutrality. | EMECS는 20년 전동기 설계 경험을 바탕으로 IE4-IE5 고효율 전동기를 개발하는 전문기업입니다.',
    keywords: 'high efficiency motor, IE4, IE5, motor design, energy saving, custom design, electric motor, industrial motor, carbon neutral, EMECS, 고효율 전동기, 전동기 설계',
    openGraph: {
        title: 'EMECS - High Efficiency Motors',
        description: 'Reduce energy costs and achieve carbon neutrality with IE4-IE5 high-efficiency motors.',
        type: 'website',
        locale: 'en_US',
        url: 'https://www.emecs.kr/en',
        siteName: 'EMECS',

    },
    alternates: {
        canonical: 'https://www.emecs.kr/en',
        languages: {
            'ko': 'https://www.emecs.kr',
            'en': 'https://www.emecs.kr/en',
        },
    },
    other: {
        'naver-site-verification': SEO_VERIFICATION.naver,
        'google-site-verification': SEO_VERIFICATION.google,
    },
}

export default function EnglishHomePage() {
    return <HomePage />
}