"use client"

import { motion, useSpring, useTransform } from "framer-motion"
import { useEffect } from "react"

export function AnimatedNumber({
  value,
  prefix = "",
  suffix = "",
}: {
  value: number
  prefix?: string
  suffix?: string
}) {
  const spring = useSpring(0, {
    damping: 100,
    stiffness: 100,
    mass: 2,
  })

  useEffect(() => {
    spring.set(value)
  }, [spring, value])

  const display = useTransform(spring, (current) => {
    if (Number.isInteger(value)) {
      return Math.round(current).toLocaleString()
    }
    return parseFloat(current.toFixed(1)).toLocaleString()
  })

  return (
    <motion.span>
      {prefix}
      <motion.span>{display}</motion.span>
      {suffix}
    </motion.span>
  )
} 