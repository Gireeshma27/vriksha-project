"use client";

import Link from "next/link";
import { Leaf, ArrowRight, Clock, Users, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { recipes } from "../data/products";
import { AnimateOnScroll } from "./AnimationUtils";

const tagColor = {
  Breakfast: "bg-amber-100 text-amber-700",
  Drink: "bg-sky-100 text-sky-700",
  Lunch: "bg-forest-100 text-forest-700",
  Dinner: "bg-violet-100 text-violet-700",
};

export default function RecipesSection() {
  const featured = recipes[0];
  const listRecipes = recipes.slice(1, 5); // 4 items in the side list

  return (
    <section id="recipes" className="py-20 bg-cream overflow-hidden relative">
      {/* Subtle grain texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%231b4332' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* ── Section Header ── */}
        <AnimateOnScroll className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-earth-100 text-earth-700 text-sm font-semibold rounded-full mb-5 uppercase tracking-wider">
            <Leaf className="w-3.5 h-3.5" />
            Recipe Ideas
          </div>
          <h2
            className="text-4xl sm:text-5xl font-bold text-forest-800 leading-tight"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Recipe Ideas
          </h2>
          <p className="text-forest-500 mt-3 max-w-xl mx-auto leading-relaxed">
            Healthy and delicious recipes made with our organic ingredients.
          </p>
        </AnimateOnScroll>

        {/* ── Magazine Layout: Featured + List ── */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-6 xl:gap-8">

          {/* ── Left: Featured Recipe ── */}
          <motion.div
            className="group relative rounded-3xl overflow-hidden shadow-lg cursor-pointer"
            style={{ minHeight: "480px" }}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Full-bleed image with zoom on hover */}
            <div className="absolute inset-0 overflow-hidden">
              <motion.img
                src={featured.image}
                alt={featured.name}
                className="w-full h-full object-cover"
                whileHover={{ scale: 1.06 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
              />
            </div>

            {/* Gradient overlay for text readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-forest-900/85 via-forest-900/30 to-transparent" />

            {/* Tag pill — top left */}
            <div className="absolute top-5 left-5">
              <span
                className={`px-3 py-1 text-xs font-bold rounded-full backdrop-blur-sm ${
                  tagColor[featured.tag] ?? "bg-white/20 text-white"
                }`}
              >
                {featured.tag}
              </span>
            </div>

            {/* Content anchored to bottom */}
            <div className="absolute bottom-0 left-0 right-0 p-7">
              <div className="flex items-center gap-4 text-white/70 text-xs font-medium mb-3">
                <span className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5" />
                  {featured.time}
                </span>
                <span className="flex items-center gap-1.5">
                  <Users className="w-3.5 h-3.5" />
                  Serves {featured.servings}
                </span>
              </div>
              <h3
                className="text-2xl sm:text-3xl font-bold text-white mb-2 leading-snug"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                {featured.name}
              </h3>
              <p className="text-white/75 text-sm leading-relaxed mb-5 line-clamp-2 max-w-md">
                {featured.description}
              </p>
              <motion.div
                whileHover={{ x: 4 }}
                transition={{ duration: 0.2 }}
                className="inline-flex"
              >
                <Link
                  href="/recipes"
                  className="inline-flex items-center gap-2 bg-white text-forest-700 font-semibold text-sm px-5 py-2.5 rounded-full hover:bg-earth-50 transition-colors shadow-md"
                >
                  View Recipe
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            </div>
          </motion.div>

          {/* ── Right: Recipe List ── */}
          <div className="flex flex-col gap-3">
            {listRecipes.map((recipe, i) => (
              <motion.div
                key={recipe.id}
                className="group flex items-center gap-4 bg-white rounded-2xl p-4 shadow-sm hover:shadow-md border border-green-100/60 hover:border-earth-200 cursor-pointer transition-all duration-300"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: i * 0.08,
                  duration: 0.55,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={{ x: 4 }}
              >
                {/* Thumbnail */}
                <div className="relative w-20 h-20 rounded-xl overflow-hidden shrink-0">
                  <motion.img
                    src={recipe.image}
                    alt={recipe.name}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                  />
                  <div className="absolute inset-0 bg-forest-900/10 group-hover:bg-forest-900/0 transition-colors duration-300" />
                </div>

                {/* Text */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span
                      className={`px-2 py-0.5 text-[10px] font-bold rounded-full ${
                        tagColor[recipe.tag] ?? "bg-gray-100 text-gray-600"
                      }`}
                    >
                      {recipe.tag}
                    </span>
                    <span className="flex items-center gap-1 text-forest-400 text-[11px]">
                      <Clock className="w-3 h-3" />
                      {recipe.time}
                    </span>
                  </div>
                  <h4
                    className="font-bold text-forest-800 text-sm leading-snug mb-1 group-hover:text-earth-600 transition-colors duration-200 line-clamp-1"
                    style={{ fontFamily: "var(--font-playfair)" }}
                  >
                    {recipe.name}
                  </h4>
                  <p className="text-forest-400 text-xs leading-relaxed line-clamp-2">
                    {recipe.description}
                  </p>
                </div>

                {/* Arrow */}
                <Link
                  href="/recipes"
                  aria-label={`View recipe: ${recipe.name}`}
                  className="shrink-0 w-8 h-8 rounded-full bg-forest-50 flex items-center justify-center text-forest-500 group-hover:bg-forest-600 group-hover:text-white transition-all duration-300"
                >
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </motion.div>
            ))}

            {/* Spacer card teasing more recipes */}
            <p className="text-center text-forest-400 text-xs mt-1 mb-1">
              +{recipes.length - listRecipes.length - 1} more recipes waiting for you
            </p>
          </div>
        </div>

        {/* ── View All Recipes CTA ── */}
        <AnimateOnScroll className="mt-10 text-center">
          <motion.div whileHover={{ y: -2 }} transition={{ duration: 0.2 }}>
            <Link
              href="/recipes"
              className="inline-flex items-center gap-2 bg-forest-700 hover:bg-forest-800 text-white font-semibold px-8 py-3.5 rounded-full transition-colors shadow-md shadow-forest-900/20 group"
            >
              View All Recipes
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </motion.div>
        </AnimateOnScroll>

      </div>
    </section>
  );
}

