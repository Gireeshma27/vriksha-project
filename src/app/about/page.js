import Link from "next/link";
import { ArrowLeft, Leaf, Heart, Globe, Award, Users, Package, Sprout, CheckCircle2 } from "lucide-react";
import Navbar from "@/components/Navbar";
import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Our Story | Vriksha – Pure Nature, Pure Nutrition",
  description:
    "Learn about Vriksha's journey from a small village kitchen in Kerala to bringing traditional organic nutrition to thousands of families.",
};

const milestones = [
  {
    year: "2014",
    title: "Humble Beginnings",
    description:
      "Founded in a small village kitchen in Kerala, India. Our founder Arjun Menon began sourcing traditional red rice directly from local farmers.",
    icon: Leaf,
    nodeColor: "bg-forest-600",
    cardAccent: "border-l-forest-500",
    yearBg: "bg-forest-700 text-green-300",
    iconBg: "bg-green-50 text-forest-600",
  },
  {
    year: "2017",
    title: "Organic Certification",
    description:
      "Achieved full organic certification across all products. Expanded our farm partner network to over 20 small-scale growers.",
    icon: Award,
    nodeColor: "bg-amber-600",
    cardAccent: "border-l-amber-500",
    yearBg: "bg-amber-700 text-amber-100",
    iconBg: "bg-amber-50 text-amber-700",
  },
  {
    year: "2020",
    title: "Reaching 2,000+ Families",
    description:
      "Crossed a milestone of 2,000 families nourished. Launched our herbal-infused range inspired by traditional Ayurvedic wisdom.",
    icon: Users,
    nodeColor: "bg-sky-600",
    cardAccent: "border-l-sky-500",
    yearBg: "bg-sky-700 text-sky-100",
    iconBg: "bg-sky-50 text-sky-700",
  },
  {
    year: "2024",
    title: "10+ Years of Heritage",
    description:
      "Now partnering with 50+ farm families and nourishing over 10,000 households with 100% chemical-free, ancient grain products.",
    icon: Heart,
    nodeColor: "bg-rose-600",
    cardAccent: "border-l-rose-500",
    yearBg: "bg-rose-700 text-rose-100",
    iconBg: "bg-rose-50 text-rose-700",
  },
];

const values = [
  {
    icon: Leaf,
    title: "Rooted in Tradition",
    description:
      "We preserve heirloom grain varieties and centuries-old preparation methods that modern food production has forgotten.",
    color: "bg-green-100 text-green-700",
  },
  {
    icon: Heart,
    title: "Community First",
    description:
      "Every purchase directly supports the livelihoods of small-scale organic farmers and their families across South India.",
    color: "bg-rose-100 text-rose-700",
  },
  {
    icon: Globe,
    title: "Planet Positive",
    description:
      "We embrace regenerative farming practices that restore soil health, conserve water, and protect local biodiversity.",
    color: "bg-sky-100 text-sky-700",
  },
  {
    icon: Award,
    title: "Uncompromising Quality",
    description:
      "Every batch is independently lab-tested for purity, heavy metals, and pesticide residues before it reaches your table.",
    color: "bg-amber-100 text-amber-700",
  },
];

const stats = [
  { icon: Users, value: "10K+", label: "Families Nourished" },
  { icon: Package, value: "50+", label: "Farm Partners" },
  { icon: Sprout, value: "100%", label: "Organic Certified" },
  { icon: Award, value: "10+", label: "Years of Heritage" },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-cream">
      <Navbar />

      {/* Page Hero */}
      <section className="relative bg-forest-800 overflow-hidden pt-32 pb-24">
        <div className="absolute inset-0 opacity-25">
          <img
            src="/images/about-rice-field.png"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-forest-900/70 via-forest-800/80 to-forest-800" />

        {/* Ambient orbs */}
        <div className="absolute top-10 right-20 w-80 h-80 bg-green-400/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-10 w-64 h-64 bg-earth-300/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/12 backdrop-blur-sm border border-white/20 rounded-full text-white/90 text-sm font-semibold mb-6 uppercase tracking-wider">
            <Leaf className="w-3.5 h-3.5 text-green-300" />
            Our Story
          </div>
          <h1
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-5"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Where Ancient{" "}
            <span className="text-green-300">Wisdom</span>
            <br />
            Meets Modern Wellness
          </h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto leading-relaxed mb-8">
            From a small village kitchen in Kerala to nourishing thousands of
            families — this is the Vriksha story.
          </p>
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-white/60 hover:text-white text-sm font-medium transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-white border-b border-green-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 divide-x divide-green-100">
            {stats.map(({ icon: Icon, value, label }) => (
              <div key={label} className="flex flex-col sm:flex-row items-center gap-3 py-7 px-6 sm:px-8">
                <div className="w-10 h-10 rounded-xl bg-green-50 flex items-center justify-center shrink-0">
                  <Icon className="w-5 h-5 text-forest-600" />
                </div>
                <div className="text-center sm:text-left">
                  <div
                    className="text-2xl font-bold text-forest-700"
                    style={{ fontFamily: "var(--font-playfair)" }}
                  >
                    {value}
                  </div>
                  <div className="text-xs text-forest-500 font-medium">{label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main About Content (reuse existing component) */}
      <AboutSection />

      {/* Our Values */}
      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-green-100 text-forest-600 text-sm font-semibold rounded-full mb-5 uppercase tracking-wider">
              <Leaf className="w-3.5 h-3.5" />
              What We Stand For
            </div>
            <h2
              className="text-4xl sm:text-5xl font-bold text-forest-800 leading-tight"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Our Core <span className="text-forest-500">Values</span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map(({ icon: Icon, title, description, color }) => (
              <div
                key={title}
                className="bg-white rounded-3xl p-7 border border-green-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-4 ${color}`}>
                  <Icon className="w-6 h-6" />
                </div>
                <h3
                  className="font-bold text-forest-800 mb-2"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  {title}
                </h3>
                <p className="text-sm text-forest-500 leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-earth-100 text-earth-700 text-sm font-semibold rounded-full mb-5 uppercase tracking-wider">
              <Award className="w-3.5 h-3.5" />
              Milestones
            </div>
            <h2
              className="text-4xl sm:text-5xl font-bold text-forest-800"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Our Journey
            </h2>
            <p className="mt-3 text-forest-500 max-w-lg mx-auto text-sm">
              A decade of growing with purpose — one harvest, one family, one community at a time.
            </p>
          </div>

          <div className="relative">
            {/* Vertical gradient line */}
            <div className="absolute left-6 sm:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-forest-300 via-amber-300 to-rose-300 -translate-x-1/2" />

            <div className="space-y-12">
              {milestones.map((m, i) => {
                const Icon = m.icon;
                return (
                  <div
                    key={m.year}
                    className={`relative flex items-start gap-6 sm:gap-0 ${
                      i % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"
                    }`}
                  >
                    {/* Icon node */}
                    <div
                      className={`absolute left-6 sm:left-1/2 w-11 h-11 ${m.nodeColor} text-white rounded-full -translate-x-1/2 z-10 ring-4 ring-white flex items-center justify-center shadow-md`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>

                    {/* Card */}
                    <div
                      className={`ml-16 sm:ml-0 w-full sm:w-[calc(50%-2.5rem)] ${
                        i % 2 === 0 ? "sm:pr-12" : "sm:pl-12"
                      }`}
                    >
                      <div
                        className={`group bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 border-l-4 ${m.cardAccent}`}
                      >
                        {/* Year badge + icon */}
                        <div className="flex items-center gap-3 mb-3">
                          <span
                            className={`inline-flex items-center px-3 py-1 ${m.yearBg} text-xs font-bold rounded-full uppercase tracking-wider`}
                          >
                            {m.year}
                          </span>
                          <span
                            className={`inline-flex items-center justify-center w-7 h-7 rounded-full ${m.iconBg}`}
                          >
                            <Icon className="w-3.5 h-3.5" />
                          </span>
                        </div>
                        <h3
                          className="text-lg font-bold text-forest-800 mb-2 group-hover:text-forest-600 transition-colors"
                          style={{ fontFamily: "var(--font-playfair)" }}
                        >
                          {m.title}
                        </h3>
                        <p className="text-sm text-forest-500 leading-relaxed">
                          {m.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-cream">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-forest-700 rounded-3xl px-8 py-14 relative overflow-hidden">
            <div className="absolute inset-0 opacity-15">
              <img
                src="/images/about-organic-farm.png"
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-br from-forest-800/80 to-forest-600/70" />
            <div className="relative z-10">
              <h2
                className="text-3xl sm:text-4xl font-bold text-white mb-3"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                Taste Our Heritage
              </h2>
              <p className="text-white/70 mb-8 max-w-lg mx-auto">
                Experience the difference that 10+ years of organic farming
                expertise and traditional wisdom brings to your table.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/products"
                  className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-white text-forest-700 font-semibold rounded-full shadow-lg hover:bg-green-50 transition-colors"
                >
                  Shop Our Products
                </Link>
                <Link
                  href="/recipes"
                  className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-white/15 border border-white/30 text-white font-semibold rounded-full hover:bg-white/25 transition-colors"
                >
                  Explore Recipes
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
