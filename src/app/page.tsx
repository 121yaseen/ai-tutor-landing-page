import Navbar from "@/components/Navbar"
import Hero from "@/components/Hero"
import About from "@/components/About"
import Features from "@/components/Features"
import Pricing from "@/components/Pricing"
import Testimonials from "@/components/Testimonials"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <Navbar />
      <Hero />
      <About />
      <Features />
      <Pricing />
      <Testimonials />
      <Footer />
    </main>
  )
}
