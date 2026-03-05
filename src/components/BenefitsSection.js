"use client";

import {
  Leaf,
  Zap,
  Shield,
  BookOpen,
  Globe,
  Star,
  ArrowRight,
  Wheat,
} from "lucide-react";
import { motion } from "framer-motion";
import {
  AnimateOnScroll,
  StaggerOnScroll,
  StaggerItem,
  fadeLeft,
  fadeRight,
} from "./AnimationUtils";

const features = [
  {
    icon: Leaf,
    title: "100% Natural Ingredients",
    description:
      "Every ingredient is sourced directly from nature — no synthetic additives, no preservatives, no artificial anything. Just pure, whole food.",
    accent: "from-green-500 to-emerald-400",
    iconBg: "bg-green-100",
    iconColor: "text-green-700",
    stat: "Zero",
    statLabel: "Additives",
  },
  {
    icon: Shield,
    title: "Chemical-Free Farming",
    description:
      "Grown without pesticides, herbicides, or synthetic fertilizers. Clean food for a clean body — as nature intended.",
    accent: "from-forest-500 to-green-500",
    iconBg: "bg-forest-100",
    iconColor: "text-forest-700",
    stat: "100%",
    statLabel: "Organic",
  },
  {
    icon: Wheat,
    title: "Traditional Rice Varieties",
    description:
      "We preserve heirloom rice varieties cultivated for over 3,000 years — red rice, brown rice, and ancient millets, each with unique nutritional profiles.",
    accent: "from-earth-400 to-amber-400",
    iconBg: "bg-earth-100",
    iconColor: "text-earth-700",
    stat: "3000+",
    statLabel: "Years Heritage",
  },
  {
    icon: Globe,
    title: "Sustainable Farming",
    description:
      "We support regenerative agriculture practices that restore soil health, reduce water usage, and protect biodiversity for future generations.",
    accent: "from-teal-500 to-green-400",
    iconBg: "bg-teal-100",
    iconColor: "text-teal-700",
    stat: "50+",
    statLabel: "Farm Partners",
  },
  {
    icon: Zap,
    title: "High Nutritional Value",
    description:
      "Our minimal-processing approach ensures that the natural vitamins, minerals, and fiber content of every grain are fully preserved.",
    accent: "from-amber-500 to-yellow-400",
    iconBg: "bg-amber-100",
    iconColor: "text-amber-700",
    stat: "3×",
    statLabel: "More Nutrients",
  },
  {
    icon: Star,
    title: "Farm Fresh Quality",
    description:
      "Every batch is independently lab-tested and directly sourced from our farm partners, guaranteeing freshness and purity in every grain.",
    accent: "from-violet-500 to-purple-400",
    iconBg: "bg-violet-100",
    iconColor: "text-violet-700",
    stat: "10K+",
    statLabel: "Families Trust Us",
  },
];

export default function BenefitsSection() {
  return (
    <section className="pt-20 pb-10 bg-white overflow-hidden relative">
      {/* Subtle organic shape backgrounds */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-green-50 rounded-full -translate-y-1/2 translate-x-1/3 blur-3xl opacity-60 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-earth-50 rounded-full translate-y-1/3 -translate-x-1/4 blur-3xl opacity-50 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <AnimateOnScroll className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-forest-700 text-green-200 text-sm font-semibold rounded-full mb-5 uppercase tracking-wider">
            <Leaf className="w-3.5 h-3.5" />
            Why Choose Us
          </div>
          <h2
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-forest-800 mb-5 leading-tight"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            The Vriksha{" "}
            <span className="text-forest-500">Difference</span>
          </h2>
          <p className="text-forest-500 text-lg max-w-2xl mx-auto leading-relaxed">
            We believe that good nutrition starts with honest ingredients. Here
            is what sets every Vriksha product apart from the rest.
          </p>
        </AnimateOnScroll>

        {/* Feature cards — Bento-style layout */}
        <div className="grid lg:grid-cols-3 gap-6 mb-20">
          {features.map(
            (
              {
                icon: Icon,
                title,
                description,
                accent,
                iconBg,
                iconColor,
                stat,
                statLabel,
              },
              i
            ) => (
              <motion.div
                key={title}
                className="group relative bg-cream rounded-3xl p-7 border border-green-100/80 overflow-hidden cursor-default"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: i * 0.08,
                  duration: 0.55,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={{
                  y: -6,
                  boxShadow: "0 25px 60px -12px rgba(15,45,30,0.15)",
                }}
              >
                {/* Accent gradient bar at top */}
                <div
                  className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${accent} scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}
                />

                <div className="flex items-start justify-between mb-5">
                  <motion.div
                    className={`w-14 h-14 ${iconBg} rounded-2xl flex items-center justify-center`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Icon className={`w-7 h-7 ${iconColor}`} />
                  </motion.div>
                  {/* Mini stat */}
                  <div className="text-right">
                    <div
                      className="text-2xl font-bold text-forest-700"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      {stat}
                    </div>
                    <div className="text-[10px] text-forest-400 uppercase tracking-wider font-medium">
                      {statLabel}
                    </div>
                  </div>
                </div>

                <h3
                  className="text-lg font-bold text-forest-800 mb-3"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  {title}
                </h3>
                <p className="text-sm text-forest-500 leading-relaxed">
                  {description}
                </p>

                {/* Hover reveal arrow */}
                <div className="mt-4 flex items-center gap-1.5 text-forest-400 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                  <span className="text-xs font-semibold">Learn More</span>
                  <ArrowRight className="w-3 h-3" />
                </div>
              </motion.div>
            )
          )}
        </div>

        {/* Full-width image strip */}
        <AnimateOnScroll>
          <div className="relative rounded-3xl overflow-hidden h-56 sm:h-72 shadow-xl">
            <img
              src="/images/hero-bg.png"
              alt="Panoramic rice field landscape"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-forest-900/80 via-forest-900/40 to-transparent" />
            <div className="absolute inset-0 flex items-center px-8 sm:px-14">
              <div>
                <h3
                  className="text-3xl sm:text-4xl font-bold text-white mb-3 max-w-md"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  Taste the Difference Today
                </h3>
                <p className="text-white/70 mb-6 max-w-sm text-sm sm:text-base">
                  Join over 10,000 families who have made Vriksha part of their
                  daily nutrition ritual.
                </p>
                <motion.a
                  href="#products"
                  className="inline-flex items-center gap-2 px-7 py-3 bg-white text-forest-700 font-semibold rounded-full shadow-lg text-sm"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ duration: 0.2 }}
                >
                  Explore All Products
                  <ArrowRight className="w-4 h-4" />
                </motion.a>
              </div>
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
