"use client";

import Link from "next/link";
import { Leaf, ArrowRight, Clock, Users, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { recipes } from "../data/products";
import { AnimateOnScroll } from "./AnimationUtils";

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

export default function RecipesSection() {
  // Show first 6 on the home page
  const displayed = recipes.slice(0, 6);

  return (
    <section id="recipes" className="py-20 bg-cream overflow-hidden relative">
      {/* Subtle grain texture */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%231b4332' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <AnimateOnScroll className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-earth-100 text-earth-700 text-sm font-semibold rounded-full mb-5 uppercase tracking-wider">
              <Leaf className="w-3.5 h-3.5" />
              Recipe Ideas
            </div>
            <h2
              className="text-4xl sm:text-5xl font-bold text-forest-800 leading-tight"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Cook with{" "}
              <span className="text-earth-500">Vriksha</span>
            </h2>
            <p className="text-forest-500 mt-3 max-w-lg leading-relaxed">
              Transform our natural ingredients into delicious, nourishing meals.
              Explore simple recipes inspired by traditional cooking.
            </p>
          </div>
          <motion.div whileHover={{ x: 3 }} transition={{ duration: 0.2 }}>
            <Link
              href="/recipes"
              className="inline-flex items-center gap-2 text-earth-600 font-semibold hover:text-earth-800 transition-colors shrink-0 group"
            >
              View All Recipes
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </motion.div>
        </AnimateOnScroll>

        {/* Responsive 3-column card grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayed.map((recipe, i) => (
            <motion.div
              key={recipe.id}
              className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl hover:shadow-forest-900/10 border border-green-100/60 transition-shadow duration-500 cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: i * 0.09,
                duration: 0.55,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{ y: -6 }}
            >
              {/* Card Image */}
              <div className="relative h-52 overflow-hidden">
                <motion.img
                  src={recipe.image}
                  alt={recipe.name}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.07 }}
                  transition={{ duration: 0.65, ease: "easeOut" }}
                />
                {/* Category + difficulty pills */}
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

              {/* Card Body */}
              <div className="p-6">
                <h3
                  className="font-bold text-forest-800 text-xl mb-2.5 leading-snug group-hover:text-forest-600 transition-colors duration-300"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  {recipe.name}
                </h3>
                <p className="text-forest-500 text-sm leading-relaxed mb-5 line-clamp-2">
                  {recipe.description}
                </p>

                {/* Meta row */}
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
          ))}
        </div>
      </div>
    </section>
  );
}

