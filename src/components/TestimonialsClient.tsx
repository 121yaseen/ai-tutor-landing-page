"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { 
  ChevronLeftIcon, 
  ChevronRightIcon, 
  StarIcon, 
  Bars3Icon as QuoteIcon, 
  UsersIcon, 
  TrophyIcon, 
  PresentationChartBarIcon 
} from "@heroicons/react/24/solid"
import { GlassCard } from "@/components/ui/glass-card"

const testimonials = [
  {
    name: "Amrita Singh",
    role: "Postgrad Applicant",
    location: "Delhi, India",
    score: "7.5",
    previousScore: "6.5",
    image: "/placeholder-testimonial-1.jpg",
    content:
      "Got stuck at 6.5 in Writing twice. Pistah showed me exactly why — repetition in Task Response and weak cohesion. After 10 mocks, my predicted score moved to 7.5. Test day matched it.",
    highlight: "Broke the 6.5 wall",
    university: "University of British Columbia",
    badge: "Writing Upgrade",
    bg: "from-blue-500 to-blue-600",
  },
  {
    name: "Miguel Rodriguez",
    role: "Software Engineer",
    location: "Barcelona, Spain",
    score: "8.0",
    previousScore: "7.0",
    image: "/placeholder-testimonial-2.jpg",
    content:
      "The Speaking examiner feedback felt like a real interview. The prediction said 8.0 with confidence 7.5–8.5 — my result was 8.0. Most helpful part: tactical prompts to upgrade answers.",
    highlight: "Confidence band matched",
    university: "Google Canada",
    badge: "Speaking 8.0",
    bg: "from-indigo-500 to-indigo-600",
  },
  {
    name: "Ainuu Batbayar",
    role: "Immigration Applicant",
    location: "Ulaanbaatar, Mongolia",
    score: "7.0",
    previousScore: "6.0",
    image: "/placeholder-testimonial-3.jpg",
    content:
      "Two weeks of beta access, unlimited mocks. I learned exactly what errors repeat in my writing and fixed them. Prediction 7.0, final result 7.0.",
    highlight: "2 weeks, +1 band",
    university: "Permanent Residency",
    badge: "Fast Track",
    bg: "from-purple-500 to-purple-600",
  },
  {
    name: "Joanna Lee",
    role: "Nurse",
    location: "Manila, Philippines",
    score: "7.5",
    previousScore: "6.5",
    image: "/placeholder-testimonial-4.jpg",
    content:
      "I needed 7.5 for registration. Pistah’s objective scoring removed the guesswork. I practiced nightly, watched the prediction climb, and hit my target.",
    highlight: "Hit target band",
    university: "Professional Registration",
    badge: "Goal Achieved",
    bg: "from-emerald-500 to-emerald-600",
  },
  {
    name: "Arman Khan",
    role: "Undergrad Applicant",
    location: "Dhaka, Bangladesh",
    score: "7.0",
    previousScore: "6.0",
    image: "/placeholder-testimonial-5.jpg",
    content:
      "I had 10 days. Unlimited mocks let me focus on weak areas fast. The prediction was 7.0, and it was spot on. Most honest tool I tried.",
    highlight: "Deadline success",
    university: "Canadian Universities",
    badge: "Short Sprint",
    bg: "from-blue-500 to-indigo-600",
  },
]

const stats = [
  { icon: UsersIcon, value: "50+", label: "Success Stories", color: "text-blue-600", bg: "from-blue-100 to-blue-200" },
  { icon: TrophyIcon, value: "8.2", label: "Average Score", color: "text-emerald-600", bg: "from-emerald-100 to-emerald-200" },
  { icon: PresentationChartBarIcon, value: "95%", label: "Goal Achievement", color: "text-purple-600", bg: "from-purple-100 to-purple-200" }
]

export default function TestimonialsClient() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  useEffect(() => {
    const timer = window.setInterval(nextTestimonial, 6000)
    return () => window.clearInterval(timer)
  }, [])

  return (
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
          <StarIcon className="w-4 h-4 text-indigo-600" />
          <span className="text-indigo-700 text-sm font-semibold">Test Experience Results</span>
        </div>
        
        <h2 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight">
          <span className="bg-gradient-to-r from-slate-900 via-slate-700 to-slate-600 bg-clip-text text-transparent">
            Real Results from
          </span>
          <br />
          <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            Real Results
          </span>
        </h2>
        
        <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-medium">
          Success stories in the same format IELTS candidates trust: real results with predicted vs final bands.
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
                      <QuoteIcon className="w-8 h-8 text-indigo-600" />
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
                      <TrophyIcon className="w-4 h-4 text-emerald-600" />
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
                        <StarIcon key={star} className="w-6 h-6 fill-amber-400 text-amber-400" />
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
            aria-label="Previous testimonial"
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 min-w-[44px] min-h-[44px] bg-white/80 backdrop-blur-xl border border-slate-200 rounded-full flex items-center justify-center text-slate-600 hover:bg-white hover:text-slate-800 transition-all duration-300 group shadow-light-md hover:shadow-light-lg"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronLeftIcon className="w-6 h-6 transition-transform group-hover:-translate-x-1" />
          </motion.button>

          <motion.button
            onClick={nextTestimonial}
            aria-label="Next testimonial"
            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 min-w-[44px] min-h-[44px] bg-white/80 backdrop-blur-xl border border-slate-200 rounded-full flex items-center justify-center text-slate-600 hover:bg-white hover:text-slate-800 transition-all duration-300 group shadow-light-md hover:shadow-light-lg"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronRightIcon className="w-6 h-6 transition-transform group-hover:translate-x-1" />
          </motion.button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center items-center space-x-2 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              aria-label={`Go to testimonial ${index + 1}`}
              className={`w-3 h-3 min-w-[12px] min-h-[12px] rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "bg-indigo-600 scale-125 shadow-light-sm"
                  : "bg-slate-300 hover:bg-slate-400"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
