"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Play, Leaf, Shield, Sprout, Star } from "lucide-react";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15, delayChildren: 0.3 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

const statVariants = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image with Ken Burns pan */}
      <div className="absolute inset-0">
        <motion.img
          src="/images/hero-bg.png"
          alt="Lush red rice fields at golden hour"
          className="w-full h-full object-cover"
          initial={{ scale: 1.08 }}
          animate={{ scale: 1 }}
          transition={{ duration: 8, ease: "easeOut" }}
        />
        {/* Layered gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-forest-900/92 via-forest-800/72 to-forest-700/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-forest-900/70 via-transparent to-forest-900/10" />
        {/* Subtle warm tone at bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-forest-900/50 to-transparent" />
      </div>

      {/* Ambient orbs */}
      <motion.div
        className="absolute top-28 right-12 w-80 h-80 bg-green-400/10 rounded-full blur-3xl pointer-events-none"
        animate={{ y: [0, -18, 0], opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-32 left-1/3 w-56 h-56 bg-earth-300/12 rounded-full blur-2xl pointer-events-none"
        animate={{ y: [0, 14, 0], opacity: [0.4, 0.8, 0.4] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 3 }}
      />
      <motion.div
        className="absolute top-1/2 right-1/4 w-40 h-40 bg-green-300/8 rounded-full blur-2xl pointer-events-none"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
      />

      {/* Hero content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-32">
        <div className="grid lg:grid-cols-5 gap-12 items-center">
          {/* Left: Main copy */}
          <motion.div
            className="lg:col-span-3"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Badge */}
            <motion.div variants={itemVariants}>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/12 backdrop-blur-md border border-white/20 rounded-full text-white/90 text-sm font-medium mb-12">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                <Leaf className="w-3.5 h-3.5 text-green-300" />
                100% Organic & Chemical Free
              </div>
            </motion.div>

            {/* Heading */}
            <motion.h1
              variants={itemVariants}
              className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-[1.05] mb-5"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Pure Nature,
              <span className="block mt-1 bg-gradient-to-r from-green-300 to-green-200 bg-clip-text text-transparent">
                Pure Nutrition
              </span>
            </motion.h1>

            {/* Subtext */}
            <motion.p
              variants={itemVariants}
              className="text-lg sm:text-xl text-white/75 leading-relaxed mb-16 max-w-xl"
            >
              Discover healthy foods made from natural rice, red rice, and
              traditional grains. Rooted in centuries of wisdom, crafted for
              modern healthy living.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-4 mb-14">
              <Link
                href="#products"
                className="group inline-flex items-center gap-2.5 px-8 py-4 bg-forest-500 hover:bg-forest-400 text-white font-semibold rounded-full shadow-xl shadow-forest-900/40 transition-all duration-300 hover:shadow-2xl hover:shadow-forest-500/30 hover:-translate-y-1 active:scale-95"
              >
                Shop Products
                <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              <Link
                href="#about"
                className="group inline-flex items-center gap-2.5 px-8 py-4 bg-white/12 hover:bg-white/22 text-white font-semibold rounded-full border border-white/25 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 active:scale-95"
              >
                <div className="w-7 h-7 bg-white/20 rounded-full flex items-center justify-center">
                  <Play className="w-3.5 h-3.5 fill-white" />
                </div>
                Our Story
              </Link>
            </motion.div>

            {/* Stats strip */}
            <motion.div
              variants={itemVariants}
              className="flex items-center gap-6 sm:gap-10"
            >
              {[
                { icon: Leaf, value: "100%", label: "Organic" },
                { icon: Shield, value: "0", label: "Chemicals" },
                { icon: Sprout, value: "5+", label: "Grain Types" },
              ].map(({ icon: Icon, value, label }, i) => (
                <motion.div
                  key={label}
                  variants={statVariants}
                  custom={i}
                  className="text-center"
                >
                  <div className="inline-flex items-center justify-center w-11 h-11 bg-white/12 rounded-2xl mb-2 backdrop-blur-sm border border-white/15">
                    <Icon className="w-5 h-5 text-green-300" />
                  </div>
                  <div
                    className="text-2xl font-bold text-white"
                    style={{ fontFamily: "var(--font-playfair)" }}
                  >
                    {value}
                  </div>
                  <div className="text-[11px] text-white/55 uppercase tracking-[0.15em] mt-0.5">
                    {label}
                  </div>
                </motion.div>
              ))}
              <div className="h-10 w-px bg-white/15 hidden sm:block" />
              <motion.div variants={statVariants} className="hidden sm:flex items-center gap-1.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                ))}
                <span className="text-white/60 text-xs ml-1">10K+ Reviews</span>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right: Floating product preview */}
          <motion.div
            className="lg:col-span-2 hidden lg:block"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="relative">
              {/* Main image card */}
              <motion.div
                className="rounded-3xl overflow-hidden shadow-2xl shadow-forest-900/60 border border-white/10"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              >
                <img
                  src="/images/hero-red-rice.png"
                  alt="Red rice — the ruby grain of Kerala"
                  className="w-full h-72 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest-900/60 to-transparent" />
                <div className="absolute bottom-5 left-5 right-5">
                  <span className="block text-xs text-green-300 font-semibold uppercase tracking-widest mb-1">
                    Featured Grain
                  </span>
                  <span
                    className="block text-white text-xl font-bold"
                    style={{ fontFamily: "var(--font-playfair)" }}
                  >
                    Kerala Red Rice
                  </span>
                </div>
              </motion.div>

              {/* Floating stat card */}
              <motion.div
                className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-4 shadow-xl border border-green-100"
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              >
                <div className="text-xs text-forest-400 font-medium mb-1">Antioxidants</div>
                <div className="text-2xl font-bold text-forest-700" style={{ fontFamily: "var(--font-playfair)" }}>
                  3×
                </div>
                <div className="text-xs text-forest-500">vs white rice</div>
              </motion.div>

              {/* Floating organic badge */}
              <motion.div
                className="absolute -top-4 -right-4 w-16 h-16 bg-forest-600 rounded-full flex flex-col items-center justify-center shadow-lg border-2 border-forest-400"
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              >
                <Leaf className="w-5 h-5 text-white mb-0.5" />
                <span className="text-[8px] font-bold text-white uppercase leading-none">
                  Organic
                </span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 0.8 }}
      >
        <span className="text-white/40 text-xs uppercase tracking-widest">Scroll</span>
        <motion.div
          className="w-px h-10 bg-gradient-to-b from-white/40 to-transparent"
          animate={{ scaleY: [1, 0.5, 1], opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </motion.div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <svg viewBox="0 0 1440 90" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0 90L48 83C96 76 192 62 288 59C384 56 480 64 576 67C672 70 768 68 864 62C960 56 1056 46 1152 44C1248 42 1344 48 1392 51L1440 54V90H1392C1344 90 1248 90 1152 90C1056 90 960 90 864 90C768 90 672 90 576 90C480 90 384 90 288 90C192 90 96 90 48 90H0Z"
            fill="#fdfaf5"
          />
        </svg>
      </div>
    </section>
  );
}
