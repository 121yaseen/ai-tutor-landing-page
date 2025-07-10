"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface GlassCardProps {
  children: React.ReactNode
  className?: string
  variant?: "default" | "subtle" | "strong" | "premium"
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
    default: "bg-white/70 backdrop-blur-xl border border-white/30 shadow-light-md",
    subtle: "bg-white/50 backdrop-blur-lg border border-white/20 shadow-light-sm",
    strong: "bg-white/85 backdrop-blur-2xl border border-white/40 shadow-light-lg",
    premium: "bg-gradient-to-br from-white/80 to-white/60 backdrop-blur-2xl border border-white/30 shadow-light-xl"
  }

  const hoverEffects = {
    default: "hover:bg-white/75 hover:shadow-light-lg hover:border-white/40",
    subtle: "hover:bg-white/60 hover:shadow-light-md hover:border-white/30",
    strong: "hover:bg-white/90 hover:shadow-light-xl hover:border-white/50",
    premium: "hover:from-white/85 hover:to-white/70 hover:shadow-light-xl hover:border-white/40"
  }

  return (
    <motion.div
      className={cn(
        "relative rounded-2xl overflow-hidden transition-all duration-500 ease-out",
        variants[variant],
        hover && `${hoverEffects[variant]} hover:scale-[1.02] hover:-translate-y-1`,
        glow && "glow-light",
        className
      )}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      whileHover={hover ? { 
        scale: 1.02,
        y: -4,
        transition: { duration: 0.3, ease: "easeOut" }
      } : undefined}
    >
      {/* Subtle gradient overlay for premium look */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-transparent to-indigo-50/20 rounded-2xl opacity-60" />
      
      {/* Enhanced glow effect for light theme */}
      {glow && (
        <>
          <div className="absolute inset-0 bg-gradient-to-r from-blue-400/10 via-indigo-400/10 to-purple-400/10 rounded-2xl blur-sm" />
          <div className="absolute -inset-2 bg-gradient-to-r from-blue-400/5 via-indigo-400/5 to-purple-400/5 rounded-2xl blur-xl" />
        </>
      )}
      
      {/* Content container with proper z-index */}
      <div className="relative z-10 p-6">
        {children}
      </div>
      
      {/* Subtle inner border for premium effect */}
      <div className="absolute inset-[1px] rounded-2xl border border-white/20 pointer-events-none" />
    </motion.div>
  )
} 