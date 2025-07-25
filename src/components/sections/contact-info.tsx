'use client'

import { motion } from 'framer-motion'
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  MessageSquare, 
  Calendar,
  Send,
  CheckCircle
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { useState } from 'react'

const contactMethods = [
  {
    icon: Mail,
    title: 'Email Us',
    description: 'Send us an email and we\'ll respond within 24 hours',
    value: 'hello@nurvatech.com',
    action: 'mailto:hello@nurvatech.com',
    actionText: 'Send Email'
  },
  {
    icon: Phone,
    title: 'Call Us',
    description: 'Speak with our team during business hours',
    value: '+1 (555) 123-4567',
    action: 'tel:+15551234567',
    actionText: 'Call Now'
  },
  {
    icon: MessageSquare,
    title: 'Live Chat',
    description: 'Get instant answers to your questions',
    value: 'Available 9 AM - 6 PM EST',
    action: '#',
    actionText: 'Start Chat'
  }
]

const officeInfo = [
  {
    icon: MapPin,
    title: 'Office Location',
    details: [
      '123 Business District',
      'Tech City, TC 12345',
      'United States'
    ]
  },
  {
    icon: Clock,
    title: 'Business Hours',
    details: [
      'Monday - Friday: 9:00 AM - 6:00 PM',
      'Saturday: 10:00 AM - 4:00 PM',
      'Sunday: Closed'
    ]
  },
  {
    icon: Calendar,
    title: 'Project Timeline',
    details: [
      'Small projects: 2-4 weeks',
      'Medium projects: 1-3 months',
      'Large projects: 3-6 months'
    ]
  }
]

export function ContactInfo() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({ name: '', email: '', company: '', message: '' })
    }, 3000)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <section className="section-padding">
      <div className="container-padding mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Let's <span className="gradient-text">Connect</span>
            </h2>
            
            <p className="text-lg text-muted-foreground mb-12 leading-relaxed">
              Choose the best way to reach us. We're here to help you succeed 
              and bring your digital vision to life.
            </p>

            {/* Contact Methods */}
            <div className="space-y-6 mb-12">
              {contactMethods.map((method, index) => (
                <motion.div
                  key={method.title}
                  className="glass-effect p-6 rounded-2xl group hover:scale-105 transition-all duration-300"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <method.icon className="h-6 w-6 text-primary" />
                      </div>
                    </div>
                    
                    <div className="flex-grow">
                      <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                        {method.title}
                      </h3>
                      <p className="text-muted-foreground text-sm mb-3">
                        {method.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="font-medium">{method.value}</span>
                        <Button size="sm" variant="ghost" asChild>
                          <a href={method.action}>
                            {method.actionText}
                          </a>
                        </Button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Office Information */}
            <div className="grid grid-cols-1 gap-6">
              {officeInfo.map((info, index) => (
                <motion.div
                  key={info.title}
                  className="glass-effect p-6 rounded-2xl"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <info.icon className="h-5 w-5 text-primary" />
                    </div>
                    
                    <div>
                      <h4 className="font-semibold mb-2">{info.title}</h4>
                      <div className="space-y-1">
                        {info.details.map((detail, detailIndex) => (
                          <p key={detailIndex} className="text-muted-foreground text-sm">
                            {detail}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="glass-effect p-8 rounded-3xl">
              <h3 className="text-2xl font-bold mb-6">Send us a Message</h3>
              
              {isSubmitted ? (
                <motion.div
                  className="text-center py-12"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                  <h4 className="text-xl font-semibold mb-2">Message Sent!</h4>
                  <p className="text-muted-foreground">
                    Thank you for reaching out. We'll get back to you within 24 hours.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">
                        Full Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        placeholder="John Doe"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">
                        Email Address *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm font-medium mb-2">
                      Company Name
                    </label>
                    <Input
                      id="company"
                      name="company"
                      type="text"
                      value={formData.company}
                      onChange={handleInputChange}
                      placeholder="Your Company"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      placeholder="Tell us about your project..."
                      rows={6}
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full group" 
                    size="lg"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      'Sending...'
                    ) : (
                      <>
                        Send Message
                        <Send className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </Button>
                </form>
              )}
            </div>

            {/* Quick Links */}
            <motion.div
              className="mt-8 grid grid-cols-2 gap-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Button variant="outline" className="group">
                <Calendar className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
                Schedule Call
              </Button>
              
              <Button variant="outline" className="group">
                <MessageSquare className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
                Live Chat
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
