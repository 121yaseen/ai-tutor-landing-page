"use client"

import { motion } from "framer-motion"
import { 
  CheckIcon, 
  StarIcon, 
  BoltIcon, 
  Bars3Icon as CrownIcon, 
  UsersIcon, 
  SparklesIcon 
} from "@heroicons/react/24/solid"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { GlassCard } from "@/components/ui/glass-card"

const plans = [
  {
    name: "Starter",
    icon: SparklesIcon,
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
    popular: false,
    tags: [],
    iconColor: "text-blue-600",
    iconBg: "from-blue-100 to-blue-200"
  },
  {
    name: "Pro",
    icon: BoltIcon,
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
    popular: false,
    tags: ["Coming Soon"],
    iconColor: "text-white",
    iconBg: "from-blue-500 to-indigo-600"
  },
  {
    name: "Enterprise",
    icon: CrownIcon,
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
    popular: false,
    tags: ["Coming Soon"],
    iconColor: "text-purple-600",
    iconBg: "from-purple-100 to-purple-200"
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

export default function PricingClient() {
  return (
    <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-50/80 to-indigo-50/80 backdrop-blur-xl border border-blue-200/50 rounded-full px-5 py-2.5 mb-6 shadow-light-sm">
          <StarIcon className="w-4 h-4 text-blue-600" />
          <span className="text-blue-700 text-sm font-semibold">Transparent Pricing</span>
        </div>
        
        <h2 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight">
          <span className="bg-gradient-to-r from-slate-900 via-slate-700 to-slate-600 bg-clip-text text-transparent">
            Choose Your
          </span>
          <br />
          <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
            Success Plan
          </span>
        </h2>
        
        <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-medium">
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
                <div className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-4 py-1.5 rounded-full text-sm font-bold flex items-center space-x-1 shadow-light-lg">
                  <Star className="w-4 h-4" />
                  <span>Most Popular</span>
                </div>
              </div>
            )}

            <GlassCard 
              variant={plan.popular ? "premium" : "strong"}
              glow={plan.popular}
              className={`h-full transition-all duration-300 ${plan.popular ? 'ring-2 ring-blue-200/50 scale-105 hover:scale-105 shadow-light-xl' : 'hover:scale-[1.02]'}`}
            >
              <div className="p-8 h-full flex flex-col">
                {/* Tags */}
                {(plan.popular || plan.tags.length > 0) && (
                  <div className="text-center mb-6 space-y-2">
                    {/* Most Popular Badge */}
                    {plan.popular && (
                      <div className="inline-flex items-center space-x-1 bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-4 py-1.5 rounded-full text-sm font-bold shadow-light-lg">
                        <StarIcon className="w-4 h-4" />
                        <span>Most Popular</span>
                      </div>
                    )}
                    {/* Other Tags */}
                    {plan.tags.map((tag, tagIndex) => (
                      <div key={tagIndex} className="inline-flex items-center space-x-1 bg-gradient-to-r from-amber-500 to-orange-600 text-white px-4 py-1.5 rounded-full text-sm font-bold shadow-light-sm">
                        <span>{tag}</span>
                      </div>
                    ))}
                  </div>
                )}
                {/* Spacer for plans without any tags to maintain alignment */}
                {!plan.popular && plan.tags.length === 0 && <div className="mb-6"></div>}
                {/* Header */}
                <div className="text-center mb-8">
                  <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${plan.iconBg} rounded-xl mb-4 shadow-light-md`}>
                    <plan.icon className={`w-8 h-8 ${plan.iconColor}`} />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-800 mb-2">{plan.name}</h3>
                  <p className="text-slate-600 text-sm font-medium">{plan.description}</p>
                </div>

                {/* Pricing */}
                <div className="text-center mb-8">
                  {plan.price !== null ? (
                    <>
                      <div className="flex items-baseline justify-center space-x-1">
                        <span className="text-4xl font-bold text-slate-800">${plan.price}</span>
                        <span className="text-slate-500 font-medium">{plan.period}</span>
                      </div>
                      {plan.price > 0 && (
                        <p className="text-sm text-slate-500 mt-2 font-medium">
                          7-day free trial • Cancel anytime
                        </p>
                      )}
                    </>
                  ) : (
                    <div className="text-2xl font-bold text-slate-800">{plan.period}</div>
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
                        <div className="flex-shrink-0 w-5 h-5 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-full flex items-center justify-center mt-0.5 shadow-sm">
                          <CheckIcon className="w-3 h-3 text-white" />
                        </div>
                        <span className="text-slate-600 text-sm leading-relaxed font-medium">{feature}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* CTA */}
                {plan.name === "Enterprise" ? (
                  <Button 
                    variant={plan.variant}
                    size="lg"
                    className="w-full group"
                  >
                    <span className="flex items-center justify-center space-x-2">
                      <span>{plan.cta}</span>
                      <UsersIcon className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </Button>
                ) : (
                  <Link href="https://learn.pistah.live">
                    <Button 
                      variant={plan.variant}
                      size="lg"
                      className="w-full group"
                    >
                      <span className="flex items-center justify-center space-x-2">
                        <span>{plan.cta}</span>
                        <BoltIcon className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                      </span>
                    </Button>
                  </Link>
                )}
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
          <GlassCard variant="default" className="p-8">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-light-md">
                  <CheckIcon className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-lg font-bold text-slate-800 mb-2">Money-Back Guarantee</h4>
                <p className="text-slate-600 text-sm font-medium">30-day full refund if you&apos;re not satisfied</p>
              </div>
              <div>
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-light-md">
                  <UsersIcon className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-lg font-bold text-slate-800 mb-2">50+ Students</h4>
                <p className="text-slate-600 text-sm font-medium">Join successful IELTS candidates</p>
              </div>
              <div>
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-light-md">
                  <StarIcon className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-lg font-bold text-slate-800 mb-2">4.9/5 Rating</h4>
                <p className="text-slate-600 text-sm font-medium">Highest rated IELTS preparation platform</p>
              </div>
            </div>
          </GlassCard>
        </div>
      </motion.div>
    </div>
  )
}
