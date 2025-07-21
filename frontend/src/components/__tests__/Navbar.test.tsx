import { render, screen, fireEvent } from '@testing-library/react'
import { Navbar } from '../Navbar'
import { LanguageProvider } from '../../context/LanguageContext'

// Mock Next.js router
jest.mock('next/navigation', () => ({
    useRouter: () => ({
        push: jest.fn(),
    }),
    usePathname: () => '/',
}))

const renderWithLanguageProvider = (component: React.ReactElement) => {
    return render(
        <LanguageProvider>
            {component}
        </LanguageProvider>
    )
}

describe('Navbar', () => {
    it('renders logo and navigation items', () => {
        renderWithLanguageProvider(<Navbar />)

        expect(screen.getByAltText('EMECS Logo')).toBeInTheDocument()
        expect(screen.getByText('홈')).toBeInTheDocument()
        expect(screen.getByText('제품')).toBeInTheDocument()
        expect(screen.getByText('회사')).toBeInTheDocument()
        expect(screen.getByText('포트폴리오')).toBeInTheDocument()
    })

    it('toggles mobile menu when menu button is clicked', () => {
        renderWithLanguageProvider(<Navbar />)

        const menuButton = screen.getByRole('button', { name: /menu/i })
        fireEvent.click(menuButton)

        expect(screen.getByText('메뉴')).toBeInTheDocument()
    })

    it('shows language toggle button', () => {
        renderWithLanguageProvider(<Navbar />)

        expect(screen.getByText('EN')).toBeInTheDocument()
    })

    it('opens products dropdown on hover', () => {
        renderWithLanguageProvider(<Navbar />)

        const productsLink = screen.getByText('제품')
        fireEvent.mouseEnter(productsLink)

        expect(screen.getByText('3상 유도 전동기')).toBeInTheDocument()
        expect(screen.getByText('고속 전동기')).toBeInTheDocument()
        expect(screen.getByText('WFSM')).toBeInTheDocument()
    })
}) 