import FeaturesClient from "./FeaturesClient"

export default function Features() {
  return (
    <section id="features" className="py-24 relative overflow-hidden bg-gradient-to-b from-white via-gray-50/50 to-blue-50/30">
      {/* Elegant Light Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(99,102,241,0.08),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(59,130,246,0.06),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_60%_40%,rgba(139,92,246,0.04),transparent_50%)]" />
      </div>

      <FeaturesClient />
    </section>
  )
}
