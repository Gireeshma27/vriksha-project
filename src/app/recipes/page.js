"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Leaf, Clock, Users, ChevronRight, ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { recipes } from "@/data/products";

const difficultyColor = {
  Easy: "text-green-700 bg-green-100",
  Medium: "text-amber-700 bg-amber-100",
  Hard: "text-red-700 bg-red-100",
};

const tagColor = {
  Breakfast: "bg-amber-100 text-amber-700",
  Drink: "bg-sky-100 text-sky-700",
  Lunch: "bg-forest-100 text-forest-700",
  Dinner: "bg-violet-100 text-violet-700",
};

export default function RecipesPage() {
  return (
    <main className="min-h-screen bg-cream">
      <Navbar />

      {/* Page Hero */}
      <section className="relative bg-forest-700 overflow-hidden pt-32 pb-20">
        {/* Background image strip */}
        <div className="absolute inset-0 opacity-20">
          <img
            src="/images/hero-bg.png"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-forest-900/60 to-forest-700/90" />

        {/* Ambient orbs */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-green-400/15 rounded-full -translate-y-1/2 translate-x-1/4 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-earth-300/10 rounded-full translate-y-1/2 -translate-x-1/4 blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/15 backdrop-blur-sm border border-white/20 rounded-full text-white/90 text-sm font-semibold mb-6 uppercase tracking-wider">
              <Leaf className="w-3.5 h-3.5 text-green-300" />
              Recipe Ideas
            </div>
            <h1
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Cook with{" "}
              <span className="text-green-300">Vriksha</span>
            </h1>
            <p className="text-white/70 text-lg max-w-2xl mx-auto leading-relaxed mb-8">
              Transform our natural, organic ingredients into wholesome meals
              inspired by centuries of traditional cooking wisdom.
            </p>
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-white/70 hover:text-white text-sm font-medium transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Recipes Grid */}
      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filter chips */}
          <div className="flex flex-wrap gap-2 mb-10">
            {["All", "Breakfast", "Lunch", "Dinner", "Drink"].map((tag) => (
              <span
                key={tag}
                className="px-4 py-2 rounded-full text-sm font-semibold border border-green-200 text-forest-600 bg-white hover:bg-forest-600 hover:text-white hover:border-forest-600 transition-all cursor-pointer select-none"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
            {recipes.map((recipe, i) => (
              <Link key={recipe.id} href={`/recipes/${recipe.id}`} className="block">
              <motion.div
                className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl hover:shadow-forest-900/10 border border-green-100/60 transition-shadow duration-500 cursor-pointer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: i * 0.08,
                  duration: 0.55,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={{ y: -6 }}
              >
                {/* Image */}
                <div className="relative h-56 overflow-hidden">
                  <motion.img
                    src={recipe.image}
                    alt={recipe.name}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.07 }}
                    transition={{ duration: 0.65, ease: "easeOut" }}
                  />
                  <div className="absolute top-4 left-4 flex items-center gap-2">
                    <span
                      className={`px-3 py-1 text-xs font-bold rounded-full ${
                        tagColor[recipe.tag] ?? "bg-gray-100 text-gray-700"
                      }`}
                    >
                      {recipe.tag}
                    </span>
                    <span
                      className={`px-3 py-1 text-xs font-bold rounded-full ${
                        difficultyColor[recipe.difficulty] ?? difficultyColor.Easy
                      }`}
                    >
                      {recipe.difficulty}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3
                    className="font-bold text-forest-800 text-xl mb-2.5 leading-snug group-hover:text-forest-600 transition-colors"
                    style={{ fontFamily: "var(--font-playfair)" }}
                  >
                    {recipe.name}
                  </h3>
                  <p className="text-forest-500 text-sm leading-relaxed mb-5 line-clamp-2">
                    {recipe.description}
                  </p>

                  <div className="flex items-center justify-between pt-4 border-t border-green-100">
                    <div className="flex items-center gap-4 text-forest-400 text-xs font-medium">
                      <span className="flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5" />
                        {recipe.time}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Users className="w-3.5 h-3.5" />
                        Serves {recipe.servings}
                      </span>
                    </div>
                    <span className="w-9 h-9 rounded-full bg-forest-50 flex items-center justify-center text-forest-600 group-hover:bg-forest-600 group-hover:text-white transition-all duration-300">
                      <ChevronRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-forest-700 rounded-3xl px-8 py-12 relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <img
                src="/images/about-organic-farm.png"
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-br from-forest-800/80 to-forest-600/80" />
            <div className="relative z-10">
              <h2
                className="text-3xl sm:text-4xl font-bold text-white mb-3"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                Ready to Cook?
              </h2>
              <p className="text-white/70 mb-8 max-w-md mx-auto">
                Get the best ingredients for every recipe from our curated range
                of organic products.
              </p>
              <Link
                href="/products"
                className="inline-flex items-center gap-2 px-8 py-3.5 bg-white text-forest-700 font-semibold rounded-full shadow-lg hover:bg-green-50 transition-colors"
              >
                Shop Our Products
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
