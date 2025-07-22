// src/components/Footer.tsx
'use client'

import { useLanguage } from '@/context/LanguageContext'
import Link from 'next/link'
import { MapPin, Phone, Mail, Clock } from 'lucide-react'

export function Footer() {
    const { t, language } = useLanguage()

    // 언어에 따라 경로에 prefix 추가
    const getLocalizedPath = (path: string) => {
        if (language === 'en') {
            return `/en${path}`
        }
        return path
    }

    const quickLinks = [
        { href: getLocalizedPath('/'), label: t('홈', 'Home') },
        { href: getLocalizedPath('/products'), label: t('제품', 'Products') },
        { href: getLocalizedPath('/about'), label: t('회사', 'Company') },
        { href: getLocalizedPath('/portfolio'), label: t('포트폴리오', 'Portfolio') },
    ]

    const products = [
        {
            href: getLocalizedPath('/products/3-phase-induction'),
            label: t('3상 유도 전동기', '3-Phase Induction Motor'),
        },
        {
            href: getLocalizedPath('/products/high-speed'),
            label: t('고속 전동기', 'High-Speed Motor'),
        },
        {
            href: getLocalizedPath('/products/wfsm'),
            label: t('권선형 동기 전동기', 'WFSM Motor'),
        },
    ]

    return (
        <footer className="bg-gray-900 text-white py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                    {/* 회사 정보 */}
                    <div>
                        <Link href={getLocalizedPath('/')} className="inline-block">
                            <h3 className="text-2xl font-bold mb-4 hover:text-blue-400 transition-colors">EMECS</h3>
                        </Link>
                        <p className="text-gray-400 mb-4">
                            {t(
                                '고효율 전동기 솔루션의 선두 기업',
                                'Leading company in high-efficiency motor solutions'
                            )}
                        </p>
                    </div>

                    {/* 빠른 링크 */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4">
                            {t('빠른 링크', 'Quick Links')}
                        </h4>
                        <ul className="space-y-2">
                            {quickLinks.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="text-gray-400 hover:text-white transition-colors"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* 제품 */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4">
                            {t('제품', 'Products')}
                        </h4>
                        <ul className="space-y-2">
                            {products.map((product) => (
                                <li key={product.href}>
                                    <Link
                                        href={product.href}
                                        className="text-gray-400 hover:text-white transition-colors"
                                    >
                                        {product.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* 연락처 */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4">
                            {t('연락처', 'Contact')}
                        </h4>
                        <ul className="space-y-3 text-gray-400">
                            <li className="flex items-start">
                                <MapPin className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0" />
                                <span>
                                    {t(
                                        '부산시 금정구 온천장로 132 6층',
                                        '6th Floor, 132 Oncheonjang-ro, Geumjeong-gu, Busan'
                                    )}
                                </span>
                            </li>
                            <li className="flex items-center">
                                <Phone className="h-5 w-5 mr-2 flex-shrink-0" />
                                <a href="tel:+82-51-714-4061" className="hover:text-white transition-colors">
                                    +82-51-714-4061
                                </a>
                            </li>
                            <li className="flex items-center">
                                <Mail className="h-5 w-5 mr-2 flex-shrink-0" />
                                <a href="mailto:yhkoo@emecs.kr" className="hover:text-white transition-colors">
                                    yhkoo@emecs.kr
                                </a>
                            </li>
                            <li className="flex items-center">
                                <Clock className="h-5 w-5 mr-2 flex-shrink-0" />
                                <span>
                                    {t(
                                        '월-금: 09:00 - 18:00',
                                        'Mon-Fri: 09:00 - 18:00'
                                    )}
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-800 pt-8">
                    <div className="flex flex-col sm:flex-row justify-between items-center">
                        <p className="text-gray-400 text-center sm:text-left mb-4 sm:mb-0">
                            © 2025 EMECS. {t('모든 권리 보유.', 'All rights reserved.')}
                        </p>

                        {/* 추가: 개인정보처리방침, 이용약관 등 */}
                        {/* <div className="flex space-x-6">
                            <Link
                                href={getLocalizedPath('/privacy')}
                                className="text-gray-400 hover:text-white transition-colors text-sm"
                            >
                                {t('개인정보처리방침', 'Privacy Policy')}
                            </Link>
                            <Link
                                href={getLocalizedPath('/terms')}
                                className="text-gray-400 hover:text-white transition-colors text-sm"
                            >
                                {t('이용약관', 'Terms of Service')}
                            </Link>
                        </div> */}
                    </div>
                </div>
            </div>
        </footer>
    )
}