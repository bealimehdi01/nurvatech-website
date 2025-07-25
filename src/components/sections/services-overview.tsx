'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { 
  Globe, 
  Smartphone, 
  Server, 
  CloudCog, 
  TestTube, 
  Settings,
  ArrowRight 
} from 'lucide-react'
import { Button } from '@/components/ui/button'

const services = [
  {
    icon: Globe,
    title: 'Web Development',
    description: 'Modern, responsive web applications using React, Next.js, Angular, and Vue.js with cutting-edge performance optimization.',
    features: ['React & Next.js', 'Angular & Vue.js', 'Progressive Web Apps', 'SEO Optimization']
  },
  {
    icon: Smartphone,
    title: 'Mobile Development',
    description: 'Cross-platform mobile applications with React Native and Flutter for iOS and Android platforms.',
    features: ['React Native', 'Flutter', 'iOS & Android', 'App Store Deployment']
  },
  {
    icon: Server,
    title: 'Backend Development',
    description: 'Scalable server-side solutions using Node.js, .NET, Python, and cloud-native architectures.',
    features: ['Node.js & .NET', 'Python & Django', 'Microservices', 'Database Design']
  },
  {
    icon: CloudCog,
    title: 'DevOps & Cloud',
    description: 'Complete DevOps pipelines, cloud infrastructure, and deployment automation for maximum efficiency.',
    features: ['CI/CD Pipelines', 'AWS & Azure', 'Docker & Kubernetes', 'Infrastructure as Code']
  },
  {
    icon: TestTube,
    title: 'Software Testing',
    description: 'Comprehensive testing strategies including manual testing, automation, and quality assurance processes.',
    features: ['Manual Testing', 'Automation Testing', 'Selenium & Cypress', 'Performance Testing']
  },
  {
    icon: Settings,
    title: 'Consulting & Support',
    description: 'Technical consulting, code reviews, maintenance, and ongoing support for your software projects.',
    features: ['Technical Consulting', 'Code Reviews', 'Maintenance', '24/7 Support']
  }
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.6, -0.05, 0.01, 0.99]
    }
  }
}

export function ServicesOverview() {
  return (
    <section className="section-padding bg-background">
      <div className="container-padding mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Our Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From initial concept to final deployment, we provide comprehensive solutions 
            that cover every aspect of software development and quality assurance.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="group relative"
              variants={itemVariants}
            >
              <div className="h-full p-8 rounded-2xl border border-border bg-card hover:shadow-lg transition-all duration-300 hover:border-primary/20">
                {/* Icon */}
                <div className="inline-flex items-center justify-center w-14 h-14 mb-6 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="h-7 w-7 text-primary" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold mb-4 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Hover Effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Button size="lg" asChild className="group">
            <Link href="/services">
              Explore All Services
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
