// src/components/company/CompanyAboutSection.tsx
'use client'

import { useLanguage } from '@/context/LanguageContext'
import { MapPin, Phone, Mail, ChevronDown } from 'lucide-react'
import { useState, useEffect } from 'react'

export function CompanyAboutSection() {
    const { t } = useLanguage()
    const [openQA, setOpenQA] = useState<number | null>(null)
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        setIsVisible(true)
    }, [])

    const qaItems = [
        {
            question: t('왜 EMECS를 선택해야 하나요?', 'Why choose EMECS?'),
            answer: t(
                '20년 이상 국가 핵심 산업 프로젝트를 이끌어온 전문가가 직접 설계합니다. 대기업과 정부 프로젝트에서 검증된 기술력으로 귀사에 최적화된 솔루션을 제공합니다.',
                'Designed directly by experts with over 20 years of experience leading national core industrial projects. We provide solutions optimized for your company with technology proven in major corporate and government projects.'
            )
        },
        {
            question: t('어떤 제품을 만드나요?', 'What products do you make?'),
            answer: t(
                'IE4-IE5 등급의 초고효율 전동기를 설계합니다. 3상 유도 전동기, 고속 전동기, 그리고 차세대 WFSM까지 다양한 산업 분야에 맞춤형 솔루션을 제공합니다.',
                'We design ultra-high efficiency IE4-IE5 motors. From 3-phase induction motors to high-speed motors and next-generation WFSM, we provide customized solutions for various industries.'
            )
        },

        {
            question: t('프로젝트 진행 과정은 어떻게 되나요?', 'What is the project process?'),
            answer: t(
                '요구사항 분석 → 맞춤형 설계 → 시뮬레이션 검증 → 제작 → 테스트 → 납품의 체계적인 프로세스를 거칩니다. 모든 단계에서 고객과 긴밀히 소통합니다.',
                'We follow a systematic process: Requirements analysis → Custom design → Simulation verification → Manufacturing → Testing → Delivery. We communicate closely with customers at every stage.'
            )
        },


    ]

    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section - 명함 스타일 */}
            <section className="h-[75vh] flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
                {/* 배경 애니메이션 */}
                <div className="absolute inset-0">
                    <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
                    <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
                </div>

                <div className={`relative z-10 w-full max-w-6xl mx-auto px-4 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    {/* 명함 카드 - 실제 명함 비율 (가로형) */}
                    <div className="bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-2">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-12 md:p-16 lg:p-20">
                            {/* 왼쪽: 회사 정보 */}
                            <div className="flex flex-col justify-between">
                                <div>
                                    <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent mb-4">
                                        EMECS 이멕스
                                    </h1>
                                    <p className="text-lg md:text-xl text-blue-200 mb-8">
                                        {t('전동기 설계 전문기업', 'Motor Design Specialists')}
                                    </p>
                                    <div className="w-16 h-0.5 bg-gradient-to-r from-blue-400 to-blue-600 mb-8"></div>
                                    <p className="text-base md:text-lg text-slate-200 leading-relaxed">
                                        {t(
                                            '20년 국가 핵심 산업 프로젝트 경험',
                                            '20 Years of National Core Industrial Projects'
                                        )}
                                    </p>
                                </div>

                                {/* 태그 */}
                                <div className="flex flex-wrap gap-3 mt-8">
                                    <span className="px-4 py-2 bg-white/10 rounded-lg border border-white/20 text-sm">
                                        {t('IE4-IE5', 'IE4-IE5')}
                                    </span>
                                    <span className="px-4 py-2 bg-white/10 rounded-lg border border-white/20 text-sm">
                                        {t('맞춤 설계', 'Custom Design')}
                                    </span>

                                </div>
                            </div>

                            {/* 오른쪽: 대표/연락처 */}
                            <div className="flex flex-col justify-between lg:text-right">
                                <div>
                                    <p className="text-2xl md:text-3xl font-semibold mb-3">
                                        {t('Dr. Eng', 'Dr. Eng')} <span className="text-blue-200">Koo Young-Ho</span>
                                    </p>
                                    <p className="text-lg text-blue-200 mb-8">
                                        {t('구 대 현', 'Dae-Hyun Koo')}
                                    </p>
                                </div>

                                {/* 연락처 */}
                                <div className="space-y-4 text-sm md:text-base">
                                    <div className="flex items-center lg:justify-end space-x-3 text-blue-200">
                                        <Phone className="h-5 w-5" />
                                        <span>+82-51-714-4061</span>
                                    </div>
                                    <div className="flex items-center lg:justify-end space-x-3 text-blue-200">
                                        <Mail className="h-5 w-5" />
                                        <span>yhkoo@emecs.kr</span>
                                    </div>
                                    <div className="flex items-center lg:justify-end space-x-3 text-blue-200">
                                        <MapPin className="h-5 w-5" />
                                        <span>{t('부산', 'Busan')}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* 스크롤 안내 */}
                    <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 animate-bounce">
                        <ChevronDown className="h-8 w-8 text-white/50" />
                    </div>
                </div>
            </section>

            {/* 전문성 소개 - 애니메이션 추가 */}
            <section className="py-20 bg-slate-50">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 hover:shadow-2xl transition-all duration-500">
                        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                            {t('검증된 전문성', 'Proven Expertise')}
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                            {/* 프로필 카드 섹션 */}
                            <div className="space-y-6">
                                <p className="text-lg text-gray-700 leading-relaxed">
                                    {t(
                                        '대한민국 주요 산업 현장에서 20년 이상 전동기 설계를 책임져온 전문가가 직접 설립한 회사입니다.',
                                        "Founded by experts with over 20 years of motor design experience in Korea's major industrial sites."
                                    )}
                                </p>

                                <div className="grid grid-cols-1 gap-4">
                                    {[
                                        {
                                            titleKor: '연구책임자 출신',
                                            titleEng: 'Head of Research',
                                            subtitleKor: '한국 전기 연구원 연구팀장 역임',
                                            subtitleEng: 'Former Research Team Lead at KERI'
                                        },
                                        {
                                            titleKor: '총괄책임자 출신',
                                            titleEng: 'General Manager',
                                            subtitleKor: '한국 전기 연구원 프로젝트 매니저 역임',
                                            subtitleEng: 'Former Project Manager at KERI'
                                        }
                                    ].map((person, idx) => (
                                        <div
                                            key={idx}
                                            className="flex flex-col items-start bg-gray-50 rounded-xl p-6 hover:bg-gray-100 transition-colors"
                                        >
                                            <h3 className="text-xl font-semibold text-gray-800 mb-1">
                                                {t(person.titleKor, person.titleEng)}
                                            </h3>
                                            <p className="text-sm text-gray-600">
                                                {t(person.subtitleKor, person.subtitleEng)}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* 통계 카드 섹션 */}
                            <div className="grid grid-cols-3 gap-4 text-center">
                                {[
                                    { value: '20+', label: t('년 경력', 'Years') },
                                    { value: 'IE5', label: t('최고 효율', 'Efficiency') },
                                    { value: '1:1', label: t('맞춤 설계', 'Custom') }
                                ].map((stat, index) => (
                                    <div
                                        key={index}
                                        className="bg-gradient-to-br from-blue-50 to-slate-50 rounded-xl p-6 hover:scale-105 transition-transform duration-300"
                                    >
                                        <div className="text-3xl font-bold text-blue-600 mb-2">{stat.value}</div>
                                        <div className="text-sm text-gray-600">{stat.label}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>





            {/* 연락처 정보 - 더 발전된 문의 섹션 */}
            <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">
                        {t('프로젝트 상담', 'Project Consultation')}
                    </h2>
                    <p className="text-lg text-gray-600 mb-12 text-center max-w-3xl mx-auto">
                        {t(
                            '귀사의 전동기 프로젝트에 대해 전문가와 직접 상담하세요. 최적의 솔루션을 제안해드립니다.',
                            'Consult directly with experts about your motor project. We will propose the optimal solution.'
                        )}
                    </p>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* 즉시 상담 */}
                        <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-blue-100">
                            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl flex items-center justify-center mb-6 mx-auto">
                                <Phone className="h-8 w-8 text-white" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
                                {t('즉시 상담', 'Immediate Consultation')}
                            </h3>
                            <p className="text-gray-600 mb-6 text-center">
                                {t(
                                    '긴급한 프로젝트나 빠른 답변이 필요하신가요? 바로 전화주세요.',
                                    'Need urgent project help or quick answers? Call us directly.'
                                )}
                            </p>
                            <a
                                href="tel:+82-51-714-4061"
                                className="block w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 rounded-xl font-semibold text-center hover:from-blue-700 hover:to-blue-800 transition-all duration-300"
                            >
                                {t('전화 상담하기', 'Call Now')}
                            </a>
                            <p className="text-sm text-gray-500 mt-3 text-center">
                                {t('월-금 09:00-18:00', 'Mon-Fri 09:00-18:00')}
                            </p>
                        </div>

                        {/* 이메일 문의 */}
                        <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-blue-100">
                            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl flex items-center justify-center mb-6 mx-auto">
                                <Mail className="h-8 w-8 text-white" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
                                {t('상세 문의', 'Detailed Inquiry')}
                            </h3>
                            <p className="text-gray-600 mb-6 text-center">
                                {t(
                                    '프로젝트 사양이나 기술적 검토가 필요하신가요? 이메일로 보내주세요.',
                                    'Need project specifications or technical review? Send us an email.'
                                )}
                            </p>
                            <a
                                href="mailto:yhkoo@emecs.kr?subject=전동기 프로젝트 문의"
                                className="block w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 rounded-xl font-semibold text-center hover:from-blue-700 hover:to-blue-800 transition-all duration-300"
                            >
                                {t('이메일 보내기', 'Send Email')}
                            </a>
                            <p className="text-sm text-gray-500 mt-3 text-center">
                                {t('24시간 내 답변', 'Reply within 24 hours')}
                            </p>
                        </div>

                        {/* 방문 상담 */}
                        <div className="bg-gradient-to-br from-blue-600 to-blue-800 text-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                            <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center mb-6 mx-auto">
                                <MapPin className="h-8 w-8 text-white" />
                            </div>
                            <h3 className="text-xl font-bold mb-4 text-center">
                                {t('방문 상담', 'Visit Consultation')}
                            </h3>
                            <p className="text-blue-100 mb-6 text-center">
                                {t(
                                    '직접 만나서 프로젝트를 논의하고 싶으신가요? 언제든 환영합니다.',
                                    'Want to discuss your project in person? You are always welcome.'
                                )}
                            </p>
                            <div className="bg-white/10 rounded-xl p-4 backdrop-blur-sm">
                                <p className="text-sm mb-2">{t('주소', 'Address')}:</p>
                                <p className="font-semibold">{t('부산광역시 금정구 온천장로 132 6층', '6th Floor, 132 Oncheonjang-ro,Geumjeong,Busan ')}</p>
                            </div>
                            <p className="text-sm text-blue-200 mt-3 text-center">
                                {t('사전 예약 필수', 'Appointment required')}
                            </p>
                        </div>
                    </div>

                    {/* 추가 정보 */}
                    <div className="mt-12 bg-white rounded-2xl shadow-lg p-8">
                        <h4 className="text-lg font-bold text-gray-900 mb-4 text-center">
                            {t('문의 시 준비하시면 좋은 정보', 'Helpful Information to Prepare')}
                        </h4>
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-center">
                            <div className="p-4 bg-gray-50 rounded-xl">
                                <p className="font-semibold text-gray-900 mb-1">{t('용도', 'Application')}</p>
                                <p className="text-sm text-gray-600">{t('펌프, 팬, 압축기 등', 'Pump, Fan, Compressor, etc.')}</p>
                            </div>
                            <div className="p-4 bg-gray-50 rounded-xl">
                                <p className="font-semibold text-gray-900 mb-1">{t('출력', 'Power')}</p>
                                <p className="text-sm text-gray-600">{t('필요한 모터 용량', 'Required motor capacity')}</p>
                            </div>
                            <div className="p-4 bg-gray-50 rounded-xl">
                                <p className="font-semibold text-gray-900 mb-1">{t('속도', 'Speed')}</p>
                                <p className="text-sm text-gray-600">{t('요구 회전속도', 'Required RPM')}</p>
                            </div>
                            <div className="p-4 bg-gray-50 rounded-xl">
                                <p className="font-semibold text-gray-900 mb-1">{t('환경', 'Environment')}</p>
                                <p className="text-sm text-gray-600">{t('설치 환경 조건', 'Installation conditions')}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Q&A 섹션 */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
                        {t('자주 묻는 질문', 'Frequently Asked Questions')}
                    </h2>

                    <div className="space-y-4">
                        {qaItems.map((item, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
                            >
                                <button
                                    onClick={() => setOpenQA(openQA === index ? null : index)}
                                    className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors rounded-lg"
                                >
                                    <span className="font-semibold text-gray-900">{item.question}</span>
                                    <ChevronDown
                                        className={`h-5 w-5 text-gray-500 transition-transform duration-300 ${openQA === index ? 'rotate-180' : ''
                                            }`}
                                    />
                                </button>
                                <div
                                    className={`px-6 overflow-hidden transition-all duration-300 ${openQA === index ? 'max-h-96 py-4' : 'max-h-0'
                                        }`}
                                >
                                    <p className="text-gray-700 leading-relaxed">{item.answer}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <style jsx>{`
                @keyframes fadeInUp {
                    from {
                        opacity: 0;
                        transform: translateY(20px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                .animate-fadeInUp {
                    animation: fadeInUp 0.6s ease-out;
                }
            `}</style>
        </div>
    )
}

export default CompanyAboutSection