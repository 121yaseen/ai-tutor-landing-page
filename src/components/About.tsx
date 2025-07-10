"use client"

import { motion } from "framer-motion"
import { Award, Users, Target, Zap, CheckCircle, Globe, TrendingUp, Star } from "lucide-react"
import { GlassCard } from "@/components/ui/glass-card"
import { AnimatedNumber } from "@/components/ui/animated-number"

export default function About() {
  const achievements = [
    { icon: Users, number: 50000, suffix: "+", label: "Active Students", color: "text-blue-600", bg: "from-blue-100 to-blue-200" },
    { icon: Globe, number: 120, suffix: "+", label: "Countries Served", color: "text-indigo-600", bg: "from-indigo-100 to-indigo-200" },
    { icon: Target, number: 98, suffix: "%", label: "Success Rate", color: "text-emerald-600", bg: "from-emerald-100 to-emerald-200" },
    { icon: TrendingUp, number: 4.9, suffix: "/5", label: "Average Rating", color: "text-purple-600", bg: "from-purple-100 to-purple-200" }
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
      image: "/placeholder-team-1.jpg",
      bg: "from-blue-500 to-blue-600"
    },
    {
      name: "Michael Rodriguez",
      role: "CTO",
      background: "Ex-Google AI Engineer",
      image: "/placeholder-team-2.jpg",
      bg: "from-indigo-500 to-indigo-600"
    },
    {
      name: "Prof. James Wilson",
      role: "Academic Advisor",
      background: "IELTS Content Specialist",
      image: "/placeholder-team-3.jpg",
      bg: "from-purple-500 to-purple-600"
    }
  ]

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-gradient-to-b from-blue-50/30 via-indigo-50/50 to-purple-50/30">
      {/* Elegant Light Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(59,130,246,0.06),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,rgba(99,102,241,0.04),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_80%,rgba(139,92,246,0.03),transparent_50%)]" />
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
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-50/80 to-indigo-50/80 backdrop-blur-xl border border-blue-200/50 rounded-full px-5 py-2.5 mb-6 shadow-light-sm">
            <Award className="w-4 h-4 text-blue-600" />
            <span className="text-blue-700 text-sm font-semibold">Award-Winning Platform</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight">
            <span className="bg-gradient-to-r from-slate-900 via-slate-700 to-slate-600 bg-clip-text text-transparent">
              Trusted by Millions
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Worldwide
            </span>
          </h2>
          
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-medium">
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
              <GlassCard variant="strong" className="text-center group hover:scale-105 transition-all duration-300">
                <div className={`w-16 h-16 bg-gradient-to-br ${achievement.bg} rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-light-md`}>
                  <achievement.icon className={`w-8 h-8 ${achievement.color}`} />
                </div>
                <div className="text-3xl font-bold text-slate-800 mb-2">
                  <AnimatedNumber
                    value={achievement.number}
                    suffix={achievement.suffix}
                    duration={2000}
                  />
                </div>
                <p className="text-slate-600 text-sm font-medium">{achievement.label}</p>
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
            <GlassCard variant="premium" className="h-full">
              <div className="p-8">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-light-md">
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-800">Our Mission</h3>
                </div>
                
                <p className="text-slate-600 leading-relaxed mb-6 font-medium">
                  We believe that language barriers shouldn&apos;t limit anyone&apos;s potential. 
                  That&apos;s why we created Pistah - to democratize access to world-class IELTS 
                  preparation through the power of artificial intelligence.
                </p>
                
                <p className="text-slate-600 leading-relaxed mb-6 font-medium">
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
                      <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                      <span className="text-slate-600 text-sm font-medium">{credential}</span>
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
            <GlassCard variant="premium" className="h-full">
              <div className="p-8">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-xl flex items-center justify-center shadow-light-md">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-800">Expert Team</h3>
                </div>
                
                <p className="text-slate-600 leading-relaxed mb-8 font-medium">
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
                      className="flex items-center space-x-4 p-4 rounded-xl bg-slate-50/60 hover:bg-slate-100/60 transition-all duration-300 border border-slate-200/30"
                    >
                      <div className={`w-12 h-12 bg-gradient-to-br ${member.bg} rounded-full flex items-center justify-center shadow-light-sm`}>
                        <span className="text-white font-bold text-sm">
                          {member.name.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                      <div>
                        <h4 className="text-slate-800 font-semibold">{member.name}</h4>
                        <p className="text-blue-600 text-sm font-medium">{member.role}</p>
                        <p className="text-slate-500 text-xs font-medium">{member.background}</p>
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
          <GlassCard variant="premium" glow className="p-12 max-w-4xl mx-auto">
            <div className="relative">
              {/* Background glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-indigo-500/5 to-purple-500/5 rounded-2xl blur-xl" />
              
              <div className="relative z-10">
                <div className="flex items-center justify-center space-x-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-light-lg">
                    <Award className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-left">
                    <h3 className="text-2xl font-bold text-slate-800">Backed by Google for Startups</h3>
                    <p className="text-blue-600 font-medium">Selected for innovation in AI-powered education</p>
                  </div>
                </div>
                
                <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto font-medium">
                  We&apos;re proud to be part of Google for Startups, working alongside the world&apos;s 
                  most innovative companies to transform education through technology.
                </p>
                
                <div className="flex justify-center items-center space-x-8">
                  <div className="flex items-center space-x-2">
                    <Star className="w-5 h-5 text-amber-500" />
                    <span className="text-slate-600 font-medium">Innovation Award Winner</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-emerald-500" />
                    <span className="text-slate-600 font-medium">Google Cloud Partner</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Globe className="w-5 h-5 text-blue-500" />
                    <span className="text-slate-600 font-medium">Global Impact</span>
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