// src/components/portfolio/PortfolioSection.tsx
'use client'

import { useLanguage } from '@/context/LanguageContext'
import { Calendar, Building2, Award, ArrowRight, Zap, Settings, Cpu, CheckCircle, TrendingUp, Car } from 'lucide-react'
import { useState, useEffect } from 'react'
import { getPortfolio, type PortfolioProject } from '@/lib/api'

export function PortfolioSection() {
    const { t } = useLanguage()
    const [selectedFilter, setSelectedFilter] = useState('all')
    const [showAllProjects, setShowAllProjects] = useState(false)
    const [_projects, setProjects] = useState<PortfolioProject[]>([])
    const [_loading, setLoading] = useState(true)
    const [_error, setError] = useState<string | null>(null)

    // 백엔드에서 포트폴리오 데이터 가져오기
    useEffect(() => {
        const fetchPortfolio = async () => {
            setLoading(true)
            setError(null)

            try {
                const result = await getPortfolio()

                if (result.success && result.data) {
                    setProjects(result.data)
                } else {
                    setError(result.error || '포트폴리오 데이터를 불러오는데 실패했습니다.')
                }
            } catch (err) {
                setError('네트워크 오류가 발생했습니다.')
                console.error('Portfolio fetch error:', err)
            } finally {
                setLoading(false)
            }
        }

        fetchPortfolio()
    }, [])

    // 주요 연구개발 실적 데이터 (임시로 하드코딩 유지)
    const researchProjects = [
        {
            id: 1,
            program: t('에너지자원기술개발사업(지경부)', 'Energy Resource Technology Development (MOTIE)'),
            projectName: t('에너지절약형 인버터구동 전동기 개발 (2.5kW, 4.5kW, 30kW, 60kW 고속 고효율 전동기 시스템)', 'Energy-Saving Inverter-Driven Motor Development (2.5kW, 4.5kW, 30kW, 60kW High-Speed High-Efficiency Motor Systems)'),
            period: '2012.06 - 2014.12',
            role: t('연구책임자', 'PI'),
            category: 'efficiency',
            highlight: true
        },
        {
            id: 2,
            program: t('한국전기연구원', 'KERI'),
            projectName: t('EV용 전기부품 성능평가 및 가속전원 사업', 'EV Electric Component Performance Evaluation and Power Supply Business'),
            period: '2011.01 - 2014.12',
            role: t('연구책임자', 'PI'),
            category: 'ev',
            highlight: true
        },
        {
            id: 3,
            program: t('한국전기연구원', 'KERI'),
            projectName: t('전기자동차용 고효율 전동기 및 제어기 개발', 'High-Efficiency Motor and Controller Development for Electric Vehicles'),
            period: '2010.01 - 2011.01',
            role: t('연구책임자', 'PI'),
            category: 'ev',
            highlight: true
        },
        {
            id: 4,
            program: t('에너지절약기술 개발(지경부)', 'Energy Conservation Technology Development'),
            projectName: t('37kW이하 고효율 유도전동기 공통코어기술개발 방법 (중대형 과제)', '37kW and Below High-Efficiency Induction Motor Common Core Technology Development'),
            period: '2009.06 - 2012.05',
            role: t('총괄책임자', 'GM'),
            category: 'efficiency',
            highlight: true
        },
        {
            id: 5,
            program: t('산업기반조성사업(지경부)', 'Industrial Infrastructure Development'),
            projectName: t('차세대 신입종 Green 전동기 시스템 플랫폼 기술개발', 'Next-Generation Green Motor System Platform Technology Development'),
            period: '2009.05 - 2012.04',
            role: t('총괄책임자', 'GM'),
            category: 'platform',
            highlight: true
        },
        {
            id: 6,
            program: t('한국전기연구원', 'KERI'),
            projectName: t('산업용 고속회전기 시스템 개발', 'Industrial High-Speed Rotating Machine System Development'),
            period: '2009.01 - 2009.12',
            role: t('연구책임자', 'PI'),
            category: 'highspeed'
        },
        {
            id: 7,
            program: t('에너지자원기술 개발(지경부)', 'Energy Resource Technology Development'),
            projectName: t('프리미엄급 고효율 유도전동기 개발 (중대형 과제 2단계)', 'Premium High-Efficiency Induction Motor Development (Phase 2)'),
            period: '2008.10 - 2011.09',
            role: t('총괄책임자', 'GM'),
            category: 'efficiency',
            highlight: true
        },
        {
            id: 8,
            program: t('에너지자원기술개발사업(지경부)', 'Energy Resource Technology Development'),
            projectName: t('최저효율제 시행에 따른 중대형 전동기 최적설계 기술개발 (중대형 과제)', 'Optimal Design Technology for Large Motors under Minimum Efficiency Standards'),
            period: '2007.10 - 2010.09',
            role: t('총괄책임자', 'GM'),
            category: 'efficiency'
        },
        {
            id: 9,
            program: t('Top Brand (과기부)', 'Top Brand (MOST)'),
            projectName: t('4HI Meletronics', '4HI Meletronics'),
            period: '2007.07 - 2007.12',
            role: t('연구책임자', 'PI'),
            category: 'special'
        },
        {
            id: 10,
            program: t('에너지자원기술 개발(산자부)', 'Energy Resource Technology Development'),
            projectName: t('프리미엄급 고효율 유도전동기 개발 (중대형 과제 1단계)', 'Premium High-Efficiency Induction Motor Development (Phase 1)'),
            period: '2004.07 - 2008.07',
            role: t('연구책임자', 'PI'),
            category: 'efficiency'
        },
        {
            id: 11,
            program: t('한국전기연구원', 'KERI'),
            projectName: t('고속/고효율 고정익 전동 응용 시스템 개발', 'High-Speed/High-Efficiency Fixed-Wing Motor Application System'),
            period: '2005.01 - 2008.12',
            role: t('연구책임자', 'PI'),
            category: 'highspeed'
        },
        {
            id: 12,
            program: t('에너지자원기술 개발(산자부)', 'Energy Resource Technology Development'),
            projectName: t('원판형 멀티 브러시레스 전동기 및 제어기 개발', 'Disk-Type Multi-Brushless Motor and Controller Development'),
            period: '2004.06 - 2008.06',
            role: t('연구책임자', 'PI'),
            category: 'control'
        },
        {
            id: 13,
            program: t('에너지자원기술 개발(산자부)', 'Energy Resource Technology Development'),
            projectName: t('초 다이렉트 유도전동기 개발을 위한 기초 연구', 'Basic Research for Ultra-Direct Induction Motor Development'),
            period: '2003.12 - 2005.12',
            role: t('연구책임자', 'PI'),
            category: 'research'
        },
        {
            id: 14,
            program: t('에너지자원기술 개발(산자부)', 'Energy Resource Technology Development'),
            projectName: t('확장병렬리눅 전동기와 제어기 및 계측진단 시스템 결합 상용 평가 특성치화', 'Extended Parallel Linux Motor, Controller and Diagnostic System Integration'),
            period: '2002.12 - 2005.11',
            role: t('연구책임자', 'PI'),
            category: 'system'
        },
        {
            id: 15,
            program: t('특정연구사업(과기부)', 'Specific Research Project (MOST)'),
            projectName: t('인버터 구동 3상 유도전동기 절연 및 실제 효율 그랜 개발', 'Inverter-Driven 3-Phase Induction Motor Insulation and Efficiency Development'),
            period: '2001.12 - 2004.11',
            role: t('연구책임자', 'PI'),
            category: 'efficiency'
        },
        {
            id: 16,
            program: t('산업기반기술개발사업(산자부)', 'Industrial Technology Development'),
            projectName: t('반도체 제조설비용 Stocker Grane용 리니어 직선전기 개발', 'Linear Motor Development for Semiconductor Manufacturing Equipment'),
            period: '2001.10 - 2003.09',
            role: t('연구책임자', 'PI'),
            category: 'special'
        },
        {
            id: 17,
            program: t('에너지자원기술개발사업(산자부)', 'Energy Resource Technology Development'),
            projectName: t('터보기기 Gearless 구동용 200[kW] 30000[rpm]급 초고속 제어시스템 개발', 'Turbo Machine Gearless Drive 200kW 30000rpm Ultra-High-Speed Control System'),
            period: '2000.05 - 2003.09',
            role: t('연구책임자', 'PI'),
            category: 'highspeed'
        }
    ]

    // 카테고리 필터 (동적으로 계산)
    const categories = [
        { id: 'all', label: t('전체', 'All'), count: researchProjects.length },
        { id: 'efficiency', label: t('고효율', 'High Efficiency'), count: researchProjects.filter(p => p.category === 'efficiency').length },
        { id: 'highspeed', label: t('고속', 'High Speed'), count: researchProjects.filter(p => p.category === 'highspeed').length },
        { id: 'ev', label: t('전기차', 'EV'), count: researchProjects.filter(p => p.category === 'ev').length },
        { id: 'control', label: t('제어', 'Control'), count: researchProjects.filter(p => p.category === 'control').length },
        { id: 'special', label: t('특수목적', 'Special Purpose'), count: researchProjects.filter(p => p.category === 'special').length },
        { id: 'platform', label: t('플랫폼', 'Platform'), count: researchProjects.filter(p => p.category === 'platform').length }
    ]

    const filteredProjects = selectedFilter === 'all'
        ? researchProjects
        : researchProjects.filter(p => p.category === selectedFilter)

    const displayedProjects = showAllProjects ? filteredProjects : filteredProjects.slice(0, 8)

    // 중복되는 연구 주제 분석
    const duplicateThemes = [
        {
            theme: t('프리미엄급 고효율 유도전동기', 'Premium High-Efficiency Induction Motor'),
            count: 3,
            countText: t('3개 과제', '3 Projects'),
            phases: [
                t('1단계 (2004-2008)', 'Phase 1 (2004-2008)'),
                t('2단계 (2008-2011)', 'Phase 2 (2008-2011)'),
                t('공통코어 기술 (2009-2012)', 'Common Core Technology (2009-2012)')
            ],
            description: t('8년간 단계적으로 진행된 대형 국책과제', 'Large-scale national project conducted in phases over 8 years')
        },
        {
            theme: t('고속 전동기 시스템', 'High-Speed Motor System'),
            count: 3,
            countText: t('3개 과제', '3 Projects'),
            projects: [
                t('200kW 30,000rpm (2000)', '200kW 30,000rpm (2000)'),
                t('고속/고효율 시스템 (2005)', 'High-Speed/High-Efficiency System (2005)'),
                t('산업용 고속회전기 (2009)', 'Industrial High-Speed Motor (2009)')
            ],
            description: t('초고속 전동기 분야의 지속적인 기술 개발', 'Continuous technology development in ultra-high-speed motors')
        },
        {
            theme: t('전기자동차 전동기', 'Electric Vehicle Motors'),
            count: 2,
            countText: t('2개 과제', '2 Projects'),
            projects: [
                t('EV 전동기/제어기 (2010)', 'EV Motor/Controller (2010)'),
                t('EV 전기부품 평가 (2011)', 'EV Electrical Components Evaluation (2011)')
            ],
            description: t('전기차 시대를 대비한 핵심 기술 개발', 'Core technology development for the EV era')
        }
    ]

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
            {/* Hero Section */}
            <section className="py-20 bg-gradient-to-br from-slate-800 to-blue-900 text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center">
                        <h1 className="text-5xl md:text-6xl font-bold mb-6">
                            {t('연구개발 실적', 'R&D Portfolio')}
                        </h1>
                        <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-4xl mx-auto">
                            {t(
                                '20년간 한국전기연구원(KERI)에서 수행한 50개 이상의 국가 R&D 프로젝트 실적',
                                'Over 50 national R&D projects conducted at KERI over 20 years'
                            )}
                        </p>
                        <div className="flex justify-center space-x-6 text-sm">
                            <div className="flex items-center">
                                <TrendingUp className="h-5 w-5 mr-2 text-blue-300" />
                                <span>{t('연구책임자 35건 | 총괄책임자 10건', '13 PI | 4 GM Projects')}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 연구개발 경력 및 성과 요약 */}
            <section className="py-16 bg-white shadow-sm">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* 경력 및 기관 정보 */}
                    <div className="text-center mb-12">
                        <div className="flex flex-col md:flex-row justify-center items-center gap-8 mb-10">
                            <div className="flex items-center gap-4">
                                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl flex items-center justify-center shadow-lg">
                                    <Calendar className="h-10 w-10 text-white" />
                                </div>
                                <div className="text-left">
                                    <div className="text-4xl font-bold text-gray-900">
                                        {t('20년+', ' 20+ Years')}
                                    </div>
                                    <div className="text-lg text-gray-600">{t('연구개발 경력', 'R&D Experience')}</div>
                                </div>
                            </div>
                            <div className="hidden md:block w-px h-16 bg-gray-300"></div>
                            <div className="flex items-center gap-4">
                                <div className="w-20 h-20 bg-gradient-to-br from-slate-500 to-slate-700 rounded-2xl flex items-center justify-center shadow-lg">
                                    <Building2 className="h-10 w-10 text-white" />
                                </div>
                                <div className="text-left">
                                    <div className="text-4xl font-bold text-gray-900">KERI</div>
                                    <div className="text-lg text-gray-600">{t('한국전기연구원', 'Korea Electrotechnology Research Institute')}</div>
                                </div>
                            </div>
                        </div>

                        {/* 책임자 수행 실적 */}
                        <div className="inline-flex items-center gap-6 px-8 py-4 bg-blue-50 rounded-full">
                            <div className="flex items-center gap-2">
                                <Award className="h-5 w-5 text-blue-600" />
                                <span className="text-gray-700 font-medium">{t('연구책임자', 'Principal Investigator')}</span>
                                <span className="text-xl font-bold text-blue-700">{t('13건', '13 cases')}</span>
                            </div>
                            <div className="w-px h-6 bg-blue-200"></div>
                            <div className="flex items-center gap-2">
                                <TrendingUp className="h-5 w-5 text-purple-600" />
                                <span className="text-gray-700 font-medium">{t('총괄책임자', 'General Manager')}</span>
                                <span className="text-xl font-bold text-purple-700">{t('4건', '4 cases')}</span>
                            </div>
                        </div>
                    </div>

                    {/* 과제 분야별 요약 카드 */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-6 border border-blue-100 hover:shadow-lg transition-all">
                            <div className="flex items-center justify-between mb-4">
                                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                                    <Settings className="h-6 w-6 text-blue-600" />
                                </div>
                                <span className="text-2xl font-bold text-blue-700">{t('7개', '7')}

                                </span>
                            </div>
                            <h3 className="text-lg font-bold text-gray-900 mb-2">{t('에너지 고효율화', 'Energy Efficiency')}</h3>
                            <p className="text-sm text-gray-600">{t('IE4-IE5 프리미엄 고효율 전동기 개발', 'IE4-IE5 Premium High-Efficiency Motor Development')}</p>
                        </div>

                        <div className="bg-gradient-to-br from-purple-50 to-white rounded-2xl p-6 border border-purple-100 hover:shadow-lg transition-all">
                            <div className="flex items-center justify-between mb-4">
                                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                                    <Zap className="h-6 w-6 text-purple-600" />
                                </div>
                                <span className="text-2xl font-bold text-purple-700"> {t('3개', '3')}</span>
                            </div>
                            <h3 className="text-lg font-bold text-gray-900 mb-2">{t('고속 전동기', 'High-Speed Motors')}</h3>
                            <p className="text-sm text-gray-600">{t('30,000RPM급 초고속 전동기 시스템', 'Ultra High-Speed Motor Systems up to 30,000RPM')}</p>
                        </div>

                        <div className="bg-gradient-to-br from-green-50 to-white rounded-2xl p-6 border border-green-100 hover:shadow-lg transition-all">
                            <div className="flex items-center justify-between mb-4">
                                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                                    <Car className="h-6 w-6 text-green-600" />
                                </div>
                                <span className="text-2xl font-bold text-green-700">{t('2개', '2')}</span>
                            </div>
                            <h3 className="text-lg font-bold text-gray-900 mb-2">{t('전기자동차', 'Electric Vehicles')}</h3>
                            <p className="text-sm text-gray-600">{t('EV용 고효율 전동기 및 평가 시스템', 'High-Efficiency Motors and Evaluation Systems for EVs')}</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 중복 연구 주제 하이라이트 */}
            <section className="py-12 bg-gradient-to-br from-blue-50 to-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
                        {t('핵심 연구 분야 집중도', 'Core Research Area Focus')}
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {duplicateThemes.map((theme, index) => (
                            <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all">
                                <div className="flex items-center justify-between mb-4">
                                    <h3 className="text-xl font-bold text-gray-900">{theme.theme}</h3>
                                    <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold">
                                        {theme.count}{t('개 과제', 'Project')}
                                    </span>
                                </div>
                                <p className="text-gray-600 mb-4">{theme.description}</p>
                                <div className="space-y-2">
                                    {(theme.phases || theme.projects || []).map((item, idx) => (
                                        <div key={idx} className="text-sm text-gray-500 flex items-center">
                                            <CheckCircle className="h-3 w-3 text-green-500 mr-2" />
                                            {item}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 카테고리 필터 */}
            <section className="py-8">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-wrap justify-center gap-4">
                        {categories.map((cat) => (
                            <button
                                key={cat.id}
                                onClick={() => setSelectedFilter(cat.id)}
                                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${selectedFilter === cat.id
                                    ? 'bg-blue-600 text-white shadow-lg'
                                    : 'bg-white text-gray-700 hover:bg-gray-100 shadow border border-gray-200'
                                    }`}
                            >
                                {cat.label} <span className="text-sm opacity-75">({cat.count})</span>
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* 연구개발 실적 테이블 */}
            <section className="py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">
                        {t('주요 연구개발 실적', 'Major R&D Projects')}
                    </h2>

                    {/* 모바일용 카드 뷰 */}
                    <div className="block lg:hidden space-y-4">
                        {displayedProjects.map((project) => (
                            <div key={project.id} className={`bg-white rounded-lg shadow-md p-6 ${project.highlight ? 'border-2 border-blue-200' : ''}`}>
                                <div className="mb-3">
                                    <div className="text-xs text-gray-500 mb-1">{project.program}</div>
                                    <h3 className="font-bold text-gray-900 mb-2">{project.projectName}</h3>
                                    {project.highlight && (
                                        <span className="text-xs text-blue-600 font-medium">★ {t('주요 과제', 'Major Project')}</span>
                                    )}
                                </div>
                                <div className="space-y-2 text-sm">
                                    <div className="flex justify-between">
                                        <span className="text-gray-600">{t('기간', 'Period')}:</span>
                                        <span className="font-medium">{project.period}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-gray-600">{t('역할', 'Role')}:</span>
                                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${project.role.includes('총괄')
                                            ? 'bg-purple-100 text-purple-700'
                                            : 'bg-blue-100 text-blue-700'
                                            }`}>
                                            {project.role}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* 데스크톱용 테이블 뷰 */}
                    <div className="hidden lg:block bg-white rounded-2xl shadow-xl overflow-hidden">
                        <div className="overflow-x-auto">
                            <table className="w-full table-fixed">
                                <colgroup>
                                    <col className="w-[25%]" />
                                    <col className="w-[50%]" />
                                    <col className="w-[15%]" />
                                    <col className="w-[10%]" />
                                </colgroup>
                                <thead className="bg-gradient-to-r from-blue-600 to-blue-700 text-white">
                                    <tr>
                                        <th className="px-4 py-4 text-left text-sm font-semibold">{t('프로그램명', 'Program')}</th>
                                        <th className="px-4 py-4 text-left text-sm font-semibold">{t('과제명', 'Project Name')}</th>
                                        <th className="px-4 py-4 text-center text-sm font-semibold">{t('개발기간', 'Period')}</th>
                                        <th className="px-4 py-4 text-center text-sm font-semibold">{t('역할', 'Role')}</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200">
                                    {displayedProjects.map((project) => (
                                        <tr key={project.id} className={`hover:bg-gray-50 transition-colors ${project.highlight ? 'bg-blue-50/30' : ''}`}>
                                            <td className="px-4 py-4 text-xs text-gray-700 align-top">
                                                <div className="break-keep">{project.program}</div>
                                            </td>
                                            <td className="px-4 py-4 align-top">
                                                <div className="text-sm font-medium text-gray-900 break-keep">{project.projectName}</div>
                                                {project.highlight && (
                                                    <span className="text-xs text-blue-600 font-medium">★ {t('주요 과제', 'Major Project')}</span>
                                                )}
                                            </td>
                                            <td className="px-4 py-4 text-xs text-gray-700 text-center align-middle">
                                                <div className="whitespace-nowrap">{project.period}</div>
                                            </td>
                                            <td className="px-4 py-4 text-center align-middle">
                                                <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium whitespace-nowrap ${project.role.includes('총괄')
                                                    ? 'bg-purple-100 text-purple-700'
                                                    : 'bg-blue-100 text-blue-700'
                                                    }`}>
                                                    {project.role}
                                                </span>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        {filteredProjects.length > 8 && (
                            <div className="px-6 py-4 bg-gray-50 border-t border-gray-200 text-center">
                                <button
                                    onClick={() => setShowAllProjects(!showAllProjects)}
                                    className="text-blue-600 hover:text-blue-700 font-medium flex items-center justify-center mx-auto"
                                >
                                    {showAllProjects ? t('접기', 'Show Less') : t(`${filteredProjects.length - 8}개 더 보기`, `Show ${filteredProjects.length - 8} More`)}
                                    <ArrowRight className={`ml-2 h-4 w-4 transition-transform ${showAllProjects ? 'rotate-90' : ''}`} />
                                </button>
                            </div>
                        )}
                    </div>

                    {/* 추가 정보 */}
                    <div className="mt-8 text-center text-gray-600">
                        <p className="text-sm">
                            {t(
                                '* 상기 실적은 주요 연구개발 과제만을 포함하며, 전체 연구실적의 일부입니다.',
                                '* The above shows major R&D projects only and represents a portion of total research achievements.'
                            )}
                        </p>
                    </div>
                </div>
            </section>

            {/* 핵심 연구 분야 */}
            <section className="py-20 bg-gradient-to-br from-slate-100 to-blue-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
                        {t('핵심 연구개발 분야', 'Core R&D Areas')}
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all">
                            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                                <Award className="h-6 w-6 text-blue-600" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">{t('고효율 전동기', 'High-Efficiency Motors')}</h3>
                            <p className="text-gray-600 text-sm mb-4">
                                {t('IE4-IE5 등급 프리미엄 고효율 전동기 설계 및 개발', 'Design and development of IE4-IE5 premium high-efficiency motors')}
                            </p>
                            <div className="text-blue-600 font-semibold text-lg"> {t('7개 과제', '7 Projects')}</div>
                        </div>

                        <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all">
                            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                                <Zap className="h-6 w-6 text-blue-600" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">{t('고속 전동기', 'High-Speed Motors')}</h3>
                            <p className="text-gray-600 text-sm mb-4">
                                {t('30,000 RPM 이상 초고속 전동기 및 구동 시스템', 'Ultra high-speed motors and drive systems over 30,000 RPM')}
                            </p>
                            <div className="text-blue-600 font-semibold text-lg">{t('3개 과제', '3 Projects')}</div>
                        </div>

                        <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all">
                            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                                <Settings className="h-6 w-6 text-blue-600" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">{t('특수 전동기', 'Special Motors')}</h3>
                            <p className="text-gray-600 text-sm mb-4">
                                {t('리니어 모터, 원판형 모터 등 특수목적 전동기', 'Special purpose motors including linear motors and disk-type motors')}
                            </p>
                            <div className="text-blue-600 font-semibold text-lg">{t('2개 과제', '2 Projects')}</div>
                        </div>

                        <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all">
                            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                                <Cpu className="h-6 w-6 text-blue-600" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">{t('제어 시스템', 'Control Systems')}</h3>
                            <p className="text-gray-600 text-sm mb-4">
                                {t('인버터 구동 및 스마트 제어 시스템 개발', 'Development of inverter drives and smart control systems')}
                            </p>
                            <div className="text-blue-600 font-semibold text-lg">{t('1개 과제', '1 Project')} </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">
                        {t('검증된 연구개발 역량', 'Proven R&D Capabilities')}
                    </h2>
                    <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
                        {t(
                            '20년간의 국가 R&D 프로젝트 수행 경험과 45개 이상의 책임자 과제 수행 실적을 바탕으로 귀사의 기술 혁신을 지원합니다.',
                            'Supporting your technological innovation based on 20 years of national R&D project experience and over 45 PI/GM projects.'
                        )}
                    </p>
                </div>
            </section>
        </div>
    )
}

export default PortfolioSection