"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { ArrowRight, Play, Star, Zap, Target, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { GlassCard } from "@/components/ui/glass-card"
import { AnimatedNumber } from "@/components/ui/animated-number"

export default function Hero() {
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  const floatingAnimation = {
    y: [0, -20, 0],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut" as const
    }
  }

  const stats = [
    { icon: Users, value: 50000, suffix: "+", label: "Active Users" },
    { icon: Target, value: 98, suffix: "%", label: "Success Rate" },
    { icon: Star, value: 4.9, prefix: "", suffix: "/5", label: "Rating" },
    { icon: Zap, value: 10, suffix: "x", label: "Faster Learning" }
  ]

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,191,0,0.15),transparent_50%)] animate-pulse" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(168,85,247,0.15),transparent_50%)] animate-pulse" style={{ animationDelay: "1s" }} />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_60%,rgba(59,130,246,0.1),transparent_50%)] animate-pulse" style={{ animationDelay: "2s" }} />
      </div>

      {/* Floating Geometric Shapes */}
      <motion.div
        className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-br from-amber-400/20 to-amber-600/20 rounded-full blur-xl"
        animate={floatingAnimation}
        style={{ animationDelay: "0s" }}
      />
      <motion.div
        className="absolute top-40 right-20 w-32 h-32 bg-gradient-to-br from-purple-400/20 to-purple-600/20 rounded-xl blur-xl"
        animate={floatingAnimation}
        style={{ animationDelay: "1s" }}
      />
      <motion.div
        className="absolute bottom-40 left-20 w-24 h-24 bg-gradient-to-br from-blue-400/20 to-blue-600/20 rounded-lg blur-xl"
        animate={floatingAnimation}
        style={{ animationDelay: "2s" }}
      />

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />

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
                <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-amber-500/10 to-amber-600/10 backdrop-blur-md border border-amber-500/20 rounded-full px-4 py-2">
                  <Zap className="w-4 h-4 text-amber-400" />
                  <span className="text-amber-200 text-sm font-medium">AI-Powered IELTS Preparation</span>
                  <div className="w-2 h-2 bg-amber-400 rounded-full animate-pulse" />
                </div>
              </motion.div>

              {/* Headline */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="space-y-6"
              >
                <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
                  <span className="bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent">
                    Master IELTS with
                  </span>
                  <br />
                  <span className="bg-gradient-to-r from-amber-400 via-amber-500 to-orange-500 bg-clip-text text-transparent">
                    AI Precision
                  </span>
                </h1>
                <p className="text-xl md:text-2xl text-gray-300 max-w-2xl leading-relaxed">
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
                <Button variant="primary" size="xl" className="group">
                  <span className="flex items-center space-x-2">
                    <span>Start Free Trial</span>
                    <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                  </span>
                </Button>
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
                className="flex items-center space-x-6 text-sm text-gray-400"
              >
                <div className="flex items-center space-x-2">
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 border-2 border-black" />
                    ))}
                  </div>
                  <span>50,000+ students trust us</span>
                </div>
                <div className="flex items-center space-x-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                  <span className="ml-2">4.9/5 rating</span>
                </div>
              </motion.div>
            </div>

            {/* Right Column - Stats & Visual Elements */}
            <div className="relative">
              {/* Main Glass Card */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="relative"
              >
                <GlassCard variant="default" glow className="p-8">
                  <div className="space-y-6">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-green-600 rounded-xl flex items-center justify-center">
                        <Target className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white">Live Progress</h3>
                        <p className="text-gray-300">Real-time performance tracking</p>
                      </div>
                    </div>
                    
                    {/* Animated Progress Bars */}
                    <div className="space-y-4">
                      {["Speaking", "Writing", "Reading", "Listening"].map((skill, index) => (
                        <div key={skill} className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span className="text-white">{skill}</span>
                            <span className="text-amber-400">{85 + index * 3}%</span>
                          </div>
                          <div className="w-full bg-white/10 rounded-full h-2 overflow-hidden">
                            <motion.div
                              className="h-full bg-gradient-to-r from-amber-400 to-amber-500 rounded-full"
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

                {/* Floating Stats Cards */}
                <div className="absolute -top-6 -right-6 grid grid-cols-2 gap-3">
                  {stats.slice(0, 2).map((stat, index) => (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.6, delay: 1 + index * 0.2 }}
                    >
                      <GlassCard variant="subtle" className="p-4 text-center">
                        <stat.icon className="w-6 h-6 text-amber-400 mx-auto mb-2" />
                        <div className="text-2xl font-bold text-white">
                          <AnimatedNumber
                            value={stat.value}
                            prefix={stat.prefix}
                            suffix={stat.suffix}
                            duration={2000}
                          />
                        </div>
                        <div className="text-xs text-gray-300">{stat.label}</div>
                      </GlassCard>
                    </motion.div>
                  ))}
                </div>

                <div className="absolute -bottom-6 -left-6 grid grid-cols-2 gap-3">
                  {stats.slice(2).map((stat, index) => (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.6, delay: 1.4 + index * 0.2 }}
                    >
                      <GlassCard variant="subtle" className="p-4 text-center">
                        <stat.icon className="w-6 h-6 text-amber-400 mx-auto mb-2" />
                        <div className="text-2xl font-bold text-white">
                          <AnimatedNumber
                            value={stat.value}
                            prefix={stat.prefix}
                            suffix={stat.suffix}
                            duration={2000}
                          />
                        </div>
                        <div className="text-xs text-gray-300">{stat.label}</div>
                      </GlassCard>
                    </motion.div>
                  ))}
                </div>
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
        <div className="flex flex-col items-center space-y-2 text-white/60">
          <span className="text-sm">Scroll to explore</span>
          <motion.div
            className="w-6 h-10 border border-white/20 rounded-full flex justify-center"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <motion.div
              className="w-1 h-3 bg-white/40 rounded-full mt-2"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
} 