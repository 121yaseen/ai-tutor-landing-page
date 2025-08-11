import Hero from "@/components/Hero"
import dynamic from "next/dynamic"

// Defer below-the-fold sections to reduce initial CSS/JS and improve LCP
const About = dynamic(() => import("@/components/About"), {
  loading: () => (
    <section id="about" className="py-24" aria-busy="true" aria-live="polite" />
  ),
})

const Features = dynamic(() => import("@/components/Features"), {
  loading: () => (
    <section id="features" className="py-24" aria-busy="true" aria-live="polite" />
  ),
})

const Pricing = dynamic(() => import("@/components/Pricing"), {
  loading: () => (
    <section id="pricing" className="py-24" aria-busy="true" aria-live="polite" />
  ),
})

const Testimonials = dynamic(() => import("@/components/Testimonials"), {
  loading: () => (
    <section id="testimonials" className="py-24" aria-busy="true" aria-live="polite" />
  ),
})

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-white via-slate-50 to-blue-50">
      <Hero />
      <About />
      <Features />
      <Pricing />
      <Testimonials />
    </main>
  )
}
