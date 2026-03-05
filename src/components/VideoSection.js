"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Play, X, Leaf, Users, Package, Award, Sprout } from "lucide-react";
import { AnimateOnScroll, StaggerOnScroll, StaggerItem, fadeLeft, fadeRight, staggerContainer } from "./AnimationUtils";

const videoStats = [
  { icon: Users, value: "10K+", label: "Happy Families" },
  { icon: Package, value: "500+", label: "Farm Partners" },
  { icon: Award, value: "100%", label: "Organic Certified" },
  { icon: Sprout, value: "15+", label: "Products" },
];

// Reliable YouTube documentaries about organic rice / traditional farming:
// Using "Secrets of the Rice Paddy" style embed — well-known long-form organic farming content
const VIDEO_ID = "BVv-RBfAqPM"; // Traditional Rice Farming & Harvest Documentary

export default function VideoSection() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="bg-forest-700 relative overflow-hidden">
      {/* Photo strip at top — rice field imagery */}
      <div className="flex h-24 sm:h-32 overflow-hidden opacity-40">
        {[
          "/images/product-red-rice.png",
          "/images/about-organic-farm.png",
          "/images/about-grains.png",
          "/images/hero-bg.png",
          "/images/about-farmer.png",
          "/images/about-rice-field.png",
        ].map((src, i) => (
          <div key={i} className="flex-1 min-w-0 overflow-hidden">
            <img src={src} alt="" className="w-full h-full object-cover" />
          </div>
        ))}
      </div>
      {/* Bottom fade from photo strip into dark section */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-forest-700 pointer-events-none z-10" />

      <div className="py-24 relative">{/* existing content wrapper */}
        {/* Subtle dot pattern */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `radial-gradient(circle, #ffffff 1px, transparent 1px)`,
            backgroundSize: "32px 32px",
          }}
        />
        {/* Ambient glow blobs */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-forest-600/60 rounded-full -translate-y-1/2 translate-x-1/3 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-green-500/15 rounded-full translate-y-1/2 -translate-x-1/4 blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* Left: Text + Stats */}
            <AnimateOnScroll variants={fadeLeft} className="">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/12 text-green-300 text-sm font-semibold rounded-full mb-6 uppercase tracking-wider border border-white/15 backdrop-blur-sm">
                <Leaf className="w-3.5 h-3.5" />
                Our Farm Story
              </div>
              <h2
                className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                From Field to
                <span className="text-green-300"> Your Table</span>
              </h2>
              <p className="text-white/65 text-lg leading-relaxed mb-10">
                Watch how our farmers lovingly cultivate the ancient red rice and
                traditional grains that form the heart of every Vriksha product.
                A story of dedication, tradition, and a deep love for the earth.
              </p>

              {/* Stats Grid */}
              <StaggerOnScroll
                variants={staggerContainer}
                className="grid grid-cols-2 gap-6"
              >
                {videoStats.map(({ icon: Icon, value, label }) => (
                  <StaggerItem key={label}>
                    <div className="flex items-center gap-4 p-4 bg-white/8 rounded-2xl border border-white/10 backdrop-blur-sm hover:bg-white/12 transition-colors group">
                      <div className="w-11 h-11 bg-forest-500/60 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-forest-500/80 transition-colors">
                        <Icon className="w-5 h-5 text-green-300" />
                      </div>
                      <div>
                        <div
                          className="text-2xl font-bold text-white"
                          style={{ fontFamily: "var(--font-playfair)" }}
                        >
                          {value}
                        </div>
                        <div className="text-xs text-white/50 font-medium uppercase tracking-wider">
                          {label}
                        </div>
                      </div>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerOnScroll>
            </AnimateOnScroll>

            {/* Right: Video Thumbnail + Play Button */}
            <AnimateOnScroll variants={fadeRight}>
              <div className="relative">
                {/* Video card */}
                <motion.div
                  className="rounded-3xl overflow-hidden shadow-2xl shadow-forest-900/60 relative group cursor-pointer"
                  whileHover={{ scale: 1.01 }}
                  transition={{ duration: 0.3 }}
                  onClick={() => setIsPlaying(true)}
                >
                  {/* Thumbnail */}
                  <img
                    src="/images/farm-story.png"
                    alt="Organic rice farming — from soil to harvest"
                    className="w-full h-80 sm:h-96 object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-forest-900/75 via-forest-900/20 to-transparent" />

                  {/* Play button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div
                      className="relative"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.93 }}
                    >
                      {/* Pulse ring */}
                      <motion.div
                        className="absolute inset-0 rounded-full bg-white/30"
                        animate={{ scale: [1, 1.6, 1], opacity: [0.6, 0, 0.6] }}
                        transition={{ duration: 2.5, repeat: Infinity }}
                      />
                      <div className="relative w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-2xl shadow-forest-900/50">
                        <Play className="w-8 h-8 text-forest-700 fill-forest-700 ml-1" />
                      </div>
                    </motion.div>
                  </div>

                  {/* Bottom info bar */}
                  <div className="absolute bottom-5 left-5 right-5">
                    <div className="bg-black/40 backdrop-blur-md border border-white/15 rounded-2xl px-5 py-3.5">
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
                        <div>
                          <p className="text-white font-semibold text-sm">
                            The Vriksha Story — From Soil to Soul
                          </p>
                          <p className="text-white/55 text-xs mt-0.5">
                            Traditional Farming Documentary · Rice & Grain Harvest
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Floating "Field Fresh" card */}
                <motion.div
                  className="absolute -top-5 -right-5 bg-white rounded-2xl p-4 shadow-xl hidden sm:flex items-center gap-3 border border-green-100"
                  initial={{ opacity: 0, y: 15, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6, duration: 0.5 }}
                  animate={{ y: [0, -5, 0] }}
                >
                  <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Leaf className="w-5 h-5 text-forest-600" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-forest-800">Field Fresh</div>
                    <div className="text-xs text-forest-400">Harvested & Packed</div>
                  </div>
                </motion.div>

                {/* Red rice badge */}
                <motion.div
                  className="absolute -bottom-5 -left-5 bg-gradient-to-br from-red-700 to-red-800 rounded-2xl p-4 shadow-xl hidden sm:block border border-red-600/50"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.8, duration: 0.45 }}
                >
                  <div className="text-xs text-red-100 font-medium mb-0.5 uppercase tracking-wider">
                    Signature
                  </div>
                  <div className="text-white font-bold text-sm">Red Rice</div>
                  <div className="text-red-200 text-xs">Kerala Origin</div>
                </motion.div>
              </div>
            </AnimateOnScroll>
          </div>
        </div>

        {/* Video Modal */}
        {isPlaying && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/92 flex items-center justify-center p-4 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            onClick={() => setIsPlaying(false)}
          >
            <motion.div
              className="relative w-full max-w-5xl rounded-2xl overflow-hidden shadow-2xl"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setIsPlaying(false)}
                className="absolute top-3 right-3 z-20 w-10 h-10 bg-black/70 hover:bg-black/90 rounded-full flex items-center justify-center text-white transition-colors backdrop-blur-sm border border-white/10"
                aria-label="Close video"
              >
                <X className="w-5 h-5" />
              </button>
              <iframe
                className="w-full aspect-video"
                src={`https://www.youtube.com/embed/${VIDEO_ID}?autoplay=1&rel=0&cc_load_policy=0&modestbranding=1`}
                title="Traditional Rice Farming & Organic Grain Harvest Documentary"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </motion.div>
          </motion.div>
        )}
      </div>{/* end py-24 wrapper */}
    </section>
  );
}

