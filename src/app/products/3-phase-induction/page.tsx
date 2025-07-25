// src/app/products/3-phase-induction/page.tsx

import { Metadata } from 'next'
import ThreePhaseInductionPageClient from '../3-phase-induction/ThreePhaseInductionPageClient'

export const metadata: Metadata = {
    title: '3상 유도전동기 재설계 | IE3→IE5 탄소배출 감소 - EMECS',
    description: '기존 3상 유도전동기를 최신 고효율 설계로 재설계하여 탄소배출 획기적 감소. 0.75-500kW 모든 용량 대응. 동일 프레임 크기로 효율만 극대화.',
    keywords: '3상유도전동기,IE4전동기,IE5전동기,고효율전동기,전동기재설계,탄소배출감소,EMECS',
    openGraph: {
        title: '3상 유도전동기 재설계 | IE3→IE5 탄소배출 감소 - EMECS',
        description: '기존 3상 유도전동기를 최신 고효율 설계로 재설계하여 탄소배출 획기적 감소. 0.75-500kW 모든 용량 대응. 동일 프레임 크기로 효율만 극대화.',
        type: 'website',
        locale: 'ko_KR',
        url: 'https://emecs.kr/products/3-phase-induction',
        siteName: 'EMECS',
    },
    alternates: {
        canonical: 'https://emecs.kr/products/3-phase-induction',
        languages: {
            'ko': 'https://emecs.kr/products/3-phase-induction',
            'en': 'https://emecs.kr/en/products/3-phase-induction',
        },
    },
    other: {
        'naver-site-verification': '',
        'google-site-verification': '',
    },
}

export default function ThreePhaseInductionPage() {
    return <ThreePhaseInductionPageClient />
}