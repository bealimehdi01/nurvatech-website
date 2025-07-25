'use client'

import { motion } from 'framer-motion'
import { Github, Linkedin, Mail } from 'lucide-react'

const team = [
  {
    name: 'Alex Johnson',
    role: 'CEO & Lead Developer',
    bio: 'Full-stack developer with 10+ years of experience in building scalable web applications.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    social: {
      github: 'https://github.com/alexjohnson',
      linkedin: 'https://linkedin.com/in/alexjohnson',
      email: 'alex@nurvatech.com'
    }
  },
  {
    name: 'Sarah Chen',
    role: 'CTO & DevOps Engineer',
    bio: 'Cloud architecture specialist with expertise in AWS, Docker, and Kubernetes.',
    image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    social: {
      github: 'https://github.com/sarahchen',
      linkedin: 'https://linkedin.com/in/sarahchen',
      email: 'sarah@nurvatech.com'
    }
  },
  {
    name: 'Michael Rodriguez',
    role: 'QA Lead & Test Automation',
    bio: 'Quality assurance expert specializing in automated testing and CI/CD pipelines.',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    social: {
      github: 'https://github.com/mrodriguez',
      linkedin: 'https://linkedin.com/in/mrodriguez',
      email: 'michael@nurvatech.com'
    }
  },
  {
    name: 'Emily Davis',
    role: 'UI/UX Designer',
    bio: 'Creative designer focused on user-centered design and modern web interfaces.',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    social: {
      github: 'https://github.com/emilydavis',
      linkedin: 'https://linkedin.com/in/emilydavis',
      email: 'emily@nurvatech.com'
    }
  }
]

export function TeamSection() {
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
            Meet Our <span className="gradient-text">Team</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            The passionate professionals behind Nurvatech&apos;s success. Each team member 
            brings unique expertise and a shared commitment to excellence.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              className="group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="glass-effect p-6 rounded-2xl text-center hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                {/* Profile Image */}
                <div className="relative mb-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-24 h-24 rounded-full mx-auto object-cover border-4 border-primary/20 group-hover:border-primary/40 transition-colors"
                  />
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>

                {/* Info */}
                <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                  {member.name}
                </h3>
                <p className="text-primary font-medium mb-4">
                  {member.role}
                </p>
                <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                  {member.bio}
                </p>

                {/* Social Links */}
                <div className="flex justify-center space-x-4">
                  <a
                    href={member.social.github}
                    className="text-muted-foreground hover:text-primary transition-colors"
                    aria-label={`${member.name}'s GitHub`}
                  >
                    <Github className="h-5 w-5" />
                  </a>
                  <a
                    href={member.social.linkedin}
                    className="text-muted-foreground hover:text-primary transition-colors"
                    aria-label={`${member.name}'s LinkedIn`}
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a
                    href={`mailto:${member.social.email}`}
                    className="text-muted-foreground hover:text-primary transition-colors"
                    aria-label={`Email ${member.name}`}
                  >
                    <Mail className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Join Us Section */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="glass-effect p-12 rounded-3xl max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">
              Want to Join Our Team?
            </h3>
            <p className="text-muted-foreground mb-6">
              We&apos;re always looking for talented individuals who share our passion 
              for creating exceptional software solutions.
            </p>
            <a
              href="mailto:careers@nurvatech.com"
              className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
            >
              <Mail className="mr-2 h-4 w-4" />
              careers@nurvatech.com
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
