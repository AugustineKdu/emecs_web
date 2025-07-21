// src/components/Navbar.tsx
'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useLanguage } from '@/context/LanguageContext'
import { Globe, Menu, X, ChevronDown, Zap, Gauge, Cpu } from 'lucide-react'
import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'

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

export function Navbar() {
  const { language, setLanguage, t } = useLanguage()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)
  const [isProductsOpen, setIsProductsOpen] = useState(false)
  const pathname = usePathname()
  const href = useLocalizedHref()

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      const windowHeight = window.innerHeight
      const documentHeight = document.documentElement.scrollHeight

      setIsScrolled(scrollPosition > 20)

      const scrollPercentage = (scrollPosition / (documentHeight - windowHeight)) * 100
      setScrollProgress(Math.min(scrollPercentage, 100))
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { href: '/', label: t('홈', 'Home') },
    {
      href: '/products',
      label: t('제품', 'Products'),
      hasDropdown: true,
      dropdownItems: [
        {
          href: '/products/3-phase-induction',
          title: t('3상 유도 전동기', '3-Phase Induction Motor'),
          icon: Zap
        },
        {
          href: '/products/high-speed',
          title: t('고속 전동기', 'High-Speed Motor'),
          icon: Gauge
        },
        {
          href: '/products/wfsm',
          title: t('WFSM', 'WFSM'),
          icon: Cpu
        }
      ]
    },
    { href: '/about', label: t('회사', 'Company') },
    { href: '/portfolio', label: t('포트폴리오', 'Portfolio') },
  ]

  // 현재 경로가 active인지 확인 (언어 경로 고려)
  const isActivePath = (path: string) => {
    const currentPath = pathname.replace(/^\/en/, '') || '/'
    return currentPath === path
  }

  return (
    <>
      <nav className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled
        ? 'bg-white border-b border-gray-200 shadow-md'
        : 'bg-white border-b border-gray-200'
        }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`flex justify-between items-center transition-all duration-300 ${isScrolled ? 'h-14' : 'h-16'
            }`}>
            <div className="flex items-center">
              {/* 로고 이미지 */}
              <Link href={href('/')} className="font-bold flex items-center group">
                <Image
                  src="/logo.svg"
                  alt="EMECS Logo"
                  width={120}
                  height={40}
                  className="h-10 w-auto"
                  priority
                />
              </Link>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <div key={item.href} className="relative">
                  <Link
                    href={href(item.href)}
                    className={`relative py-2 text-gray-700 hover:text-blue-600 transition-colors group ${isActivePath(item.href) ? 'text-blue-600' : ''
                      }`}
                    onMouseEnter={() => item.hasDropdown && setIsProductsOpen(true)}
                    onMouseLeave={() => item.hasDropdown && setIsProductsOpen(false)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault()
                        if (item.hasDropdown) {
                          setIsProductsOpen(!isProductsOpen)
                        }
                      }
                    }}
                    role={item.hasDropdown ? 'button' : undefined}
                    aria-expanded={item.hasDropdown ? isProductsOpen : undefined}
                    aria-haspopup={item.hasDropdown ? 'true' : undefined}
                  >
                    <span className="flex items-center">
                      {item.label}
                      {item.hasDropdown && (
                        <ChevronDown
                          className={`ml-1 h-3 w-3 transition-transform duration-200 ${isProductsOpen ? 'rotate-180' : ''
                            }`}
                          aria-hidden="true"
                        />
                      )}
                    </span>

                    {/* 현재 페이지 인디케이터 */}
                    {isActivePath(item.href) && (
                      <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600" aria-hidden="true" />
                    )}

                    {/* 호버 인디케이터 */}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full" aria-hidden="true" />
                  </Link>

                  {/* 드롭다운 메뉴 */}
                  {item.hasDropdown && (
                    <div
                      className={`absolute top-full left-0 w-72 mt-0 transition-all duration-300 ${isProductsOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
                        }`}
                      onMouseEnter={() => setIsProductsOpen(true)}
                      onMouseLeave={() => setIsProductsOpen(false)}
                      role="menu"
                      aria-label={t('제품 메뉴', 'Products menu')}
                    >
                      <div className="mt-2 bg-white rounded-xl shadow-2xl border border-gray-100 overflow-hidden">
                        <div className="p-2">
                          {item.dropdownItems?.map((dropdownItem, index) => {
                            const Icon = dropdownItem.icon
                            return (
                              <Link
                                key={index}
                                href={href(dropdownItem.href)}
                                className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 transition-all duration-200 group/item"
                                onClick={() => setIsProductsOpen(false)}
                                role="menuitem"
                                onKeyDown={(e) => {
                                  if (e.key === 'Enter' || e.key === ' ') {
                                    e.preventDefault()
                                    setIsProductsOpen(false)
                                  }
                                }}
                              >
                                <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center group-hover/item:scale-110 transition-transform duration-200">
                                  <Icon className="w-5 h-5 text-white" />
                                </div>
                                <div className="flex-grow">
                                  <div className="font-medium text-gray-900 group-hover/item:text-blue-600 transition-colors">
                                    {dropdownItem.title}
                                  </div>
                                </div>
                                <ChevronDown className="w-4 h-4 text-gray-400 -rotate-90 group-hover/item:text-blue-600 transition-all duration-200" />
                              </Link>
                            )
                          })}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}

              <button
                onClick={() => setLanguage(language === 'ko' ? 'en' : 'ko')}
                className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 transition-colors"
                aria-label={t('언어 변경', 'Change language')}
              >
                <Globe className="h-5 w-5" aria-hidden="true" />
                <span>{language === 'ko' ? 'EN' : 'KO'}</span>
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2"
              aria-label={t('메뉴 열기', 'Open menu')}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
            >
              {isMenuOpen ? <X className="h-6 w-6" aria-hidden="true" /> : <Menu className="h-6 w-6" aria-hidden="true" />}
            </button>
          </div>
        </div>

        {/* 스크롤 진행 표시기 */}
        <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gray-100">
          <div
            className="h-full bg-blue-600 transition-all duration-100"
            style={{ width: `${scrollProgress}%` }}
          />
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden" id="mobile-menu" role="dialog" aria-modal="true" aria-label={t('모바일 메뉴', 'Mobile menu')}>
          <div className="fixed inset-0 bg-black/20" onClick={() => setIsMenuOpen(false)} />
          <div className="fixed right-0 top-0 h-full w-64 bg-white shadow-xl">
            <div className="flex justify-between items-center p-4 border-b border-gray-200">
              <span className="text-lg font-semibold text-gray-900">{t('메뉴', 'Menu')}</span>
              <button
                onClick={() => setIsMenuOpen(false)}
                className="p-2"
                aria-label={t('메뉴 닫기', 'Close menu')}
              >
                <X className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <nav className="px-2 pt-2 pb-3 space-y-1" role="navigation">
              {navItems.map((item) => (
                <div key={item.href}>
                  <Link
                    href={href(item.href)}
                    className={`block px-3 py-2 rounded-md transition-colors ${isActivePath(item.href)
                      ? 'bg-blue-50 text-blue-600 font-medium'
                      : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                      }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                  {item.dropdownItems && (
                    <div className="ml-4 mt-2 space-y-2">
                      {item.dropdownItems.map((dropdownItem, index) => {
                        const Icon = dropdownItem.icon
                        return (
                          <Link
                            key={index}
                            href={href(dropdownItem.href)}
                            className="flex items-center gap-3 px-3 py-2 text-sm text-gray-600 hover:text-blue-600 hover:bg-gray-50 rounded-md group"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-blue-500 to-indigo-600 rounded flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                              <Icon className="w-4 h-4 text-white" />
                            </div>
                            <span className="group-hover:translate-x-1 transition-transform duration-200">
                              {dropdownItem.title}
                            </span>
                          </Link>
                        )
                      })}
                    </div>
                  )}
                </div>
              ))}
              <div className="border-t border-gray-200 pt-2 mt-2">
                <button
                  onClick={() => {
                    setLanguage(language === 'ko' ? 'en' : 'ko')
                    setIsMenuOpen(false)
                  }}
                  className="w-full text-left px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md flex items-center space-x-2"
                  aria-label={t('언어 변경', 'Change language')}
                >
                  <Globe className="h-5 w-5" aria-hidden="true" />
                  <span>{language === 'ko' ? 'English' : '한국어'}</span>
                </button>
              </div>
            </nav>
          </div>
        </div>
      )}
    </>
  )
}