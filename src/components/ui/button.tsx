"use client"

import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-xl text-sm font-semibold ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 relative overflow-hidden backdrop-blur-xl",
  {
    variants: {
      variant: {
        default: "bg-white/90 text-slate-800 hover:bg-white shadow-light-md hover:shadow-light-lg border border-white/40 backdrop-blur-xl",
        primary: "bg-gradient-to-r from-blue-500 to-indigo-600 text-white hover:from-blue-600 hover:to-indigo-700 shadow-light-lg hover:shadow-light-xl shadow-blue-500/25",
        glass: "bg-white/60 backdrop-blur-xl border border-white/30 text-slate-700 hover:bg-white/75 shadow-light-md hover:shadow-light-lg",
        outline: "border-2 border-blue-200 bg-transparent text-slate-700 hover:bg-blue-50 hover:border-blue-300 backdrop-blur-sm",
        ghost: "hover:bg-blue-50 text-slate-700 backdrop-blur-sm hover:shadow-light-sm",
        link: "text-blue-600 underline-offset-4 hover:underline hover:text-blue-700",
        glow: "bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 text-white hover:from-blue-600 hover:via-indigo-600 hover:to-purple-700 shadow-light-xl glow-light before:absolute before:inset-0 before:bg-gradient-to-r before:from-blue-400 before:via-indigo-400 before:to-purple-500 before:opacity-0 before:transition-opacity before:duration-300 hover:before:opacity-20",
        accent: "bg-gradient-to-r from-indigo-500 to-purple-600 text-white hover:from-indigo-600 hover:to-purple-700 shadow-light-lg hover:shadow-light-xl shadow-indigo-500/25",
      },
      size: {
        default: "h-11 px-6 py-2.5",
        sm: "h-9 rounded-lg px-4 text-sm",
        lg: "h-12 rounded-xl px-8 text-base",
        xl: "h-14 rounded-xl px-12 text-lg font-semibold",
        icon: "h-11 w-11",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, children, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      >
        <span className="relative z-10 flex items-center justify-center gap-2">{children}</span>
      </Comp>
    )
  },
)
Button.displayName = "Button"

export { Button, buttonVariants } 