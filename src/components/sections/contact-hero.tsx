'use client'

import { motion } from 'framer-motion'
import { ArrowRight, MessageCircle, Zap } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function ContactHero() {
  return (
    <section className="min-h-[70vh] hero-section-padding flex items-center justify-center relative overflow-hidden gradient-bg">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-2000" />
      </div>

      <div className="container-padding mx-auto relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <motion.div
            className="inline-flex items-center px-4 py-2 rounded-full glass-effect mb-8"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <MessageCircle className="h-5 w-5 text-primary mr-2" />
            <span className="text-sm font-medium">Let's Start a Conversation</span>
          </motion.div>

          <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Get in <span className="gradient-text">Touch</span>
            <br />
            with Our Team
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Ready to transform your digital presence? Let's discuss your project 
            and explore how we can bring your vision to life with cutting-edge technology.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Button size="lg" className="group">
              Start Your Project
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button size="lg" variant="outline" className="group">
              <Zap className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
              Quick Consultation
            </Button>
          </motion.div>

          {/* Contact Stats */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">24h</div>
              <div className="text-muted-foreground">Response Time</div>
            </div>
            
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">100+</div>
              <div className="text-muted-foreground">Projects Delivered</div>
            </div>
            
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">98%</div>
              <div className="text-muted-foreground">Client Satisfaction</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
