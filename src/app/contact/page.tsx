import type { Metadata } from 'next'
import { ContactHero } from '@/components/sections/contact-hero'
import { ContactInfo } from '@/components/sections/contact-info'

export const metadata: Metadata = {
  title: 'Contact Us - Nurvatech | Get Your Free Quote',
  description: 'Get in touch with Nurvatech for a free consultation and quote for your software development and testing needs.',
}

export default function ContactPage() {
  return (
    <div className="min-h-screen pt-16">
      <ContactHero />
      <ContactInfo />
    </div>
  )
}
