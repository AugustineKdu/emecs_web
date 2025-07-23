// src/app/products/page.tsx
'use client'

import { useLanguage } from '@/context/LanguageContext'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { ProductHeroSection } from '@/components/products/ProductHeroSection'
import { ProductSection } from '@/components/products/ProductSection'
import Head from 'next/head'
import { SEO_VERIFICATION } from '@/lib/seoVerification'

export default function ProductsPage() {
    const { t, language } = useLanguage()
    const isEnglish = language === 'en'

    return (
        <>
            <Head>
                <title>{t('고효율 전동기 제품 | IE4-IE5 산업용 모터 - EMECS', 'High Efficiency Motors | IE4-IE5 Industrial Motors - EMECS')}</title>
                <meta name="description" content={t(
                    'IE4-IE5 등급의 초고효율 산업용 전동기로 에너지 비용을 최대 30% 절감하세요. 펌프, 압축기, 팬 등 다양한 산업 분야에 적용 가능한 맞춤형 솔루션을 제공합니다.',
                    'Reduce energy costs by up to 30% with IE4-IE5 grade ultra-high efficiency industrial motors. We provide customized solutions applicable to various industrial fields such as pumps, compressors, and fans.'
                )} />
                <meta name="keywords" content={t(
                    '고효율 전동기, IE4, IE5, 산업용 모터, 에너지 절약, 전동기, 모터, 효율성',
                    'high efficiency motor, IE4, IE5, industrial motor, energy saving, motor, efficiency'
                )} />
                <meta property="og:title" content={t('고효율 전동기 제품 | IE4-IE5 산업용 모터 - EMECS', 'High Efficiency Motors | IE4-IE5 Industrial Motors - EMECS')} />
                <meta property="og:description" content={t(
                    'IE4-IE5 등급의 초고효율 산업용 전동기로 에너지 비용을 최대 30% 절감하세요.',
                    'Reduce energy costs by up to 30% with IE4-IE5 grade ultra-high efficiency industrial motors.'
                )} />
                <meta property="og:type" content="website" />
                <meta property="og:url" content={isEnglish ? 'https://emecs.kr/en/products' : 'https://emecs.kr/products'} />
                {/* <meta property="og:image" content="/images/products-hero.jpg" /> */}
                <meta property="og:locale" content={isEnglish ? 'en_US' : 'ko_KR'} />
                <meta property="og:site_name" content="EMECS" />
                <link rel="canonical" href={isEnglish ? 'https://emecs.kr/en/products' : 'https://emecs.kr/products'} />
                <link rel="alternate" hrefLang="ko" href="https://emecs.kr/products" />
                <link rel="alternate" hrefLang="en" href="https://emecs.kr/en/products" />
                <meta name="naver-site-verification" content={SEO_VERIFICATION.naver} />
                <meta name="google-site-verification" content={SEO_VERIFICATION.google} />
                <meta name="kakao-site-verification" content={SEO_VERIFICATION.kakao} />
            </Head>

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














