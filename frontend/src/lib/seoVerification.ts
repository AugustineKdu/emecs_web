// SEO 인증코드 환경변수에서 불러오기
export const SEO_VERIFICATION = {
    naver: process.env.NEXT_PUBLIC_NAVER_SITE_VERIFICATION || '',
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || '',
    kakao: process.env.NEXT_PUBLIC_KAKAO_SITE_VERIFICATION || '',
}

// 개발/테스트 환경에서 사용할 수 있는 안전한 기본값들
export const DEFAULT_SEO_VERIFICATION = {
    naver: '',
    google: '',
    kakao: '',
} 