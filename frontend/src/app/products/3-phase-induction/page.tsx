// src/app/products/3-phase-induction/page.tsx
'use client'

import { useLanguage } from '@/context/LanguageContext'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import Link from 'next/link'
import { ArrowLeft, Settings, CheckCircle, TrendingUp, Wrench, Zap } from 'lucide-react'
import Head from 'next/head'

export default function ThreePhaseInductionPage() {
    const { t } = useLanguage()

    const redesignBenefits = [
        {
            icon: <TrendingUp className="h-6 w-6 text-blue-600" />,
            title: t('효율 향상', 'Efficiency Improvement'),
            description: t('기존 IE3 전동기를 재설계하여 더 높은 효율 달성', 'Achieve higher efficiency by Mechanical Re-Engineering existing IE3 motors')
        },
        {
            icon: <Zap className="h-6 w-6 text-blue-600" />,
            title: t('에너지 절감', 'Energy Savings'),
            description: t('최적화된 설계로 운영 비용 절감', 'Reduce operating costs with optimized design')
        },
        {
            icon: <Wrench className="h-6 w-6 text-blue-600" />,
            title: t('맞춤형 최적화', 'Custom Optimization'),
            description: t('고객의 운영 환경에 맞춘 설계', 'Design tailored to your operating environment')
        }
    ]

    const services = [
        {
            grade: 'IE4',
            title: t('IE4 등급 서비스', 'IE4 Grade Service'),
            service: t('설계 전문', 'Mechanical engineering'),
            description: t(
                '고효율 IE4 등급 달성을 위한 전문 설계 서비스를 제공합니다. 최적화된 설계도면과 기술 사양을 제공하여 고객이 직접 제작할 수 있도록 지원합니다.',
                'EMECS provides professional design services to achieve high-efficiency IE4 grade through optimized design and technical specifications to achieve customer expectation.'
            ),
            features: [
                t('상세 설계도면 제공', 'Detailed design drawings'),
                t('기술 사양서 제공', 'Technical specifications'),
                t('제작 가이드라인 제공', 'Manufacturing guidelines')
            ]
        },
        {
            grade: 'IE5',
            title: t('IE5 등급 서비스', 'IE5 Grade Service'),
            service: t('설계 및 제작', 'Design & Manufacturing'),
            description: t(
                '초고효율 IE5 등급의 전동기를 설계부터 제작까지 턴키 방식으로 제공합니다. 엄격한 품질 관리와 성능 테스트를 거쳐 완제품을 납품합니다.',
                'We provide turnkey solutions from design to manufacturing for ultra-high efficiency IE5 grade motors. We deliver finished products through strict quality control and performance testing.'
            ),
            features: [
                t('설계부터 제작까지 일괄 서비스', 'One-stop service from design to manufacturing'),
                t('성능 테스트 및 품질 인증', 'Performance testing and quality certification'),
                t('설치 및 시운전 지원', 'Installation and commissioning support')
            ]
        }
    ]

    return (
        <>
            <Head>
                <title>3상 유도 전동기 | IE4-IE5 고효율 모터 - EMECS | 3-Phase Induction Motor</title>
                <meta name="description" content="기존 IE3 전동기를 IE4-IE5 등급으로 재설계하여 에너지 효율을 극대화하는 3상 유도 전동기입니다. 맞춤형 최적화로 운영 비용을 절감하세요. | 3-phase induction motors redesigned from IE3 to IE4-IE5 grade to maximize energy efficiency." />
                <meta name="keywords" content="3상 유도 전동기, IE4, IE5, 고효율 모터, 에너지 절약, 전동기 재설계, 맞춤형 전동기, 3-phase induction motor, high efficiency motor, energy saving" />
                <meta property="og:title" content="3상 유도 전동기 | IE4-IE5 고효율 모터 - EMECS" />
                <meta property="og:description" content="기존 IE3 전동기를 IE4-IE5 등급으로 재설계하여 에너지 효율을 극대화하는 3상 유도 전동기입니다." />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://emecs.kr/products/3-phase-induction" />
                <meta property="og:image" content="/images/3-phase-induction-hero.jpg" />
                <meta property="og:locale" content="ko_KR" />
                <meta property="og:site_name" content="EMECS" />
                <link rel="canonical" href="https://emecs.kr/products/3-phase-induction" />
                <link rel="alternate" hrefLang="ko" href="https://emecs.kr/products/3-phase-induction" />
                <link rel="alternate" hrefLang="en" href="https://emecs.kr/en/products/3-phase-induction" />
                <meta name="naver-site-verification" content="your-naver-verification-code" />
            </Head>

            <main className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
                <Navbar />

                {/* Hero Section */}
                <section className="pt-24 pb-16 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
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
                                    {t('3상 유도 전동기', '3-Phase Induction Motor')}
                                </h1>
                                <p className="text-xl text-blue-100 mb-8">
                                    {t(
                                        '가장 널리 사용되는 산업용 전동기로, 뛰어난 내구성과 신뢰성을 자랑합니다. 기존 IE3 전동기의 재설계를 통해 더 높은 효율을 달성할 수 있습니다.',
                                        'The most widely used industrial motor with excellent durability and reliability. Higher efficiency can be achieved through redesign of existing IE3 motors.'
                                    )}
                                </p>
                                <div className="flex flex-wrap gap-4">
                                    <div className="bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2">
                                        <span className="font-semibold">0.75kW ~ 200kW</span>
                                    </div>
                                    <div className="bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2">
                                        <span className="font-semibold">{t('2, 4, 6극', '2, 4, 6 Poles')}</span>
                                    </div>
                                </div>
                            </div>
                            <div className="flex justify-center">
                                <div className="w-64 h-64 bg-white/10 backdrop-blur-sm rounded-3xl flex items-center justify-center">
                                    <Settings className="h-32 w-32 text-white/50" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* IE3 재설계 섹션 */}
                <section className="py-20">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                                {t('IE3 전동기 재설계 서비스', 'IE3 Motor Redesign Service')}
                            </h2>
                            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                                {t(
                                    '현재 사용 중인 IE3 전동기를 분석하여 더 높은 효율 등급으로 재설계합니다.',
                                    'If you are looking for higher efficiency grades with your IE3 moters then we can analize and redesign them'

                                )}
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {redesignBenefits.map((benefit, index) => (
                                <div key={index} className="bg-white rounded-2xl p-8 shadow-lg">
                                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                                        {benefit.icon}
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">{benefit.title}</h3>
                                    <p className="text-gray-600">{benefit.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* 서비스 등급별 안내 */}
                <section className="py-20 bg-white/50">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                                {t('효율 등급별 서비스', 'Services by Efficiency Grade')}
                            </h2>
                            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                                {t(
                                    'IE4와 IE5 등급에 따라 차별화된 서비스를 제공합니다.',
                                    'We provide differentiated services according to IE4 and IE5 grades.'
                                )}
                            </p>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                            {services.map((service, index) => (
                                <div key={index} className="bg-gradient-to-br from-blue-50 to-slate-50 rounded-3xl p-8 border border-blue-100">
                                    <div className="flex items-center justify-between mb-6">
                                        <div>
                                            <span className="text-3xl font-bold text-blue-700">{service.grade}</span>
                                            <h3 className="text-2xl font-bold text-gray-900 mt-2">{service.title}</h3>
                                        </div>
                                        <div className="bg-blue-600 text-white px-4 py-2 rounded-full font-semibold">
                                            {service.service}
                                        </div>
                                    </div>
                                    <p className="text-gray-600 mb-6">{service.description}</p>
                                    <div className="space-y-3">
                                        {service.features.map((feature, idx) => (
                                            <div key={idx} className="flex items-center">
                                                <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                                                <span className="text-gray-700">{feature}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
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
                                        <td className="px-6 py-4 font-medium text-gray-700 bg-gray-50">{t('출력 범위', 'Power Range')}</td>
                                        <td className="px-6 py-4 text-gray-900">0.75kW ~ 200kW</td>
                                    </tr>
                                    <tr>
                                        <td className="px-6 py-4 font-medium text-gray-700 bg-gray-50">{t('효율 등급', 'Efficiency Class')}</td>
                                        <td className="px-6 py-4 text-gray-900">IE3, IE4, IE5</td>
                                    </tr>
                                    <tr>
                                        <td className="px-6 py-4 font-medium text-gray-700 bg-gray-50">{t('정격 전압', 'Rated Voltage')}</td>
                                        <td className="px-6 py-4 text-gray-900">220V ~ 380V</td>
                                    </tr>
                                    <tr>
                                        <td className="px-6 py-4 font-medium text-gray-700 bg-gray-50">{t('주파수', 'Frequency')}</td>
                                        <td className="px-6 py-4 text-gray-900">50/60Hz</td>
                                    </tr>
                                    <tr>
                                        <td className="px-6 py-4 font-medium text-gray-700 bg-gray-50">{t('극수', 'Poles')}</td>
                                        <td className="px-6 py-4 text-gray-900">{t('2, 4, 6극', '2, 4, 6 Poles')}</td>
                                    </tr>
                                    <tr>
                                        <td className="px-6 py-4 font-medium text-gray-700 bg-gray-50">{t('정격 회전수', 'Rated Speed')}</td>
                                        <td className="px-6 py-4 text-gray-900">0 ~ 3600 RPM</td>
                                    </tr>
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