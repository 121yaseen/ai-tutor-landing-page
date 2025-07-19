"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, Star, Quote, Users, Trophy, Target } from "lucide-react"
import { GlassCard } from "@/components/ui/glass-card"

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const testimonials = [
    {
      name: "Sarah Ahmed",
      role: "Medical Student",
      location: "Dubai, UAE",
      score: "8.5",
      previousScore: "6.0",
      image: "/placeholder-testimonial-1.jpg",
      content: "Pistah's AI coaching completely transformed my speaking confidence. The real-time feedback helped me identify and fix pronunciation issues I never knew I had. Within 3 months, I went from band 6.0 to 8.5!",
      highlight: "2.5 point improvement",
      university: "Stanford Medical School",
      badge: "Top Performer",
      bg: "from-blue-500 to-blue-600"
    },
    {
      name: "Miguel Rodriguez",
      role: "Software Engineer", 
      location: "Barcelona, Spain",
      score: "9.0",
      previousScore: "7.0",
      image: "/placeholder-testimonial-2.jpg",
      content: "The writing module's AI feedback is incredibly detailed. It helped me understand Task Achievement and Coherence at a deeper level. Perfect score in writing - couldn't believe it!",
      highlight: "Perfect 9.0 in Writing",
      university: "Google Canada",
      badge: "Success Story",
      bg: "from-indigo-500 to-indigo-600"
    },
    {
      name: "Priya Patel",
      role: "Research Scientist",
      location: "Mumbai, India", 
      score: "8.0",
      previousScore: "6.5",
      image: "/placeholder-testimonial-3.jpg",
      content: "The listening practice with different accents was game-changing. I struggled with Australian and Canadian accents, but Pistah's adaptive system helped me master them all.",
      highlight: "Mastered all accents",
      university: "University of Toronto",
      badge: "Accent Master",
      bg: "from-purple-500 to-purple-600"
    },
    {
      name: "David Chen",
      role: "Business Analyst",
      location: "Singapore",
      score: "8.5", 
      previousScore: "7.5",
      image: "/placeholder-testimonial-4.jpg",
      content: "The progress tracking and analytics gave me clear insights into my weaknesses. The personalized study plan was spot-on. Achieved my target score 2 months ahead of schedule!",
      highlight: "2 months early",
      university: "London Business School",
      badge: "Fast Track",
      bg: "from-emerald-500 to-emerald-600"
    },
    {
      name: "Emma Thompson",
      role: "Marketing Manager",
      location: "Sydney, Australia",
      score: "8.5",
      previousScore: "6.0", 
      image: "/placeholder-testimonial-5.jpg",
      content: "As a working professional, I needed flexible study options. Pistah's 24/7 AI tutor was perfect. I could practice during lunch breaks and get immediate feedback.",
      highlight: "2.5 band improvement",
      university: "Permanent Residency",
      badge: "Working Professional",
      bg: "from-blue-500 to-indigo-600"
    }
  ]

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  useEffect(() => {
    const timer = setInterval(nextTestimonial, 5000)
    return () => clearInterval(timer)
  }, [])

  const stats = [
    { icon: Users, value: "50+", label: "Success Stories", color: "text-blue-600", bg: "from-blue-100 to-blue-200" },
    { icon: Trophy, value: "8.2", label: "Average Score", color: "text-emerald-600", bg: "from-emerald-100 to-emerald-200" },
    { icon: Target, value: "95%", label: "Goal Achievement", color: "text-purple-600", bg: "from-purple-100 to-purple-200" }
  ]

  return (
    <section id="testimonials" className="py-24 relative overflow-hidden bg-gradient-to-b from-indigo-50/30 via-purple-50/50 to-pink-50/30">
      {/* Elegant Light Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(99,102,241,0.06),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(139,92,246,0.04),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(236,72,153,0.03),transparent_60%)]" />
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-indigo-50/80 to-purple-50/80 backdrop-blur-xl border border-indigo-200/50 rounded-full px-5 py-2.5 mb-6 shadow-light-sm">
            <Star className="w-4 h-4 text-indigo-600" />
            <span className="text-indigo-700 text-sm font-semibold">Student Success Stories</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight">
            <span className="bg-gradient-to-r from-slate-900 via-slate-700 to-slate-600 bg-clip-text text-transparent">
              Real Results from
            </span>
            <br />
            <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Real Students
            </span>
          </h2>
          
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-medium">
            Discover how our AI-powered platform has helped thousands of students 
            achieve their dream IELTS scores and unlock new opportunities worldwide.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-6 mb-16 max-w-2xl mx-auto"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              viewport={{ once: true }}
            >
              <GlassCard variant="strong" className="text-center">
                <div className={`w-12 h-12 bg-gradient-to-br ${stat.bg} rounded-xl flex items-center justify-center mx-auto mb-3 shadow-light-md`}>
                  <stat.icon className={`w-6 h-6 ${stat.color}`} />
                </div>
                <div className="text-2xl font-bold text-slate-800 mb-1">{stat.value}</div>
                <div className="text-sm text-slate-600 font-medium">{stat.label}</div>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>

        {/* Main Testimonial */}
        <div className="relative max-w-6xl mx-auto">
          <div className="relative min-h-[500px] flex items-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="w-full"
              >
                <GlassCard variant="premium" glow className="p-8 md:p-12">
                  <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Content */}
                    <div className="space-y-6">
                      {/* Quote Icon */}
                      <div className="w-16 h-16 bg-gradient-to-br from-indigo-100 to-purple-200 rounded-xl flex items-center justify-center shadow-light-md">
                        <Quote className="w-8 h-8 text-indigo-600" />
                      </div>

                      {/* Testimonial Content */}
                      <blockquote className="text-xl md:text-2xl text-slate-700 leading-relaxed font-medium">
                        &quot;{testimonials[currentIndex].content}&quot;
                      </blockquote>

                      {/* Author Info */}
                      <div className="flex items-start space-x-4">
                        <div className={`w-16 h-16 bg-gradient-to-br ${testimonials[currentIndex].bg} rounded-full flex items-center justify-center shadow-light-md`}>
                          <span className="text-white font-bold text-lg">
                            {testimonials[currentIndex].name.split(' ').map(n => n[0]).join('')}
                          </span>
                        </div>
                        <div>
                          <h4 className="text-xl font-bold text-slate-800">
                            {testimonials[currentIndex].name}
                          </h4>
                          <p className="text-indigo-600 font-semibold">
                            {testimonials[currentIndex].role}
                          </p>
                          <p className="text-slate-500 text-sm font-medium">
                            {testimonials[currentIndex].location}
                          </p>
                          <p className="text-blue-600 text-sm font-semibold">
                            {testimonials[currentIndex].university}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Score Display */}
                    <div className="space-y-6">
                      {/* Badge */}
                      <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-emerald-50 to-emerald-100 border border-emerald-200 rounded-full px-4 py-2 shadow-light-sm">
                        <Trophy className="w-4 h-4 text-emerald-600" />
                        <span className="text-emerald-700 text-sm font-semibold">
                          {testimonials[currentIndex].badge}
                        </span>
                      </div>

                      {/* Score Improvement */}
                      <div className="text-center space-y-4">
                        <div className="flex items-center justify-center space-x-8">
                          <div className="text-center">
                            <div className="text-3xl font-bold text-slate-400 mb-1">
                              {testimonials[currentIndex].previousScore}
                            </div>
                            <div className="text-sm text-slate-500 font-medium">Before</div>
                          </div>
                          <div className="text-indigo-600 text-2xl font-bold">→</div>
                          <div className="text-center">
                            <div className="text-4xl font-bold text-emerald-600 mb-1">
                              {testimonials[currentIndex].score}
                            </div>
                            <div className="text-sm text-emerald-600 font-semibold">After</div>
                          </div>
                        </div>
                        
                        <div className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-4 py-2 rounded-xl font-bold text-center shadow-light-md">
                          {testimonials[currentIndex].highlight}
                        </div>
                      </div>

                      {/* Star Rating */}
                      <div className="flex justify-center items-center space-x-1">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star key={star} className="w-6 h-6 fill-amber-400 text-amber-400" />
                        ))}
                      </div>
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Buttons */}
            <motion.button
              onClick={prevTestimonial}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/80 backdrop-blur-xl border border-slate-200 rounded-full flex items-center justify-center text-slate-600 hover:bg-white hover:text-slate-800 transition-all duration-300 group shadow-light-md hover:shadow-light-lg"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronLeft className="w-6 h-6 transition-transform group-hover:-translate-x-1" />
            </motion.button>

            <motion.button
              onClick={nextTestimonial}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/80 backdrop-blur-xl border border-slate-200 rounded-full flex items-center justify-center text-slate-600 hover:bg-white hover:text-slate-800 transition-all duration-300 group shadow-light-md hover:shadow-light-lg"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronRight className="w-6 h-6 transition-transform group-hover:translate-x-1" />
            </motion.button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center items-center space-x-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-indigo-600 scale-125 shadow-light-sm"
                    : "bg-slate-300 hover:bg-slate-400"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
} 