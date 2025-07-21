// src/lib/hooks/useLocalizedHref.ts (새 파일 생성)
import { useLanguage } from '@/context/LanguageContext'

export function useLocalizedHref() {
    const { language } = useLanguage()

    const href = (path: string) => {
        if (language === 'en' && path.startsWith('/') && !path.startsWith('/en')) {
            return `/en${path}`
        }
        return path
    }

    return href
}