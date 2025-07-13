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
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled 
          ? "bg-white/80 backdrop-blur-2xl border-b border-white/30 shadow-light-md" 
          : "bg-white/60 backdrop-blur-xl"
      }`}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.div
            className="flex-shrink-0"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link href="/" className="flex items-center space-x-3">
              <div className="relative">
                <div className="w-11 h-11 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center shadow-light-lg shadow-blue-500/25">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-xl blur-lg opacity-40 -z-10 animate-pulse" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-slate-800 via-blue-700 to-indigo-700 bg-clip-text text-transparent">
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
                  className="relative text-slate-600 hover:text-slate-900 transition-colors duration-300 group font-medium"
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-indigo-600 transition-all duration-300 group-hover:w-full rounded-full" />
                </Link>
              </motion.div>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex md:items-center md:space-x-3">
            <Button variant="ghost" size="sm" className="text-slate-600 hover:text-slate-900">
              Sign In
            </Button>
            <Link href="https://learn.pistah.live">
              <Button variant="primary" size="sm" className="relative group overflow-hidden">
                <span className="relative z-10">Start Free Trial</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-700 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-xl" />
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              className="relative w-11 h-11 flex items-center justify-center text-slate-600 hover:text-slate-900 transition-colors bg-white/60 backdrop-blur-xl rounded-xl border border-white/30 shadow-light-sm hover:shadow-light-md"
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
                  {isOpen ? <X size={20} /> : <Menu size={20} />}
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
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="md:hidden bg-white/80 backdrop-blur-2xl border-t border-white/30 rounded-b-2xl shadow-light-lg"
            >
              <div className="px-4 pt-4 pb-6 space-y-3">
                {navigation.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <Link
                      href={item.href}
                      className="block px-4 py-3 text-slate-700 hover:text-slate-900 hover:bg-blue-50/80 rounded-xl transition-all duration-200 font-medium"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}
                <div className="pt-4 space-y-3 border-t border-white/30">
                  <Button variant="ghost" size="sm" className="w-full justify-center">
                    Sign In
                  </Button>
                  <Link href="https://learn.pistah.live">
                    <Button variant="primary" size="sm" className="w-full">
                      Start Free Trial
                    </Button>
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  )
} 