// src/app/products/wfsm/page.tsx

import { Metadata } from 'next'
import WFSMPageClient from '../WFSMPageClient'

export const metadata: Metadata = {
    title: 'WFSM(권선형 동기 전동기) | 탈희토류 고효율 모터 - EMECS',
    description: '희토류 자석 없이도 고효율·고성능을 구현하는 친환경 권선형 동기 전동기(WFSM). 자유로운 역률 제어와 폭넓은 속도 제어로 차세대 탈희토류 솔루션을 제공합니다.',
    keywords: 'WFSM,권선형동기전동기,탈희토류,고효율전동기,친환경모터,역률제어,EMECS,wound field synchronous motor,rare earth free,power factor control',
    openGraph: {
        title: 'WFSM(권선형 동기 전동기) | 탈희토류 고효율 모터 - EMECS',
        description: '희토류 자석 없이도 고효율·고성능을 구현하는 친환경 권선형 동기 전동기(WFSM). 자유로운 역률 제어와 폭넓은 속도 제어로 차세대 탈희토류 솔루션을 제공합니다.',
        type: 'website',
        locale: 'ko_KR',
        url: 'https://emecs.kr/products/wfsm',
        siteName: 'EMECS',
    },
    alternates: {
        canonical: 'https://emecs.kr/products/wfsm',
        languages: {
            'ko': 'https://emecs.kr/products/wfsm',
            'en': 'https://emecs.kr/en/products/wfsm',
        },
    },
    other: {
        'naver-site-verification': '',
        'google-site-verification': '',
    },
}

export default function WFSMPage() {
    return <WFSMPageClient />
}