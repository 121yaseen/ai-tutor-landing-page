"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Sparkles, Mail, MapPin, Phone, Twitter, Linkedin, Github, Youtube } from "lucide-react"
import { GlassCard } from "@/components/ui/glass-card"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const footerSections = [
    {
      title: "Platform",
      links: [
        { label: "Features", href: "#features" },
        { label: "Pricing", href: "#pricing" },
        { label: "Success Stories", href: "#testimonials" },
        { label: "API Documentation", href: "/api-docs" },
        { label: "Mobile App", href: "/mobile" }
      ]
    },
    {
      title: "Resources",
      links: [
        { label: "IELTS Guide", href: "/guide" },
        { label: "Practice Tests", href: "/practice" },
        { label: "Study Materials", href: "/materials" },
        { label: "Blog", href: "/blog" },
        { label: "Help Center", href: "/support" }
      ]
    },
    {
      title: "Company",
      links: [
        { label: "About Us", href: "#about" },
        { label: "Careers", href: "/careers" },
        { label: "Press Kit", href: "/press" },
        { label: "Partner Program", href: "/partners" },
        { label: "Contact", href: "/contact" }
      ]
    },
    {
      title: "Legal",
      links: [
        { label: "Privacy Policy", href: "/privacy-policy" },
        { label: "Terms of Service", href: "/terms-of-service" },
        { label: "Cookie Policy", href: "/cookies" },
        { label: "GDPR", href: "/gdpr" },
        { label: "Accessibility", href: "/accessibility" }
      ]
    }
  ]

  const socialLinks = [
    { icon: Twitter, href: "https://twitter.com/pistah", label: "Twitter" },
    { icon: Linkedin, href: "https://linkedin.com/company/pistah", label: "LinkedIn" },
    { icon: Github, href: "https://github.com/pistah", label: "GitHub" },
    { icon: Youtube, href: "https://youtube.com/pistah", label: "YouTube" }
  ]

  const contactInfo = [
    { icon: Mail, text: "hello@pistah.live", href: "mailto:hello@pistah.live" },
    { icon: Phone, text: "+1 (555) 123-4567", href: "tel:+15551234567" },
    { icon: MapPin, text: "San Francisco, CA", href: "#" }
  ]

  return (
    <footer className="relative py-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-gray-900/90 to-gray-900/50">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_100%,rgba(168,85,247,0.1),transparent_70%)]" />
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:50px_50px] opacity-40" />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <GlassCard variant="subtle" className="p-8 md:p-12 mb-12">
            <div className="grid lg:grid-cols-5 gap-12">
              {/* Brand Section */}
              <div className="lg:col-span-2 space-y-6">
                {/* Logo */}
                <div className="flex items-center space-x-3">
                  <div className="relative">
                    <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-amber-600 rounded-lg flex items-center justify-center shadow-lg shadow-amber-500/25">
                      <Sparkles className="w-7 h-7 text-black" />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-br from-amber-400 to-amber-600 rounded-lg blur-md opacity-30 -z-10" />
                  </div>
                  <span className="text-3xl font-bold bg-gradient-to-r from-white to-amber-200 bg-clip-text text-transparent">
                    Pistah
                  </span>
                </div>

                <p className="text-gray-300 leading-relaxed max-w-md">
                  Revolutionizing IELTS preparation with AI-powered coaching. 
                  Join 50,000+ students who have achieved their dream scores with our 
                  intelligent platform.
                </p>

                {/* Contact Information */}
                <div className="space-y-3">
                  {contactInfo.map((item, index) => (
                    <motion.a
                      key={index}
                      href={item.href}
                      className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors duration-200 group"
                      whileHover={{ x: 5 }}
                    >
                      <div className="w-8 h-8 bg-white/5 rounded-lg flex items-center justify-center group-hover:bg-white/10 transition-colors duration-200">
                        <item.icon className="w-4 h-4" />
                      </div>
                      <span className="text-sm">{item.text}</span>
                    </motion.a>
                  ))}
                </div>

                {/* Social Links */}
                <div className="flex items-center space-x-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all duration-300"
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      aria-label={social.label}
                    >
                      <social.icon className="w-5 h-5" />
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Footer Links */}
              <div className="lg:col-span-3 grid md:grid-cols-4 gap-8">
                {footerSections.map((section, sectionIndex) => (
                  <div key={section.title} className="space-y-4">
                    <h3 className="text-lg font-semibold text-white">
                      {section.title}
                    </h3>
                    <ul className="space-y-3">
                      {section.links.map((link, linkIndex) => (
                        <motion.li
                          key={link.label}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ 
                            duration: 0.3, 
                            delay: sectionIndex * 0.1 + linkIndex * 0.05 
                          }}
                          viewport={{ once: true }}
                        >
                          <Link
                            href={link.href}
                            className="text-gray-300 hover:text-white transition-colors duration-200 text-sm group"
                          >
                            <span className="relative">
                              {link.label}
                              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-amber-400 to-amber-500 transition-all duration-300 group-hover:w-full" />
                            </span>
                          </Link>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </GlassCard>
        </motion.div>

        {/* Newsletter Signup */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <GlassCard variant="default" className="p-8 text-center">
            <div className="max-w-2xl mx-auto space-y-4">
              <h3 className="text-2xl font-bold text-white">
                Stay Updated with IELTS Tips & News
              </h3>
              <p className="text-gray-300">
                Get expert IELTS preparation tips, study strategies, and platform updates 
                delivered straight to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 bg-gradient-to-r from-amber-400 to-amber-600 text-black font-semibold rounded-lg hover:from-amber-500 hover:to-amber-700 transition-all duration-300 shadow-lg shadow-amber-500/25"
                >
                  Subscribe
                </motion.button>
              </div>
            </div>
          </GlassCard>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="border-t border-white/10 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6 text-sm text-gray-400">
              <p>© {currentYear} Pistah. All rights reserved.</p>
              <div className="flex items-center space-x-2">
                <span>Backed by</span>
                <span className="text-blue-400 font-medium">Google for Startups</span>
              </div>
            </div>
            
            <div className="flex items-center space-x-4 text-sm text-gray-400">
              <span>🌍 Available in 120+ countries</span>
              <span>•</span>
              <span>🏆 4.9/5 rating</span>
              <span>•</span>
              <span>✨ 50,000+ students</span>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
} 