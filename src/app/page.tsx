// src/app/page.tsx
'use client'

import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { HeroSection } from '@/components/home/HeroSection'
import { EfficiencyStandardSection } from '@/components/home/EfficiencyStandardSection'
import { ProductSection } from '@/components/home/ProductSection'
import { CustomMotorSection } from '@/components/home/CustomMotorSection'
import { DevelopmentProcessSection } from '@/components/home/DevelopmentProcessSection'
import { ROISection } from '@/components/home/ROISection'
import { AboutPortfolioSection } from '@/components/home/AboutPortfolioSection'
import Head from 'next/head'
import { useLanguage } from '@/context/LanguageContext'
import { SEO_VERIFICATION } from '@/lib/seoVerification'

export default function HomePage() {
  const { language, t } = useLanguage()
  const isEnglish = language === 'en'

  return (
    <>
      <Head>
        <title>{t('EMECS - 고효율 전동기 전문기업 | IE4-IE5 산업용 모터', 'EMECS - High Efficiency Motors | IE4-IE5 Industrial Motors')}</title>
        <meta name="description" content={t(
          'EMECS는 20년 전동기 설계 경험을 바탕으로 IE4-IE5 고효율 전동기를 개발하는 전문기업입니다. 에너지 비용 절감과 탄소중립을 위한 맞춤형 솔루션을 제공합니다.',
          'EMECS is a specialized company developing IE4-IE5 high-efficiency motors based on 20 years of motor design experience. We provide customized solutions for energy cost reduction and carbon neutrality.'
        )} />
        <meta name="keywords" content={t(
          '고효율 전동기, IE4, IE5, 전동기 설계, 모터, 에너지 절약, 맞춤형 설계, 전기모터, 산업용 모터, 탄소중립',
          'high efficiency motor, IE4, IE5, motor design, energy saving, custom design, electric motor, industrial motor, carbon neutral, EMECS'
        )} />

        {/* Open Graph */}
        <meta property="og:title" content={t('EMECS - 고효율 전동기 전문기업', 'EMECS - High Efficiency Motors')} />
        <meta property="og:description" content={t(
          'IE4-IE5 고효율 전동기로 에너지 비용을 절감하고 탄소중립을 실현하세요.',
          'Reduce energy costs and achieve carbon neutrality with IE4-IE5 high-efficiency motors.'
        )} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={isEnglish ? 'https://emecs.kr/en' : 'https://emecs.kr'} />
        {/* <meta property="og:image" content="/images/emecs-home-hero.jpg" /> */}
        <meta property="og:locale" content={isEnglish ? 'en_US' : 'ko_KR'} />
        <meta property="og:site_name" content="EMECS" />

        {/* Canonical and alternate languages */}
        <link rel="canonical" href={isEnglish ? 'https://emecs.kr/en' : 'https://emecs.kr'} />
        <link rel="alternate" hrefLang="ko" href="https://emecs.kr" />
        <link rel="alternate" hrefLang="en" href="https://emecs.kr/en" />

        {/* Site verification */}
        <meta name="naver-site-verification" content={SEO_VERIFICATION.naver} />
        <meta name="google-site-verification" content={SEO_VERIFICATION.google} />
        <meta name="kakao-site-verification" content={SEO_VERIFICATION.kakao} />
      </Head>

      <Navbar />
      <HeroSection />
      <EfficiencyStandardSection />
      <ProductSection />
      <CustomMotorSection />
      <DevelopmentProcessSection />
      <AboutPortfolioSection />
      <ROISection />
      <Footer />
    </>
  )
}