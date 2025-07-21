import { render, screen, fireEvent } from '@testing-library/react'
import { LanguageProvider, useLanguage } from '../../context/LanguageContext'

// Mock Next.js router
jest.mock('next/navigation', () => ({
    useRouter: () => ({
        push: jest.fn(),
    }),
    usePathname: () => '/',
}))

const TestComponent = () => {
    const { language, setLanguage, t } = useLanguage()

    return (
        <div>
            <span data-testid="current-language">{language}</span>
            <button onClick={() => setLanguage('en')}>Switch to English</button>
            <span data-testid="translated-text">{t('안녕하세요', 'Hello')}</span>
        </div>
    )
}

describe('LanguageContext', () => {
    it('provides default Korean language', () => {
        render(
            <LanguageProvider>
                <TestComponent />
            </LanguageProvider>
        )

        expect(screen.getByTestId('current-language')).toHaveTextContent('ko')
    })

    it('translates text correctly', () => {
        render(
            <LanguageProvider>
                <TestComponent />
            </LanguageProvider>
        )

        expect(screen.getByTestId('translated-text')).toHaveTextContent('안녕하세요')
    })

    it('changes language when setLanguage is called', () => {
        render(
            <LanguageProvider>
                <TestComponent />
            </LanguageProvider>
        )

        const button = screen.getByText('Switch to English')
        fireEvent.click(button)

        expect(screen.getByTestId('current-language')).toHaveTextContent('en')
    })
}) 