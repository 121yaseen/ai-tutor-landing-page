"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface GlassCardProps {
  children: React.ReactNode
  className?: string
  variant?: "default" | "subtle" | "strong"
  hover?: boolean
  glow?: boolean
}

export function GlassCard({ 
  children, 
  className, 
  variant = "default",
  hover = true,
  glow = false
}: GlassCardProps) {
  const variants = {
    default: "bg-white/10 backdrop-blur-md border border-white/20",
    subtle: "bg-white/5 backdrop-blur-sm border border-white/10",
    strong: "bg-white/20 backdrop-blur-lg border border-white/30"
  }

  return (
    <motion.div
      className={cn(
        "relative rounded-xl shadow-lg overflow-hidden",
        variants[variant],
        hover && "transition-all duration-300 hover:bg-white/15 hover:shadow-xl hover:scale-105",
        glow && "shadow-2xl shadow-white/10",
        className
      )}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {glow && (
        <div className="absolute inset-0 bg-gradient-to-r from-purple-400/10 via-pink-400/10 to-amber-400/10 rounded-xl" />
      )}
      <div className="relative z-10 p-6">
        {children}
      </div>
    </motion.div>
  )
} 