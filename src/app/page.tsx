import Hero from "@/components/Hero"
import About from "@/components/About"
import Features from "@/components/Features"
import Pricing from "@/components/Pricing"
import Testimonials from "@/components/Testimonials"

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <Hero />
      <About />
      <Features />
      <Pricing />
      <Testimonials />
    </main>
  )
}
