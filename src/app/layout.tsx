// src/app/layout.tsx
import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'


import './globals.css'
import { LanguageProvider } from '@/context/LanguageContext'
import { SEO_VERIFICATION } from '@/lib/seoVerification'

const inter = Inter({ subsets: ['latin'] })

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#2563eb',
}

export const metadata: Metadata = {

  title: 'EMECS - High Efficiency Motors | 고효율 전동기 전문기업',
  description: 'Premium motor solutions with IE4 and IE5 efficiency. 20년 전동기 설계 경험을 바탕으로 고효율 전동기를 개발하는 전문기업입니다.',
  keywords: 'motor, efficiency, IE4, IE5, industrial, electric motor, 전동기, 고효율, 모터, 산업용, 전기모터',
  authors: [{ name: 'EMECS' }],
  creator: 'EMECS',
  publisher: 'EMECS',
  robots: 'index, follow',
  manifest: '/manifest.json',
  icons: {
    icon: '/EMECSfavicon.png',
    apple: '/EMECSfavicon.png',
  },
  openGraph: {
    type: 'website',
    locale: 'ko_KR',
    url: 'https://www.emecs.kr',
    title: 'EMECS - High Efficiency Motors | 고효율 전동기 전문기업',
    description: 'Premium motor solutions with IE4 and IE5 efficiency. 20년 전동기 설계 경험을 바탕으로 고효율 전동기를 개발하는 전문기업입니다.',
    siteName: 'EMECS',
    images: [
      {
        url: '/EMECSfavicon.png',
        width: 32,
        height: 32,
        alt: 'EMECS Logo',
      },
    ],
  },
  alternates: {
    canonical: 'https://www.emecs.kr',
    languages: {
      'ko': 'https://www.emecs.kr',
      'en': 'https://www.emecs.kr/en',
    },
  },
  other: {
    'naver-site-verification': SEO_VERIFICATION.naver,
    'google-site-verification': SEO_VERIFICATION.google,

  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <head>
    <meta name="google-site-verification" content="CE1dIZwHFMP8KAhlwatV19WOJYrjolIjddAsGvIEC0U" />
    /</head>
      <body className={inter.className}>
        <LanguageProvider>
          <div className="min-h-screen flex flex-col">
            {children}
          </div>
        </LanguageProvider>
      </body>
    </html>
  )
}