// src/components/home/HeroSection.tsx
// cspell:ignore EMECS WFSM KERI
'use client'

import { useState, useEffect } from 'react'
import { useLanguage } from '@/context/LanguageContext'
import { ChevronLeft, ChevronRight } from 'lucide-react'

interface SlideData {
    title: string
    subtitle: string
    bgImage: string
}

export function HeroSection() {
    const { t } = useLanguage()
    const [currentSlide, setCurrentSlide] = useState(0)
    const [touchStartX, setTouchStartX] = useState<number | null>(null)

    // 슬라이드 데이터
    const slides: SlideData[] = [
        {
            title: t(
                '조립 전문 기술 회사\n+\n고효율 신기술 솔루션 공급자',
                'Assembly Technology Specialist\n+\nHigh-Efficiency Solution Provider'
            ),
            subtitle: t(
                'EMECS는 20년간 축적된 전동기 설계 기술로 최적의 에너지 효율 솔루션을 제공합니다',
                'EMECS provides optimal energy efficiency solutions with 20 years of motor design expertise'
            ),
            bgImage: '/images/hero-slide-1.png'
        },
        {
            title: t(
                '1% 효율 차이로\n더 나은 미래로 나아가는\n한걸음',
                '1% Efficiency Difference\nOne Step Towards\nA Better Future'
            ),
            subtitle: t(
                '작은 효율 개선이 만드는 큰 변화, 에너지 비용 절감과 탄소 배출 감소를 동시에',
                'Small efficiency improvements create big changes - reduce energy costs and carbon emissions together'
            ),
            bgImage: '/images/hero-slide-2.png'
        },
        {
            title: t(
                '정밀한 지속가능한 미래\n맞춤형 설계탄소중립',
                'Precise Sustainable Future\nCustom Design&Carbon Neutral'
            ),
            subtitle: t(
                '귀사의 운영 환경에 최적화된 맞춤형 고효율 전동기로 탄소중립 목표를 달성하세요',
                'Achieve carbon neutrality goals with custom high-efficiency motors optimized for your operations'
            ),
            bgImage: '/images/hero-slide-3.png'
        }
    ]

    // 현재 슬라이드 데이터 (항상 값이 있도록 보장)
    const currentSlideData: SlideData = slides[currentSlide] ?? slides[0] ?? {
        title: '',
        subtitle: '',
        bgImage: ''
    }
    // 자동 슬라이드
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length)
        }, 8000)

        return () => clearInterval(timer)
    }, [slides.length])

    // 컴포넌트 마운트 시 body overflow 제어
    useEffect(() => {
        // SSR 환경에서는 실행하지 않음
        if (typeof window === 'undefined') {
            return
        }

        const body = document.body
        if (!body) {
            return
        }

        const originalOverflowX = body.style.overflowX
        body.style.overflowX = 'hidden'

        // cleanup 함수
        return () => {
            body.style.overflowX = originalOverflowX
        }
    }, [])

    const goToSlide = (index: number) => {
        setCurrentSlide(index)
    }

    const goToPrevious = () => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
    }

    const goToNext = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length)
    }

    // 터치 이벤트 핸들러
    const handleTouchStart = (e: React.TouchEvent) => {
        if (e.touches && e.touches[0]) {
            setTouchStartX(e.touches[0].clientX)
        }
    }

    const handleTouchEnd = (e: React.TouchEvent) => {
        if (touchStartX === null) return

        if (e.changedTouches && e.changedTouches[0]) {
            const touchEndX = e.changedTouches[0].clientX
            const diff = touchStartX - touchEndX

            if (Math.abs(diff) > 50) {
                if (diff > 0) {
                    goToNext()
                } else {
                    goToPrevious()
                }
            }
        }

        setTouchStartX(null)
    }

    return (
        <section
            className="relative h-screen min-h-[500px] bg-black text-white"
            style={{
                overflow: 'hidden',
                width: '100vw',
                maxWidth: '100%',
                position: 'relative',
                left: '50%',
                right: '50%',
                marginLeft: '-50vw',
                marginRight: '-50vw'
            }}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
        >
            {/* 배경 이미지 - overflow hidden 추가 */}
            <div className="absolute inset-0 w-full h-full overflow-hidden">
                {slides.map((slide, index) => (
                    <div
                        key={index}
                        className={`absolute inset-0 w-full h-full transition-all duration-1000 ${index === currentSlide
                            ? 'opacity-100 scale-100'
                            : 'opacity-0 scale-110'
                            }`}
                    >
                        <div
                            className="absolute inset-0 w-full h-full bg-cover bg-center bg-slate-800"
                            style={{ backgroundImage: `url(${slide.bgImage})` }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />

                        {/* AI 생성 이미지 표시 */}
                        <div className="absolute top-4 right-4 z-10">
                            <div className="bg-black/50 backdrop-blur-sm text-white px-2 py-1 rounded text-xs font-medium border border-white/20">
                                {t('AI 생성 이미지', 'AI Generated')}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* 메인 컨텐츠 */}
            <div className="relative z-10 h-full flex items-center justify-center px-4 sm:px-6 lg:px-8">
                <div className="text-center w-full max-w-5xl mx-auto">
                    {/* 메인 타이틀 */}
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6 text-white">
                        {currentSlideData.title.split('\n').map((line, i) => (
                            <span
                                key={`${currentSlide}-${i}`}
                                className="block animate-fade-in"
                                style={{ animationDelay: `${i * 100}ms` }}
                            >
                                {line}
                            </span>
                        ))}
                    </h1>

                    {/* 서브타이틀 */}
                    <p
                        key={`subtitle-${currentSlide}`}
                        className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed animate-fade-in px-4"
                        style={{ animationDelay: '300ms' }}
                    >
                        {currentSlideData.subtitle}
                    </p>
                </div>
            </div>

            {/* 네비게이션 버튼 - 데스크톱 */}
            <button
                onClick={goToPrevious}
                className="hidden md:block absolute left-8 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300 z-20"
                aria-label="Previous slide"
            >
                <ChevronLeft className="h-6 w-6" />
            </button>
            <button
                onClick={goToNext}
                className="hidden md:block absolute right-8 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300 z-20"
                aria-label="Next slide"
            >
                <ChevronRight className="h-6 w-6" />
            </button>

            {/* 하단 컨트롤 */}
            <div className="absolute bottom-0 left-0 right-0 pb-8 px-4 z-20">
                {/* 모바일 버튼 */}
                <div className="md:hidden flex justify-center gap-8 mb-6">
                    <button
                        onClick={goToPrevious}
                        className="p-4 rounded-full bg-white/25 backdrop-blur-sm border border-white/30 active:bg-white/40 transition-all"
                        aria-label="Previous slide"
                    >
                        <ChevronLeft className="h-6 w-6" />
                    </button>
                    <button
                        onClick={goToNext}
                        className="p-4 rounded-full bg-white/25 backdrop-blur-sm border border-white/30 active:bg-white/40 transition-all"
                        aria-label="Next slide"
                    >
                        <ChevronRight className="h-6 w-6" />
                    </button>
                </div>

                {/* 인디케이터 */}
                <div className="flex justify-center space-x-3">
                    {slides.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => goToSlide(index)}
                            className={`transition-all duration-300 ${index === currentSlide
                                ? 'w-14 h-2 bg-white'
                                : 'w-7 h-2 bg-white/40 hover:bg-white/60'
                                }`}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>

                {/* 스크롤 다운 인디케이터 - 모바일에서는 숨김 */}
                <div className="hidden md:block absolute bottom-20 left-1/2 transform -translate-x-1/2">
                    <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
                        <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-bounce"></div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                @keyframes fade-in {
                    from {
                        opacity: 0;
                        transform: translateY(20px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                
                .animate-fade-in {
                    animation: fade-in 0.6s ease-out forwards;
                    opacity: 0;
                }
            `}</style>
        </section>
    )
}