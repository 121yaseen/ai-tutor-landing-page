"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

interface AnimatedNumberProps {
  value: number
  duration?: number
  className?: string
  prefix?: string
  suffix?: string
  formatValue?: (value: number) => string
}

export function AnimatedNumber({
  value,
  duration = 2000,
  className,
  prefix = "",
  suffix = "",
  formatValue
}: AnimatedNumberProps) {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    let start = 0
    const end = value
    if (start === end) return

    const totalMilSecDur = parseInt(duration.toString())
    const incrementTime = (totalMilSecDur / end) * 1000

    const timer = setInterval(() => {
      start += 1
      setCurrent(start)
      if (start === end) clearInterval(timer)
    }, incrementTime)

    return () => clearInterval(timer)
  }, [value, duration])

  const displayValue = formatValue ? formatValue(current) : current.toLocaleString()

  return (
    <motion.span
      className={className}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {prefix}{displayValue}{suffix}
    </motion.span>
  )
} 