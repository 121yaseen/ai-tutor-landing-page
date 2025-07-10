"use client"

import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-lg text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 relative overflow-hidden",
  {
    variants: {
      variant: {
        default: "bg-white text-black hover:bg-white/90 shadow-lg shadow-white/25 border border-white/20 backdrop-blur-sm",
        primary: "bg-gradient-to-r from-amber-400 to-amber-500 text-black hover:from-amber-500 hover:to-amber-600 shadow-lg shadow-amber-500/25",
        glass: "bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 shadow-lg shadow-black/25",
        outline: "border border-white/20 bg-transparent text-white hover:bg-white/10 backdrop-blur-sm",
        ghost: "hover:bg-white/10 text-white backdrop-blur-sm",
        link: "text-white underline-offset-4 hover:underline",
        glow: "bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-600 hover:to-pink-600 shadow-lg shadow-purple-500/25 before:absolute before:inset-0 before:bg-gradient-to-r before:from-purple-400 before:to-pink-400 before:opacity-0 before:transition-opacity before:duration-300 hover:before:opacity-100",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        xl: "h-14 rounded-lg px-12 text-base",
        icon: "h-10 w-10",
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
        <span className="relative z-10">{children}</span>
      </Comp>
    )
  },
)
Button.displayName = "Button"

export { Button, buttonVariants } 