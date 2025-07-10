"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { BrainCircuit, Ear, Pencil, Users, BarChart, Sparkles, Target, Zap, Clock, Trophy, Globe, Shield } from "lucide-react"
import { GlassCard } from "@/components/ui/glass-card"
import { AnimatedNumber } from "@/components/ui/animated-number"

export default function Features() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const mainFeatures = [
    {
      icon: BrainCircuit,
      title: "AI-Powered Speaking Coach",
      description: "Advanced AI analyzes your pronunciation, fluency, and grammar in real-time, providing instant feedback and personalized improvement suggestions.",
      gradient: "from-purple-400 to-purple-600",
      stats: { value: 95, suffix: "%", label: "Accuracy Rate" }
    },
    {
      icon: Ear,
      title: "Immersive Listening Modules",
      description: "Practice with authentic IELTS-style audio content featuring various accents and contexts, with adaptive difficulty based on your progress.",
      gradient: "from-blue-400 to-blue-600", 
      stats: { value: 12, suffix: "+", label: "Accent Types" }
    },
    {
      icon: Pencil,
      title: "Intelligent Writing Assistant",
      description: "Get detailed feedback on task achievement, coherence, lexical resource, and grammatical accuracy with AI-powered scoring.",
      gradient: "from-green-400 to-green-600",
      stats: { value: 8.5, suffix: "", label: "Avg Score Gain" }
    },
    {
      icon: Target,
      title: "Reading Comprehension Pro",
      description: "Master all question types with strategic guidance, time management tips, and detailed explanations for every answer.",
      gradient: "from-amber-400 to-amber-600",
      stats: { value: 87, suffix: "%", label: "Pass Rate" }
    }
  ]

  const additionalFeatures = [
    { icon: Users, title: "Live Partner Practice", description: "Connect with other students globally" },
    { icon: BarChart, title: "Advanced Analytics", description: "Detailed progress tracking and insights" },
    { icon: Clock, title: "Flexible Scheduling", description: "Study at your own pace, anytime" },
    { icon: Trophy, title: "Achievement System", description: "Gamified learning with rewards" },
    { icon: Globe, title: "Global Community", description: "Join 50,000+ active learners" },
    { icon: Shield, title: "Score Guarantee", description: "Improve your score or money back" }
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
    <section id="features" className="py-24 relative overflow-hidden" ref={ref}>
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900/80 to-black">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(168,85,247,0.15),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(59,130,246,0.15),transparent_50%)]" />
      </div>

      {/* Animated particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => {
          // Use deterministic positioning based on index to avoid hydration mismatch
          const left = (i * 17.3 + 23) % 100
          const top = (i * 23.7 + 47) % 100
          const duration = 3 + (i % 3)
          const delay = (i % 5) * 0.4
          
          return (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white/20 rounded-full"
              style={{
                left: `${left}%`,
                top: `${top}%`,
              }}
              animate={{
                y: [0, -100, 0],
                opacity: [0, 1, 0],
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
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-500/10 to-blue-500/10 backdrop-blur-md border border-purple-500/20 rounded-full px-4 py-2 mb-6">
            <Sparkles className="w-4 h-4 text-purple-400" />
            <span className="text-purple-200 text-sm font-medium">Powered by Advanced AI</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Revolutionary Features
            </span>
            <br />
            <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-green-400 bg-clip-text text-transparent">
              Built for Success
            </span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
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
                variant="default" 
                hover={true}
                className="h-full relative overflow-hidden"
              >
                {/* Gradient overlay */}
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${feature.gradient} opacity-10 rounded-full blur-xl transition-all duration-500 group-hover:opacity-20 group-hover:scale-110`} />
                
                <div className="relative z-10 p-8">
                  <div className="flex items-start justify-between mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-br ${feature.gradient} rounded-xl flex items-center justify-center shadow-lg`}>
                      <feature.icon className="w-8 h-8 text-white" />
                    </div>
                    
                    {/* Stats */}
                    <div className="text-right">
                      <div className="text-2xl font-bold text-white">
                        <AnimatedNumber
                          value={feature.stats.value}
                          suffix={feature.stats.suffix}
                          duration={2000}
                        />
                      </div>
                      <div className="text-xs text-gray-400">{feature.stats.label}</div>
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 group-hover:bg-clip-text transition-all duration-300">
                    {feature.title}
                  </h3>
                  
                  <p className="text-gray-300 leading-relaxed">
                    {feature.description}
                  </p>

                  {/* Progress indicator */}
                  <div className="mt-6 flex items-center space-x-2">
                    <div className="flex-1 bg-white/10 rounded-full h-1 overflow-hidden">
                      <motion.div
                        className={`h-full bg-gradient-to-r ${feature.gradient} rounded-full`}
                        initial={{ width: 0 }}
                        animate={isInView ? { width: "100%" } : {}}
                        transition={{ duration: 1.5, delay: index * 0.3 }}
                      />
                    </div>
                    <Zap className="w-4 h-4 text-amber-400" />
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
            <h3 className="text-3xl font-bold text-white mb-4">
              Everything You Need to Excel
            </h3>
            <p className="text-gray-300 max-w-2xl mx-auto">
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
                <GlassCard variant="subtle" className="text-center group hover:scale-105 transition-transform duration-300">
                  <div className="w-12 h-12 bg-gradient-to-br from-amber-400/20 to-amber-600/20 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-6 h-6 text-amber-400" />
                  </div>
                  <h4 className="text-lg font-bold text-white mb-2">{feature.title}</h4>
                  <p className="text-gray-300 text-sm">{feature.description}</p>
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
          <GlassCard variant="strong" glow className="p-12 max-w-4xl mx-auto">
            <div className="relative">
              {/* Background glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-blue-500/10 to-green-500/10 rounded-xl blur-xl" />
              
              <div className="relative z-10">
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Ready to Transform Your IELTS Journey?
                </h3>
                <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                  Join thousands of successful students who have achieved their target scores with our AI-powered platform.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 bg-gradient-to-r from-amber-400 to-amber-600 text-black font-bold rounded-lg hover:from-amber-500 hover:to-amber-700 transition-all duration-300 shadow-lg shadow-amber-500/25"
                  >
                    Start Your Free Trial
                  </motion.button>
                  
                  <div className="flex items-center space-x-2 text-gray-300">
                    <Shield className="w-5 h-5 text-green-400" />
                    <span className="text-sm">7-day free trial • No credit card required</span>
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