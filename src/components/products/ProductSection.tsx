// src/components/products/ProductSection.tsx
'use client'

import { useLanguage } from '@/context/LanguageContext'
import Link from 'next/link'
import { ArrowRight, Zap, Gauge, Cpu } from 'lucide-react'

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

export function ProductSection() {
    const { t } = useLanguage()
    const localizedHref = useLocalizedHref()

    const products = [
        {
            id: 'induction',
            href: '/products/3-phase-induction',
            icon: Zap,
            title: t('3상 유도 전동기', '3-Phase Induction Motor'),
            tagline: t('IE3/IE4/IE5 고효율 전동기 설계 전문', 'IE3/IE4/IE5 High-Efficiency Motor Design Expert'),
            description: t(
                '회전자계에 의해 회전자에 유도전류가 발생하여 구동되는 원리로, 구조가 간단하고 견고하여 가장 널리 사용됩니다. 당사는 IE5 등급까지 설계 및 제작이 가능합니다.',
                'Operating on the principle of induced current in the rotor by rotating magnetic field. Simple and robust structure makes it the most widely used. We can design and manufacture up to IE5 efficiency class.'
            ),
            available: true,
            highlights: [
                t('IE5 초고효율 설계/제작 가능', 'IE5 Ultra-Premium Design/Manufacturing'),
                t('0.75kW ~ 500kW 출력 범위', '0.75kW ~ 500kW Power Range'),
                t('2/4/6/8극 다양한 극수', '2/4/6/8 Pole Configurations')
            ],
            accentColor: 'bg-slate-900',
            iconColor: 'text-slate-700'
        },
        {
            id: 'highspeed',
            href: '/products/high-speed',
            icon: Gauge,
            title: t('고속 전동기', 'High-Speed Motor'),
            tagline: t('최대 50,000 RPM 초고속 회전', 'Ultra-High Speed up to 50,000 RPM'),
            description: t(
                '특수 베어링과 로터 설계로 초고속 회전을 구현하며, 원심력과 진동을 극복하는 정밀 밸런싱 기술이 핵심입니다. 컴팩트한 크기로 높은 출력밀도를 제공합니다.',
                'Achieves ultra-high speed rotation with special bearings and rotor design. Precision balancing technology is key to overcoming centrifugal force and vibration. Provides high power density in compact size.'
            ),
            available: true,
            highlights: [
                t('10,000 ~ 50,000 RPM 속도 범위', '10,000 ~ 50,000 RPM Speed Range'),
                t('고출력 밀도 설계', 'High Power Density Design'),
                t('정밀 동적 밸런싱', 'Precision Dynamic Balancing')
            ],
            accentColor: 'bg-blue-900',
            iconColor: 'text-blue-700'
        },
        {
            id: 'wfsm',
            href: '/products/wfsm',
            icon: Cpu,
            title: t('권선형 동기 전동기', 'Wound Field Synchronous Motor'),
            subtitle: '(WFSM)',
            tagline: t('탈희토류 차세대 모터 기술', 'Rare-Earth-Free Next-Gen Motor Technology'),
            description: t(
                '회전자에 권선을 감아 전자석으로 만드는 방식으로, 영구자석이 필요 없어 희토류를 사용하지 않습니다. 역률 제어가 가능하고 높은 효율을 달성할 수 있습니다.',
                'Uses electromagnets created by winding coils on the rotor, eliminating the need for permanent magnets and rare-earth materials. Enables power factor control and achieves high efficiency.'
            ),
            available: false,
            highlights: [
                t('희토류 미사용 친환경 설계', 'Eco-Friendly Rare-Earth-Free Design'),
                t('역률 제어 가능 (진상/지상)', 'Power Factor Control (Leading/Lagging)'),
                t('2025년 하반기 출시 예정', 'Expected Release H2 2025')
            ],
            accentColor: 'bg-purple-900',
            iconColor: 'text-purple-700'
        }
    ]

    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* 헤더 */}
                <div className="text-center mb-20">
                    <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                        {t('EMECS 전동기 제품군', 'EMECS Motor Products')}
                    </h2>
                    <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
                        {t(
                            '각 전동기의 고유한 원리와 특성을 활용하여 고객의 요구사항에 최적화된 솔루션을 제공합니다.',
                            'We provide solutions optimized for customer requirements by utilizing the unique principles and characteristics of each motor type.'
                        )}
                    </p>
                    <div className="w-24 h-1 bg-blue-900 mx-auto rounded-full mt-8"></div>
                </div>

                {/* 제품 카드 그리드 */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {products.map((product) => (
                        <div key={product.id} className="group">
                            <div className={`rounded-2xl overflow-hidden transition-all duration-300 border h-full flex flex-col ${!product.available
                                ? 'bg-slate-50 border-slate-300 border-dashed'
                                : 'bg-white border-slate-200 shadow-md hover:shadow-2xl hover:scale-105'
                                }`}>
                                {/* 상태 배지 */}
                                <div className="p-6 pb-0">
                                    {product.available ? (
                                        <div className="inline-flex items-center px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-semibold mb-4">
                                            {t('제작 가능', 'Available Now')}
                                        </div>
                                    ) : (
                                        <div className="inline-flex items-center px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm font-semibold mb-4">
                                            {t('개발 중', 'Under Development')}
                                        </div>
                                    )}
                                </div>

                                <div className="p-6 pt-0 flex-grow flex flex-col">
                                    {/* 아이콘 영역 */}
                                    <div className={`w-20 h-20 ${product.accentColor} rounded-2xl flex items-center justify-center mb-6`}>
                                        <product.icon className="w-10 h-10 text-white" />
                                    </div>

                                    {/* 제품명 */}
                                    <div className="mb-4">
                                        <h3 className="text-xl font-bold text-slate-900 mb-1">
                                            {product.title}
                                        </h3>
                                        {product.subtitle && (
                                            <span className="text-lg font-semibold text-slate-700">{product.subtitle}</span>
                                        )}
                                    </div>

                                    {/* 태그라인 */}
                                    <p className={`text-sm font-semibold ${product.iconColor} mb-3`}>
                                        {product.tagline}
                                    </p>

                                    {/* 설명 (원리 중심) */}
                                    <p className="text-slate-600 mb-6 flex-grow leading-relaxed text-sm">
                                        {product.description}
                                    </p>

                                    {/* 주요 특징 */}
                                    <div className="space-y-2 mb-6">
                                        <h4 className="text-sm font-semibold text-slate-800 mb-3">
                                            {t('핵심 특징', 'Key Features')}
                                        </h4>
                                        {product.highlights.map((highlight, index) => (
                                            <div key={index} className="flex items-start">
                                                <div className={`w-1.5 h-1.5 ${product.accentColor} rounded-full mr-3 mt-1.5 flex-shrink-0`}></div>
                                                <span className="text-sm text-slate-700">{highlight}</span>
                                            </div>
                                        ))}
                                    </div>

                                    {/* CTA 버튼 */}
                                    {product.available ? (
                                        <Link
                                            href={localizedHref(product.href)}
                                            className={`inline-flex items-center justify-center px-6 py-3 ${product.accentColor} text-white rounded-xl font-semibold hover:opacity-90 transition-all group/btn`}
                                        >
                                            {t('자세히 보기', 'Learn More')}
                                            <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                                        </Link>
                                    ) : (
                                        <div className="inline-flex items-center justify-center px-6 py-3 bg-slate-300 text-slate-600 rounded-xl font-semibold cursor-not-allowed">
                                            {t('2025년 하반기 출시', 'Coming H2 2025')}
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* 하단 CTA */}
                <div className="text-center mt-20">
                    <div className="bg-gradient-to-r from-blue-900 to-slate-900 rounded-2xl p-12">
                        <h3 className="text-2xl font-bold text-white mb-4">
                            {t('맞춤형 전동기 설계가 필요하신가요?', 'Need Custom Motor Design?')}
                        </h3>
                        <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
                            {t(
                                '표준 사양으로 해결되지 않는 특수한 요구사항도 맞춤 설계로 완벽하게 구현합니다.',
                                'We perfectly implement special requirements that cannot be met with standard specifications through custom design.'
                            )}
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                href={localizedHref('/about')}
                                className="px-8 py-4 bg-white text-blue-900 rounded-xl font-semibold hover:bg-blue-50 transition-colors"
                            >
                                {t('기술 상담 신청', 'Request Technical Consultation')}
                            </Link>
                            <Link
                                href={localizedHref('/portfolio')}
                                className="px-8 py-4 border border-slate-600 text-white rounded-xl font-semibold hover:bg-white/10 transition-colors"
                            >
                                {t('제작 사례 보기', 'View Production Cases')}
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ProductSection