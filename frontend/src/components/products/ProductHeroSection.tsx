// src/components/products/ProductHeroSection.tsx
'use client'

import { useLanguage } from '@/context/LanguageContext'
import Link from 'next/link'
import { ArrowRight, Zap, Gauge, Cpu, RefreshCw, Settings } from 'lucide-react'
import { useState, useEffect } from 'react'

// 로컬라이즈된 href를 위한 헬퍼 함수
function useLocalizedHref() {
    const { language } = useLanguage()

    const href = (path: string) => {
        if (language === 'en' && path.startsWith('/') && !path.startsWith('/en')) {
            return `/en${path}`
        }
        return path
    }

    return href
}

export function ProductHeroSection() {
    const { t } = useLanguage()
    const localizedHref = useLocalizedHref()
    const [activeCard, setActiveCard] = useState(0)

    const highlights = [

        {
            icon: RefreshCw,
            text: t('리엔지니어링을 통한 효율 개선', 'Efficiency Improvement through Re-engineering')
        },
        {
            icon: Settings,
            text: t('맞춤형 신규 설계 제작', 'Custom New Design & Manufacturing')
        }
    ]

    const productCards = [
        {
            icon: Zap,
            title: t('3상 유도 전동기', '3-Phase Induction Motor'),
            subtitle: t('가장 널리 사용되는 범용 전동기', 'Most Widely Used General Purpose Motor'),
            features: [
                t('기존 제품 업그레이드 가능', 'Existing Product Upgradeable'),
                t('0.75kW ~ 500kW 범위', '0.75kW ~ 500kW Range')
            ],
            color: 'from-slate-600 to-slate-800',
            iconColor: 'text-slate-300',
            status: 'available'
        },
        {
            icon: Gauge,
            title: t('고속 전동기', 'High-Speed Motor'),
            subtitle: t('10,000 ~ 50,000 RPM', '10,000 ~ 50,000 RPM'),
            features: [
                t('특수 용도 맞춤 설계', 'Special Purpose Custom Design'),
                t('정밀 밸런싱 기술', 'Precision Balancing Technology')
            ],
            color: 'from-blue-600 to-blue-800',
            iconColor: 'text-blue-300',
            status: 'available'
        },
        {
            icon: Cpu,
            title: t('WFSM 전동기', 'WFSM Motor'),
            subtitle: t('차세대 탈희토류 기술', 'Next-Gen Rare-Earth-Free Technology'),
            features: [
                t('2025년 하반기 출시', 'Release H2 2025'),
                t('친환경 미래 기술', 'Eco-Friendly Future Tech')
            ],
            color: 'from-purple-600 to-purple-800',
            iconColor: 'text-purple-300',
            status: 'development'
        }
    ]

    // 자동 슬라이드 효과
    useEffect(() => {
        const interval = setInterval(() => {
            setActiveCard((prev) => (prev + 1) % productCards.length)
        }, 5000)

        return () => clearInterval(interval)
    }, [productCards.length])

    return (
        <section className="relative min-h-[80vh] bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white overflow-hidden">
            {/* 배경 패턴 */}
            <div className="absolute inset-0 opacity-10">
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 1px)',
                        backgroundSize: '40px 40px'
                    }}
                />
            </div>

            {/* 글로우 효과 */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500 rounded-full filter blur-[150px] opacity-20"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500 rounded-full filter blur-[150px] opacity-20"></div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[60vh]">
                    {/* 왼쪽: 텍스트 콘텐츠 */}
                    <div className="space-y-8">
                        {/* 배지 */}
                        <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur rounded-full border border-white/20">
                            <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
                            <span className="text-sm font-semibold">
                                {t('전동기 설계 전문 기업 | 20년 기술 경험', 'Motor Design Specialists | 20 Years Experience')}
                            </span>
                        </div>

                        {/* 메인 타이틀 */}
                        <div>
                            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
                                <span className="block">
                                    {t('전동기 업그레이드부터', 'From Motor Upgrades')}
                                </span>
                                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-300 mt-2">
                                    {t('신규 설계까지', 'To New Design')}
                                </span>
                            </h1>
                            <p className="text-xl md:text-2xl text-slate-300 leading-relaxed">
                                {t(
                                    '기존 전동기의 성능 개선부터 새로운 전동기 설계까지, 모든 전동기 솔루션을 제공합니다.',
                                    'From improving existing motor performance to designing new motors, we provide all motor solutions.'
                                )}
                            </p>
                        </div>

                        {/* 하이라이트 */}
                        <div className="space-y-4">
                            {highlights.map((highlight, index) => (
                                <div
                                    key={index}
                                    className="flex items-center space-x-4 p-3 bg-white/5 backdrop-blur rounded-xl border border-white/10 hover:bg-white/10 transition-colors"
                                >
                                    <div className="flex-shrink-0">
                                        <highlight.icon className="w-5 h-5 text-blue-400" />
                                    </div>
                                    <span className="text-sm lg:text-base">{highlight.text}</span>
                                </div>
                            ))}
                        </div>

                        {/* CTA 버튼 */}
                        <div className="pt-4">
                            <Link
                                href={localizedHref('/about')}
                                className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-900 text-lg font-semibold rounded-xl hover:bg-blue-50 transition-all group"
                            >
                                {t('전동기 솔루션 상담', 'Motor Solution Consultation')}
                                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </div>
                    </div>

                    {/* 오른쪽: 제품 카드 */}
                    <div className="relative">
                        {/* 카드 인디케이터 */}
                        <div className="flex justify-center space-x-2 mb-8">
                            {productCards.map((_, index) => (
                                <button
                                    key={index}
                                    className={`h-2 rounded-full transition-all duration-300 ${activeCard === index ? 'w-12 bg-white' : 'w-2 bg-white/30'
                                        }`}
                                    onClick={() => setActiveCard(index)}
                                    aria-label={`Go to product ${index + 1}`}
                                />
                            ))}
                        </div>

                        {/* 제품 카드 */}
                        <div className="relative h-[400px] sm:h-[450px]">
                            {productCards.map((card, index) => (
                                <div
                                    key={index}
                                    className={`absolute inset-0 transition-all duration-700 ${activeCard === index
                                        ? 'opacity-100 scale-100 z-10'
                                        : 'opacity-0 scale-95 z-0'
                                        }`}
                                >
                                    <div className={`h-full bg-gradient-to-br ${card.color} rounded-3xl p-8 border border-white/20 backdrop-blur relative overflow-hidden`}>
                                        {/* 개발중 배지 */}
                                        {card.status === 'development' && (
                                            <div className="absolute top-6 right-6 bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                                                {t('개발중', 'In Development')}
                                            </div>
                                        )}

                                        {/* 배경 장식 */}
                                        <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-white/5 rounded-full"></div>

                                        {/* 카드 콘텐츠 */}
                                        <div className="relative h-full flex flex-col">
                                            {/* 아이콘 */}
                                            <div className="mb-6">
                                                <div className="w-20 h-20 bg-white/10 backdrop-blur rounded-2xl flex items-center justify-center">
                                                    <card.icon className={`w-10 h-10 ${card.iconColor}`} />
                                                </div>
                                            </div>

                                            {/* 제목 */}
                                            <h3 className="text-3xl font-bold mb-2">
                                                {card.title}
                                            </h3>
                                            <p className="text-lg text-white/70 mb-6">
                                                {card.subtitle}
                                            </p>

                                            {/* 특징 */}
                                            <div className="space-y-3 flex-grow">
                                                {card.features.map((feature, idx) => (
                                                    <div key={idx} className="flex items-center">
                                                        <div className="w-1.5 h-1.5 bg-white/60 rounded-full mr-3"></div>
                                                        <span className="text-white/80">{feature}</span>
                                                    </div>
                                                ))}
                                            </div>

                                            {/* 자세히 보기 */}
                                            {card.status === 'available' && (
                                                <div className="mt-6">
                                                    <span className="inline-flex items-center text-white/90 hover:text-white transition-colors cursor-pointer">
                                                        {t('자세히 보기', 'Learn more')}
                                                        <ArrowRight className="ml-2 h-4 w-4" />
                                                    </span>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* 하단 스크롤 안내 */}
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden lg:block">
                    <div className="flex flex-col items-center space-y-2 animate-bounce">
                        <span className="text-sm text-white/60">{t('더 자세한 정보', 'More Details')}</span>
                        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
                            <div className="w-1 h-3 bg-white/60 rounded-full mt-2"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}