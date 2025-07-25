'use client'

import { motion } from 'framer-motion'
import { Building2, Users, Target } from 'lucide-react'

export function AboutHero() {
  return (
    <section className="hero-section-padding gradient-bg">
      <div className="container-padding mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              About <span className="gradient-text">Nurvatech</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              We are a passionate team of software engineers, designers, and quality assurance 
              experts dedicated to transforming your digital vision into reality.
            </p>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Building2 className="h-6 w-6 text-primary" />
                <span className="text-lg">Founded in 2020</span>
              </div>
              <div className="flex items-center space-x-3">
                <Users className="h-6 w-6 text-primary" />
                <span className="text-lg">50+ Projects Delivered</span>
              </div>
              <div className="flex items-center space-x-3">
                <Target className="h-6 w-6 text-primary" />
                <span className="text-lg">100% Client Satisfaction</span>
              </div>
            </div>
          </motion.div>

          {/* Right Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="glass-effect p-8 rounded-2xl">
              <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
              <p className="text-muted-foreground leading-relaxed">
                Nurvatech was born from a simple idea: exceptional software should be accessible 
                to businesses of all sizes. We combine cutting-edge technology with proven 
                methodologies to deliver solutions that drive real business value.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
