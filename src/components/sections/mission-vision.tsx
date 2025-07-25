'use client'

import { motion } from 'framer-motion'
import { Eye, Target, Heart } from 'lucide-react'

const missions = [
  {
    icon: Target,
    title: 'Our Mission',
    description: 'To empower businesses through innovative software solutions that drive growth, efficiency, and competitive advantage in the digital marketplace.',
    gradient: 'from-blue-500 to-cyan-500'
  },
  {
    icon: Eye,
    title: 'Our Vision',
    description: 'To become the leading software development partner, known for delivering exceptional quality, reliability, and innovation to clients worldwide.',
    gradient: 'from-purple-500 to-pink-500'
  },
  {
    icon: Heart,
    title: 'Our Values',
    description: 'Quality, integrity, collaboration, and continuous learning. We believe in building long-term partnerships based on trust and mutual success.',
    gradient: 'from-green-500 to-teal-500'
  }
]

export function MissionVision() {
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
            Our <span className="gradient-text">Purpose</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Driven by purpose, guided by values, and committed to excellence in everything we do.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {missions.map((item, index) => (
            <motion.div
              key={item.title}
              className="relative group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="h-full p-8 rounded-2xl border border-border bg-card hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                {/* Icon with gradient background */}
                <div className={`inline-flex items-center justify-center w-16 h-16 mb-6 rounded-xl bg-gradient-to-r ${item.gradient} p-0.5`}>
                  <div className="flex items-center justify-center w-full h-full bg-background rounded-lg">
                    <item.icon className="h-8 w-8 text-foreground" />
                  </div>
                </div>

                <h3 className="text-xl font-semibold mb-4 group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {item.description}
                </p>

                {/* Hover Effect */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${item.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none`} />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Section */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="glass-effect p-12 rounded-3xl max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold mb-6">
              Why We Do What We Do
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Technology has the power to transform businesses, communities, and lives. 
              We&apos;re here to harness that power responsibly, creating solutions that not only 
              meet today&apos;s needs but anticipate tomorrow&apos;s challenges. Every line of code 
              we write, every system we design, and every test we perform is driven by our 
              commitment to excellence and our passion for innovation.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
