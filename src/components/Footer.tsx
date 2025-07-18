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
        { label: "Mobile App", href: "https://learn.pistah.live" }
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
    {
      icon: Twitter,
      href: "https://twitter.com/pistah",
      label: "Twitter",
      color: "hover:text-sky-600",
    },
    {
      icon: Linkedin,
      href: "https://linkedin.com/company/pistah",
      label: "LinkedIn",
      color: "hover:text-blue-600",
    },
    {
      icon: Github,
      href: "https://github.com/pistah-ad",
      label: "GitHub",
      color: "hover:text-slate-800",
    },
    {
      icon: Youtube,
      href: "https://youtube.com/pistah",
      label: "YouTube",
      color: "hover:text-red-600",
    },
  ];

  const contactInfo = [
    { icon: Mail, text: "hello@pistah.live", href: "mailto:hello@pistah.live" },
    {
      icon: Phone,
      text: "+91 81370 54594",
      href: "tel:+918137054594",
    },
    {
      icon: MapPin,
      text: "Bengaluru, India",
      href: "https://maps.app.goo.gl/KEWRWzFQ6m21WG8F9",
    },
  ];

  return (
    <footer className="relative py-20 overflow-hidden bg-gradient-to-t from-slate-100/80 via-blue-50/50 to-indigo-50/30">
      {/* Elegant Light Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_100%,rgba(99,102,241,0.06),transparent_70%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(59,130,246,0.04),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_50%,rgba(139,92,246,0.03),transparent_60%)]" />
      </div>

      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.02)_1px,transparent_1px)] bg-[size:50px_50px] opacity-50" />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <GlassCard variant="default" className="p-8 md:p-12 mb-12">
            <div className="grid lg:grid-cols-5 gap-12">
              {/* Brand Section */}
              <div className="lg:col-span-2 space-y-6">
                {/* Logo */}
                <div className="flex items-center space-x-3">
                  <div className="relative">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center shadow-light-lg shadow-blue-500/25">
                      <Sparkles className="w-7 h-7 text-white" />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-xl blur-lg opacity-40 -z-10 animate-pulse" />
                  </div>
                  <span className="text-3xl font-bold bg-gradient-to-r from-slate-800 via-blue-700 to-indigo-700 bg-clip-text text-transparent">
                    Pistah
                  </span>
                </div>

                <p className="text-slate-600 leading-relaxed max-w-md font-medium">
                  Revolutionizing IELTS preparation with AI-powered coaching. 
                  Join 50+ students who have achieved their dream scores with our 
                  intelligent platform.
                </p>

                {/* Contact Information */}
                <div className="space-y-3">
                  {contactInfo.map((item, index) => (
                    <motion.a
                      key={index}
                      href={item.href}
                      className="flex items-center space-x-3 text-slate-600 hover:text-slate-800 transition-colors duration-200 group"
                      whileHover={{ x: 5 }}
                    >
                      <div className="w-8 h-8 bg-slate-100/80 rounded-lg flex items-center justify-center group-hover:bg-blue-50 transition-colors duration-200 border border-slate-200/50">
                        <item.icon className="w-4 h-4" />
                      </div>
                      <span className="text-sm font-medium">{item.text}</span>
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
                      className={`w-10 h-10 bg-white/80 backdrop-blur-sm border border-slate-200 rounded-lg flex items-center justify-center text-slate-500 hover:bg-white hover:border-slate-300 transition-all duration-300 shadow-light-sm hover:shadow-light-md ${social.color}`}
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
                    <h3 className="text-lg font-semibold text-slate-800">
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
                            className="text-slate-600 hover:text-slate-800 transition-colors duration-200 text-sm group font-medium"
                          >
                            <span className="relative">
                              {link.label}
                              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-indigo-600 transition-all duration-300 group-hover:w-full rounded-full" />
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
          <GlassCard variant="strong" className="p-8 text-center">
            <div className="max-w-2xl mx-auto space-y-4">
              <h3 className="text-2xl font-bold text-slate-800">
                Stay Updated with IELTS Tips & News
              </h3>
              <p className="text-slate-600 font-medium">
                Get expert IELTS preparation tips, study strategies, and platform updates 
                delivered straight to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-white/80 backdrop-blur-sm border border-slate-300 rounded-xl text-slate-800 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-light-sm font-medium"
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold rounded-xl hover:from-blue-600 hover:to-indigo-700 transition-all duration-300 shadow-light-lg hover:shadow-light-xl"
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
          className="border-t border-slate-200/60 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6 text-sm text-slate-500">
              <p className="font-medium">© {currentYear} Pistah. All rights reserved.</p>
              <div className="flex items-center space-x-2">
                <span>Backed by</span>
                <span className="text-blue-600 font-semibold">Google for Startups</span>
              </div>
            </div>
            
            <div className="flex items-center space-x-4 text-sm text-slate-500 font-medium">
              <span>🌍 Available in 20+ countries</span>
              <span>•</span>
              <span>🏆 4.9/5 rating</span>
              <span>•</span>
              <span>✨ 50+ students</span>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}