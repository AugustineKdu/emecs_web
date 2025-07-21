// src/context/LanguageContext.tsx
'use client'

import { createContext, useContext, useEffect, useState } from 'react'
import { useRouter, usePathname } from 'next/navigation'

interface LanguageContextType {
    language: 'ko' | 'en'
    setLanguage: (lang: 'ko' | 'en') => void
    toggleLanguage: () => void  // 기존 코드와의 호환성을 위해 추가
    t: (ko: string, en: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({
    children
}: {
    children: React.ReactNode
}) {
    const router = useRouter()
    const pathname = usePathname()
    const [language, setLang] = useState<'ko' | 'en'>('ko')

    // pathname 기반으로 언어 자동 설정
    useEffect(() => {
        const isEnPath = pathname.startsWith('/en')
        setLang(isEnPath ? 'en' : 'ko')
    }, [pathname])

    const setLanguage = (newLang: 'ko' | 'en') => {
        if (newLang === 'en') {
            // 영어로 전환 - /en 추가
            if (!pathname.startsWith('/en')) {
                router.push(`/en${pathname}`)
            }
        } else {
            // 한국어로 전환 - /en 제거
            if (pathname.startsWith('/en')) {
                const newPath = pathname.replace(/^\/en/, '') || '/'
                router.push(newPath)
            }
        }
        setLang(newLang)
    }

    // 기존 toggleLanguage와의 호환성
    const toggleLanguage = () => {
        setLanguage(language === 'ko' ? 'en' : 'ko')
    }

    const t = (ko: string, en: string) => {
        return language === 'ko' ? ko : en
    }

    return (
        <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    )
}

export const useLanguage = () => {
    const context = useContext(LanguageContext)
    if (!context) {
        throw new Error('useLanguage must be used within a LanguageProvider')
    }
    return context
}