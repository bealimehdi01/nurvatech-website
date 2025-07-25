'use client'

import { motion } from 'framer-motion'
import { Check, Star, Zap, Crown, Rocket, Shield } from 'lucide-react'
import { Button } from '@/components/ui/button'

const pricingPlans = [
  {
    name: 'Starter',
    icon: Zap,
    description: 'Perfect for small businesses and startups',
    price: 'Custom',
    duration: 'project',
    features: [
      'Basic web development',
      'Responsive design',
      'SEO optimization',
      'Contact form integration',
      '3 months support',
      'Basic analytics setup'
    ],
    popular: false,
    color: 'from-blue-500 to-cyan-500'
  },
  {
    name: 'Professional',
    icon: Crown,
    description: 'Ideal for growing businesses',
    price: 'Custom',
    duration: 'project',
    features: [
      'Advanced web applications',
      'Custom functionality',
      'API integrations',
      'Database design',
      'Performance optimization',
      '6 months support',
      'Advanced analytics',
      'Security implementation',
      'Mobile app development'
    ],
    popular: true,
    color: 'from-purple-500 to-indigo-500'
  },
  {
    name: 'Enterprise',
    icon: Rocket,
    description: 'For large-scale applications',
    price: 'Custom',
    duration: 'project',
    features: [
      'Complex system architecture',
      'Microservices development',
      'Cloud infrastructure',
      'DevOps implementation',
      'Load balancing & scaling',
      '12 months support',
      'Dedicated team',
      'Priority support',
      'Custom integrations',
      'Security compliance',
      'Performance monitoring'
    ],
    popular: false,
    color: 'from-orange-500 to-red-500'
  }
]

const additionalServices = [
  {
    icon: Shield,
    title: 'Security Audit',
    description: 'Comprehensive security assessment and vulnerability testing',
    price: 'Starting from $1,500'
  },
  {
    icon: Zap,
    title: 'Performance Optimization',
    description: 'Speed optimization and performance enhancement services',
    price: 'Starting from $800'
  },
  {
    icon: Star,
    title: 'Maintenance Package',
    description: 'Ongoing maintenance, updates, and technical support',
    price: 'Starting from $500/month'
  }
]

export function PricingSection() {
  return (
    <section className="section-padding">
      <div className="container-padding mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Transparent <span className="gradient-text">Pricing</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Every project is unique. We provide custom quotes based on your specific 
            requirements, ensuring you get the best value for your investment.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.name}
              className={`relative glass-effect p-8 rounded-3xl hover:scale-105 transition-all duration-300 ${
                plan.popular ? 'ring-2 ring-primary/50' : ''
              }`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-semibold">
                    Most Popular
                  </div>
                </div>
              )}

              <div className="text-center mb-8">
                <div className={`inline-flex items-center justify-center w-16 h-16 mb-4 rounded-xl bg-gradient-to-r ${plan.color} p-0.5`}>
                  <div className="flex items-center justify-center w-full h-full bg-background rounded-xl">
                    <plan.icon className="h-8 w-8 text-primary" />
                  </div>
                </div>

                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-muted-foreground mb-4">{plan.description}</p>

                <div className="mb-6">
                  <div className="text-4xl font-bold gradient-text">{plan.price}</div>
                  <div className="text-muted-foreground">per {plan.duration}</div>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <Check className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button 
                className={`w-full ${plan.popular ? 'bg-primary hover:bg-primary/90' : ''}`}
                variant={plan.popular ? "default" : "outline"}
              >
                Get Quote
              </Button>
            </motion.div>
          ))}
        </div>

        {/* Additional Services */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-12">
            Additional Services
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {additionalServices.map((service, index) => (
              <motion.div
                key={service.title}
                className="glass-effect p-6 rounded-2xl text-center hover:scale-105 transition-all duration-300"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="inline-flex items-center justify-center w-12 h-12 mb-4 rounded-xl bg-primary/10">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>
                
                <h4 className="font-semibold mb-2">{service.title}</h4>
                <p className="text-muted-foreground text-sm mb-3">{service.description}</p>
                <div className="text-primary font-semibold">{service.price}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Value Proposition */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="glass-effect p-12 rounded-3xl max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold mb-6">
              Why Choose Our Pricing Model?
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="text-left">
                <h4 className="font-semibold mb-3 flex items-center">
                  <Check className="h-5 w-5 text-primary mr-2" />
                  No Hidden Costs
                </h4>
                <p className="text-muted-foreground text-sm">
                  Complete transparency in all our pricing. What you see is what you pay.
                </p>
              </div>

              <div className="text-left">
                <h4 className="font-semibold mb-3 flex items-center">
                  <Check className="h-5 w-5 text-primary mr-2" />
                  Flexible Payment Terms
                </h4>
                <p className="text-muted-foreground text-sm">
                  Work with payment schedules that align with your cash flow and milestones.
                </p>
              </div>

              <div className="text-left">
                <h4 className="font-semibold mb-3 flex items-center">
                  <Check className="h-5 w-5 text-primary mr-2" />
                  Value-Based Pricing
                </h4>
                <p className="text-muted-foreground text-sm">
                  Our pricing reflects the value we deliver, not just the hours we work.
                </p>
              </div>

              <div className="text-left">
                <h4 className="font-semibold mb-3 flex items-center">
                  <Check className="h-5 w-5 text-primary mr-2" />
                  Post-Launch Support
                </h4>
                <p className="text-muted-foreground text-sm">
                  Ongoing support and maintenance included in every package.
                </p>
              </div>
            </div>

            <Button size="lg" className="bg-primary hover:bg-primary/90">
              Schedule a Consultation
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
