'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Home, Search, ArrowLeft } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center gradient-bg">
      <div className="container-padding mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto"
        >
          {/* 404 Animation */}
          <motion.div
            className="text-8xl md:text-9xl font-bold gradient-text mb-8"
            initial={{ scale: 0.5 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
          >
            404
          </motion.div>

          {/* Error Message */}
          <motion.h1
            className="text-3xl md:text-4xl font-bold mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Oops! Page Not Found
          </motion.h1>

          <motion.p
            className="text-xl text-muted-foreground mb-8 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            The page you&apos;re looking for seems to have wandered off into the digital void. 
            Don&apos;t worry, even the best developers sometimes create links to nowhere!
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <Button size="lg" asChild className="group">
              <Link href="/">
                <Home className="mr-2 h-5 w-5" />
                Go Home
                <ArrowLeft className="ml-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/services">
                <Search className="mr-2 h-5 w-5" />
                Browse Services
              </Link>
            </Button>
          </motion.div>

          {/* Helpful Links */}
          <motion.div
            className="glass-effect p-8 rounded-2xl"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <h2 className="text-xl font-semibold mb-4">Maybe you were looking for:</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <Link 
                href="/about" 
                className="text-muted-foreground hover:text-primary transition-colors p-3 rounded-lg hover:bg-primary/5"
              >
                About Us
              </Link>
              <Link 
                href="/services" 
                className="text-muted-foreground hover:text-primary transition-colors p-3 rounded-lg hover:bg-primary/5"
              >
                Our Services
              </Link>
              <Link 
                href="/contact" 
                className="text-muted-foreground hover:text-primary transition-colors p-3 rounded-lg hover:bg-primary/5"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>

          {/* Fun Animation */}
          <motion.div
            className="mt-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.6 }}
          >
            <div className="text-6xl mb-4">
              <motion.span
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                className="inline-block"
              >
                🤖
              </motion.span>
            </div>
            <p className="text-sm text-muted-foreground">
              Our digital assistant is as confused as you are!
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}
