// src/components/home/ProductSection.tsx
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
            title: t('3상 유도 전동기', '3-Phase Induction Motor'),
            subtitle: t('IE3/IE4/IE5 고효율 설계', 'IE3/IE4/IE5 High Efficiency Design'),
            description: t(
                '가장 널리 사용되는 전동기 타입으로, 내구성과 신뢰성이 뛰어나며 유지보수가 간편합니다. 다양한 산업 분야에 맞춤형 설계가 가능합니다.',
                'The most widely used motor type with excellent durability and easy maintenance. Customizable design for various industries.'
            ),
            icon: Zap,
            features: [
                // t('0.75kW ~ 500kW', '0.75kW ~ 500kW'),
                t('2/4/6/8극', '2/4/6/8 Poles'),
                // t('IP55/IP65 보호등급', 'IP55/IP65 Protection')
            ],
            bgColor: 'bg-gradient-to-br from-slate-100 to-slate-200',
            accentColor: 'bg-slate-900',
            iconColor: 'text-slate-700',
            status: 'available'
        },
        {
            id: 'highspeed',
            href: '/products/high-speed',
            title: t('고속 전동기', 'High-Speed Motor'),
            subtitle: t('최대 50,000 RPM', 'Up to 50,000 RPM'),
            description: t(
                '압축기, 블로워, 터빈 등 고속 회전이 필요한 산업 장비에 최적화된 전동기입니다. 최대 50,000 RPM까지 지원합니다.',
                'Motors optimized for industrial equipment requiring high-speed rotation. Supporting up to 50,000 RPM.'
            ),
            icon: Gauge,
            features: [
                t('10,000 ~ 50,000 RPM', '10,000 ~ 50,000 RPM'),
                // t('정밀 밸런싱', 'Precision Balancing'),
                // t('특수 베어링 설계', 'Special Bearing Design')
            ],
            bgColor: 'bg-gradient-to-br from-blue-100 to-blue-200',
            accentColor: 'bg-blue-900',
            iconColor: 'text-blue-700',
            status: 'available'
        },
        {
            id: 'wfsm',
            href: '/products/wfsm',
            title: t('권선형 동기 전동기', 'Wound Field Synchronous Motor'),
            subtitle: t('차세대 탈희토류 기술', 'Next-Gen Rare-Earth-Free Technology'),
            description: t(
                '차세대 전동기 기술로 탈희토류 솔루션과 정밀한 제어 특성을 목표로 연구개발을 진행하고 있습니다. 2025년 하반기 출시 예정입니다.',
                'Next-generation motor technology under development targeting rare-earth-free solutions and precise control. Expected release in H2 2025.'
            ),
            icon: Cpu,
            features: [
                t('탈희토류 설계', 'Rare-Earth-Free Design'),
                // t('정밀 토크 제어', 'Precise Torque Control'),
                // t('2025년 하반기 출시', 'H2 2025 Release')
            ],
            bgColor: 'bg-gradient-to-br from-purple-100 to-purple-200',
            accentColor: 'bg-purple-900',
            iconColor: 'text-purple-700',
            status: 'development'
        }
    ]

    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* 헤더 */}
                <div className="text-center mb-20">
                    <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                        {t('주요 제품 라인업', 'Product Lineup')}
                    </h2>
                    <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
                        {t(
                            '고객의 요구사항에 최적화된 맞춤형 전동기 설계로 최고의 성능을 구현합니다.',
                            'Achieve the best performance with custom motor design optimized for your requirements.'
                        )}
                    </p>
                    <div className="w-24 h-1 bg-blue-900 mx-auto rounded-full mt-8"></div>
                </div>

                {/* 제품 그리드 */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {products.map((product) => (
                        <div
                            key={product.id}
                            className={`group relative overflow-hidden rounded-2xl transition-all duration-500 ${product.status === 'development'
                                ? 'opacity-90'
                                : 'hover:shadow-2xl hover:scale-105'
                                }`}
                        >
                            {/* 배경 패턴 */}
                            <div className={`absolute inset-0 ${product.bgColor}`}>
                                <div className="absolute inset-0 opacity-10">
                                    <div
                                        className="absolute inset-0"
                                        style={{
                                            backgroundImage: 'radial-gradient(circle at 1px 1px, currentColor 1px, transparent 1px)',
                                            backgroundSize: '20px 20px'
                                        }}
                                    />
                                </div>
                            </div>

                            {/* 카드 콘텐츠 */}
                            <div className="relative p-8">
                                {/* 개발 중 배지 */}
                                {product.status === 'development' && (
                                    <div className="absolute top-4 right-4">
                                        <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                                            {t('개발 중', 'Under Development')}
                                        </span>
                                    </div>
                                )}

                                {/* 아이콘 */}
                                <div className={`w-16 h-16 ${product.accentColor} rounded-2xl flex items-center justify-center mb-6`}>
                                    <product.icon className="w-8 h-8 text-white" />
                                </div>

                                {/* 제목 및 부제목 */}
                                <h3 className="text-2xl font-bold text-slate-900 mb-2">
                                    {product.title}
                                </h3>
                                <p className={`text-sm font-semibold ${product.iconColor} mb-4`}>
                                    {product.subtitle}
                                </p>

                                {/* 설명 */}
                                <p className="text-slate-600 leading-relaxed mb-6 text-sm">
                                    {product.description}
                                </p>

                                {/* 특징 리스트 */}
                                <ul className="space-y-2 mb-8">
                                    {product.features.map((feature, index) => (
                                        <li key={index} className="flex items-center text-sm text-slate-700">
                                            <div className={`w-1.5 h-1.5 ${product.accentColor} rounded-full mr-3`}></div>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>

                                {/* CTA 버튼 */}
                                <div>
                                    {product.status === 'development' ? (
                                        <div className="inline-flex items-center px-6 py-3 bg-slate-300 text-slate-600 rounded-xl text-sm font-semibold cursor-not-allowed">
                                            {t('출시 예정', 'Coming Soon')}
                                        </div>
                                    ) : (
                                        <Link
                                            href={localizedHref(product.href)}
                                            className={`inline-flex items-center px-6 py-3 ${product.accentColor} text-white rounded-xl text-sm font-semibold hover:opacity-90 transition-all duration-300 group/btn`}
                                        >
                                            {t('자세히 보기', 'Learn More')}
                                            <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                                        </Link>
                                    )}
                                </div>
                            </div>

                            {/* 호버 효과 그라디언트 */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                        </div>
                    ))}
                </div>

                {/* 하단 CTA */}
                <div className="text-center mt-20">
                    <div className="bg-gradient-to-r from-blue-900 to-slate-900 rounded-2xl p-12">
                        <h3 className="text-2xl font-bold text-white mb-4">
                            {t('맞춤형 솔루션이 필요하신가요?', 'Need a Custom Solution?')}
                        </h3>
                        <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
                            {t(
                                '고객의 특별한 요구사항에 맞는 전동기를 설계하고 제작합니다. 전문 엔지니어와 상담해보세요.',
                                'We design and manufacture motors tailored to your specific requirements. Consult with our expert engineers.'
                            )}
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                href={localizedHref('/about')}
                                className="px-8 py-4 bg-white text-blue-900 rounded-xl font-semibold hover:bg-blue-50 transition-colors"
                            >
                                {t('상담 문의', 'Contact Us')}
                            </Link>
                            <Link
                                href={localizedHref('/products')}
                                className="px-8 py-4 border border-slate-600 text-white rounded-xl font-semibold hover:bg-white/10 transition-colors"
                            >
                                {t('전체 제품 보기', 'View All Products')}
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}