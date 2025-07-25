import type { Metadata } from 'next'
import { AboutHero } from '@/components/sections/about-hero'
import { MissionVision } from '@/components/sections/mission-vision'
import { TeamSection } from '@/components/sections/team-section'
import { CompanyValues } from '@/components/sections/company-values'

export const metadata: Metadata = {
  title: 'About Us - Nurvatech | Our Story & Mission',
  description: 'Learn about Nurvatech\'s mission, vision, and the team behind our innovative software development and testing solutions.',
}

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-16">
      <AboutHero />
      <MissionVision />
      <CompanyValues />
      <TeamSection />
    </div>
  )
}
