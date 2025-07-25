'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ExternalLink, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

const caseStudies = [
  {
    title: 'E-Commerce Platform Modernization',
    category: 'Web Development',
    description: 'Transformed a legacy e-commerce system into a modern, scalable platform using Next.js and microservices architecture.',
    results: [
      '300% increase in page load speed',
      '150% improvement in conversion rates',
      '99.9% uptime achieved'
    ],
    technologies: ['Next.js', 'Node.js', 'PostgreSQL', 'AWS'],
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    title: 'Mobile Banking App Development',
    category: 'Mobile Development',
    description: 'Built a secure, user-friendly mobile banking application with biometric authentication and real-time transactions.',
    results: [
      '4.8/5 app store rating',
      '500K+ active users',
      'Zero security incidents'
    ],
    technologies: ['React Native', 'Node.js', 'MongoDB', 'Azure'],
    image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    title: 'Healthcare Management System',
    category: 'Full-Stack Development',
    description: 'Developed a comprehensive healthcare management system with patient records, appointment scheduling, and telemedicine features.',
    results: [
      '80% reduction in paperwork',
      '90% faster appointment booking',
      'HIPAA compliant'
    ],
    technologies: ['React', '.NET Core', 'SQL Server', 'Docker'],
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  }
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3
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

export function CaseStudies() {
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
            <span className="gradient-text">Success Stories</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover how we&apos;ve helped businesses transform their operations 
            and achieve remarkable results through innovative software solutions.
          </p>
        </motion.div>

        <motion.div
          className="space-y-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.title}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}
              variants={itemVariants}
            >
              {/* Content */}
              <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                <div className="inline-block px-4 py-2 bg-primary/10 text-primary text-sm font-medium rounded-full mb-6">
                  {study.category}
                </div>
                
                <h3 className="text-2xl md:text-3xl font-bold mb-4">
                  {study.title}
                </h3>
                
                <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                  {study.description}
                </p>

                {/* Results */}
                <div className="mb-6">
                  <h4 className="font-semibold mb-3 text-foreground">Key Results:</h4>
                  <ul className="space-y-2">
                    {study.results.map((result, resultIndex) => (
                      <li key={resultIndex} className="flex items-center text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3" />
                        {result}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div className="mb-8">
                  <h4 className="font-semibold mb-3 text-foreground">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {study.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-secondary text-secondary-foreground text-sm rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <Button variant="outline" className="group">
                  View Case Study
                  <ExternalLink className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>

              {/* Image */}
              <div className={index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}>
                <motion.div
                  className="relative rounded-2xl overflow-hidden shadow-2xl"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <img
                    src={study.image}
                    alt={study.title}
                    className="w-full h-64 md:h-80 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </motion.div>
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
            <Link href="/contact">
              Start Your Success Story
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
