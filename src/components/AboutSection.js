"use client";

import { Leaf, Award, Heart, Globe, Quote } from "lucide-react";
import { motion } from "framer-motion";
import { AnimateOnScroll, fadeLeft, fadeRight } from "./AnimationUtils";

const pillars = [
  {
    icon: Leaf,
    title: "Traditional Natural Food",
    description:
      "Our recipes are rooted in generations of traditional food wisdom, passed down through families who understood the healing power of nature.",
  },
  {
    icon: Globe,
    title: "Sustainably Sourced",
    description:
      "We partner directly with small-scale organic farmers who share our commitment to sustainable agriculture and ethical land stewardship.",
  },
  {
    icon: Heart,
    title: "Healthy Daily Nutrition",
    description:
      "Every product is formulated to fit seamlessly into your daily routine, providing balanced nutrition without compromising on flavor.",
  },
  {
    icon: Award,
    title: "Certified Organic",
    description:
      "All our products carry full organic certification, ensuring you receive only the purest ingredients, free from pesticides and GMOs.",
  },
];

const stats = [
  { value: "10+", label: "Years of Heritage" },
  { value: "50+", label: "Farm Partners" },
  { value: "100%", label: "Organic Certified" },
  { value: "10K+", label: "Families Nourished" },
];

export default function AboutSection() {
  return (
    <section id="about" className="pt-20 pb-10 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Top Section Label */}
        <AnimateOnScroll className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-green-100 text-forest-600 text-sm font-semibold rounded-full mb-5 uppercase tracking-wider">
            <Leaf className="w-3.5 h-3.5" />
            Our Story
          </div>
          <h2
            className="text-4xl sm:text-5xl font-bold text-forest-800 leading-tight max-w-3xl mx-auto"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Where Ancient <span className="text-forest-500">Wisdom</span> Meets{" "}
            <span className="text-earth-600">Modern Wellness</span>
          </h2>
        </AnimateOnScroll>

        {/* Split: Single tall image | Content */}
        <div className="grid lg:grid-cols-2 gap-10 items-stretch mb-12">

          {/* Left: Full-height image with overlay stats */}
          <AnimateOnScroll variants={fadeLeft} className="relative rounded-3xl overflow-hidden min-h-[480px]">
            <motion.img
              src="/images/about-rice-field.png"
              alt="Organic rice fields of Kerala"
              className="absolute inset-0 w-full h-full object-cover"
              whileHover={{ scale: 1.04 }}
              transition={{ duration: 0.9, ease: "easeOut" }}
            />
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-forest-900/85 via-forest-900/15 to-transparent" />
            {/* Top-left organic badge */}
            <div className="absolute top-5 left-5">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white/15 backdrop-blur-sm border border-white/25 rounded-full text-white/90 text-xs font-semibold uppercase tracking-widest">
                <Leaf className="w-3 h-3 text-green-300" />
                Kerala, India
              </span>
            </div>
            {/* Bottom overlay: thumbnails + stats */}
            <div className="absolute bottom-0 left-0 right-0 p-6">
              {/* Thumbnail strip */}
              <div className="flex gap-2.5 mb-4">
                {[
                  { src: "/images/about-farmer.png", alt: "Farmer" },
                  { src: "/images/about-grains.png", alt: "Grains" },
                  { src: "/images/about-organic-farm.png", alt: "Farm" },
                ].map(({ src, alt }, i) => (
                  <motion.div
                    key={i}
                    className="w-14 h-14 rounded-2xl overflow-hidden ring-2 ring-white/30 shadow-lg"
                    whileHover={{ scale: 1.1, y: -2 }}
                    transition={{ duration: 0.25 }}
                  >
                    <img src={src} alt={alt} className="w-full h-full object-cover" />
                  </motion.div>
                ))}
                <div className="h-14 flex items-center pl-1">
                  <span className="text-white/50 text-xs font-medium">+more</span>
                </div>
              </div>
              {/* Inline stats row */}
              <div className="flex items-center gap-5 bg-white/12 backdrop-blur-md border border-white/20 rounded-2xl px-5 py-4">
                {[
                  { value: "10+", label: "Years" },
                  { value: "50+", label: "Partners" },
                  { value: "10K+", label: "Families" },
                ].map(({ value, label }, i) => (
                  <div key={label} className="flex items-center gap-4">
                    {i > 0 && <div className="h-8 w-px bg-white/20" />}
                    <div>
                      <div
                        className="text-2xl font-bold text-white leading-none"
                        style={{ fontFamily: "var(--font-playfair)" }}
                      >
                        {value}
                      </div>
                      <div className="text-white/55 text-[10px] uppercase tracking-widest mt-0.5">
                        {label}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </AnimateOnScroll>

          {/* Right: Content */}
          <AnimateOnScroll variants={fadeRight} className="flex flex-col justify-center lg:pt-0">
            {/* Decorative quote block */}
            <div className="relative bg-forest-700 rounded-3xl p-7 mb-8 overflow-hidden">
              <div className="absolute top-4 right-5 opacity-20">
                <Quote className="w-16 h-16 text-white fill-white" />
              </div>
              <p
                className="text-white/90 text-lg leading-relaxed font-medium italic relative z-10"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                "Vriksha was born from a belief that the most powerful nutrition
                comes from the earth itself — unchanged, unadulterated, and full
                of life."
              </p>
              <div className="mt-4 flex items-center gap-3 relative z-10">
                <div className="w-8 h-8 rounded-full bg-green-400/30 flex items-center justify-center">
                  <Leaf className="w-4 h-4 text-green-300" />
                </div>
                <div>
                  <div className="text-white text-sm font-semibold">Arjun Menon</div>
                  <div className="text-white/50 text-xs">Founder, Vriksha</div>
                </div>
              </div>
            </div>

            <p className="text-forest-600 text-lg leading-relaxed mb-5">
              We began in a small village kitchen in Kerala, India, where rice
              and grains have nourished families for centuries. Every grain we
              source carries with it a story of the land, a season of growth, and
              the care of a farmer who knows the earth.
            </p>
            <p className="text-forest-500 leading-relaxed mb-8">
              Today, we bring those same time-honored ingredients to you,
              carefully sourced from organic farms, prepared with traditional
              methods, and thoughtfully packaged to preserve every nutrient.
            </p>

            {/* Pillars grid */}
            <div className="grid sm:grid-cols-2 gap-4">
              {pillars.map(({ icon: Icon, title, description }, i) => (
                <motion.div
                  key={title}
                  className="p-5 bg-cream rounded-2xl border border-green-100"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * i, duration: 0.45 }}
                  whileHover={{ y: -3, borderColor: "#86efac", boxShadow: "0 8px 24px -6px rgba(15,45,30,0.12)" }}
                >
                  <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center mb-3">
                    <Icon className="w-5 h-5 text-forest-600" />
                  </div>
                  <h3 className="font-semibold text-forest-800 mb-1.5 text-sm">
                    {title}
                  </h3>
                  <p className="text-xs text-forest-500 leading-relaxed">
                    {description}
                  </p>
                </motion.div>
              ))}
            </div>
          </AnimateOnScroll>
        </div>

        {/* Stats Strip */}
        <AnimateOnScroll>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {stats.map(({ value, label }, i) => (
              <motion.div
                key={label}
                className="bg-white rounded-3xl p-6 text-center border border-green-100 shadow-sm"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * i, duration: 0.5 }}
                whileHover={{ y: -4, boxShadow: "0 12px 30px -8px rgba(15,45,30,0.12)" }}
              >
                <div
                  className="text-4xl font-bold text-forest-600 mb-1"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  {value}
                </div>
                <div className="text-sm text-forest-500 font-medium">{label}</div>
              </motion.div>
            ))}
          </div>
        </AnimateOnScroll>

      </div>
    </section>
  );
}
