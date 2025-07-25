'use client'

import { motion } from 'framer-motion'
import { 
  Target, 
  Users, 
  Clock, 
  Shield, 
  Lightbulb, 
  TrendingUp,
  CheckCircle
} from 'lucide-react'

const reasons = [
  {
    icon: Target,
    title: 'Results-Driven Approach',
    description: 'We focus on delivering measurable business outcomes and ROI through our solutions.',
    stats: '98% Client Satisfaction'
  },
  {
    icon: Users,
    title: 'Expert Team',
    description: 'Our experienced developers and testers bring years of industry expertise to every project.',
    stats: '50+ Projects Delivered'
  },
  {
    icon: Clock,
    title: 'On-Time Delivery',
    description: 'We pride ourselves on meeting deadlines without compromising on quality or functionality.',
    stats: '100% On-Time Record'
  },
  {
    icon: Shield,
    title: 'Quality Assurance',
    description: 'Comprehensive testing and quality control processes ensure bug-free, reliable software.',
    stats: '99.9% Uptime Guarantee'
  }
]

const highlights = [
  'End-to-end project management',
  'Agile development methodology',
  'Continuous integration & deployment',
  'Scalable and maintainable code',
  'Regular progress updates',
  '24/7 technical support'
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
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: [0.6, -0.05, 0.01, 0.99]
    }
  }
}

export function WhyChooseUs() {
  return (
    <section className="section-padding gradient-bg">
      <div className="container-padding mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Why Choose <span className="gradient-text">Nurvatech</span>?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              We combine technical excellence with business acumen to deliver solutions 
              that not only meet your requirements but exceed your expectations.
            </p>

            {/* Highlights */}
            <motion.div
              className="space-y-4"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {highlights.map((highlight, index) => (
                <motion.div
                  key={index}
                  className="flex items-center space-x-3"
                  variants={itemVariants}
                >
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-foreground">{highlight}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Content - Feature Cards */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {reasons.map((reason, index) => (
              <motion.div
                key={reason.title}
                className="glass-effect p-6 rounded-2xl group hover:scale-105 transition-all duration-300"
                variants={itemVariants}
                whileHover={{ y: -5 }}
              >
                <div className="inline-flex items-center justify-center w-12 h-12 mb-4 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <reason.icon className="h-6 w-6 text-primary" />
                </div>
                
                <h3 className="text-lg font-semibold mb-3 group-hover:text-primary transition-colors">
                  {reason.title}
                </h3>
                
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {reason.description}
                </p>
                
                <div className="text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full inline-block">
                  {reason.stats}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: '50+', label: 'Projects Completed' },
              { value: '25+', label: 'Happy Clients' },
              { value: '5+', label: 'Years Experience' },
              { value: '100%', label: 'Success Rate' }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center"
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                  {stat.value}
                </div>
                <div className="text-muted-foreground text-sm">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
