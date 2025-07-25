'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, Phone, MapPin } from 'lucide-react'

const footerLinks = {
  company: [
    { name: 'About Us', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Contact', href: '/contact' },
  ],
  services: [
    { name: 'Web Development', href: '/services#web-development' },
    { name: 'Mobile Apps', href: '/services#mobile-development' },
    { name: 'Backend Development', href: '/services#backend-development' },
    { name: 'Software Testing', href: '/services#testing' },
  ],
  contact: [
    { icon: Mail, text: 'info@nurvatech.com', href: 'mailto:info@nurvatech.com' },
    { icon: Phone, text: '+1 (555) 123-4567', href: 'tel:+15551234567' },
    { icon: MapPin, text: 'Remote Services Worldwide', href: '#' },
  ],
}

const socialLinks = [
  { icon: Github, href: 'https://github.com/nurvatech', label: 'GitHub' },
  { icon: Linkedin, href: 'https://linkedin.com/company/nurvatech', label: 'LinkedIn' },
]

export function Footer() {
  return (
    <footer className="bg-background border-t border-border">
      <div className="container-padding mx-auto">
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <motion.div
              className="lg:col-span-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Link href="/" className="flex items-center space-x-2 mb-4">
                <div className="text-2xl font-bold gradient-text">
                  Nurvatech
                </div>
              </Link>
              <p className="text-muted-foreground mb-6 max-w-md">
                Delivering end-to-end software development and comprehensive testing solutions 
                to help businesses thrive in the digital world.
              </p>
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <Link
                    key={social.label}
                    href={social.href}
                    className="text-muted-foreground hover:text-primary transition-colors"
                    aria-label={social.label}
                  >
                    <social.icon className="h-5 w-5" />
                  </Link>
                ))}
              </div>
            </motion.div>

            {/* Company Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h3 className="font-semibold text-foreground mb-4">Company</h3>
              <ul className="space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Services Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="font-semibold text-foreground mb-4">Services</h3>
              <ul className="space-y-3">
                {footerLinks.services.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>

        {/* Contact Info */}
        <motion.div
          className="border-t border-border py-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {footerLinks.contact.map((contact, index) => (
              <Link
                key={index}
                href={contact.href}
                className="flex items-center space-x-3 text-muted-foreground hover:text-primary transition-colors"
              >
                <contact.icon className="h-5 w-5" />
                <span>{contact.text}</span>
              </Link>
            ))}
          </div>
        </motion.div>

        {/* Copyright */}
        <motion.div
          className="border-t border-border py-6 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p className="text-muted-foreground">
            © {new Date().getFullYear()} Nurvatech IT Services. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
