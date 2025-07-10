"use client"

import { motion } from "framer-motion"
import { Check, Star, Zap, Crown, Users, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { GlassCard } from "@/components/ui/glass-card"

export default function Pricing() {
  const plans = [
    {
      name: "Starter",
      icon: Sparkles,
      price: 0,
      period: "Free forever",
      description: "Perfect for getting started with IELTS preparation",
      features: [
        "5 AI speaking sessions per week",
        "Basic progress tracking",
        "Community support",
        "Mobile app access",
        "Basic study materials"
      ],
      cta: "Start Free",
      variant: "outline" as const,
      popular: false
    },
    {
      name: "Pro",
      icon: Zap,
      price: 29,
      period: "per month",
      description: "Advanced features for serious IELTS candidates",
      features: [
        "Unlimited AI speaking practice",
        "All 4 skills (Speaking, Writing, Reading, Listening)",
        "Personalized study plan",
        "Advanced analytics & insights",
        "Priority support",
        "Mock test simulations",
        "Score prediction algorithm",
        "Offline practice mode"
      ],
      cta: "Start Pro Trial",
      variant: "primary" as const,
      popular: true
    },
    {
      name: "Enterprise",
      icon: Crown,
      price: null,
      period: "Custom pricing",
      description: "Tailored solution for institutions and organizations",
      features: [
        "Everything in Pro",
        "Bulk user management",
        "Custom branding",
        "API access",
        "Dedicated account manager",
        "Advanced reporting",
        "SSO integration",
        "Custom integrations"
      ],
      cta: "Contact Sales",
      variant: "glass" as const,
      popular: false
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }

  return (
    <section id="pricing" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900/50 to-black">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,191,0,0.1),transparent_70%)]" />
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:80px_80px] opacity-30" />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-amber-500/10 to-amber-600/10 backdrop-blur-md border border-amber-500/20 rounded-full px-4 py-2 mb-6">
            <Star className="w-4 h-4 text-amber-400" />
            <span className="text-amber-200 text-sm font-medium">Transparent Pricing</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Choose Your
            </span>
            <br />
            <span className="bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
              Success Plan
            </span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Start free, upgrade when you&apos;re ready. All plans include our core AI technology 
            and are designed to help you achieve your target IELTS score.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto"
        >
          {plans.map((plan) => (
            <motion.div
              key={plan.name}
              variants={cardVariants}
              className="relative"
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20">
                  <div className="bg-gradient-to-r from-amber-400 to-amber-600 text-black px-4 py-1 rounded-full text-sm font-bold flex items-center space-x-1">
                    <Star className="w-4 h-4" />
                    <span>Most Popular</span>
                  </div>
                </div>
              )}

              <GlassCard 
                variant={plan.popular ? "strong" : "default"}
                glow={plan.popular}
                className={`h-full ${plan.popular ? 'ring-2 ring-amber-500/50 scale-105' : ''}`}
              >
                <div className="p-8 h-full flex flex-col">
                  {/* Header */}
                  <div className="text-center mb-8">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-amber-400/20 to-amber-600/20 rounded-xl mb-4">
                      <plan.icon className="w-8 h-8 text-amber-400" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-300 text-sm">{plan.description}</p>
                  </div>

                  {/* Pricing */}
                  <div className="text-center mb-8">
                    {plan.price !== null ? (
                      <>
                        <div className="flex items-baseline justify-center space-x-1">
                          <span className="text-4xl font-bold text-white">${plan.price}</span>
                          <span className="text-gray-400">{plan.period}</span>
                        </div>
                        {plan.price > 0 && (
                          <p className="text-sm text-gray-400 mt-2">
                            7-day free trial • Cancel anytime
                          </p>
                        )}
                      </>
                    ) : (
                      <div className="text-2xl font-bold text-white">{plan.period}</div>
                    )}
                  </div>

                  {/* Features */}
                  <div className="flex-1 mb-8">
                    <ul className="space-y-4">
                      {plan.features.map((feature, featureIndex) => (
                        <motion.li
                          key={featureIndex}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: featureIndex * 0.1 }}
                          viewport={{ once: true }}
                          className="flex items-start space-x-3"
                        >
                          <div className="flex-shrink-0 w-5 h-5 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center mt-0.5">
                            <Check className="w-3 h-3 text-white" />
                          </div>
                          <span className="text-gray-300 text-sm leading-relaxed">{feature}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA */}
                  <Button 
                    variant={plan.variant}
                    size="lg"
                    className="w-full group"
                  >
                    <span className="flex items-center justify-center space-x-2">
                      <span>{plan.cta}</span>
                      {plan.name === "Enterprise" ? (
                        <Users className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                      ) : (
                        <Zap className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                      )}
                    </span>
                  </Button>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="max-w-4xl mx-auto">
            <GlassCard variant="subtle" className="p-8">
              <div className="grid md:grid-cols-3 gap-8 text-center">
                <div>
                  <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-green-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Check className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-lg font-bold text-white mb-2">Money-Back Guarantee</h4>
                                     <p className="text-gray-300 text-sm">30-day full refund if you&apos;re not satisfied</p>
                </div>
                <div>
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-lg font-bold text-white mb-2">50,000+ Students</h4>
                  <p className="text-gray-300 text-sm">Join thousands of successful IELTS candidates</p>
                </div>
                <div>
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Star className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-lg font-bold text-white mb-2">4.9/5 Rating</h4>
                  <p className="text-gray-300 text-sm">Highest rated IELTS preparation platform</p>
                </div>
              </div>
            </GlassCard>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 