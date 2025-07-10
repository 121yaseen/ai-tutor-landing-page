import Hero from "@/components/Hero"
import About from "@/components/About"
import Features from "@/components/Features"
import Pricing from "@/components/Pricing"
import Testimonials from "@/components/Testimonials"

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
