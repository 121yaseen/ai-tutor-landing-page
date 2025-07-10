"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navigation = [
    { name: "Features", href: "#features" },
    { name: "Pricing", href: "#pricing" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "About", href: "#about" },
  ]

  return (
    <motion.header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled 
          ? "bg-black/20 backdrop-blur-lg border-b border-white/10" 
          : "bg-transparent"
      }`}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.div
            className="flex-shrink-0"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link href="/" className="flex items-center space-x-2">
              <div className="relative">
                <div className="w-10 h-10 bg-gradient-to-br from-amber-400 to-amber-600 rounded-lg flex items-center justify-center shadow-lg shadow-amber-500/25">
                  <Sparkles className="w-6 h-6 text-black" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-amber-400 to-amber-600 rounded-lg blur-md opacity-30 -z-10" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-white to-amber-200 bg-clip-text text-transparent">
                Pistah
              </span>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex md:items-center md:space-x-8">
            {navigation.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link
                  href={item.href}
                  className="relative text-white/80 hover:text-white transition-colors duration-200 group"
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-amber-400 to-amber-500 transition-all duration-300 group-hover:w-full" />
                </Link>
              </motion.div>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex md:items-center md:space-x-4">
            <Button variant="ghost" size="sm">
              Sign In
            </Button>
            <Button variant="primary" size="sm" className="relative group overflow-hidden">
              <span className="relative z-10">Start Free Trial</span>
              <div className="absolute inset-0 bg-gradient-to-r from-amber-600 to-amber-700 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              className="relative w-10 h-10 flex items-center justify-center text-white/80 hover:text-white transition-colors"
              whileTap={{ scale: 0.95 }}
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={isOpen ? "close" : "menu"}
                  initial={{ opacity: 0, rotate: -90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: 90 }}
                  transition={{ duration: 0.2 }}
                >
                  {isOpen ? <X size={24} /> : <Menu size={24} />}
                </motion.div>
              </AnimatePresence>
            </motion.button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden bg-black/20 backdrop-blur-lg border-t border-white/10"
            >
              <div className="px-2 pt-2 pb-3 space-y-1">
                {navigation.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <Link
                      href={item.href}
                      className="block px-3 py-2 text-white/80 hover:text-white hover:bg-white/10 rounded-md transition-all duration-200"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}
                <div className="pt-4 space-y-2">
                  <Button variant="ghost" size="sm" className="w-full justify-start">
                    Sign In
                  </Button>
                  <Button variant="primary" size="sm" className="w-full">
                    Start Free Trial
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  )
} 