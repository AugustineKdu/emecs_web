'use client'

import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { HeroSection } from '@/components/home/HeroSection'
import { EfficiencyStandardSection } from '@/components/home/EfficiencyStandardSection'
import { ProductSection } from '@/components/home/ProductSection'
import { CustomMotorSection } from '@/components/home/CustomMotorSection'
import { DevelopmentProcessSection } from '@/components/home/DevelopmentProcessSection'
import { ROISection } from '@/components/home/ROISection'
import { AboutPortfolioSection } from '@/components/home/AboutPortfolioSection'

export default function HomePageClient() {
    return (
        <>
            <Navbar />
            <HeroSection />
            <EfficiencyStandardSection />
            <ProductSection />
            <CustomMotorSection />
            <DevelopmentProcessSection />
            <AboutPortfolioSection />
            <ROISection />
            <Footer />
        </>
    )
} 