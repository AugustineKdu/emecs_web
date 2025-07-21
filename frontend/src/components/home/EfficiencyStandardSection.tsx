// src/components/home/EfficiencyStandardSection.tsx
'use client'

import { useLanguage } from '@/context/LanguageContext'
import { TrendingUp, Zap, Award } from 'lucide-react'
import { useMemo } from 'react'

// ROI 계산을 위한 기본 파라미터
const BASE_PARAMS = {
    motorPowerKW: 7.5,
    motorPowerHP: 10,
    operatingHoursPerDay: 12,
    operatingDaysPerYear: 360,
    loadFactor: 1.0,
    electricityRateKRW: 170,
    electricityRateUSD: 0.131,
    exchangeRate: 1300
}

// 효율 기본값
const EFFICIENCY_VALUES = {
    IE3: 91.7,
    IE4: 92.4,
    IE5: 93.8
}

export function EfficiencyStandardSection() {
    const { t, language } = useLanguage()

    // ROI 계산
    const calculations = useMemo(() => {
        const annualOperatingHours = BASE_PARAMS.operatingHoursPerDay * BASE_PARAMS.operatingDaysPerYear

        // 연간 절감액 계산
        const calculateAnnualSavings = (fromEff: number, toEff: number) => {
            const savingsKWH = 0.746 * BASE_PARAMS.motorPowerHP * BASE_PARAMS.loadFactor *
                annualOperatingHours * (100 / fromEff - 100 / toEff)

            return {
                krw: Math.round(savingsKWH * BASE_PARAMS.electricityRateKRW),
                usd: Math.round(savingsKWH * BASE_PARAMS.electricityRateUSD)
            }
        }

        // IE3 → IE4, IE5 계산
        const ie4Savings = calculateAnnualSavings(EFFICIENCY_VALUES.IE3, EFFICIENCY_VALUES.IE4)
        const ie5Savings = calculateAnnualSavings(EFFICIENCY_VALUES.IE3, EFFICIENCY_VALUES.IE5)

        return {
            IE4: {
                efficiencyGain: ((EFFICIENCY_VALUES.IE4 - EFFICIENCY_VALUES.IE3) / EFFICIENCY_VALUES.IE3 * 100).toFixed(1),
                annualSavings: ie4Savings
            },
            IE5: {
                efficiencyGain: ((EFFICIENCY_VALUES.IE5 - EFFICIENCY_VALUES.IE3) / EFFICIENCY_VALUES.IE3 * 100).toFixed(1),
                annualSavings: ie5Savings
            }
        }
    }, [])

    // 화폐 포맷
    const formatCurrency = (krw: number, usd: number) => {
        if (language === 'ko') {
            return `연간 ${Math.round(krw / 10000)}만원 절감 ($${usd.toLocaleString()} USD)`
        } else {
            return `$${usd.toLocaleString()} USD annual savings (₩${krw.toLocaleString()} KRW)`
        }
    }

    const efficiencyData = [
        {
            standard: 'IE3',
            efficiency: EFFICIENCY_VALUES.IE3,
            label: t('현재 표준', 'Current Standard'),
            description: t('프리미엄 효율', 'Premium Efficiency'),
            color: 'slate'
        },
        {
            standard: 'IE4',
            efficiency: EFFICIENCY_VALUES.IE4,
            label: t('고효율', 'Super Premium'),
            description: t('슈퍼 프리미엄 효율', 'Super Premium Efficiency'),
            color: 'blue',
            improvement: `+${calculations.IE4.efficiencyGain}%`
        },
        {
            standard: 'IE5',
            efficiency: EFFICIENCY_VALUES.IE5,
            label: t('초고효율', 'Ultra Premium'),
            description: t('울트라 프리미엄 효율', 'Ultra Premium Efficiency'),
            color: 'purple',
            improvement: `+${calculations.IE5.efficiencyGain}%`
        }
    ]

    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                        {t('국제 효율 표준과 당사의 기술력', 'International Efficiency Standards & Our Technology')}
                    </h2>
                    <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                        {t(
                            'IEC 60034-30-1 표준 기반, 7.5kW 4극 전동기 효율 비교',
                            'Based on IEC 60034-30-1 standard, 7.5kW 4-pole motor efficiency comparison'
                        )}
                    </p>
                    <div className="w-24 h-1 bg-blue-900 mx-auto rounded-full mt-8"></div>
                </div>

                {/* 효율 등급 비교 차트 */}
                <div className="bg-slate-50 rounded-2xl p-8 mb-12 border border-slate-200">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {efficiencyData.map((data, index) => (
                            <div key={data.standard} className="relative">
                                <div className={`bg-white rounded-xl p-6 border-2 transition-all hover:shadow-lg ${data.standard === 'IE3'
                                    ? 'border-slate-300'
                                    : data.standard === 'IE4'
                                        ? 'border-blue-300'
                                        : 'border-purple-300'
                                    }`}>
                                    {/* 등급 표시 */}
                                    <div className="flex items-center justify-between mb-4">
                                        <span className={`text-3xl font-bold ${data.standard === 'IE3'
                                            ? 'text-slate-700'
                                            : data.standard === 'IE4'
                                                ? 'text-blue-700'
                                                : 'text-purple-700'
                                            }`}>{data.standard}</span>
                                        {data.improvement && (
                                            <span className="px-2 py-1 bg-green-100 text-green-700 text-sm font-semibold rounded">
                                                {data.improvement}
                                            </span>
                                        )}
                                    </div>

                                    {/* 효율 수치 */}
                                    <div className="text-center py-6">
                                        <div className="text-5xl font-bold text-slate-900 mb-2">
                                            {data.efficiency}%
                                        </div>
                                        <div className="text-sm text-slate-600">
                                            {data.description}
                                        </div>
                                    </div>

                                    {/* 프로그레스 바 */}
                                    <div className="relative">
                                        <div className="w-full bg-slate-200 rounded-full h-3">
                                            <div
                                                className={`h-3 rounded-full transition-all duration-1000 ${data.standard === 'IE3'
                                                    ? 'bg-slate-500'
                                                    : data.standard === 'IE4'
                                                        ? 'bg-blue-500'
                                                        : 'bg-purple-500'
                                                    }`}
                                                style={{ width: `${data.efficiency}%` }}
                                            ></div>
                                        </div>
                                    </div>

                                    {/* 라벨 */}
                                    <div className="mt-4 text-center">
                                        <span className={`inline-block px-3 py-1 text-xs font-medium rounded-full ${data.standard === 'IE3'
                                            ? 'bg-slate-100 text-slate-700'
                                            : data.standard === 'IE4'
                                                ? 'bg-blue-100 text-blue-700'
                                                : 'bg-purple-100 text-purple-700'
                                            }`}>
                                            {data.label}
                                        </span>
                                    </div>
                                </div>

                                {/* 화살표 (마지막 제외) */}
                                {index < efficiencyData.length - 1 && (
                                    <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                                        <div className="text-slate-400">
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
                    {/* 현재 표준: IE3 */}
                    <div className="bg-slate-50 p-8 md:p-10 rounded-2xl border border-slate-200 h-full flex flex-col">
                        <div className="mb-8">
                            <div className="inline-flex items-center px-4 py-2 bg-slate-200 text-slate-700 rounded-lg text-sm font-semibold mb-4">
                                <Zap className="w-4 h-4 mr-2" />
                                {t('최소 효율 규제 (MEPS)', 'Minimum Energy Performance Standard')}
                            </div>
                            <h3 className="text-2xl md:text-3xl font-bold text-slate-900">
                                {t('현재 표준: IE3 프리미엄 효율', 'Current Standard: IE3 Premium Efficiency')}
                            </h3>
                        </div>

                        <div className="space-y-4 flex-grow">
                            <p className="text-slate-600 text-lg leading-relaxed">
                                {t(
                                    '2017년부터 많은 국가에서 IE3를 최소 효율 기준으로 채택하고 있습니다. 7.5kW 4극 전동기 기준 91.7%의 효율을 달성하며, 이는 이전 IE2 대비 약 2% 향상된 수준입니다.',
                                    'Since 2017, many countries have adopted IE3 as the minimum efficiency standard. For 7.5kW 4-pole motors, it achieves 91.7% efficiency, approximately 2% improvement over IE2.'
                                )}
                            </p>

                            <div className="bg-white rounded-lg p-4 border border-slate-200">
                                <h4 className="font-semibold text-slate-800 mb-2">{t('IE3 적용 현황', 'IE3 Implementation Status')}</h4>
                                <ul className="space-y-2 text-sm text-slate-600">
                                    <li className="flex items-start">
                                        <span className="text-slate-400 mr-2">•</span>
                                        <span>{t('미국/캐나다: NEMA Premium 필수', 'USA/Canada: NEMA Premium mandatory')}</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-slate-400 mr-2">•</span>
                                        <span>{t('유럽: 0.75kW 이상 의무화', 'Europe: Mandatory for motors ≥0.75kW')}</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-slate-400 mr-2">•</span>
                                        <span>{t('중국/인도: 단계적 도입 중', 'China/India: Phased implementation')}</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="pt-6 mt-6 border-t border-slate-200">
                            <div className="flex items-center justify-between">
                                <span className="text-slate-600">{t('7.5kW 기준 효율', '7.5kW Efficiency')}</span>
                                <span className="text-2xl font-bold text-slate-700">{EFFICIENCY_VALUES.IE3}%</span>
                            </div>
                        </div>
                    </div>

                    {/* 당사의 설계 역량: IE4 & IE5 */}
                    <div className="bg-gradient-to-br from-blue-900 to-purple-900 text-white p-8 md:p-10 rounded-2xl h-full flex flex-col relative overflow-hidden">
                        <div className="absolute inset-0 opacity-10">
                            <div className="absolute inset-0" style={{
                                backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 1px)',
                                backgroundSize: '24px 24px'
                            }} />
                        </div>

                        <div className="relative mb-8">
                            <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur text-white rounded-lg text-sm font-semibold mb-4">
                                <Award className="w-4 h-4 mr-2" />
                                {t('차세대 효율 기술', 'Next-Generation Efficiency Technology')}
                            </div>
                            <h3 className="text-2xl md:text-3xl font-bold">
                                {t('EMECS의 설계 역량: IE4 & IE5 실현', 'EMECS Design Capability: Achieving IE4 & IE5')}
                            </h3>
                        </div>

                        <div className="relative space-y-4 flex-grow">
                            <p className="text-blue-100 text-lg leading-relaxed">
                                {t(
                                    '당사는 최신 전자기 설계 기술과 고급 재료를 활용하여 IE4(92.4%) 및 IE5(93.8%) 수준의 초고효율 전동기를 설계・제작할 수 있습니다.',
                                    'We can design and manufacture ultra-high efficiency motors at IE4 (92.4%) and IE5 (93.8%) levels using advanced electromagnetic design technology and premium materials.'
                                )}
                            </p>

                            <div className="space-y-4">
                                <div className="bg-white/10 backdrop-blur rounded-lg p-4 border border-white/20">
                                    <div className="flex items-center justify-between mb-2">
                                        <span className="font-semibold">IE4 {t('슈퍼 프리미엄', 'Super Premium')}</span>
                                        <span className="text-xl font-bold">{EFFICIENCY_VALUES.IE4}%</span>
                                    </div>
                                    <p className="text-sm text-blue-200">
                                        {t(
                                            `IE3 대비 ${calculations.IE4.efficiencyGain}% 효율 향상, `,
                                            `${calculations.IE4.efficiencyGain}% efficiency improvement over IE3, `
                                        )}
                                        {formatCurrency(calculations.IE4.annualSavings.krw, calculations.IE4.annualSavings.usd)}
                                    </p>
                                </div>

                                <div className="bg-white/10 backdrop-blur rounded-lg p-4 border border-white/20">
                                    <div className="flex items-center justify-between mb-2">
                                        <span className="font-semibold">IE5 {t('울트라 프리미엄', 'Ultra Premium')}</span>
                                        <span className="text-xl font-bold">{EFFICIENCY_VALUES.IE5}%</span>
                                    </div>
                                    <p className="text-sm text-purple-200">
                                        {t(
                                            `IE3 대비 ${calculations.IE5.efficiencyGain}% 효율 향상, `,
                                            `${calculations.IE5.efficiencyGain}% efficiency improvement over IE3, `
                                        )}
                                        {formatCurrency(calculations.IE5.annualSavings.krw, calculations.IE5.annualSavings.usd)}
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="relative bg-white/20 backdrop-blur border border-white/30 rounded-xl p-6 mt-6">
                            <div className="flex items-center justify-center">
                                <TrendingUp className="h-6 w-6 mr-3" />
                                <span className="font-bold text-lg">
                                    {t(
                                        `IE3 → IE5 전환 시 ${calculations.IE5.efficiencyGain}% 효율 향상`,
                                        `IE3 → IE5: ${calculations.IE5.efficiencyGain}% Efficiency Gain`
                                    )}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </section>
    )
}