'use client'

import { motion } from 'framer-motion'
import { Code, Smartphone, Server, Cloud } from 'lucide-react'

const features = [
  {
    icon: Code,
    title: 'Custom Solutions',
    description: 'Tailored to your needs'
  },
  {
    icon: Smartphone,
    title: 'Mobile First',
    description: 'Responsive everywhere'
  },
  {
    icon: Server,
    title: 'Scalable Architecture',
    description: 'Grows with your business'
  },
  {
    icon: Cloud,
    title: 'Cloud Ready',
    description: 'Modern deployment'
  }
]

export function ServicesHero() {
  return (
    <section className="hero-section-padding gradient-bg">
      <div className="container-padding mx-auto">
        <motion.div
          className="text-center max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Our <span className="gradient-text">Services</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
            Comprehensive software development and testing solutions designed to 
            accelerate your digital transformation and drive business success.
          </p>

          {/* Service Categories Quick Nav */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {[
              'Web Development',
              'Mobile Apps',
              'Backend Systems',
              'DevOps & Cloud',
              'Quality Assurance',
              'Consulting'
            ].map((service, index) => (
              <motion.a
                key={service}
                href={`#${service.toLowerCase().replace(/\s+/g, '-')}`}
                className="px-6 py-3 glass-effect rounded-full hover:bg-primary/10 transition-colors text-sm font-medium"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                {service}
              </motion.a>
            ))}
          </div>

          {/* Feature Cards */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                className="glass-effect p-6 rounded-xl text-center group hover:scale-105 transition-transform duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              >
                <div className="inline-flex items-center justify-center w-12 h-12 mb-4 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
