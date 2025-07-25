'use client'

import { motion } from 'framer-motion'
import { Shield, Clock, Users, Lightbulb, Award, Heart } from 'lucide-react'

const values = [
  {
    icon: Shield,
    title: 'Quality First',
    description: 'We never compromise on quality. Every line of code is written with precision and tested thoroughly.',
    color: 'text-blue-500',
    bgColor: 'bg-blue-500/10'
  },
  {
    icon: Clock,
    title: 'Reliability',
    description: 'Dependable delivery and consistent performance are the cornerstones of our service.',
    color: 'text-green-500',
    bgColor: 'bg-green-500/10'
  },
  {
    icon: Users,
    title: 'Collaboration',
    description: 'We work closely with our clients as partners, ensuring transparent communication throughout.',
    color: 'text-purple-500',
    bgColor: 'bg-purple-500/10'
  },
  {
    icon: Lightbulb,
    title: 'Innovation',
    description: 'Staying ahead of technology trends to provide cutting-edge solutions for modern challenges.',
    color: 'text-yellow-500',
    bgColor: 'bg-yellow-500/10'
  },
  {
    icon: Award,
    title: 'Excellence',
    description: 'We strive for excellence in every project, exceeding expectations and delivering exceptional results.',
    color: 'text-red-500',
    bgColor: 'bg-red-500/10'
  },
  {
    icon: Heart,
    title: 'Integrity',
    description: 'Honest communication, ethical practices, and genuine care for our clients\' success.',
    color: 'text-pink-500',
    bgColor: 'bg-pink-500/10'
  }
]

export function CompanyValues() {
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
            Our Core <span className="gradient-text">Values</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            These fundamental principles guide every decision we make and every solution we create.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              className="group relative"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="h-full p-8 rounded-2xl border border-border bg-card hover:shadow-lg transition-all duration-300 group-hover:scale-105">
                {/* Icon */}
                <div className={`inline-flex items-center justify-center w-16 h-16 mb-6 rounded-xl ${value.bgColor} group-hover:scale-110 transition-transform`}>
                  <value.icon className={`h-8 w-8 ${value.color}`} />
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold mb-4 group-hover:text-primary transition-colors">
                  {value.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {value.description}
                </p>

                {/* Hover Effect Border */}
                <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-primary/20 transition-colors pointer-events-none" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Section */}
        <motion.div
          className="mt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="text-center">
            <div className="glass-effect p-12 rounded-3xl">
              <h3 className="text-2xl md:text-3xl font-bold mb-6">
                Values in Action
              </h3>
              <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
                Our values aren&apos;t just words on a page—they&apos;re the foundation of how we work, 
                how we treat our clients, and how we approach every challenge. When you work with 
                Nurvatech, you&apos;re not just getting a service provider; you&apos;re getting a partner 
                who truly cares about your success.
              </p>
              
              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {[
                  { value: '100%', label: 'Client Satisfaction' },
                  { value: '50+', label: 'Projects Delivered' },
                  { value: '5+', label: 'Years Experience' },
                  { value: '24/7', label: 'Support Available' }
                ].map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    className="text-center"
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  >
                    <div className="text-2xl md:text-3xl font-bold gradient-text mb-2">
                      {stat.value}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
