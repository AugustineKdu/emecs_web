// src/app/products/wfsm/page.tsx
'use client'

import { useLanguage } from '@/context/LanguageContext'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import Link from 'next/link'
import { ArrowLeft, Cog, Cpu, Shield, Clock, AlertCircle } from 'lucide-react'
import Head from 'next/head'

export default function WFSMPage() {
    const { t } = useLanguage()

    const developmentGoals = [
        {
            icon: <Shield className="h-8 w-8 text-slate-600" />,
            title: t('탈희토류 솔루션', 'Rare-Earth-Free Solution'),
            description: t(
                '희토류 자석을 사용하지 않고도 높은 성능을 구현하는 친환경 기술',
                'Eco-friendly technology achieving high performance without rare-earth magnets'
            )
        },

        {
            icon: <Cpu className="h-8 w-8 text-slate-600" />,
            title: t('역률 제어', 'Power Factor Control'),
            description: t(
                '자유로운 역률 제어로 시스템 효율 최적화',
                'System efficiency optimization with flexible power factor control'
            )
        }
    ]

    return (
        <>
            <Head>
                <title>WFSM | 권선형 동기 전동기 - EMECS | Wound Field Synchronous Motor</title>
                <meta name="description" content="희토류 자석을 사용하지 않는 친환경 권선형 동기 전동기(WFSM)입니다. 자유로운 역률 제어로 시스템 효율을 최적화하고 탈희토류 솔루션을 제공합니다. | Eco-friendly wound field synchronous motor (WFSM) without rare-earth magnets." />
                <meta name="keywords" content="WFSM, 권선형 동기 전동기, 탈희토류, 역률 제어, 친환경 모터, wound field synchronous motor, rare earth free, power factor control" />
                <meta property="og:title" content="WFSM | 권선형 동기 전동기 - EMECS" />
                <meta property="og:description" content="희토류 자석을 사용하지 않는 친환경 권선형 동기 전동기(WFSM)입니다." />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://emecs.kr/products/wfsm" />
                <meta property="og:image" content="/images/wfsm-hero.jpg" />
                <meta property="og:locale" content="ko_KR" />
                <meta property="og:site_name" content="EMECS" />
                <link rel="canonical" href="https://emecs.kr/products/wfsm" />
                <link rel="alternate" hrefLang="ko" href="https://emecs.kr/products/wfsm" />
                <link rel="alternate" hrefLang="en" href="https://emecs.kr/en/products/wfsm" />
                <meta name="naver-site-verification" content="your-naver-verification-code" />
            </Head>

            <main className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
                <Navbar />

                {/* Hero Section */}
                <section className="pt-24 pb-16 bg-gradient-to-br from-slate-700 to-slate-900 text-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <Link
                            href="/products"
                            className="inline-flex items-center text-slate-300 hover:text-white mb-8 transition-colors"
                        >
                            <ArrowLeft className="h-4 w-4 mr-2" />
                            {t('제품 목록으로', 'Back to Products')}
                        </Link>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            <div>
                                <div className="flex items-center mb-6">
                                    <div className="bg-orange-500 text-white px-4 py-2 rounded-full font-semibold flex items-center">
                                        <Clock className="h-4 w-4 mr-2" />
                                        {t('개발 진행 중', 'Under Development')}
                                    </div>
                                </div>
                                <h1 className="text-4xl md:text-5xl font-bold mb-4">
                                    {t('권선형 동기 전동기', 'Wound Field Synchronous Motor')}
                                </h1>
                                {/* <p className="text-2xl font-semibold text-slate-300 mb-6">WFSM Wound Field Synchronous Motor</p> */}

                                <p className="text-2xl font-semibold text-slate-300 mb-6">
                                    WFSM&nbsp;
                                    <span className="text-base font-normal text-slate-400">
                                        (Wound Field Synchronous Motor)
                                    </span>
                                </p>
                                <p className="text-xl text-slate-300 mb-8">
                                    {t(
                                        '탈희토류를 목표로 개발 중인 차세대 전동기입니다. 희토류 자석을 사용하지 않으면서 계자전류를 제어를 통해 저속부터 고속까지 폭넓은 속도 제어와 일역률 제어가 가능하기 때문에 높은 효율과 뛰어난 성능을 가진 솔루션입니다.',
                                        'Next-generation motor under development targeting rare-earth-free solutions. WFSM solution focus on  high efficiency and exceptional performance by controlling the field current, it enables wide-range speed control from low to high and maintains unity power factor control.'
                                    )}
                                </p>
                            </div>
                            <div className="flex justify-center">
                                <div className="w-64 h-64 bg-white/10 backdrop-blur-sm rounded-3xl flex items-center justify-center relative">
                                    <Cog className="h-32 w-32 text-white/30 animate-spin-slow" />
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <span className="text-orange-400 font-bold text-xl">
                                            {t('개발중', 'Developing')}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 개발 공지 */}
                <section className="py-12 bg-orange-50 border-y border-orange-200">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex items-center">
                            <AlertCircle className="h-6 w-6 text-orange-600 mr-3" />
                            <p className="text-orange-900 font-medium">
                                {t(
                                    '현재 WFSM은 활발한 연구개발 단계에 있으며, 상용화를 위한 성능 최적화를 진행하고 있습니다.',
                                    'WFSM is currently in active R&D phase, undergoing performance optimization for commercialization.'
                                )}
                            </p>
                        </div>
                    </div>
                </section>

                {/* 개발 목표 */}
                <section className="py-20">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                                {t('개발 목표', 'Development Goals')}
                            </h2>
                            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                                {t(
                                    '지속가능한 미래를 위한 혁신적인 전동기 기술 개발',
                                    'Developing innovative motor technology for a sustainable future'
                                )}
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {developmentGoals.map((goal, index) => (
                                <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                                    <div className="w-16 h-16 bg-slate-100 rounded-2xl flex items-center justify-center mb-6">
                                        {goal.icon}
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">{goal.title}</h3>
                                    <p className="text-gray-600">{goal.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* 문의 섹션 */}
                <section className="py-20">
                    <div className="max-w-7xl mx-auto px-4 sm:px:6 lg:px-8">
                        <div className="bg-gradient-to-br from-slate-600 to-slate-800 rounded-3xl p-12 text-white text-center">
                            <h2 className="text-3xl font-bold mb-4">
                                {t('WFSM 개발에 관심이 있으신가요?', 'Interested in WFSM Development?')}
                            </h2>
                            <p className="text-xl text-slate-200 mb-8 max-w-3xl mx-auto">
                                {t(
                                    '개발 진행 상황과 출시 예정 소식을 가장 먼저 받아보세요. 기술 협력이나 사전 도입 상담도 환영합니다.',
                                    'Be the first to receive development updates and launch news. Technical cooperation and pre-adoption consultations are also welcome.'
                                )}
                            </p>
                            <Link
                                href="/about"
                                className="inline-flex items-center px-8 py-4 bg-white text-slate-700 rounded-xl font-semibold hover:bg-slate-50 transition-colors"
                            >
                                {t('개발 소식 받기', 'Get Development Updates')}
                                <ArrowLeft className="h-5 w-5 ml-2 rotate-180" />
                            </Link>
                        </div>
                    </div>
                </section>

                <Footer />
            </main>
        </>
    )
}