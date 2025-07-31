import TestimonialsClient from "./TestimonialsClient"

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 relative overflow-hidden bg-gradient-to-b from-indigo-50/30 via-purple-50/50 to-pink-50/30">
      {/* Elegant Light Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(99,102,241,0.06),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(139,92,246,0.04),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(236,72,153,0.03),transparent_60%)]" />
      </div>

      <TestimonialsClient />
    </section>
  )
}
