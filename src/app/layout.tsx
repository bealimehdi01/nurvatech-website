import './globals.css'
import type { Metadata } from 'next'
import { Inter, Poppins, Space_Grotesk } from 'next/font/google'
import { ThemeProvider } from '@/components/theme-provider'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter'
})

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-poppins'
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk'
})

export const metadata: Metadata = {
  title: 'Nurvatech - End-to-End Software Development & Testing Services',
  description: 'Professional IT services company specializing in software development, web applications, mobile apps, backend systems, DevOps, and comprehensive software testing solutions.',
  keywords: 'software development, web development, mobile apps, backend development, DevOps, software testing, automation testing, Selenium, React, Node.js, .NET, Python',
  authors: [{ name: 'Nurvatech IT Services' }],
  creator: 'Nurvatech IT Services',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://nurvatech.com',
    title: 'Nurvatech - End-to-End Software Development & Testing Services',
    description: 'Professional IT services company specializing in software development, web applications, mobile apps, backend systems, DevOps, and comprehensive software testing solutions.',
    siteName: 'Nurvatech',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nurvatech - End-to-End Software Development & Testing Services',
    description: 'Professional IT services company specializing in software development, web applications, mobile apps, backend systems, DevOps, and comprehensive software testing solutions.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable} ${spaceGrotesk.variable}`}>
      <body className="min-h-screen bg-background font-inter antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <div className="relative flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1">
              {children}
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
