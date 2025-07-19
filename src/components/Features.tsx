"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { BrainCircuit, Ear, Pencil, Users, BarChart, Sparkles, Target, Zap, Clock, Trophy, Globe, Shield } from "lucide-react"
import { GlassCard } from "@/components/ui/glass-card"
import { AnimatedNumber } from "@/components/ui/animated-number"
import Link from "next/link"

export default function Features() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const mainFeatures = [
    {
      icon: BrainCircuit,
      title: "AI-Powered Speaking Coach",
      description: "Advanced AI analyzes your pronunciation, fluency, and grammar in real-time, providing instant feedback and personalized improvement suggestions.",
      gradient: "from-purple-500 to-purple-600",
      lightGradient: "from-purple-500/10 to-purple-600/10",
      stats: { value: 95, suffix: "%", label: "Accuracy Rate" }
    },
    {
      icon: Ear,
      title: "Immersive Listening Modules",
      description: "Practice with authentic IELTS-style audio content featuring various accents and contexts, with adaptive difficulty based on your progress.",
      gradient: "from-blue-500 to-blue-600", 
      lightGradient: "from-blue-500/10 to-blue-600/10",
      stats: { value: 12, suffix: "+", label: "Accent Types" }
    },
    {
      icon: Pencil,
      title: "Intelligent Writing Assistant",
      description: "Get detailed feedback on task achievement, coherence, lexical resource, and grammatical accuracy with AI-powered scoring.",
      gradient: "from-emerald-500 to-emerald-600",
      lightGradient: "from-emerald-500/10 to-emerald-600/10",
      stats: { value: 8.5, suffix: "", label: "Avg Score Gain" }
    },
    {
      icon: Target,
      title: "Reading Comprehension Pro",
      description: "Master all question types with strategic guidance, time management tips, and detailed explanations for every answer.",
      gradient: "from-indigo-500 to-indigo-600",
      lightGradient: "from-indigo-500/10 to-indigo-600/10",
      stats: { value: 87, suffix: "%", label: "Pass Rate" }
    }
  ]

  const additionalFeatures = [
    { icon: Users, title: "Live Partner Practice", description: "Connect with other students globally", color: "text-blue-600" },
    { icon: BarChart, title: "Advanced Analytics", description: "Detailed progress tracking and insights", color: "text-indigo-600" },
    { icon: Clock, title: "Flexible Scheduling", description: "Study at your own pace, anytime", color: "text-purple-600" },
    { icon: Trophy, title: "Achievement System", description: "Gamified learning with rewards", color: "text-emerald-600" },
    { icon: Globe, title: "Global Community", description: "Join 50+ active learners", color: "text-blue-600" },
    { icon: Shield, title: "Score Guarantee", description: "Improve your score or money back", color: "text-indigo-600" }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" as const }
    }
  }

  return (
    <section id="features" className="py-24 relative overflow-hidden bg-gradient-to-b from-white via-gray-50/50 to-blue-50/30" ref={ref}>
      {/* Elegant Light Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(99,102,241,0.08),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(59,130,246,0.06),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_60%_40%,rgba(139,92,246,0.04),transparent_50%)]" />
      </div>

      {/* Animated particles - Light Theme */}
      <div className="absolute inset-0">
        {[...Array(15)].map((_, i) => {
          // Use deterministic positioning based on index to avoid hydration mismatch
          const left = (i * 17.3 + 23) % 100
          const top = (i * 23.7 + 47) % 100
          const duration = 4 + (i % 3)
          const delay = (i % 5) * 0.6
          
          return (
            <motion.div
              key={i}
              className="absolute w-1.5 h-1.5 bg-blue-300/40 rounded-full"
              style={{
                left: `${left}%`,
                top: `${top}%`,
              }}
              animate={{
                y: [0, -120, 0],
                opacity: [0, 0.6, 0],
              }}
              transition={{
                duration,
                repeat: Infinity,
                delay,
              }}
            />
          )
        })}
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-50/80 to-indigo-50/80 backdrop-blur-xl border border-blue-200/50 rounded-full px-5 py-2.5 mb-6 shadow-light-sm">
            <Sparkles className="w-4 h-4 text-blue-600" />
            <span className="text-blue-700 text-sm font-semibold">Powered by Advanced AI</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight">
            <span className="bg-gradient-to-r from-slate-900 via-slate-700 to-slate-600 bg-clip-text text-transparent">
              Revolutionary Features
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Built for Success
            </span>
          </h2>
          
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-medium">
            Experience the future of IELTS preparation with our cutting-edge AI technology 
            that adapts to your learning style and accelerates your progress.
          </p>
        </motion.div>

        {/* Main Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid lg:grid-cols-2 gap-8 mb-20"
        >
          {mainFeatures.map((feature, index) => (
            <motion.div
              key={feature.title}
              variants={cardVariants}
              className="group"
            >
              <GlassCard 
                variant="premium" 
                hover={true}
                className="h-full relative overflow-hidden"
              >
                {/* Gradient overlay */}
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${feature.lightGradient} rounded-full blur-xl transition-all duration-500 group-hover:opacity-70 group-hover:scale-110`} />
                
                <div className="relative z-10 p-8">
                  <div className="flex items-start justify-between mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-br ${feature.gradient} rounded-xl flex items-center justify-center shadow-light-lg`}>
                      <feature.icon className="w-8 h-8 text-white" />
                    </div>
                    
                    {/* Stats */}
                    <div className="text-right">
                      <div className="text-2xl font-bold text-slate-800">
                        <AnimatedNumber
                          value={feature.stats.value}
                          suffix={feature.stats.suffix}
                        />
                      </div>
                      <div className="text-xs text-slate-500 font-medium">{feature.stats.label}</div>
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-slate-800 mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-indigo-600 group-hover:bg-clip-text transition-all duration-300">
                    {feature.title}
                  </h3>
                  
                  <p className="text-slate-600 leading-relaxed font-medium">
                    {feature.description}
                  </p>

                  {/* Progress indicator */}
                  <div className="mt-6 flex items-center space-x-3">
                    <div className="flex-1 bg-slate-200/60 rounded-full h-2 overflow-hidden">
                      <motion.div
                        className={`h-full bg-gradient-to-r ${feature.gradient} rounded-full shadow-sm`}
                        initial={{ width: 0 }}
                        animate={isInView ? { width: "100%" } : {}}
                        transition={{ duration: 1.5, delay: index * 0.3 }}
                      />
                    </div>
                    <Zap className="w-4 h-4 text-blue-600" />
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Features */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-slate-800 mb-4">
              Everything You Need to Excel
            </h3>
            <p className="text-slate-600 max-w-2xl mx-auto font-medium">
              Comprehensive tools and features designed to cover every aspect of IELTS preparation
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {additionalFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
              >
                <GlassCard variant="default" className="text-center group hover:scale-105 transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 border border-blue-200/30">
                    <feature.icon className={`w-6 h-6 ${feature.color}`} />
                  </div>
                  <h4 className="text-lg font-bold text-slate-800 mb-2">{feature.title}</h4>
                  <p className="text-slate-600 text-sm font-medium">{feature.description}</p>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-center"
        >
          <GlassCard variant="premium" glow className="p-12 max-w-4xl mx-auto">
            <div className="relative">
              {/* Background glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-indigo-500/5 to-purple-500/5 rounded-2xl blur-xl" />
              
              <div className="relative z-10">
                <h3 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
                  Ready to Transform Your IELTS Journey?
                </h3>
                <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto font-medium">
                  Join thousands of successful students who have achieved their target scores with our AI-powered platform.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <Link href="https://learn.pistah.live/">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-8 py-4 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-bold rounded-xl hover:from-blue-600 hover:to-indigo-700 transition-all duration-300 shadow-light-lg hover:shadow-light-xl"
                    >
                      Start Your Free Trial
                    </motion.button>
                  </Link>
                  
                  <div className="flex items-center space-x-2 text-slate-500">
                    <Shield className="w-5 h-5 text-emerald-500" />
                    <span className="text-sm font-medium">7-day free trial • No credit card required</span>
                  </div>
                </div>
              </div>
            </div>
          </GlassCard>
        </motion.div>
      </div>
    </section>
  )
} 