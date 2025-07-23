// src/components/home/ROISection.tsx
'use client'
import { useLanguage } from '@/context/LanguageContext'
import { useMemo } from 'react'

// 기본 파라미터 설정
const BASE_PARAMS = {
    motorPowerKW: 7.5,           // kW
    motorPowerHP: 10,            // HP
    operatingHoursPerDay: 12,    // 시간/일
    operatingDaysPerYear: 365,   // 일/년
    loadFactor: 1.0,            // 100%
    electricityRateKRW: 170,     // 원/kWh
    electricityRateUSD: 0.077,   // USD/kWh
    exchangeRate: 1300,          // KRW/USD
    motorLifespan: 15,           // 년
    co2EmissionFactor: 0.45,     // kgCO2/kWh
    motorBasePrice: 644000,     // IE3 모터 가격
    additionalCostRatio: {       // IE3 대비 추가 비용 비율
        IE4: 0.15,               // 15% 추가
        IE5: 0.30                // 30% 추가
    }
}

// 효율 등급별 고정값
const EFFICIENCY_VALUES = {
    IE3: 91.7,
    IE4: 92.4,
    IE5: 93.8
}

function calculateSavings(fromEff: number, toEff: number) {
    // S = 0.746 × HP × L × N × (100/E₃ - 100/E₄)
    const annualOperatingHours = BASE_PARAMS.operatingHoursPerDay * BASE_PARAMS.operatingDaysPerYear
    const savingsKwh = 0.746 * BASE_PARAMS.motorPowerHP * BASE_PARAMS.loadFactor * annualOperatingHours * (100 / fromEff - 100 / toEff)
    return {
        krw: savingsKwh * BASE_PARAMS.electricityRateKRW,
        usd: savingsKwh * BASE_PARAMS.electricityRateUSD,
        energy_saved: savingsKwh
    }
}

export function ROISection() {
    const { t, language } = useLanguage()

    // ROI 계산 결과 useMemo로 캐싱
    const calculations = useMemo(() => {
        // 효율 향상
        const ie4EfficiencyGain = ((EFFICIENCY_VALUES.IE4 - EFFICIENCY_VALUES.IE3) / EFFICIENCY_VALUES.IE3 * 100)
        const ie5EfficiencyGain = ((EFFICIENCY_VALUES.IE5 - EFFICIENCY_VALUES.IE3) / EFFICIENCY_VALUES.IE3 * 100)
        // 연간 절감액
        const ie4Annual = calculateSavings(EFFICIENCY_VALUES.IE3, EFFICIENCY_VALUES.IE4)
        const ie5Annual = calculateSavings(EFFICIENCY_VALUES.IE3, EFFICIENCY_VALUES.IE5)
        // 투자 회수 기간 (개월)
        const calcPayback = (annualKRW: number, addRatio: number) => {
            const addCost = BASE_PARAMS.motorBasePrice * addRatio
            return Math.round((addCost / annualKRW) * 12)
        }
        // 15년 누적 효과
        const calc15Year = (annual: { krw: number; usd: number; energy_saved: number }) => ({
            totalSavingsKRW: annual.krw * BASE_PARAMS.motorLifespan,
            totalSavingsUSD: annual.usd * BASE_PARAMS.motorLifespan,
            totalEnergySaved: annual.energy_saved * BASE_PARAMS.motorLifespan,
            totalCO2Reduced: (annual.energy_saved * BASE_PARAMS.motorLifespan * BASE_PARAMS.co2EmissionFactor) / 1000
        })
        return {
            IE4: {
                efficiencyGain: ie4EfficiencyGain.toFixed(1),
                annualSavings: {
                    krw: ie4Annual.krw,
                    usd: ie4Annual.usd,
                    energySaved: ie4Annual.energy_saved
                },
                paybackMonths: calcPayback(ie4Annual.krw, BASE_PARAMS.additionalCostRatio.IE4),
                benefits15Year: calc15Year(ie4Annual)
            },
            IE5: {
                efficiencyGain: ie5EfficiencyGain.toFixed(1),
                annualSavings: {
                    krw: ie5Annual.krw,
                    usd: ie5Annual.usd,
                    energySaved: ie5Annual.energy_saved
                },
                paybackMonths: calcPayback(ie5Annual.krw, BASE_PARAMS.additionalCostRatio.IE5),
                benefits15Year: calc15Year(ie5Annual)
            }
        }
    }, [])

    // 화폐 표시 헬퍼 함수
    const formatCurrency = (krwAmount: number, usdAmount: number) => {
        if (language === 'ko') {
            return `${Math.round(krwAmount / 10000)}만원 ($${Math.round(usdAmount).toLocaleString()} USD)`
        } else {
            return `$${Math.round(usdAmount).toLocaleString()} USD (₩${Math.round(krwAmount).toLocaleString()} KRW)`
        }
    }

    // 비교 데이터 생성
    const comparisonData = [
        {
            id: 'ie4',
            title: 'IE3 → IE4',
            fromEfficiency: EFFICIENCY_VALUES.IE3,
            toEfficiency: EFFICIENCY_VALUES.IE4,
            efficiencyGain: `${calculations.IE4.efficiencyGain}%`,
            annualSavings: formatCurrency(calculations.IE4.annualSavings.krw, calculations.IE4.annualSavings.usd),
            paybackPeriod: calculations.IE4.paybackMonths > 12
                ? t(`${(calculations.IE4.paybackMonths / 12).toFixed(1)}년`, `${(calculations.IE4.paybackMonths / 12).toFixed(1)} years`)
                : t(`${calculations.IE4.paybackMonths}개월`, `${calculations.IE4.paybackMonths} months`),
            paybackMonths: calculations.IE4.paybackMonths,
            costSavingRate: `${calculations.IE4.efficiencyGain}%`,
            totalSavings15yr: formatCurrency(
                calculations.IE4.benefits15Year.totalSavingsKRW,
                calculations.IE4.benefits15Year.totalSavingsUSD
            ),
            energySaved15yr: `${Math.round(calculations.IE4.benefits15Year.totalEnergySaved).toLocaleString()} kWh`,
            co2Reduced15yr: `${calculations.IE4.benefits15Year.totalCO2Reduced.toFixed(1)} tCO₂`,
            description: t(
                `IE3에서 IE4로 전환 시 기존 전기료의 약 ${calculations.IE4.efficiencyGain}%를 절감할 수 있습니다.`,
                `Save approximately ${calculations.IE4.efficiencyGain}% of existing electricity costs when switching from IE3 to IE4.`
            )
        },
        {
            id: 'ie5',
            title: 'IE3 → IE5',
            fromEfficiency: EFFICIENCY_VALUES.IE3,
            toEfficiency: EFFICIENCY_VALUES.IE5,
            efficiencyGain: `${calculations.IE5.efficiencyGain}%`,
            annualSavings: formatCurrency(calculations.IE5.annualSavings.krw, calculations.IE5.annualSavings.usd),
            paybackPeriod: calculations.IE5.paybackMonths > 12
                ? t(`${(calculations.IE5.paybackMonths / 12).toFixed(1)}년`, `${(calculations.IE5.paybackMonths / 12).toFixed(1)} years`)
                : t(`${calculations.IE5.paybackMonths}개월`, `${calculations.IE5.paybackMonths} months`),
            paybackMonths: calculations.IE5.paybackMonths,
            costSavingRate: `${calculations.IE5.efficiencyGain}%`,
            totalSavings15yr: formatCurrency(
                calculations.IE5.benefits15Year.totalSavingsKRW,
                calculations.IE5.benefits15Year.totalSavingsUSD
            ),
            energySaved15yr: `${Math.round(calculations.IE5.benefits15Year.totalEnergySaved).toLocaleString()} kWh`,
            co2Reduced15yr: `${calculations.IE5.benefits15Year.totalCO2Reduced.toFixed(1)} tCO₂`,
            description: t(
                `IE3에서 IE5로 전환 시 기존 전기료의 약 ${calculations.IE5.efficiencyGain}%를 절감할 수 있습니다.`,
                `Save approximately ${calculations.IE5.efficiencyGain}% of existing electricity costs when switching from IE3 to IE5.`
            )
        }
    ]

    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* 헤더 */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                        {t('고효율 전동기 투자 수익 분석', 'High-Efficiency Motor ROI Analysis')}
                    </h2>
                    <p className="max-w-4xl mx-auto text-xl text-slate-600 leading-relaxed">
                        {t(
                            '7.5kW 4극 60Hz 3상 유도전동기 기준, 산업현장의 실제 운전 데이터를 바탕으로 한 투자 회수 기간 분석',
                            'Investment payback analysis based on actual industrial operational data for 7.5kW 4-pole 60Hz 3-phase induction motors'
                        )}
                    </p>
                    <div className="w-24 h-1 bg-blue-900 mx-auto rounded-full mt-8"></div>
                </div>

                {/* 효율 비교 개요 */}
                <div className="bg-slate-50 rounded-2xl p-8 mb-12 border border-slate-200">
                    <h3 className="text-2xl font-bold text-slate-900 mb-6 text-center">
                        {t('효율 등급별 성능 비교', 'Performance Comparison by Efficiency Class')}
                    </h3>

                    <div className="flex justify-center items-center space-x-4 md:space-x-8">
                        <div className="text-center">
                            <div className="text-3xl font-bold text-slate-700">IE3</div>
                            <div className="text-lg text-slate-600">{EFFICIENCY_VALUES.IE3}%</div>
                            <div className="text-sm text-slate-500">{t('기준', 'Baseline')}</div>
                        </div>
                        <div className="text-2xl text-slate-400">→</div>
                        <div className="text-center">
                            <div className="text-3xl font-bold text-blue-600">IE4</div>
                            <div className="text-lg text-blue-600">{EFFICIENCY_VALUES.IE4}%</div>
                            <div className="text-sm text-blue-500">+{calculations.IE4.efficiencyGain}%</div>
                        </div>
                        <div className="text-2xl text-slate-400">→</div>
                        <div className="text-center">
                            <div className="text-3xl font-bold text-purple-600">IE5</div>
                            <div className="text-lg text-purple-600">{EFFICIENCY_VALUES.IE5}%</div>
                            <div className="text-sm text-purple-500">+{calculations.IE5.efficiencyGain}%</div>
                        </div>
                    </div>
                </div>

                {/* 투자회수 기간 시각화 (IE4 기준) */}
                <div className="bg-blue-50 rounded-2xl p-8 mb-12 border-2 border-blue-200">
                    <h3 className="text-2xl font-bold text-slate-900 mb-6 text-center">
                        {t('IE4 전동기 투자회수 기간 (일 12시간 사용시)', 'IE4 Motor Payback Period (12h/day usage)')}
                    </h3>
                    <div className="relative">
                        <div className="flex items-center mb-4">
                            <div className="flex-shrink-0 w-32 text-center">
                                <div className="bg-purple-600 text-white px-3 py-2 rounded font-semibold text-sm">
                                    {t('투자 회수 기간', 'Payback Period')}
                                </div>
                            </div>
                            <div className="flex-grow relative h-12 bg-gray-200 rounded-r-lg overflow-hidden">
                                <div
                                    className="absolute inset-y-0 left-0 bg-gradient-to-r from-purple-600 to-purple-500 flex items-center"
                                    style={{ width: `${(calculations.IE4.paybackMonths / 180) * 100}%` }}
                                >
                                    <span className="text-white text-sm font-bold px-2">
                                        {(calculations.IE4.paybackMonths / 12).toFixed(1)}{t('년', 'yr')}
                                    </span>
                                </div>
                                <div
                                    className="absolute inset-y-0 bg-gradient-to-r from-blue-500 to-blue-400 flex items-center justify-end"
                                    style={{
                                        left: `${(calculations.IE4.paybackMonths / 180) * 100}%`,
                                        width: `${((180 - calculations.IE4.paybackMonths) / 180) * 100}%`
                                    }}
                                >
                                    <span className="text-white text-sm font-bold px-4">
                                        {((180 - calculations.IE4.paybackMonths) / 12).toFixed(1)}{t('년', 'yr')}
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center mb-4">
                            <div className="flex-shrink-0 w-32 text-center">
                                <div className="bg-cyan-600 text-white px-3 py-2 rounded font-semibold text-sm">
                                    {t('이익 발생 기간', 'Profit Period')}
                                </div>
                            </div>
                            <div className="flex-grow relative h-12 bg-gray-200 rounded-r-lg overflow-hidden">
                                <div className="absolute inset-y-0 left-0 bg-gradient-to-r from-cyan-600 to-cyan-500 flex items-center justify-center" style={{ width: '100%' }}>
                                    <span className="text-white text-sm font-bold">15{t('년', 'yr')}</span>
                                </div>
                            </div>
                        </div>
                        <div className="flex mt-2">
                            <div className="w-32"></div>
                            <div className="flex-grow flex justify-between text-xs text-gray-600">
                                <span>0{t('년', 'yr')}</span>
                                <span>5{t('년', 'yr')}</span>
                                <span>10{t('년', 'yr')}</span>
                                <span>15{t('년', 'yr')}</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* IE4 vs IE5 상세 비교 */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
                    {comparisonData.map((data) => (
                        <div key={data.id} className={`border-2 rounded-2xl p-8 ${data.id === 'ie4'
                            ? 'border-blue-200 bg-blue-50'
                            : 'border-purple-200 bg-purple-50'
                            }`}>
                            <div className="flex items-center justify-between mb-6">
                                <h3 className={`text-2xl font-bold ${data.id === 'ie4' ? 'text-blue-900' : 'text-purple-900'
                                    }`}>{data.title}</h3>
                                <span className={`px-3 py-1 text-white text-sm font-medium rounded-full ${data.id === 'ie4' ? 'bg-blue-600' : 'bg-purple-600'
                                    }`}>
                                    {data.id.toUpperCase()}
                                </span>
                            </div>

                            {/* 효율 향상 */}
                            <div className="grid grid-cols-2 gap-4 mb-6">
                                <div className="bg-white rounded-xl p-4 text-center">
                                    <div className="text-sm text-slate-600 mb-1">{t('효율 향상', 'Efficiency Gain')}</div>
                                    <div className={`text-2xl font-bold ${data.id === 'ie4' ? 'text-blue-900' : 'text-purple-900'
                                        }`}>{data.efficiencyGain}</div>
                                </div>
                                <div className="bg-white rounded-xl p-4 text-center">
                                    <div className="text-sm text-slate-600 mb-1">{t('전기료 절감', 'Cost Reduction')}</div>
                                    <div className={`text-2xl font-bold ${data.id === 'ie4' ? 'text-blue-900' : 'text-purple-900'
                                        }`}>{data.costSavingRate}</div>
                                </div>
                            </div>

                            {/* 연간 절감액 */}
                            <div className="bg-white rounded-xl p-6 mb-4">
                                <h4 className="text-sm font-semibold text-slate-700 mb-2">
                                    {t('연간 전기료 절감액', 'Annual Savings')}
                                </h4>
                                <div className={`text-3xl font-bold mb-2 ${data.id === 'ie4' ? 'text-blue-900' : 'text-purple-900'
                                    }`}>
                                    {data.annualSavings}
                                </div>
                                <p className="text-sm text-slate-600">{data.description}</p>
                            </div>

                            {/* 투자 회수 기간 */}
                            <div className={`text-white rounded-xl p-6 ${data.id === 'ie4' ? 'bg-blue-900' : 'bg-purple-900'
                                }`}>
                                <h4 className="text-sm font-semibold text-slate-300 mb-2">
                                    {t('투자금 회수 기간', 'Payback Period')}
                                </h4>
                                <div className="text-4xl font-bold mb-3">
                                    {data.paybackPeriod}
                                </div>
                                <div className="w-full bg-slate-700 rounded-full h-2">
                                    <div
                                        className={`h-2 rounded-full transition-all duration-2000 ${data.id === 'ie4' ? 'bg-blue-400' : 'bg-purple-400'
                                            }`}
                                        style={{ width: `${(data.paybackMonths / 24) * 100}%` }}
                                    ></div>
                                </div>
                                <p className="text-xs text-slate-300 mt-2">
                                    {t(
                                        `IE3 대비 투자 회수 ${(data.paybackMonths / 12).toFixed(1)}년`,
                                        `${(data.paybackMonths / 12).toFixed(1)} year payback vs IE3`
                                    )}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* 기준 조건 및 변동 요인 */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                    {/* 운전 조건 */}
                    <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
                        <h4 className="font-semibold text-slate-800 mb-4">{t('기준 조건', 'Base Conditions')}</h4>
                        <ul className="space-y-2 text-sm text-slate-700">
                            <li className="flex justify-between">
                                <span>{t('전동기 용량', 'Motor Capacity')}</span>
                                <span className="font-medium">{BASE_PARAMS.motorPowerKW}kW ({BASE_PARAMS.motorPowerHP}HP)</span>
                            </li>
                            <li className="flex justify-between">
                                <span>{t('운전 시간', 'Operating Hours')}</span>
                                <span className="font-medium">
                                    {t(
                                        `일 ${BASE_PARAMS.operatingHoursPerDay}시간, 연 ${(BASE_PARAMS.operatingHoursPerDay * BASE_PARAMS.operatingDaysPerYear).toLocaleString()}시간`,
                                        `${BASE_PARAMS.operatingHoursPerDay}h/day, ${(BASE_PARAMS.operatingHoursPerDay * BASE_PARAMS.operatingDaysPerYear).toLocaleString()}h/year`
                                    )}
                                </span>
                            </li>
                            <li className="flex justify-between">
                                <span>{t('부하율', 'Load Factor')}</span>
                                <span className="font-medium">{(BASE_PARAMS.loadFactor * 100)}%</span>
                            </li>
                            <li className="flex justify-between">
                                <span>{t('전기요금', 'Electricity Rate')}</span>
                                <span className="font-medium">
                                    {language === 'ko'
                                        ? `${BASE_PARAMS.electricityRateKRW}원/kWh ($${BASE_PARAMS.electricityRateUSD} USD/kWh)`
                                        : `$${BASE_PARAMS.electricityRateUSD} USD/kWh (₩${BASE_PARAMS.electricityRateKRW} KRW/kWh)`
                                    }
                                </span>
                            </li>
                            <li className="flex justify-between">
                                <span>{t('추가 투자비', 'Additional Cost')}</span>
                                <span className="font-medium">
                                    IE4: +{(BASE_PARAMS.additionalCostRatio.IE4 * 100)}%, IE5: +{(BASE_PARAMS.additionalCostRatio.IE5 * 100)}%
                                </span>
                            </li>
                        </ul>

                        <div className="mt-4 pt-4 border-t border-slate-200">
                            <p className="text-xs text-slate-600 font-mono">
                                {t('절감액 계산식:', 'Savings Formula:')}
                            </p>
                            <p className="text-xs text-slate-700 font-mono mt-1">
                                S = 0.746 × HP × L × C × N × (100/E₃ - 100/E₄)
                            </p>
                        </div>
                    </div>

                    {/* 절감액 변동 요인 */}
                    <div className="bg-amber-50 rounded-xl p-6 border border-amber-200">
                        <h4 className="font-semibold text-slate-800 mb-3">
                            {t('실제 절감액은 다음 요인에 따라 달라질 수 있습니다', 'Actual savings may vary based on:')}
                        </h4>
                        <ul className="space-y-2 text-sm text-slate-700">
                            <li className="flex items-start">
                                <span className="text-amber-600 mr-2">•</span>
                                <span>{t('실제 운전시간 및 부하 패턴', 'Actual operating hours and load patterns')}</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-amber-600 mr-2">•</span>
                                <span>{t('계약전력 종류 (산업용/일반용)', 'Contract type (Industrial/General)')}</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-amber-600 mr-2">•</span>
                                <span>{t('계절별/시간대별 요금 차등', 'Seasonal/Time-based rate variations')}</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-amber-600 mr-2">•</span>
                                <span>{t('24시간 연속 운전 시 절감액 1.5배 증가', '24/7 operation increases savings by 1.5x')}</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-amber-600 mr-2">•</span>
                                <span>{t('역률 개선에 따른 추가 절감', 'Additional savings from power factor improvement')}</span>
                            </li>
                        </ul>

                        <div className="mt-4 pt-4 border-t border-amber-200">
                            <p className="text-xs text-amber-700 font-medium">
                                {t(
                                    '* HP: 마력(10HP=7.5kW), L: 부하율, C: 전력단가, N: 연간운전시간, E: 효율',
                                    '* HP: Horsepower (10HP=7.5kW), L: Load factor, C: Electricity rate, N: Annual hours, E: Efficiency'
                                )}
                            </p>
                        </div>
                    </div>
                </div>

                {/* 15년 누적 효과 비교 */}
                <div className="bg-gradient-to-r from-slate-900 to-blue-900 rounded-2xl p-12 text-white">
                    <h3 className="text-3xl font-bold mb-8 text-center">
                        {t('15년 운전 시 누적 효과 비교', '15-Year Cumulative Benefits Comparison')}
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {comparisonData.map((data) => (
                            <div key={data.id} className="bg-white/10 backdrop-blur rounded-xl p-6">
                                <h4 className={`text-xl font-bold mb-4 ${data.id === 'ie4' ? 'text-blue-300' : 'text-purple-300'
                                    }`}>
                                    {data.id.toUpperCase()} {t('전환 효과', 'Conversion Benefits')}
                                </h4>
                                <div className="space-y-3">
                                    <div>
                                        <div className="text-2xl font-bold">{data.totalSavings15yr}</div>
                                        <p className="text-sm text-blue-200">{t('총 절감액', 'Total Savings')}</p>
                                    </div>
                                    <div>
                                        <div className="text-2xl font-bold">{data.energySaved15yr}</div>
                                        <p className="text-sm text-blue-200">{t('절약 전력량', 'Energy Saved')}</p>
                                    </div>
                                    <div>
                                        <div className="text-2xl font-bold">{data.co2Reduced15yr}</div>
                                        <p className="text-sm text-blue-200">{t('CO₂ 감축량', 'CO₂ Reduced')}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <p className="text-center text-blue-100 mt-6 text-sm">
                        {t(
                            `* 전기료 인상률 미반영, 실제 절감액은 더 클 수 있습니다 (환율: $1 USD = ₩${BASE_PARAMS.exchangeRate} KRW)`,
                            `* Electricity rate increases not included, actual savings may be higher (Exchange rate: $1 USD = ₩${BASE_PARAMS.exchangeRate} KRW)`
                        )}
                    </p>
                </div>
            </div>
        </section>
    )
}