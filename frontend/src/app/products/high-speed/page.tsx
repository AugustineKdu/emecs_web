// src/app/products/high-speed/page.tsx
'use client'

import { useLanguage } from '@/context/LanguageContext'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import Link from 'next/link'
import { ArrowLeft, Zap } from 'lucide-react'
import Head from 'next/head'

export default function HighSpeedPage() {
    const { t } = useLanguage()

    const developmentTrack = {
        general: [
            { power: '2.5kW', speed: '50,000 RPM' },
            { power: '10kW', speed: '30,000 RPM' },
            { power: '30kW', speed: '15,000 RPM' },
            { power: '200kW', speed: '10,000 RPM' },
        ],
        ev: [
            { type: t('소형 승용차', 'Compact Car'), rated: '30kW', max: '60kW', speed: '15,000 RPM' },
            { type: t('중형 승용차', 'Mid-size Car'), rated: '75kW', max: '150kW', speed: '15,000 RPM' },
            { type: t('대형/상용차', 'Large/Commercial'), rated: '100kW', max: '200kW', speed: '15,000 RPM' }
        ]
    }

    return (
        <>
            <Head>
                <title>고속 전동기 | 최대 50,000 RPM - EMECS | High-Speed Motor</title>
                <meta name="description" content="최대 50,000 RPM의 초고속 회전을 안정적으로 구현하는 특수 설계 전동기입니다. 압축기, 블로워, 전기자동차 등 고속 회전이 필요한 다양한 산업 분야에 최적화된 솔루션을 제공합니다. | Specially designed motors that stably implement ultra-high-speed rotation up to 50,000 RPM." />
                <meta name="keywords" content="고속 전동기, 50000 RPM, 초고속 모터, 압축기용 모터, 전기차 모터, 고속 스핀들, high speed motor, ultra high speed, compressor motor, EV motor" />
                <meta property="og:title" content="고속 전동기 | 최대 50,000 RPM - EMECS" />
                <meta property="og:description" content="최대 50,000 RPM의 초고속 회전을 안정적으로 구현하는 특수 설계 전동기입니다." />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://emecs.kr/products/high-speed" />
                <meta property="og:image" content="/images/high-speed-hero.jpg" />
                <meta property="og:locale" content="ko_KR" />
                <meta property="og:site_name" content="EMECS" />
                <link rel="canonical" href="https://emecs.kr/products/high-speed" />
                <link rel="alternate" hrefLang="ko" href="https://emecs.kr/products/high-speed" />
                <link rel="alternate" hrefLang="en" href="https://emecs.kr/en/products/high-speed" />
                <meta name="naver-site-verification" content="your-naver-verification-code" />
            </Head>

            <main className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
                <Navbar />

                {/* Hero Section */}
                <section className="pt-24 pb-16 bg-gradient-to-br from-blue-700 to-blue-900 text-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <Link
                            href="/products"
                            className="inline-flex items-center text-blue-100 hover:text-white mb-8 transition-colors"
                        >
                            <ArrowLeft className="h-4 w-4 mr-2" />
                            {t('제품 목록으로', 'Back to Products')}
                        </Link>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            <div>
                                <h1 className="text-4xl md:text-5xl font-bold mb-6">
                                    {t('고속 전동기', 'High-Speed Motor')}
                                </h1>
                                <p className="text-xl text-blue-100 mb-8">
                                    {t(
                                        '최대 50,000 RPM의 초고속 회전을 안정적으로 구현하는 특수 설계 전동기입니다. 압축기, 블로워, 전기자동차 등 고속 회전이 필요한 다양한 산업 분야에 최적화된 솔루션을 제공합니다.',
                                        'Specially designed motors that stably implement ultra-high-speed rotation up to 50,000 RPM. We provide optimized solutions for various industries requiring high-speed rotation such as compressors, blowers, and electric vehicles.'
                                    )}
                                </p>
                                <div className="flex flex-wrap gap-4">
                                    <div className="bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2">
                                        <span className="font-semibold">2.5kW ~ 200kW</span>
                                    </div>
                                    <div className="bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2">
                                        <span className="font-semibold">{t('최대', 'Max')} 50,000 RPM</span>
                                    </div>
                                </div>
                            </div>
                            <div className="flex justify-center">
                                <div className="w-64 h-64 bg-white/10 backdrop-blur-sm rounded-3xl flex items-center justify-center relative">
                                    <Zap className="h-32 w-32 text-white/50" />
                                    <div className="absolute inset-0 animate-pulse">
                                        <div className="w-full h-full border-4 border-white/20 rounded-3xl"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 개발 실적 */}
                <section className="py-20 bg-white/50">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                                {t('개발 실적', 'Development Track Record')}
                            </h2>
                            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                                {t(
                                    '다양한 출력과 속도 범위의 고속 전동기 개발 경험을 보유하고 있습니다.',
                                    'We have experience developing high-speed motors with various power and speed ranges.'
                                )}
                            </p>
                        </div>

                        {/* 일반 고속기 */}
                        <div className="mb-12">
                            <h3 className="text-2xl font-bold text-gray-900 mb-6">
                                {t('일반 고속기', 'General High-Speed Motors')}
                            </h3>
                            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                                <table className="w-full">
                                    <thead className="bg-blue-600 text-white">
                                        <tr>
                                            <th className="px-6 py-4 text-left">{t('출력', 'Power')}</th>
                                            <th className="px-6 py-4 text-left">{t('속도', 'Speed')}</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-200">
                                        {developmentTrack.general.map((item, index) => (
                                            <tr key={index} className="hover:bg-gray-50">
                                                <td className="px-6 py-4 font-semibold">{item.power}</td>
                                                <td className="px-6 py-4">{item.speed}</td>

                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        {/* 전기자동차용 */}
                        {/* <div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-6">
                                {t('전기자동차용', 'Electric Vehicle Motors')}
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                {developmentTrack.ev.map((item, index) => (
                                    <div key={index} className="bg-gradient-to-br from-blue-50 to-slate-50 rounded-2xl p-6 border border-blue-100">
                                        <h4 className="text-lg font-bold text-gray-900 mb-4">{item.type}</h4>
                                        <div className="space-y-2">
                                            <div className="flex justify-between">
                                                <span className="text-gray-600">{t('최대 출력', 'Max Power')}</span>
                                                <span className="font-semibold">{item.max}</span>
                                            </div>
                                            <div className="flex justify-between">
                                                <span className="text-gray-600">{t('최고 속도', 'Max Speed')}</span>
                                                <span className="font-semibold">{item.speed}</span>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div> */}
                    </div>
                </section>

                {/* 기술 사양 */}
                <section className="py-20">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="text-3xl font-bold text-gray-900 mb-8">
                            {t('기술 사양', 'Technical Specifications')}
                        </h2>
                        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                            <table className="w-full">
                                <tbody className="divide-y divide-gray-200">
                                    <tr>
                                        <td className="px-6 py-4 font-medium text-gray-700 bg-gray-50">{t('일반 고속기 출력', 'General Motor Power')}</td>
                                        <td className="px-6 py-4 text-gray-900">2.5kW ~ 200kW</td>
                                    </tr>
                                    <tr>
                                        <td className="px-6 py-4 font-medium text-gray-700 bg-gray-50">{t('일반 고속기 속도', 'General Motor Speed')}</td>
                                        <td className="px-6 py-4 text-gray-900">3,000 ~ 15,000 RPM</td>
                                    </tr>
                                    {/* <tr>
                                        <td className="px-6 py-4 font-medium text-gray-700 bg-gray-50">{t('EV용 출력', 'EV Motor Power')}</td>
                                        <td className="px-6 py-4 text-gray-900">{t('30/60kW ~ 100/200kW (정격/최대)', '30/60kW ~ 100/200kW (Rated/Max)')}</td>
                                    </tr>
                                    <tr>
                                        <td className="px-6 py-4 font-medium text-gray-700 bg-gray-50">{t('EV용 속도', 'EV Motor Speed')}</td>
                                        <td className="px-6 py-4 text-gray-900">{t('3,000/9,000 ~ 4,500/10,000 RPM (정격/최고)', '3,000/9,000 ~ 4,500/10,000 RPM (Rated/Max)')}</td>
                                    </tr> */}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>

                <Footer />
            </main>
        </>
    )
}