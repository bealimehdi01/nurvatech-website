'use client'

import { motion } from 'framer-motion'
import { Globe, Smartphone, Server, Cloud, Code, Database } from 'lucide-react'

const services = [
  {
    id: 'web-development',
    icon: Globe,
    title: 'Web Development',
    description: 'Modern, responsive web applications built with the latest technologies and best practices.',
    technologies: ['React', 'Next.js', 'Vue.js', 'Angular', 'TypeScript', 'Tailwind CSS'],
    features: [
      'Responsive Design',
      'SEO Optimization',
      'Performance Optimization',
      'Progressive Web Apps',
      'E-commerce Solutions',
      'Content Management Systems'
    ],
    gradient: 'from-blue-500 to-cyan-500'
  },
  {
    id: 'mobile-development',
    icon: Smartphone,
    title: 'Mobile Development',
    description: 'Cross-platform mobile applications that provide native performance and user experience.',
    technologies: ['React Native', 'Flutter', 'iOS', 'Android', 'Expo', 'Swift'],
    features: [
      'Cross-platform Development',
      'Native Performance',
      'App Store Deployment',
      'Push Notifications',
      'Offline Functionality',
      'Third-party Integrations'
    ],
    gradient: 'from-purple-500 to-pink-500'
  },
  {
    id: 'backend-development',
    icon: Server,
    title: 'Backend Development',
    description: 'Scalable server-side solutions and APIs that power your applications reliably.',
    technologies: ['Node.js', '.NET Core', 'Python', 'Django', 'Express.js', 'FastAPI'],
    features: [
      'RESTful APIs',
      'GraphQL',
      'Microservices Architecture',
      'Database Design',
      'Authentication & Security',
      'Third-party Integrations'
    ],
    gradient: 'from-green-500 to-teal-500'
  },
  {
    id: 'devops-cloud',
    icon: Cloud,
    title: 'DevOps & Cloud',
    description: 'Complete DevOps pipelines and cloud infrastructure for scalable, maintainable systems.',
    technologies: ['AWS', 'Azure', 'Docker', 'Kubernetes', 'CI/CD', 'Terraform'],
    features: [
      'Cloud Infrastructure',
      'Automated Deployments',
      'Container Orchestration',
      'Monitoring & Logging',
      'Backup & Recovery',
      'Security & Compliance'
    ],
    gradient: 'from-orange-500 to-red-500'
  }
]

export function SoftwareDevelopment() {
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
            Software <span className="gradient-text">Development</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            End-to-end development services that transform your ideas into powerful, 
            scalable software solutions.
          </p>
        </motion.div>

        <div className="space-y-20">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              id={service.id}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              {/* Content */}
              <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                <div className={`inline-flex items-center justify-center w-16 h-16 mb-6 rounded-xl bg-gradient-to-r ${service.gradient} p-0.5`}>
                  <div className="flex items-center justify-center w-full h-full bg-background rounded-lg">
                    <service.icon className="h-8 w-8 text-foreground" />
                  </div>
                </div>

                <h3 className="text-2xl md:text-3xl font-bold mb-4">
                  {service.title}
                </h3>
                
                <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                  {service.description}
                </p>

                {/* Technologies */}
                <div className="mb-8">
                  <h4 className="font-semibold mb-4 text-foreground">Technologies We Use:</h4>
                  <div className="flex flex-wrap gap-2">
                    {service.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-secondary text-secondary-foreground text-sm rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Features */}
                <div>
                  <h4 className="font-semibold mb-4 text-foreground">What We Deliver:</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Visual */}
              <div className={index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}>
                <motion.div
                  className="relative p-8 rounded-2xl glass-effect"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${service.gradient} opacity-5`} />
                  <div className="relative z-10">
                    <service.icon className="h-24 w-24 mx-auto mb-6 text-primary" />
                    <div className="space-y-4">
                      {service.features.slice(0, 3).map((feature, idx) => (
                        <div key={idx} className="flex items-center justify-between p-3 bg-background/50 rounded-lg">
                          <span className="text-sm font-medium">{feature}</span>
                          <div className="w-2 h-2 bg-primary rounded-full" />
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
