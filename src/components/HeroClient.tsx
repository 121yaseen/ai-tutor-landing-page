"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { ArrowRight, Play, Star, Zap, Target, Users } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { GlassCard } from "@/components/ui/glass-card"
import { AnimatedNumber } from "@/components/ui/animated-number"

const floatingAnimation = {
  y: [0, -20, 0],
  transition: {
    duration: 6,
    repeat: Infinity,
    ease: "easeInOut" as const
  }
}

const stats = [
  { icon: Users, value: 50, suffix: "+", label: "Active Users" },
  { icon: Target, value: 98, suffix: "%", label: "Success Rate" },
  { icon: Star, value: 4.9, prefix: "", suffix: "/5", label: "Rating" },
  { icon: Zap, value: 10, suffix: "x", label: "Faster Learning" }
]

export default function HeroClient() {
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  return (
    <>
      {/* Floating Geometric Shapes - Light Theme */}
      <motion.div
        className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-br from-blue-200/40 to-blue-300/30 rounded-full blur-xl"
        animate={floatingAnimation}
        style={{ animationDelay: "0s" }}
      />
      <motion.div
        className="absolute top-40 right-20 w-32 h-32 bg-gradient-to-br from-indigo-200/40 to-indigo-300/30 rounded-xl blur-xl"
        animate={floatingAnimation}
        style={{ animationDelay: "1s" }}
      />
      <motion.div
        className="absolute bottom-40 left-20 w-24 h-24 bg-gradient-to-br from-purple-200/40 to-purple-300/30 rounded-lg blur-xl"
        animate={floatingAnimation}
        style={{ animationDelay: "2s" }}
      />

      <motion.div 
        className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 pt-20"
        style={{ y, opacity }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Content */}
            <div className="space-y-8">
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-50/80 to-indigo-50/80 backdrop-blur-xl border border-blue-200/50 rounded-full px-5 py-2.5 shadow-light-sm">
                  <Zap className="w-4 h-4 text-blue-600" />
                  <span className="text-blue-700 text-sm font-semibold">AI-Powered IELTS Preparation</span>
                  <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
                </div>
              </motion.div>

              {/* Headline */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="space-y-6"
              >
                <h1 className="text-5xl md:text-7xl font-extrabold leading-tight tracking-tight">
                  <span className="bg-gradient-to-r from-slate-900 via-slate-700 to-slate-600 bg-clip-text text-transparent">
                    Master IELTS with
                  </span>
                  <br />
                  <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                    AI Precision
                  </span>
                </h1>
                <p className="text-xl md:text-2xl text-slate-600 max-w-2xl leading-relaxed font-medium">
                  Revolutionary AI-driven personalized coaching that adapts to your learning style. 
                  Achieve your target IELTS score 10x faster with our intelligent practice system.
                </p>
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6"
              >
                <Link href="https://learn.pistah.live">
                  <Button variant="primary" size="xl" className="group shadow-light-lg hover:shadow-light-xl">
                    <span className="flex items-center space-x-2">
                      <span>Start Free Trial</span>
                      <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                    </span>
                  </Button>
                </Link>
                <Button variant="glass" size="xl" className="group">
                  <span className="flex items-center space-x-2">
                    <Play className="w-5 h-5" />
                    <span>Watch Demo</span>
                  </span>
                </Button>
              </motion.div>

              {/* Trust Indicators */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="flex items-center space-x-6 text-sm text-slate-500"
              >
                <div className="flex items-center space-x-2">
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="relative w-8 h-8 rounded-full border-2 border-white shadow-light-sm overflow-hidden">
                        <Image
                          src={`/user-pic-small/user ${i}.png`}
                          alt={`User ${i}`}
                          fill
                          className="object-cover"
                        />
                      </div>
                    ))}
                  </div>
                  <span className="font-medium">50+ students trust us</span>
                </div>
                <div className="flex items-center space-x-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                  <span className="ml-2 font-medium">4.9/5 rating</span>
                </div>
              </motion.div>
            </div>

            {/* Right Column - Stats & Visual Elements */}
            <div className="space-y-6">
              {/* Main Glass Card */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <GlassCard variant="premium" glow className="p-8">
                  <div className="space-y-6">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center shadow-light-md">
                        <Target className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-slate-800">Live Progress</h3>
                        <p className="text-slate-600">Real-time performance tracking</p>
                      </div>
                    </div>
                    
                    {/* Animated Progress Bars */}
                    <div className="space-y-4">
                      {["Speaking", "Writing", "Reading", "Listening"].map((skill, index) => (
                        <div key={skill} className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span className="text-slate-700 font-medium">{skill}</span>
                            <span className="text-blue-600 font-semibold">{85 + index * 3}%</span>
                          </div>
                          <div className="w-full bg-slate-200/50 rounded-full h-2.5 overflow-hidden">
                            <motion.div
                              className="h-full bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full shadow-sm"
                              initial={{ width: 0 }}
                              animate={{ width: `${85 + index * 3}%` }}
                              transition={{ duration: 1.5, delay: 0.8 + index * 0.2 }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </GlassCard>
              </motion.div>

              {/* Stats Cards Row */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="grid grid-cols-2 lg:grid-cols-4 gap-4"
              >
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
                  >
                    <GlassCard variant="strong" className="p-4 text-center">
                      <stat.icon className="w-6 h-6 text-blue-600 mx-auto mb-2" />
                      <div className="text-2xl font-bold text-slate-800">
                        {stat.label === "Rating" ? (
                          `${stat.prefix || ""}${stat.value}${stat.suffix || ""}`
                        ) : (
                          <AnimatedNumber
                            value={stat.value}
                            prefix={stat.prefix}
                            suffix={stat.suffix}
                          />
                        )}
                      </div>
                      <div className="text-xs text-slate-600 font-medium">{stat.label}</div>
                    </GlassCard>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.8 }}
      >
        <div className="flex flex-col items-center space-y-2 text-slate-400">
          <span className="text-sm font-medium">Scroll to explore</span>
          <motion.div
            className="w-6 h-10 border-2 border-slate-300 rounded-full flex justify-center bg-white/40 backdrop-blur-sm shadow-light-sm"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <motion.div
              className="w-1 h-3 bg-slate-400 rounded-full mt-2"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </motion.div>
        </div>
      </motion.div>
    </>
  )
}
