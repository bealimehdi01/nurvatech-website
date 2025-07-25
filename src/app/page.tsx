import { HeroSection } from '@/components/sections/hero-section'
import { ServicesOverview } from '@/components/sections/services-overview'
import { WhyChooseUs } from '@/components/sections/why-choose-us'
import { CaseStudies } from '@/components/sections/case-studies'
import { Testimonials } from '@/components/sections/testimonials'
import { TechStack } from '@/components/sections/tech-stack'
import { CtaBanner } from '@/components/sections/cta-banner'

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ServicesOverview />
      <WhyChooseUs />
      <CaseStudies />
      <Testimonials />
      <TechStack />
      <CtaBanner />
    </div>
  )
}
