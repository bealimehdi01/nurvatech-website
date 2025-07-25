'use client'

import { motion } from 'framer-motion'
import { TestTube, Bug, Shield, Target, Zap, CheckCircle } from 'lucide-react'

const testingServices = [
  {
    icon: TestTube,
    title: 'Manual Testing',
    description: 'Comprehensive manual testing to ensure your application works flawlessly across all scenarios.',
    features: [
      'Functional Testing',
      'Usability Testing',
      'Cross-browser Testing',
      'Mobile Testing',
      'Accessibility Testing',
      'User Acceptance Testing'
    ]
  },
  {
    icon: Zap,
    title: 'Automation Testing',
    description: 'Advanced test automation frameworks to accelerate your testing cycles and improve reliability.',
    features: [
      'Selenium WebDriver',
      'Cypress Testing',
      'API Testing with Postman',
      'Performance Testing',
      'Load Testing',
      'CI/CD Integration'
    ]
  },
  {
    icon: Shield,
    title: 'Security Testing',
    description: 'Comprehensive security assessments to protect your applications from vulnerabilities.',
    features: [
      'Penetration Testing',
      'Vulnerability Assessment',
      'Security Code Review',
      'OWASP Compliance',
      'Data Protection Testing',
      'Authentication Testing'
    ]
  }
]

const testingProcess = [
  {
    step: '01',
    title: 'Test Planning',
    description: 'Define test strategy, scope, and objectives based on your requirements.'
  },
  {
    step: '02',
    title: 'Test Design',
    description: 'Create comprehensive test cases and scenarios covering all functionality.'
  },
  {
    step: '03',
    title: 'Test Execution',
    description: 'Execute tests systematically using both manual and automated approaches.'
  },
  {
    step: '04',
    title: 'Defect Tracking',
    description: 'Identify, document, and track issues through to resolution.'
  },
  {
    step: '05',
    title: 'Test Reporting',
    description: 'Provide detailed reports with metrics and recommendations.'
  }
]

export function QaTestingSection() {
  return (
    <section className="section-padding gradient-bg">
      <div className="container-padding mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Quality Assurance & <span className="gradient-text">Testing</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive testing services to ensure your software is reliable, 
            secure, and performs exceptionally under all conditions.
          </p>
        </motion.div>

        {/* Testing Services */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {testingServices.map((service, index) => (
            <motion.div
              key={service.title}
              className="glass-effect p-8 rounded-2xl group hover:scale-105 transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 mb-6 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                <service.icon className="h-8 w-8 text-primary" />
              </div>

              <h3 className="text-xl font-semibold mb-4 group-hover:text-primary transition-colors">
                {service.title}
              </h3>

              <p className="text-muted-foreground mb-6 leading-relaxed">
                {service.description}
              </p>

              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                    <CheckCircle className="h-4 w-4 text-primary mr-3" />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Testing Process */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-12">
            Our Testing Process
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {testingProcess.map((process, index) => (
              <motion.div
                key={process.step}
                className="text-center relative"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {/* Step Number */}
                <div className="relative mb-6">
                  <div className="w-16 h-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center border-2 border-primary/20">
                    <span className="text-2xl font-bold gradient-text">{process.step}</span>
                  </div>
                  
                  {/* Connector Line */}
                  {index < testingProcess.length - 1 && (
                    <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-primary/40 to-transparent" />
                  )}
                </div>

                <h4 className="font-semibold mb-3">{process.title}</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {process.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="glass-effect p-12 rounded-3xl max-w-2xl mx-auto">
            <Bug className="h-12 w-12 text-primary mx-auto mb-6" />
            <h3 className="text-2xl font-bold mb-4">
              Zero Bugs, Maximum Performance
            </h3>
            <p className="text-muted-foreground mb-6">
              Our rigorous testing methodology ensures your software launches bug-free 
              and continues to perform reliably as your business grows.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold gradient-text">99.9%</div>
                <div className="text-sm text-muted-foreground">Bug Detection Rate</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold gradient-text">50%</div>
                <div className="text-sm text-muted-foreground">Faster Testing</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold gradient-text">100%</div>
                <div className="text-sm text-muted-foreground">Code Coverage</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
