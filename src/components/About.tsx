"use client"

import { motion } from "framer-motion"
import { Award, Users, Target, Zap, CheckCircle, Globe, TrendingUp, Star } from "lucide-react"
import { GlassCard } from "@/components/ui/glass-card"
import { AnimatedNumber } from "@/components/ui/animated-number"

export default function About() {
  const achievements = [
    { icon: Users, number: 50000, suffix: "+", label: "Active Students" },
    { icon: Globe, number: 120, suffix: "+", label: "Countries Served" },
    { icon: Target, number: 98, suffix: "%", label: "Success Rate" },
    { icon: TrendingUp, number: 4.9, suffix: "/5", label: "Average Rating" }
  ]

  const credentials = [
    "Official IELTS Preparation Partner",
    "Backed by Google for Startups",
    "ISO 27001 Certified for Data Security",
    "Featured in TechCrunch & Education Weekly",
    "Winner of EdTech Innovation Award 2024"
  ]

  const teamMembers = [
    {
      name: "Dr. Sarah Chen",
      role: "AI Research Director",
      background: "Former Cambridge IELTS Examiner",
      image: "/placeholder-team-1.jpg"
    },
    {
      name: "Michael Rodriguez",
      role: "CTO",
      background: "Ex-Google AI Engineer",
      image: "/placeholder-team-2.jpg"
    },
    {
      name: "Prof. James Wilson",
      role: "Academic Advisor",
      background: "IELTS Content Specialist",
      image: "/placeholder-team-3.jpg"
    }
  ]

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900/90 to-black">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(59,130,246,0.15),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,rgba(168,85,247,0.15),transparent_50%)]" />
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-md border border-blue-500/20 rounded-full px-4 py-2 mb-6">
            <Award className="w-4 h-4 text-blue-400" />
            <span className="text-blue-200 text-sm font-medium">Award-Winning Platform</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Trusted by Millions
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Worldwide
            </span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Founded by IELTS experts and powered by cutting-edge AI technology, 
            Pistah is revolutionizing how students prepare for and ace the IELTS exam.
          </p>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20"
        >
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              viewport={{ once: true }}
            >
              <GlassCard variant="default" className="text-center group hover:scale-105 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <achievement.icon className="w-8 h-8 text-blue-400" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">
                  <AnimatedNumber
                    value={achievement.number}
                    suffix={achievement.suffix}
                    duration={2000}
                  />
                </div>
                <p className="text-gray-300 text-sm">{achievement.label}</p>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          {/* Company Story */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <GlassCard variant="default" className="h-full">
              <div className="p-8">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-amber-600 rounded-xl flex items-center justify-center">
                    <Zap className="w-6 h-6 text-black" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Our Mission</h3>
                </div>
                
                <p className="text-gray-300 leading-relaxed mb-6">
                  We believe that language barriers shouldn&apos;t limit anyone&apos;s potential. 
                  That&apos;s why we created Pistah - to democratize access to world-class IELTS 
                  preparation through the power of artificial intelligence.
                </p>
                
                <p className="text-gray-300 leading-relaxed mb-6">
                  Our AI-powered platform has helped over 50,000 students from 120+ countries 
                  achieve their dream IELTS scores, opening doors to top universities, 
                  immigration opportunities, and career advancement worldwide.
                </p>

                <div className="space-y-3">
                  {credentials.map((credential, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-center space-x-3"
                    >
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span className="text-gray-300 text-sm">{credential}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </GlassCard>
          </motion.div>

          {/* Team Section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <GlassCard variant="default" className="h-full">
              <div className="p-8">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-purple-600 rounded-xl flex items-center justify-center">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Expert Team</h3>
                </div>
                
                <p className="text-gray-300 leading-relaxed mb-8">
                  Our world-class team combines decades of IELTS expertise with 
                  cutting-edge AI research to deliver unparalleled learning experiences.
                </p>

                <div className="space-y-6">
                  {teamMembers.map((member, index) => (
                    <motion.div
                      key={member.name}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-center space-x-4 p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-colors duration-300"
                    >
                      <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full flex items-center justify-center">
                        <span className="text-black font-bold text-sm">
                          {member.name.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                      <div>
                        <h4 className="text-white font-semibold">{member.name}</h4>
                        <p className="text-blue-400 text-sm">{member.role}</p>
                        <p className="text-gray-400 text-xs">{member.background}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </GlassCard>
          </motion.div>
        </div>

        {/* Google for Startups Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <GlassCard variant="strong" glow className="p-12 max-w-4xl mx-auto">
            <div className="relative">
              {/* Background glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-amber-500/10 rounded-xl blur-xl" />
              
              <div className="relative z-10">
                <div className="flex items-center justify-center space-x-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-xl flex items-center justify-center">
                    <Award className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-left">
                    <h3 className="text-2xl font-bold text-white">Backed by Google for Startups</h3>
                    <p className="text-blue-400">Selected for innovation in AI-powered education</p>
                  </div>
                </div>
                
                <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                  We&apos;re proud to be part of Google for Startups, working alongside the world&apos;s 
                  most innovative companies to transform education through technology.
                </p>
                
                <div className="flex justify-center items-center space-x-8">
                  <div className="flex items-center space-x-2">
                    <Star className="w-5 h-5 text-amber-400" />
                    <span className="text-gray-300">Innovation Award Winner</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span className="text-gray-300">Google Cloud Partner</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Globe className="w-5 h-5 text-blue-400" />
                    <span className="text-gray-300">Global Impact</span>
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