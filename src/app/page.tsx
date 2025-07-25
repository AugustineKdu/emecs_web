// src/app/page.tsx
import { Metadata } from 'next'
import HomePageClient from './HomePageClient'
import { SEO_VERIFICATION } from '@/lib/seoVerification'

export const metadata: Metadata = {
  title: 'EMECS - 고효율 전동기 재설계 및 맞춤 제작 전문 | 탄소배출 감소 솔루션',
  description: '기존 전동기를 고효율로 재설계하여 탄소배출 감소. KERI 출신 20년 경력 전문가의 맞춤형 모터 설계. IE4-IE5 등급 업그레이드로 ESG 경영 실현.',
  keywords: '고효율전동기,전동기재설계,IE4전동기,IE5전동기,EMECS,탄소중립,ESG,전동기',
  openGraph: {
    title: 'EMECS - 고효율 전동기 재설계 및 맞춤 제작 전문',
    description: '기존 전동기를 고효율로 재설계하여 탄소배출 감소. KERI 출신 20년 경력 전문가의 맞춤형 모터 설계. IE4-IE5 등급 업그레이드로 ESG 경영 실현.',
    type: 'website',
    locale: 'ko_KR',
    url: 'https://emecs.kr',
    siteName: 'EMECS',
  },
  alternates: {
    canonical: 'https://emecs.kr',
    languages: {
      'ko': 'https://emecs.kr',
      'en': 'https://emecs.kr/en',
    },
  },
  other: {
    'naver-site-verification': SEO_VERIFICATION.naver,
    'google-site-verification': SEO_VERIFICATION.google,
  },
}

export default function HomePage() {
  return <HomePageClient />
}