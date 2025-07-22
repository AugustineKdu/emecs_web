// src/components/AboutPortfolioSection.tsx
'use client'

import { useLanguage } from '@/context/LanguageContext'
import Image from 'next/image'

export function AboutPortfolioSection() {
    const { t } = useLanguage()

    const projectCategories = [
        {
            category: t('에너지 고효율', 'Energy High-Efficiency'),
            count: 7,
            description: t('국가 에너지 효율 향상 프로젝트', 'National energy efficiency improvement projects'),
            color: 'bg-blue-600'
        },
        {
            category: t('고속전동기', 'High-Speed Motor'),
            count: 3,
            description: t('산업용 고속 회전 시스템 개발', 'Industrial high-speed rotation system development'),
            color: 'bg-slate-700'
        },
        {
            category: t('전기자동차', 'Electric Vehicle'),
            count: 2,
            description: t('친환경 모빌리티 솔루션', 'Eco-friendly mobility solutions'),
            color: 'bg-slate-800'
        }
    ]

    const companyHighlights = [
        {
            title: t('KERI 출신 전문가', 'KERI Alumni Experts'),
            description: t('연구책임자 및 총괄책임자', 'Research Director & General Manager')
        },
        {
            title: t('국가 프로젝트 실적', 'National Project Track Record'),
            description: t('12개 프로젝트 성공 완료', '12 Projects Successfully Completed')
        },
        {
            title: t('차세대 기술 개발', 'Next-Gen Technology Development'),
            description: t('WFSM 탈희토류 기술', 'WFSM Rare-Earth-Free Technology')
        }
    ]

    return (
        <section className="py-24 bg-slate-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* 회사 소개 상단 */}
                <div className="text-center mb-20">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        {t('지속가능한 미래를 만들어가는 기업', 'Building a Sustainable Future')}
                    </h2>
                    <p className="text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed mb-8">
                        {t(
                            'KERI 출신 전문가들이 이끄는 혁신적인 전동기 기술 개발로 지속가능한 에너지 솔루션을 제공합니다.',
                            'Led by KERI alumni experts, we provide sustainable energy solutions through innovative motor technology development.'
                        )}
                    </p>
                    <div className="w-24 h-1 bg-blue-500 mx-auto rounded-full"></div>
                </div>

                {/* 회사 핵심 강점 */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
                    {companyHighlights.map((highlight, index) => (
                        <div key={index} className="bg-slate-800 rounded-2xl p-8 border border-slate-700">
                            <h3 className="text-xl font-bold text-white mb-3">
                                {highlight.title}
                            </h3>
                            <p className="text-slate-300">
                                {highlight.description}
                            </p>
                        </div>
                    ))}
                </div>

                {/* WFSM 개발 특별 섹션 */}
                <div className="bg-slate-800 rounded-2xl p-12 mb-20 border border-slate-700">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <div className="inline-block px-4 py-2 bg-orange-500 text-white rounded-full text-sm font-semibold mb-6">
                                {t('개발 중', 'Under Development')}
                            </div>
                            <h3 className="text-3xl font-bold text-white mb-6">
                                {t('WFSM 탈희토류 기술', 'WFSM Rare-Earth-Free Technology')}
                            </h3>
                            <p className="text-lg text-slate-300 leading-relaxed mb-6">
                                {t(
                                    '희토류 자원의 한계를 극복하고 지속가능한 미래를 위한 차세대 전동기 기술을 개발하고 있습니다.',
                                    'We are developing next-generation motor technology to overcome rare-earth resource limitations for a sustainable future.'
                                )}
                            </p>
                            <div className="space-y-3">
                                {[
                                    t('환경 친화적 설계', 'Environmentally Friendly Design'),
                                    t('자원 독립성 확보', 'Resource Independence'),
                                    t('차세대 제어 기술', 'Next-Gen Control Technology')
                                ].map((feature, index) => (
                                    <div key={index} className="flex items-center">
                                        <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                                        <span className="text-slate-300">{feature}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* 이미지 컨테이너 - 박스에 꽉 차도록 수정 */}
                        <div className="relative bg-slate-700 rounded-2xl h-80 overflow-hidden">
                            <Image
                                src="/images/wfsmTech.png"
                                alt={t('WFSM 기술 이미지', 'WFSM Technology Image')}
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                </div>

                {/* 국가 프로젝트 실적 */}
                <div>
                    <div className="text-center mb-16">
                        <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
                            {t('국가 프로젝트 실적', 'National Project Portfolio')}
                        </h3>
                        <p className="text-lg text-slate-300 max-w-3xl mx-auto">
                            {t(
                                '다양한 국가 프로젝트를 성공적으로 완료하며 기술력과 신뢰성을 입증했습니다.',
                                'We have proven our technical capabilities and reliability by successfully completing various national projects.'
                            )}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                        {projectCategories.map((category, index) => (
                            <div key={index} className="bg-slate-800 rounded-2xl p-8 border border-slate-700 text-center">
                                <div className={`w-20 h-20 ${category.color} rounded-2xl flex items-center justify-center mx-auto mb-6`}>
                                    <span className="text-3xl font-bold text-white">{category.count}</span>
                                </div>
                                <h4 className="text-xl font-bold text-white mb-3">
                                    {category.category}
                                </h4>
                                <p className="text-slate-300">
                                    {category.description}
                                </p>
                            </div>
                        ))}
                    </div>

                    {/* 총 실적 요약 */}
                    {/* <div className="text-center">
                        <div className="bg-slate-800 rounded-2xl p-8 border border-slate-700 inline-block">
                            <div className="flex items-center justify-center space-x-8">
                                <div>
                                    <div className="text-4xl font-bold text-blue-500 mb-2">12</div>
                                    <p className="text-slate-300 text-sm">
                                        {t('총 프로젝트', 'Total Projects')}
                                    </p>
                                </div>
                                <div className="w-1 h-12 bg-slate-600"></div>
                                <div>
                                    <div className="text-4xl font-bold text-blue-500 mb-2">100%</div>
                                    <p className="text-slate-300 text-sm">
                                        {t('성공률', 'Success Rate')}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div> */}
                </div>

                {/* 하단 성장 비전 */}
                <div className="text-center mt-20">
                    <div className="bg-blue-600 rounded-2xl p-12">
                        <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                            {t('함께 성장하는 파트너', 'Growing Together as Partners')}
                        </h3>
                        <p className="text-blue-100 max-w-2xl mx-auto leading-relaxed">
                            {t(
                                '혁신적인 기술과 지속적인 연구개발을 통해 고객과 함께 지속가능한 미래를 만들어갑니다.',
                                'Through innovative technology and continuous R&D, we create a sustainable future together with our customers.'
                            )}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}