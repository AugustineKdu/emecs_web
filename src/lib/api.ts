// src/lib/api.ts
// 백엔드 API와 통신하기 위한 서비스 함수들

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL ||
    (process.env.NODE_ENV === 'production'
        ? 'https://api.emecs.kr'
        : 'http://localhost:5001')

// API 응답 타입 정의
export interface ApiResponse<T> {
    success: boolean
    data?: T
    error?: string
}

// 제품 데이터 타입
export interface Product {
    id: string
    title: {
        ko: string
        en: string
    }
    description: {
        ko: string
        en: string
    }
    specifications: Record<string, unknown>
    available: boolean
}

// 포트폴리오 프로젝트 타입
export interface PortfolioProject {
    id: number
    program: {
        ko: string
        en: string
    }
    project_name: {
        ko: string
        en: string
    }
    period: string
    role: {
        ko: string
        en: string
    }
    category: string
    highlight: boolean
}

// 회사 정보 타입
export interface CompanyInfo {
    about: {
        ko: string
        en: string
    }
    contact: {
        address: string
        phone: string
        email: string
    }
    qa: Array<{
        question: {
            ko: string
            en: string
        }
        answer: {
            ko: string
            en: string
        }
    }>
}

// ROI 계산 파라미터 타입
export interface ROIParams {
    motorPowerHP?: number
    operatingHoursPerDay?: number
    operatingDaysPerYear?: number
    loadFactor?: number
    electricityRateKRW?: number
    electricityRateUSD?: number
    ie3Efficiency?: number
    ie4Efficiency?: number
    ie5Efficiency?: number
}

// ROI 계산 결과 타입
export interface ROIResult {
    IE4: {
        efficiency_gain: number
        annual_savings: {
            krw: number
            usd: number
            energy_saved: number
        }
    }
    IE5: {
        efficiency_gain: number
        annual_savings: {
            krw: number
            usd: number
            energy_saved: number
        }
    }
}

// API 호출 헬퍼 함수
async function apiCall<T>(endpoint: string, options?: RequestInit): Promise<ApiResponse<T>> {
    try {
        const response = await fetch(`${API_BASE_URL}${endpoint}`, {
            headers: {
                'Content-Type': 'application/json',
                ...options?.headers,
            },
            ...options,
        })

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`)
        }

        const data = await response.json()
        return data
    } catch (error) {
        console.error(`API call failed for ${endpoint}:`, error)
        return {
            success: false,
            error: error instanceof Error ? error.message : 'Unknown error'
        }
    }
}

// Health Check
export async function healthCheck(): Promise<ApiResponse<{ status: string; message: string }>> {
    return apiCall('/api/health')
}

// 제품 정보 API
export async function getProducts(): Promise<ApiResponse<Product[]>> {
    return apiCall('/api/products')
}

export async function getProduct(productId: string): Promise<ApiResponse<Product>> {
    return apiCall(`/api/products/${productId}`)
}

// 포트폴리오 API
export async function getPortfolio(category?: string): Promise<ApiResponse<PortfolioProject[]>> {
    const params = category && category !== 'all' ? `?category=${category}` : ''
    return apiCall(`/api/portfolio${params}`)
}

// 회사 정보 API
export async function getCompanyInfo(): Promise<ApiResponse<CompanyInfo>> {
    return apiCall('/api/company')
}

// ROI 계산 API
export async function calculateROI(params: ROIParams): Promise<ApiResponse<ROIResult>> {
    return apiCall('/api/roi/calculate', {
        method: 'POST',
        body: JSON.stringify(params),
    })
}

// 개발/테스트용 API 연결 확인
export async function checkApiConnection(): Promise<boolean> {
    try {
        const result = await healthCheck()
        return result.success
    } catch {
        return false
    }
} 