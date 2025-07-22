// src/components/CustomMotorSection.tsx
'use client'

import { useLanguage } from '@/context/LanguageContext'

export function CustomMotorSection() {
    const { t } = useLanguage()

    const features = [
        {
            text: t('귀사의 정확한 사양에 맞는 설계', 'Design tailored to your exact specifications')
        },
        {
            text: t('최고의 에너지 효율성 달성', 'Achieve maximum energy efficiency')
        },
        {
            text: t('더 긴 수명과 높은 신뢰성', 'Longer lifespan and higher reliability')
        },
        {
            text: t('유지 보수 비용 절감', 'Reduced maintenance costs')
        }
    ]

    const advantages = [
        {
            title: t('맞춤 설계', 'Custom Design'),
            description: t('정확한 사양 구현', 'Exact specification implementation')
        },
        {
            title: t('고효율', 'High Efficiency'),
            description: t('에너지 비용 절감', 'Reduced energy costs')
        },
        {
            title: t('신뢰성', 'Reliability'),
            description: t('장기간 안정 운영', 'Long-term stable operation')
        }
    ]

    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* 왼쪽: 텍스트 콘텐츠 */}
                    <div>
                        <div className="mb-6">
                            <span className="inline-block px-4 py-2 text-sm bg-slate-100 text-slate-700 rounded-full font-semibold">
                                {t('맞춤형 솔루션', 'Custom Solution')}
                            </span>
                        </div>

                        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
                            {t('맞춤형 전동기의 차이', 'The Difference of Custom Motors')}
                        </h2>

                        <p className="text-2xl text-blue-600 font-semibold mb-6 leading-relaxed">
                            {t('당신의 비즈니스에 맞춘 완벽한 설계', 'Perfect Design for Your Business')}
                        </p>

                        <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                            {t(
                                '시중 부품을 조합하는 것만으로는 부족합니다. 귀사가 필요로 하는 정확한 크기와 스펙에 맞추어 처음부터 설계해 드립니다.',
                                'Off-the-shelf components are not enough. We design from scratch to match the exact size and specifications your company needs.'
                            )}
                        </p>

                        {/* 특징 리스트 */}
                        <div className="space-y-4 mb-8">
                            {features.map((feature, index) => (
                                <div key={index} className="flex items-start">
                                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                                    <span className="text-slate-700 leading-relaxed">{feature.text}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* 오른쪽: 이미지 영역 */}
                    <div className="relative">
                        {/* 메인 이미지 영역 - 정사각형 */}
                        <div className="relative aspect-square w-full max-w-[500px] mx-auto lg:ml-auto">
                            <div className="relative w-full h-full bg-white rounded-2xl overflow-hidden shadow-lg border border-slate-200">
                                {/* 그라디언트 배경 (이미지 로드 전/실패 시) */}
                                <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-indigo-500 to-purple-600" />

                                {/* 실제 이미지 (있으면 표시) */}
                                <div
                                    className="absolute inset-0 w-full h-full flex items-center justify-center p-12"
                                >
                                    <div
                                        className="w-full h-full bg-contain bg-center bg-no-repeat transform transition-transform duration-500 hover:scale-105"
                                        style={{
                                            backgroundImage: `url('/images/custom-motor.png')`,
                                            filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.15))'
                                        }}
                                    />
                                </div>

                                {/* AI 생성 이미지 표시 */}
                                <div className="absolute top-4 right-4 z-10">
                                    <div className="bg-white/90 backdrop-blur-sm text-slate-700 px-2 py-1 rounded text-xs font-medium border border-slate-200 shadow-sm">
                                        {t('AI 생성 이미지', 'AI Generated')}
                                    </div>
                                </div>

                                {/* 이미지가 없을 때 대체 콘텐츠
                                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                                    <div className="text-white/20 text-center">
                                        <div className="text-7xl md:text-8xl lg:text-9xl font-bold mb-4">
                                            CM
                                        </div>
                                        <p className="text-xl md:text-2xl font-medium">
                                            {t('맞춤형 전동기', 'Custom Motor')}
                                        </p>
                                    </div>
                                </div> */}

                                {/* 장식 요소 */}
                                <div className="absolute top-8 right-8">
                                    <div className="w-24 h-24 bg-white/10 rounded-full blur-2xl"></div>
                                </div>
                                <div className="absolute bottom-8 left-8">
                                    <div className="w-32 h-32 bg-white/10 rounded-full blur-3xl"></div>
                                </div>

                                {/* 소프트 오버레이 */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent"></div>
                            </div>
                        </div>

                        {/* 장점 카드들 - 모바일에서는 아래로, 데스크톱에서는 오른쪽 아래 */}
                        <div className="mt-8 lg:mt-0 lg:absolute lg:-bottom-8 lg:-right-8 space-y-3">
                            {advantages.map((advantage, index) => (
                                <div
                                    key={index}
                                    className="bg-white rounded-xl p-4 shadow-lg border border-slate-200 max-w-xs transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
                                    style={{
                                        animationDelay: `${index * 100}ms`
                                    }}
                                >
                                    <h4 className="font-semibold text-slate-900 mb-1">{advantage.title}</h4>
                                    <p className="text-sm text-slate-600">{advantage.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}