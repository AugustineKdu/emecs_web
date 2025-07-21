// src/components/DevelopmentProcessSection.tsx
'use client'

import { useLanguage } from '@/context/LanguageContext'

export function DevelopmentProcessSection() {
    const { t } = useLanguage()

    const processes = [
        {
            step: '01',
            title: t('요구사항 분석', 'Requirements Analysis'),
            description: t(
                '고객의 상세 요구사항과 운영 환경을 철저히 분석하여 최적의 솔루션 방향을 설정합니다.',
                'Thoroughly analyze customer requirements and operating environment to establish optimal solution direction.'
            ),
            details: [
                t('운영 환경 분석', 'Operating Environment Analysis'),
                t('성능 요구사항 정의', 'Performance Requirements Definition'),
                t('제약 조건 파악', 'Constraint Identification')
            ]
        },
        {
            step: '02',
            title: t('설계 및 개발', 'Design & Development'),
            description: t(
                '분석된 요구사항을 바탕으로 최적화된 전동기를 설계하고 개발합니다.',
                'Design and develop optimized motors based on analyzed requirements.'
            ),
            details: [
                t('3D 모델링 및 시뮬레이션', '3D Modeling & Simulation'),
            ]
        },
        {
            step: '03',
            title: t('테스트 및 검증', 'Test & Verification'),
            description: t(
                '제작된 프로토타입의 성능을 철저히 테스트하고 설계 요구사항 달성을 검증합니다.',
                'Thoroughly test prototype performance and verify achievement of design requirements.'
            ),
            details: [
                t('성능 테스트', 'Performance Testing'),
            ]
        },
        {
            step: '04',
            title: t('구현 및 지원', 'Implementation & Support'),
            description: t(
                '최종 제품을 생산하고 고객 현장에서의 성공적인 구현을 위한 지속적인 지원을 제공합니다.',
                'Produce final products and provide continuous support for successful implementation at customer sites.'
            ),
            details: [
                t('유지보수 및 A/S', 'Maintenance & After Service')
            ]
        }
    ]

    return (
        <section className="py-24 bg-slate-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* 헤더 */}
                <div className="text-center mb-20">
                    <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                        {t('맞춤형 전동기 설계 프로세스', 'Custom Motor Design Process')}
                    </h2>
                    <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
                        {t(
                            '체계적이고 전문적인 프로세스를 통해 고객의 요구사항에 완벽히 맞는 전동기를 설계하고 제작합니다.',
                            'Through systematic and professional processes, we design and manufacture motors that perfectly meet customer requirements.'
                        )}
                    </p>
                    <div className="w-24 h-1 bg-blue-900 mx-auto rounded-full mt-8"></div>
                </div>

                {/* 프로세스 플로우 */}
                <div className="relative">
                    {/* 데스크톱 연결선 */}
                    <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-blue-200 -translate-y-1/2"></div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
                        {processes.map((process, index) => (
                            <div key={index} className="relative">
                                {/* 모바일/태블릿 연결선 */}
                                {index < processes.length - 1 && (
                                    <div className="absolute top-full left-1/2 w-0.5 h-8 bg-blue-200 -translate-x-1/2 lg:hidden"></div>
                                )}

                                {/* 프로세스 카드 */}
                                <div className="bg-white border-2 border-blue-100 rounded-xl p-6 h-full hover:border-blue-300 hover:shadow-lg transition-all duration-300">
                                    {/* 스텝 번호 */}
                                    <div className="flex items-center justify-between mb-4">
                                        <div className="w-10 h-10 bg-blue-900 text-white rounded-lg flex items-center justify-center font-bold text-sm">
                                            {process.step}
                                        </div>


                                    </div>

                                    {/* 제목 */}
                                    <h3 className="text-xl font-bold text-slate-900 mb-3">
                                        {process.title}
                                    </h3>

                                    {/* 설명 */}
                                    <p className="text-sm text-slate-600 mb-4 leading-relaxed min-h-[60px]">
                                        {process.description}
                                    </p>

                                    {/* 세부 사항 */}
                                    <div className="space-y-2 pt-4 border-t border-blue-100">
                                        <h4 className="text-xs font-semibold text-blue-900 uppercase tracking-wider mb-2">
                                            {t('주요 활동', 'Key Activities')}
                                        </h4>
                                        {process.details.map((detail, detailIndex) => (
                                            <div key={detailIndex} className="flex items-start">
                                                <div className="w-1 h-1 bg-blue-400 rounded-full mr-2 mt-1.5 flex-shrink-0"></div>
                                                <span className="text-slate-700 text-xs leading-relaxed">{detail}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* 노드 포인트 (데스크톱) */}
                                <div className="hidden lg:flex absolute -bottom-2 left-1/2 -translate-x-1/2 translate-y-full">
                                    <div className="w-3 h-3 bg-blue-900 rounded-full"></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* 하단 요약 */}
                <div className="text-center mt-20">
                    <div className="bg-blue-50 border border-blue-200 rounded-2xl p-12 max-w-4xl mx-auto">
                        <h3 className="text-2xl font-bold text-blue-900 mb-4">
                            {t('전문적인 프로세스로 완성도 높은 결과를', 'Professional Process for High-Quality Results')}
                        </h3>
                        <p className="text-slate-700 max-w-2xl mx-auto leading-relaxed">
                            {t(
                                '오랜 경험과 노하우를 바탕으로 체계화된 프로세스를 통해 고객이 원하는 최적의 전동기를 제공합니다.',
                                'Based on extensive experience and know-how, we provide optimal motors through systematized processes.'
                            )}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}