"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Quote, Leaf, ChevronLeft, ChevronRight } from "lucide-react";
import { testimonials } from "../data/products";
import { AnimateOnScroll } from "./AnimationUtils";

function StarRating({ rating }) {
  return (
    <div className="flex gap-0.5">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={`w-4 h-4 ${i < rating ? "fill-amber-400 text-amber-400" : "text-gray-200"}`}
        />
      ))}
    </div>
  );
}

function TestimonialCard({ t }) {
  return (
    <motion.div
      className="bg-white rounded-3xl p-7 shadow-md shadow-forest-900/5 border border-green-100/80 flex flex-col h-full"
      whileHover={{ y: -5, boxShadow: "0 20px 50px -10px rgba(15,45,30,0.14)" }}
      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="flex items-start justify-between mb-5">
        <div className="w-10 h-10 bg-forest-100 rounded-xl flex items-center justify-center flex-shrink-0">
          <Quote className="w-5 h-5 text-forest-600 fill-forest-600" />
        </div>
        <StarRating rating={t.rating} />
      </div>
      <p className="text-forest-600 text-base leading-relaxed flex-1 mb-7 italic">
        "{t.review}"
      </p>
      <div className="h-px bg-green-100 mb-5" />
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-forest-200 flex-shrink-0 shadow-sm">
          <img src={t.image} alt={t.name} className="w-full h-full object-cover" />
        </div>
        <div className="flex-1">
          <div className="font-bold text-forest-800 text-sm">{t.name}</div>
          <div className="text-xs text-forest-400 mt-0.5">{t.role}</div>
        </div>
        <div className="text-right hidden sm:block">
          <div className="text-xs text-forest-400 font-medium">{t.location}</div>
          <div className="mt-0.5 inline-flex items-center gap-1 px-2 py-0.5 bg-green-100 text-forest-600 rounded-full text-[10px] font-semibold uppercase tracking-wide">
            <div className="w-1.5 h-1.5 bg-green-500 rounded-full" />
            Verified
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);
  const total = testimonials.length;

  const go = useCallback(
    (next) => {
      setDirection(next > current ? 1 : -1);
      setCurrent(((next % total) + total) % total);
    },
    [current, total]
  );

  const prev = useCallback(() => go(current - 1), [current, go]);
  const next = useCallback(() => go(current + 1), [current, go]);

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrent((c) => (c + 1) % total);
    }, 5000);
    return () => clearInterval(timer);
  }, [total]);

  const slideVariants = {
    enter: (dir) => ({ x: dir > 0 ? "105%" : "-105%", opacity: 0 }),
    center: { x: 0, opacity: 1, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
    exit: (dir) => ({ x: dir > 0 ? "-105%" : "105%", opacity: 0, transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] } }),
  };

  const pairIdx = (current + 1) % total;

  return (
    <section className="py-24 bg-cream overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <AnimateOnScroll className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-green-100 text-forest-600 text-sm font-semibold rounded-full mb-4 uppercase tracking-wider">
            <Leaf className="w-3.5 h-3.5" />
            Testimonials
          </div>
          <h2
            className="text-4xl sm:text-5xl font-bold text-forest-800 mb-4"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            What Our
            <span className="text-forest-500"> Community</span> Says
          </h2>
          <p className="text-forest-500 text-lg max-w-2xl mx-auto leading-relaxed">
            Real stories from people who have made Vriksha a part of their daily nutrition journey.
          </p>
        </AnimateOnScroll>

        {/* Carousel */}
        <AnimateOnScroll>
          {/* Desktop: 2-up, animated pair */}
          <div className="hidden lg:block">
            <div className="relative overflow-hidden">
              <AnimatePresence initial={false} custom={direction} mode="popLayout">
                <motion.div
                  key={current}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  className="grid lg:grid-cols-2 gap-6"
                >
                  <TestimonialCard t={testimonials[current]} />
                  <TestimonialCard t={testimonials[pairIdx]} />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Mobile/tablet: single card */}
          <div className="lg:hidden relative overflow-hidden" style={{ minHeight: 300 }}>
            <AnimatePresence initial={false} custom={direction} mode="popLayout">
              <motion.div
                key={current}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
              >
                <TestimonialCard t={testimonials[current]} />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-5 mt-10">
            <motion.button
              onClick={prev}
              className="w-12 h-12 rounded-full bg-white border border-green-200 flex items-center justify-center shadow-md text-forest-600 hover:bg-green-50 hover:border-forest-300 transition-colors"
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.92 }}
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </motion.button>

            <div className="flex gap-2 items-center">
              {testimonials.map((_, i) => (
                <motion.button
                  key={i}
                  onClick={() => go(i)}
                  className="h-2.5 rounded-full transition-all duration-300 focus:outline-none"
                  animate={{ width: i === current ? 28 : 10, backgroundColor: i === current ? "#16a34a" : "#bbf7d0" }}
                  transition={{ duration: 0.3 }}
                  aria-label={`Testimonial ${i + 1}`}
                />
              ))}
            </div>

            <motion.button
              onClick={next}
              className="w-12 h-12 rounded-full bg-white border border-green-200 flex items-center justify-center shadow-md text-forest-600 hover:bg-green-50 hover:border-forest-300 transition-colors"
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.92 }}
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </motion.button>
          </div>
        </AnimateOnScroll>

        {/* Trust badges */}
        <AnimateOnScroll className="mt-14 flex flex-wrap justify-center gap-4 sm:gap-6">
          {["USDA Organic Certified", "ISO 22000:2018", "Non-GMO Verified", "Cruelty Free", "Vegan Friendly"].map(
            (badge) => (
              <motion.div
                key={badge}
                className="flex items-center gap-2 px-5 py-2.5 bg-white rounded-full border border-green-200 shadow-sm text-forest-600 text-sm font-medium"
                whileHover={{ scale: 1.05, y: -2 }}
                transition={{ duration: 0.2 }}
              >
                <div className="w-2 h-2 bg-forest-500 rounded-full" />
                {badge}
              </motion.div>
            )
          )}
        </AnimateOnScroll>
      </div>
    </section>
  );
}
