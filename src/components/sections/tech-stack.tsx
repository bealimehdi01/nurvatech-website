'use client'

import { motion } from 'framer-motion'

const techStacks = {
  frontend: [
    { name: 'React', logo: '⚛️' },
    { name: 'Next.js', logo: '▲' },
    { name: 'Angular', logo: '🅰️' },
    { name: 'Vue.js', logo: '💚' },
    { name: 'TypeScript', logo: '🔷' },
    { name: 'Tailwind CSS', logo: '🎨' }
  ],
  backend: [
    { name: 'Node.js', logo: '🟢' },
    { name: '.NET Core', logo: '🟣' },
    { name: 'Python', logo: '🐍' },
    { name: 'Django', logo: '🎯' },
    { name: 'Express.js', logo: '⚡' },
    { name: 'GraphQL', logo: '📊' }
  ],
  mobile: [
    { name: 'React Native', logo: '📱' },
    { name: 'Flutter', logo: '🦋' },
    { name: 'iOS', logo: '🍎' },
    { name: 'Android', logo: '🤖' },
    { name: 'Expo', logo: '🎪' },
    { name: 'Swift', logo: '🏃' }
  ],
  database: [
    { name: 'PostgreSQL', logo: '🐘' },
    { name: 'MongoDB', logo: '🍃' },
    { name: 'MySQL', logo: '🐬' },
    { name: 'Redis', logo: '🔴' },
    { name: 'Firebase', logo: '🔥' },
    { name: 'Supabase', logo: '⚡' }
  ],
  cloud: [
    { name: 'AWS', logo: '☁️' },
    { name: 'Azure', logo: '🔵' },
    { name: 'Vercel', logo: '▲' },
    { name: 'Netlify', logo: '🟢' },
    { name: 'Docker', logo: '🐳' },
    { name: 'Kubernetes', logo: '⚙️' }
  ],
  testing: [
    { name: 'Selenium', logo: '🧪' },
    { name: 'Cypress', logo: '🌲' },
    { name: 'Jest', logo: '🃏' },
    { name: 'Postman', logo: '📮' },
    { name: 'Playwright', logo: '🎭' },
    { name: 'TestRail', logo: '🚂' }
  ]
}

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
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.6, -0.05, 0.01, 0.99]
    }
  }
}

const categoryVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.6, -0.05, 0.01, 0.99]
    }
  }
}

export function TechStack() {
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
            Our <span className="gradient-text">Technology Stack</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We leverage cutting-edge technologies and industry best practices 
            to build robust, scalable, and future-proof solutions.
          </p>
        </motion.div>

        <div className="space-y-16">
          {Object.entries(techStacks).map(([category, technologies], categoryIndex) => (
            <motion.div
              key={category}
              className="text-center"
              variants={categoryVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: categoryIndex * 0.1 }}
            >
              <h3 className="text-2xl font-semibold mb-8 capitalize">
                {category === 'frontend' && 'Frontend Development'}
                {category === 'backend' && 'Backend Development'}
                {category === 'mobile' && 'Mobile Development'}
                {category === 'database' && 'Databases'}
                {category === 'cloud' && 'Cloud & DevOps'}
                {category === 'testing' && 'Testing & QA'}
              </h3>

              <motion.div
                className="grid grid-cols-3 md:grid-cols-6 gap-6"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {technologies.map((tech, techIndex) => (
                  <motion.div
                    key={tech.name}
                    className="group flex flex-col items-center p-4 rounded-xl border border-border bg-card hover:shadow-lg hover:scale-105 transition-all duration-300 hover:border-primary/20"
                    variants={itemVariants}
                    whileHover={{ y: -5 }}
                  >
                    <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">
                      {tech.logo}
                    </div>
                    <span className="text-sm font-medium text-center group-hover:text-primary transition-colors">
                      {tech.name}
                    </span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Message */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="glass-effect p-8 rounded-2xl max-w-2xl mx-auto">
            <h3 className="text-xl font-semibold mb-4">
              Don&apos;t see your preferred technology?
            </h3>
            <p className="text-muted-foreground">
              We&apos;re always learning and adapting to new technologies. 
              Contact us to discuss your specific requirements.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
