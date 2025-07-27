// src/app/products/high-speed/page.tsx

import { Metadata } from 'next'
import HighSpeedPageClient from './HighSpeedPageClient'

export const metadata: Metadata = {
    title: '고속 전동기 | 최대 50,000 RPM 초고속 모터 - EMECS',
    description: '최대 50,000 RPM의 초고속 회전을 안정적으로 구현하는 특수 설계 전동기. 압축기, 블로워, 전기차 등 고속 회전이 필요한 다양한 산업 분야에 최적화된 솔루션 제공.',
    keywords: '고속전동기,초고속모터,50000RPM,압축기모터,전기차모터,고속스핀들,EMECS,high speed motor,ultra high speed,compressor motor,EV motor',
    openGraph: {
        title: '고속 전동기 | 최대 50,000 RPM 초고속 모터 - EMECS',
        description: '최대 50,000 RPM의 초고속 회전을 안정적으로 구현하는 특수 설계 전동기. 다양한 산업 분야에 최적화된 솔루션 제공.',
        type: 'website',
        locale: 'ko_KR',
        url: 'https://www.emecs.kr/products/high-speed',
        siteName: 'EMECS',
    },
    alternates: {
        canonical: 'https://www.emecs.kr/products/high-speed',
        languages: {
            'ko': 'https://www.emecs.kr/products/high-speed',
            'en': 'https://www.emecs.kr/en/products/high-speed',
        },
    },
    other: {
        'naver-site-verification': '',
        'google-site-verification': '',
    },
}

export default function HighSpeedPage() {
    return <HighSpeedPageClient />
}