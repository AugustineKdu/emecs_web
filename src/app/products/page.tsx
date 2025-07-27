// src/app/products/page.tsx
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { ProductHeroSection } from '@/components/products/ProductHeroSection'
import { ProductSection } from '@/components/products/ProductSection'
import { Metadata } from 'next'
import { SEO_VERIFICATION } from '@/lib/seoVerification'

export const metadata: Metadata = {
    title: '고효율 전동기 솔루션 | 탄소배출 감소 기술 - EMECS',
    description: 'B2B 맞춤형 고효율 전동기 설계로 탄소배출 대폭 감소. 기존 IE3를 IE4-IE5로 업그레이드하여 에너지 효율 극대화. 3상 유도전동기, 고속전동기 재설계 전문.',
    keywords: '고효율전동기,전동기재설계,IE4전동기,IE5전동기,EMECS,탄소중립,ESG,3상유도전동기,고속전동기',
    openGraph: {
        title: '고효율 전동기 솔루션 | 탄소배출 감소 기술 - EMECS',
        description: 'B2B 맞춤형 고효율 전동기 설계로 탄소배출 대폭 감소. 기존 IE3를 IE4-IE5로 업그레이드하여 에너지 효율 극대화. 3상 유도전동기, 고속전동기 재설계 전문.',
        type: 'website',
        locale: 'ko_KR',
        url: 'https://www.emecs.kr/products',
        siteName: 'EMECS',

    },
    alternates: {
        canonical: 'https://www.emecs.kr/products',
        languages: {
            'ko': 'https://www.emecs.kr/products',
            'en': 'https://www.emecs.kr/en/products',
        },
    },
    other: {
        'naver-site-verification': SEO_VERIFICATION.naver,
        'google-site-verification': SEO_VERIFICATION.google,
    },
}

export default function ProductsPage() {

    return (
        <>
            <main className="min-h-screen">
                <Navbar />

                {/* 예시: 다국어 지원 h1
                <h1 className="text-2xl font-bold text-center my-8">
                    {t('제품 소개', 'Product Introduction')}
                </h1> */}

                {/* 제품 메인 히어로 섹션 */}
                <ProductHeroSection />

                {/* 제품 텝 섹션 */}
                <ProductSection />

                <Footer />
            </main>
        </>
    )
}














