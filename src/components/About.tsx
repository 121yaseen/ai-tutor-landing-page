import AboutClient from "./AboutClient"

export default function About() {
  return (
    <section
      id="about"
      className="py-24 relative overflow-hidden bg-gradient-to-b from-blue-50/30 via-indigo-50/50 to-purple-50/30"
    >
      {/* Elegant Light Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(59,130,246,0.06),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,rgba(99,102,241,0.04),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_80%,rgba(139,92,246,0.03),transparent_50%)]" />
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <AboutClient />
      </div>
    </section>
  )
}
