import type { Metadata } from 'next'
import { ServicesHero } from '@/components/sections/services-hero'
import { SoftwareDevelopment } from '@/components/sections/software-development'
import { QaTestingSection } from '@/components/sections/qa-testing-section'
import { PricingSection } from '@/components/sections/pricing-section'
import { CtaBanner } from '@/components/sections/cta-banner'

export const metadata: Metadata = {
  title: 'Our Services - Nurvatech | Software Development & Testing',
  description: 'Comprehensive software development services including web development, mobile apps, backend systems, DevOps, and quality assurance testing.',
}

export default function ServicesPage() {
  return (
    <div className="min-h-screen pt-16">
      <ServicesHero />
      <SoftwareDevelopment />
      <QaTestingSection />
      <PricingSection />
      <CtaBanner />
    </div>
  )
}
